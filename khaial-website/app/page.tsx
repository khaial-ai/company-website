import { redirect } from "next/navigation";

export default function Root() {
  // Ensure a single redirect to the default locale and prevent loops
  return redirect("/en");
}

