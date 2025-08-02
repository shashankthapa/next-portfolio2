"use server"
import { verifyCaptchaToken } from "./captcha";
import { sendEmail } from "./sendEmailConfig";

export async function submitAction(token: string | null, formData: FormData) {
  if (!token) {
    return {
      success: false,
      msg: "Token not found",
    };
  }
  const data = Object.fromEntries(formData.entries());
  const { formName, formEmail, formMsg } = data as Record<string, string>;
  const name = formName.trim();
  const email = formEmail.trim();
  const message = formMsg.trim();
  const captchaData = await verifyCaptchaToken(token);

  if (!captchaData) {
    return {
      success: false,
      message: "Captcha Failed",
    };
  }

  if (!captchaData.success || captchaData.score < 0.5) {
    return {
      success: false,
      message: "Captcha Failed",
      errors: !captchaData.success ? captchaData["error-codes"] : undefined,
    };
  }

// amazon ses config
  const result = await sendEmail({ name, email, message });
  if (result.$metadata.httpStatusCode == 200) {
    return {
      success: true,
      message: "Email sent successfully",
    };
  }

  if (result.$metadata.httpCode != 200) {
    return {
      success: false,
      message: "Email sending failed.",
    };
  }
}

export async function action() {}
