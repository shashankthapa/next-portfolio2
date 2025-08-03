"use server";
import nextConfig from "@/next.config";
import { SendEmailCommand, SESClient } from "@aws-sdk/client-ses";

const SES_CONFIG = {
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_ACCESS_KEY_SECRET,
  },
  region: process.env.NEXT_PUBLIC_AWS_REGION,
};

const sesClient = new SESClient(SES_CONFIG);

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const sendEmail = async ({
  name,
  email,
  message,
}: ContactFormData): Promise<any> => {
  console.log("Next.js Base Path:", nextConfig.basePath);

  const params = {
    Destination: {
      CcAddresses: [],
      ToAddresses: ["shashankthapa022@gmail.com"],
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: `<html>
          <body>
            <p>Dear Shashank,</p>
            <p>${message}</p>
            <br/>
            <p>Regards,</p>
            <p>${name}</p>
          </body>
          </html>`,
        },
        Text: {
          Charset: "UTF-8",
          Data: `${message}`,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: `New Form Submission from ${email}`,
      },
    },
    Source: process.env.NEXT_PUBLIC_AWS_SES_SOURCE_EMAIL,
    ReplyToAddresses: [],
  };

  try {
    const command = new SendEmailCommand(params);
    const response = await sesClient.send(command);
    console.log("Email sent successfully:", response);
    return response;
  } catch (error: any) {
    console.log("Error sending email:", error.message);
    return error;
  }
};
