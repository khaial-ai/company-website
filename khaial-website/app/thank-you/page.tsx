import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default function ThankYouRedirectPage() {
  const accept = headers().get("accept-language")?.toLowerCase() ?? "";
  const prefersAr = accept.includes("ar");
  redirect(prefersAr ? "/ar/thank-you" : "/en/thank-you");
}


