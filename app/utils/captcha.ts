export async function getCaptchaToken() {
  return new Promise<string | null>((resolve) => {
    const sitekey = process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY;
    console.log(sitekey)
    grecaptcha.ready(async () => {
      if (!sitekey) {
        resolve(null);
        return;
      }
      const token = grecaptcha.execute(sitekey, {
        action: "contact_us",
      });
      resolve(token);
    });
  });
}

export async function verifyCaptchaToken(token: string) {
  const secretKey = process.env.CAPTCHA_SECRET_KEY;
  // console.log("secret key : ",secretKey, "token : ",token);
  if (!secretKey) {
    throw new Error("No secret key found");
  }
  const url = new URL("https://www.google.com/recaptcha/api/siteverify");
  url.searchParams.append("secret", secretKey);
  url.searchParams.append("response", token);

  const res = await fetch(url, { method: "POST" });
  const captchaData: CaptchaData = await res.json();

  if (!res.ok) return null;

  return captchaData;
}

type CaptchaData =
  | {
      success: true;
      challenge_ts: string;
      hostname: string;
      score: number;
      action: string;
    }
  | {
      success: false;
      "error-codes": ErrorCodes[];
    };

type ErrorCodes =
  | "missing-input-secret"
  | "invalid-input-secret"
  | "missing-input-response"
  | "invalid-input-response"
  | "bad-request"
  | "timeout-or-duplicate";

// server side
