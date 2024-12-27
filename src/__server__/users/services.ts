import { NextApiRequest, NextApiResponse } from "next";
import UserModel from "./model";
import messages from "@/__server__/utils/message.json";
import { logger } from "@/__server__/utils/logger";
import errorResponse from "@/__server__/utils/errorResponse";
import bcrypt from "bcryptjs";
import tokenGenerate from "../utils/tokenGenerate";
import config from "../config";



// interface ExtendApiRequest extends NextApiRequest {
//     files?: Express.MulterS3.File[], user?: any
// }



const signUp = async (req: NextApiRequest, res: NextApiResponse) => {
    logger.info("[User 001] Signup api call");
    const { first_name, last_name, email, password, phone, phoneNo, address } = req.body;
    try {
        const query: any = { enabled: 1 }

        if (email) {
            query.email = email
        }
        const user = await UserModel.findOne(query)

        if (user) {
            return res.status(400).json({
                message: messages['USER_ALREADY_EXISTS'],
                error: false,
                code: 'USER_ALREADY_EXISTS',
                result: {}
            });
        }

        const phoneObj = phone;
        const phNumber = phoneNo || `${phoneObj?.code}${phoneObj?.number}`

        // const otpObj = await otpGenerate("signup", "email", req.headers?.origin || req.headers?.referer)
        // const otpObjPhone = await otpGenerate("signup", "phone", req.headers?.origin || req.headers?.referer)

        // const name = `${first_name} ${last_name}`
        const salt = await bcrypt.genSalt(12);
        const passwordHash = await bcrypt.hash(password, salt);

        const createObj = {
            first_name: first_name,
            last_name: last_name,
            email: email,
            phone: phoneObj,
            phoneNo: phNumber,
            address: address,
            role: "user",
            password: passwordHash,
            // emailOtp: otpObj,
            // phoneOtp: otpObjPhone,
            // defaultPasswordChanged: false,
        }




        const createUser = await new UserModel(createObj).save();





        if (createUser?._id) {

            // const date = moment().format('YYYY-MM-DD');

            // const origin = req.headers?.origin || req.headers?.referer
            // if (!origin?.includes("test")) {

            //     if (process.env.SEND_MOBILE_OTP === "enabled") {
            //         let obj = {}
            //         if (createUser?.role === "user") {
            //             obj = {
            //                 phNumber: createUser?.phoneNo || `${createUser?.phone?.code}${createUser?.phone?.number}`,
            //                 tempId: config?.doctorOtpSnedID,
            //                 message: `Dear Doctor%0A%0A${otpObjPhone?.rowCode} is your OTP for mobile verification for dermavidya.com%0A%0ARegards%0ATeam DermaVidya`
            //             }

            //             sendEmailSignUpOtp({ email: createUser?.email, fullName: createUser?.fullName || createUser?.first_name, otpCode: otpObj?.rowCode, type: type || "doctor", appUrl: appUrl })//For email verification
            //         } else {
            //             obj = {
            //                 phNumber: createUser?.phoneNo || `${createUser?.phone?.code}${createUser?.phone?.number}`,
            //                 tempId: config?.patientOtpSendID,
            //                 message: `${otpObjPhone?.rowCode} is your OTP for mobile verification for Dermavidya.com.%0A%0ARegards%0ATeam DermaVidya -Knowledge Bridge`
            //             }
            //         }
            //         otpSend(obj)
            //     }
            // }

            return res.status(201).json({
                message: messages["USER_CREATE_SUCCESS"],
                error: false,
                code: "USER_CREATE_SUCCESS",
                result: {
                    fullName: createUser?.fullName,
                    email: createUser?.email,
                    phone: createUser?.phone
                }
            });
        }

    } catch (error) {
        logger.error(error, "[User 001] Error in Sign up");
        return res.status(500).json(errorResponse(error));
    }
}

