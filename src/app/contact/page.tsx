"use client";

import Navbar from "../components/Navbar";
import { useUser } from "@auth0/nextjs-auth0/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  const { user } = useUser();
  return (
    <>
      <Navbar user={user} />
      <div
        data-page-shell="true"
        className="px-4 py-6 font-(family-name:--font-quicksand) font-bold sm:px-6 lg:px-10"
      >
        <div className="mx-auto mt-8 flex max-w-4xl flex-col items-center justify-center gap-6 text-lg sm:gap-8 sm:text-2xl lg:mt-20 lg:gap-10 lg:text-4xl">
          <div className="w-full wrap-break-word py-4 text-center">☎ +886 905-599-158</div>
          <div className="w-full wrap-break-word py-4 text-center">☎ +1 341-248-9147</div>
          <div className="w-full wrap-break-word py-4 text-center">✉ bensonhsieh2006@gmail.com</div>
          <div className="flex w-full items-center justify-center gap-3 break-all py-4 text-center sm:gap-4">
            <FontAwesomeIcon icon={faGithub} className="text-2xl sm:text-3xl lg:text-4xl" />
            <span>https://github.com/bensonhsieh2006</span>
          </div>
        </div>
      </div>
    </>
  );
}
