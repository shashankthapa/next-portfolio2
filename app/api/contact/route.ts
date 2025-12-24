import { sendEmail } from "../../utils/sendEmailConfig";
import { verifyCaptchaToken } from "../../utils/captcha";

export async function POST(request: Request) {
  const { token, formName, formEmail, formMsg } = await request.json();
  if (!token) {
    return new Response(JSON.stringify({ success: false, msg: "Token not found" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
  const name = formName.trim();
  const email = formEmail.trim();
  const message = formMsg.trim();
  const captchaData = await verifyCaptchaToken(token);

  if (!captchaData) {
    return new Response(JSON.stringify({ success: false, message: "Captcha Failed" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  if (!captchaData.success || captchaData.score < 0.5) {
    return new Response(JSON.stringify({
      success: false,
      message: "Captcha Failed",
      errors: !captchaData.success ? captchaData["error-codes"] : undefined,
    }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const result = await sendEmail({ name, email, message });
  if (result.$metadata.httpStatusCode == 200) {
    return new Response(JSON.stringify({ success: true, message: "Email sent successfully" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ success: false, message: "Email sending failed." }), {
    status: 500,
    headers: { "Content-Type": "application/json" },
  });
}
