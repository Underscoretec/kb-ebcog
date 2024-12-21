/* eslint-disable prefer-const */
import connectDB from "@/__server__/database";
import User from "@/__server__/users/model";
import { logger } from "@/__server__/utils/logger";
import tokenGenerate from "@/__server__/utils/tokenGenerate";
import bcrypt from "bcryptjs";
import fs from "fs";




export default async function seedData() {
    try {
        connectDB()
        const admin = await User.findOne({ role: "admin" })
        if (admin) {
           
        }
        else {
            await adminCreate()
        }


    } catch (error) {
        logger.error(error, "Error in creating seedData")
    }
}

const adminCreate = async () => {
    try {
        const admin = await User.findOne({ role: "admin" })

        if (admin) {
            logger.info(`Admin available in this server`)
        } else {
            const password: any = "Admin@EBCOG"

            const salt = await bcrypt.genSalt(12); //generate salt
            const passwordHash = await bcrypt.hash(password, salt);  //Hash password create with salt


            const admin = new User({
                role: 'admin',
                fullName: 'EBCOG Admin',
                email: 'admin@ebcog.com',
                phoneNo: "+91 1111111111",
                password: passwordHash,
                createdAt: new Date(),
                // isVerified: 1,
            })
            const saveAdmin = await admin.save()
            if (saveAdmin) {
                //token create for testing
                const token = await tokenGenerate({
                    id: saveAdmin?._id,
                    email: saveAdmin?.email,
                }, "365d");

                //Admin data save in txt file
                let writeStream = fs.createWriteStream("admin1stTimePassword.txt "); //txt file creation  
                writeStream.write(`Email: ${saveAdmin.email} \n`);
                writeStream.write(`Password: ${password} \n`);
                writeStream.write(`Admin test token: ${token} \n`);
                writeStream.end();

                logger.info(`[SeedData 002] Admin login ID: ${saveAdmin.email} and password: ${password}`)
            }
        }

    } catch (error) {
        logger.error(error, "Error in create admin seedData")
    }
}