const login = async (req: NextApiRequest, res: NextApiResponse) => {
    logger.info("[User 002] Login api call");
    const { email, password, phone, loggedInDetails, rememberMe } = req.body;
    try {
        const query: any = { enabled: 1 }
        // let actionType: string = ""
        if (email) {
            query.email = email
            // actionType = "email"
        } else {
            query["phone.number"] = phone
            // actionType = "phone"
        }

        const user = await UserModel.findOne(query)

        if (!user) {
            return res.status(400).json({
                message: messages["INVALID_CREDENTIALS"],
                error: true, code: "INVALID_CREDENTIALS",
            });
        } else {
            if (user?.role === "user" || user?.role === "admin" || user?.role === "subAdmin") {

                const validPass = await bcrypt.compare(password, user?.password);
                if (!validPass) {
                    return res.status(400).json({
                        message: messages["INVALID_CREDENTIALS"],
                        error: true,
                        code: "INVALID_CREDENTIALS",
                    });
                } else {
                    let refreshToken: any
                    const token = await tokenGenerate({
                        id: user?._id,
                        email: user?.email,
                    });
                    if (rememberMe === true && loggedInDetails) {
                        refreshToken = await tokenGenerate({
                            id: user?._id,
                            email: user?.email,
                            deviceDetails: loggedInDetails,

                        }, config?.RFexpires);
                    }
                    if (token) {
                        if (user?.role !== "admin") {

                            user.loggedInDetails = loggedInDetails || user.loggedInDetails

                        }
                        user.loginCount = Number(user.loginCount + 1)
                        if (user?.defaultPasswordChanged === false) {
                            user.firstTimeLogin = true;
                        }
                        await user.save();

                        return res.status(200).json({
                            message: messages["LOGIN_SUCCESS"],
                            error: false,
                            code: "LOGIN_SUCCESS",
                            result: {
                                _id: user?._id,
                                email: user?.email,
                                phoneNo: user?.phoneNo,
                                type: user?.role,
                            },
                            token: token,
                            refreshToken: refreshToken
                        });
                    }
                }

            } else {
                return res.status(400).json({
                    message: messages["INVALID_CREDENTIAL"],
                    error: true,
                    code: "INVALID_CREDENTIAL",
                });
            }
        }
    } catch (error) {

        logger.error(error, "[User 002] Error in login");
        return res.status(500).json(errorResponse(error));

    }
}

const getUserDetails = async (req: NextApiRequest, res: NextApiResponse) => {
    logger.info("[User 003] GetUserDetails api call");
    const userId = req.query?.userId;
    try {
        if (!userId) {
            return res.status(400).json({
                message: messages["BAD_REQUEST"],
                error: true,
                code: "BAD_REQUEST",
            })
        }
        const findUser = await UserModel.findById(userId).select(["-enabled", "-__v", "-password", "-isVerified", "-consent", "-termsAndCondition", "-whatsApp", '-emailSend', "-excelDownload"]);
        if (!findUser) {
            return res.status(404).json({
                message: messages["USER_NOT_FOUND"],
                error: true,
                code: "USER_NOT_FOUND",
            })
        }

        return res.status(200).json({
            message: messages["USER_FOUND"],
            error: false,
            code: "USER_FOUND",
            result: findUser
        })

    } catch (error) {
        logger.error(error, "[User 003] Error in GetUserDetails");
        return res.status(500).json(errorResponse(error));
    }

}

const list = async (req: any, res: any) => {
    logger.info(`[User 004] Users list api call`);
    try {
        const dataPerPage = Number(req.query?.dataPerPage) || 25;
        const page = Number(req.query?.page) || 1;
        if (req.user?.role === "admin") {
            const query: any = {
                enabled: 1,
                role: "user"
            }

            if (req.query.string) {
                query["$or"] = [
                    { first_name: { $regex: req.query.string, $options: "i" } },
                    { last_name: { $regex: req.query.string, $options: "i" } },
                    { email: { $regex: req.query.string, $options: "i" } },
                    { 'phone.number': { $regex: req.query.string, $options: "i" } },
                ];
            }

            const users = await UserModel.find(query)
                .select(["-enabled", "-__v", "-password", "-isVerified", "-consent", "-termsAndCondition", "-whatsApp", '-emailSend', "-excelDownload"]).sort({ createAt: -1 }).skip(dataPerPage * (page - 1)).limit(dataPerPage);
            const usersCount = await UserModel.countDocuments(query)


            if (users?.length > 0) {
                return res.status(200).json({
                    message: messages["USERS_FOUND"],
                    error: false,
                    code: "USERS_FOUND",
                    result: users,
                    dataCount: usersCount
                });
            } else {
                return res.status(404).json({
                    message: messages["USER_NOT_FOUND"],
                    error: false,
                    code: "USER_NOT_FOUND",
                    result: []
                });
            }
        } else {
            return res.status(401).send({
                error: true,
                code: "UNAUTHORIZED",
                message: messages["UNAUTHORIZED"]
            })
        }
    } catch (error) {
        logger.error(error, "[User 004] Error when get users list");
        return res.status(500).json(errorResponse(error));
    }
}


export default {
    signUp,
    login,
    getUserDetails,
    list
}