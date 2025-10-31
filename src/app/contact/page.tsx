import Navbar from "../components/Navbar";
import { Quicksand } from "next/font/google";

const bold_quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Contact() {
  return (
    <div className={bold_quicksand.className}>
      <div className="w-full items-center justify-items-center">
        <Navbar />
      </div>
      <div className="mt-20 flex flex-col items-center justify-center gap-10 text-4xl">
        <div className="py-10">☎ +886 905-599-158</div>
        <div className="py-10">✉ bensonhsieh2006@gmail.com</div>
        <div className="py-10">Github: https://github.com/bensonhsieh2006</div>
      </div>
    </div>
  );
}
