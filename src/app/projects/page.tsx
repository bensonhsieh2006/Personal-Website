import Navbar from "../components/Navbar";
import { Quicksand } from "next/font/google";

const reg_quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400"],
});

const bold_quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Projects() {
  return (
    <div className={bold_quicksand.className}>
      <div className="w-full items-center justify-items-center">
        <Navbar />
      </div>
      <h1>Hi</h1>
    </div>
  );
}
