"use client";

import Link from "next/link";
import Navbar from "../../components/Navbar";
import { useUser } from "@auth0/nextjs-auth0/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function SleepApnea() {
  const { user } = useUser();
  return (
    <>
      <Navbar user={user} />
      <article
        data-page-shell="true"
        className="px-4 py-8 font-(family-name:--font-quicksand) sm:px-6 lg:px-10"
      >
        <div className="mx-auto my-5 max-w-4xl rounded-lg border border-gray-300 p-6 shadow-lg last:mb-0">
          <div className="section-header">
            <h1>2025 EE Week Web Mini Game</h1>
          </div>

          <div className="section-content font-normal">
            <p className="">
              A modified Archero2 game for an event of our department: EE week.
            </p>
          </div>

          <div className="section-content font-normal">
            <FontAwesomeIcon
              icon={faGithub}
              className="text-2xl sm:text-3xl lg:text-4xl"
            />{" "}
            <a
              className="hover:text-blue-500"
              href="https://github.com/bensonhsieh2006/2025NTUEEWeekGame"
            >
              Sleep_Apnea
            </a>
          </div>

          <Link href="/projects" className="back-to-link">
            Back to projects
          </Link>
        </div>
      </article>
    </>
  );
}
