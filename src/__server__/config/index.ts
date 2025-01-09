/* eslint-disable import/no-anonymous-default-export */
import dotenv from "dotenv";
const envFound = dotenv.config();

if (envFound.error) {
    // This error should crash whole process
    console.log("⚠️  Couldn't find .env file  ⚠️");
    setTimeout(() => {
      process.exit(1);
    }, 2000);
  }


const PORT: number = parseInt(process.env.PORT as string, 10);
const MONGODB_URI: string = process.env.MONGODB_URI as string;
const EXPIRES: string = process.env.jwtExpiryIn as string;
const RFEXPIRES: string = process.env.jwtRFExpiryIn as string;
const TOKEN_SEC: string = process.env.jwtPrivateKey as string;
const OTP_SEND_URL: string = process.env.OTP_SEND_URL as string;
const OTP_SEND_API_KEY: string = process.env.OTP_SEND_API_KEY as string;
const ACCESS_ORIGIN: any = process.env.ACCESS_ORIGIN as any;
const OTP_EXPIRE_TIME: number = parseInt(process.env.OTP_EXPIRE_TIME as string, 10);  //OTP_EXPIRE_TIME=5 (this only support minutes)
const LINK_EXPIRE_TIME: number = parseInt(process.env.LINK_EXPIRE_TIME as string, 10);  //OTP_EXPIRE_TIME=5 (this only support minutes)
const APP_URL: string = process.env.APP_URL as string;
const DOCTOR_OTP_SEND_TEMP_ID: string = process.env.DOCTOR_OTP_SEND_TEMP_ID as string;
const PATIENT_OTP_SEND_TEMP_ID: string = process.env.PATIENT_OTP_SEND_TEMP_ID as string;




export default {
    port: PORT,
    databaseURL: MONGODB_URI,
    tokenSecret: TOKEN_SEC,
    Expires: EXPIRES,
    RFexpires: RFEXPIRES,
    accessOrigin: ACCESS_ORIGIN,
    otpExTime: OTP_EXPIRE_TIME,
    linkExTime: LINK_EXPIRE_TIME,
    otpSendUrl: OTP_SEND_URL,
    otpSendApiKey: OTP_SEND_API_KEY,
    appUrl: APP_URL,
    doctorOtpSnedID: DOCTOR_OTP_SEND_TEMP_ID,
    patientOtpSendID: PATIENT_OTP_SEND_TEMP_ID,
    api: {
      prefix: "/api",
    },
  };