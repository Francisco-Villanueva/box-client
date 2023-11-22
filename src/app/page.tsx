import { redirect } from "next/navigation";
export default function Home() {
  return <main>{redirect("/login")}</main>;
}
