import React from "react";
import { ExperienceSectionList } from "./ExperienceSection";
import Reveal from "../../Reveal";
import {
  positions_responsibilties_dxp,
  positions_responsibilties_siddhant,
  positions_responsibilties_webmalaya,
} from "@/app/utils/company-accomplishments";

const Experience = () => {
  return (
    <Reveal id="experience">
      <div className="flex justify-center w-full p-5 md:lg:p-10">
        <div className="flex flex-col items-center md:lg:max-w-[40%]">
          <div className="text-center py-10 text-2xl sm:text-4xl font-extrabold">
            EXPERIENCE
          </div>
          <ExperienceSectionList
            companyName="Webmalaya Tech Enterprise"
            companyArea=", Kathmandu Nepal"
            positions_responsibilties={positions_responsibilties_webmalaya}
          />
          <ExperienceSectionList
            companyName="Siddhant College of Engineering"
            companyArea=", Pune India"
            positions_responsibilties={positions_responsibilties_siddhant}
          />
          <ExperienceSectionList
            companyName="DXP Systems"
            companyArea=", Pune India"
            positions_responsibilties={positions_responsibilties_dxp}
          />
        </div>
      </div>
    </Reveal>
  );
};

export default Experience;


// import { sendEmail } from "../../utils/sendEmailConfig";
// import { verifyCaptchaToken } from "../../utils/captcha";

// export async function POST(request: Request) {
//   const { token, formName, formEmail, formMsg } = await request.json();
//   if (!token) {
//     return new Response(JSON.stringify({ success: false, msg: "Token not found" }), {
//       status: 400,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
//   const name = formName.trim();
//   const email = formEmail.trim();
//   const message = formMsg.trim();
//   const captchaData = await verifyCaptchaToken(token);

//   if (!captchaData) {
//     return new Response(JSON.stringify({ success: false, message: "Captcha Failed" }), {
//       status: 400,
//       headers: { "Content-Type": "application/json" },
//     });
//   }

//   if (!captchaData.success || captchaData.score < 0.5) {
//     return new Response(JSON.stringify({
//       success: false,
//       message: "Captcha Failed",
//       errors: !captchaData.success ? captchaData["error-codes"] : undefined,
//     }), {
//       status: 400,
//       headers: { "Content-Type": "application/json" },
//     });
//   }

//   const result = await sendEmail({ name, email, message });
//   if (result.$metadata.httpStatusCode == 200) {
//     return new Response(JSON.stringify({ success: true, message: "Email sent successfully" }), {
//       status: 200,
//       headers: { "Content-Type": "application/json" },
//     });
//   }

//   return new Response(JSON.stringify({ success: false, message: "Email sending failed." }), {
//     status: 500,
//     headers: { "Content-Type": "application/json" },
//   });
// }
