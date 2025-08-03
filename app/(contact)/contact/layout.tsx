import Script from "next/script";
import "@/app/globals.css";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: "Contact Me",
  description: "Contact me for any inquiries or feedback.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Script
        strategy="beforeInteractive"
        src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY}`}
      />
      <ToastContainer position="top-left" />
      {children}
    </section>
  );
}
