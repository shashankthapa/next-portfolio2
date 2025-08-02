import Script from "next/script";
import "../globals.css";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: "Contact Me",
  description: "Contact me for any inquiries or feedback.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Script
          strategy="beforeInteractive"
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY}`}
        />
        <ToastContainer position="top-left" />
        {children}
      </body>
    </html>
  );
}
