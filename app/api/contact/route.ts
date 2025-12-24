import { sendEmail } from "@/app/utils/sendEmailConfig";

export async function POST(request: Request) {
  try {
    const { formName, formEmail, formMsg } = await request.json();
    const data = { name: formName, email: formEmail, message: formMsg };
    const response = await sendEmail(data);
    return Response.json({ success: true, msg: "Mail sent successfully" });
  } catch (err) {
    return Response.json({ success: false, msg: err });
  }
}
