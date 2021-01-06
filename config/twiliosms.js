import "./ImportEnv";
import configTwilio from "twilio";
const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_TOKEN;
const client = configTwilio(accountSid, authToken);

console.log(accountSid);
console.log(authToken);

const sendSMS = async (number) => {
  const OTP = Math.floor(100000 + Math.random() * 900000);
  const message = `Welcome to MemeVerse! Your verification code is ${OTP}`;
  let smsInfo = await client.messages.create({
    body: message,
    from: process.env.TWILIO_NUMBER,
    to: number,
  });
  smsInfo = {
    OTP,
    createdAtOTP: smsInfo.dateCreated,
  };
  return smsInfo;
};

export default sendSMS;
