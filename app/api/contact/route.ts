import { sendEmail } from "../../utils/sendEmailConfig";

// export async function POST(request: Request) {
//   const { formName, formEmail, formMsg } = await request.json();
//   console.log(formName, formEmail, formMsg);
//   const name = formName.trim();
//   const email = formEmail.trim();
//   const message = formMsg.trim();
//   const response = await sendEmail({ name, email, message });
//   return new Response(JSON.stringify(response), {
//     headers: { "Content-Type": "application/json" },
//   });
// }
