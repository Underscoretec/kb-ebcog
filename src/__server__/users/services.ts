import { NextApiRequest, NextApiResponse } from "next";
import User from "./model";
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
    const { first_name,last_name, email, password, phone, phoneNo, address } = req.body;
    
    try {
        const query: any = { enabled: 1 }

        if (email) {
            query.email = email
        }
        const user = await User.findOne(query)

        if (user) {
            return res.status(400).json({
                message: messages['USER_ALREADY_EXISTS'],
                error: false,
                code: 'USER_ALREADY_EXISTS',
                result: {}
            });
        }

        const phoneObj = phone ? JSON.parse(phone) : user?.phone

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
                address: address && JSON.parse(address),
                role: "user",
                password: passwordHash,
                // emailOtp: otpObj,
                // phoneOtp: otpObjPhone,
                // defaultPasswordChanged: false,
            }
        

        

           const createUser = await new User(createObj).save();

        



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
        logger.error(error, "[User 001] Error sign up");
        return res.status(500).json(errorResponse(error));
    }
}

const login = async (req: NextApiRequest, res: NextApiResponse) => {
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

        const user = await User.findOne(query)

        if (!user) {
            return res.status(400).json({
                message: messages["INVALID_CREDENTIALS"],
                error: true, code: "INVALID_CREDENTIALS",
            });
        }else {
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
                                    customerId: user?.customerId,
                                    defaultPasswordChanged: user?.defaultPasswordChanged || false,
                                    firstTimeLogin: user?.firstTimeLogin || false
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
        
        logger.error(error, "[User 002] Error login");
        return res.status(500).json(errorResponse(error));

    }
}



export default {
    signUp,
    login,
}