"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";
import { useUser } from "@auth0/nextjs-auth0/client";
import { MouseOver, MouseOut } from "../utils";

export default function Projects() {
  const { user } = useUser();
  return (
    <div>
      <Navbar user={user} />
      <div
        className="px-4 font-(family-name:--font-quicksand) sm:px-6 lg:px-10"
        data-page-shell="true"
      >
        <div className="mx-auto max-w-4xl pt-15 pb-3">
          <h1 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
            Deep Learning
          </h1>
        </div>
        <div
          id="sleep-apnea"
          onMouseOver={() => MouseOver("sleep-apnea")}
          onMouseOut={() => MouseOut("sleep-apnea")}
        >
          <div className="mx-auto my-5 max-w-4xl rounded-lg border border-gray-300 p-6 shadow-lg last:mb-0">
            <Link
              href={`/projects/sleepapnea`}
              className="block text-2xl text-white hover:text-blue-500"
            >
              Real-time Monitoring of Sleep Apnea Using Convolutional Neural
              Networks and Long Short-Term Memory
            </Link>
          </div>
        </div>

        <div className="mx-auto max-w-4xl py-3 pt-10">
          <h1 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
            Web Development
          </h1>
        </div>

        <div
          id="ckhs-project-presentation"
          onMouseOver={() => MouseOver("ckhs-project-presentation")}
          onMouseOut={() => MouseOut("ckhs-project-presentation")}
        >
          <div className="mx-auto my-5 max-w-4xl rounded-lg border border-gray-300 p-6 shadow-lg">
            <Link
              href={`/projects/ckhsprojectpresentation`}
              className="block text-2xl text-white hover:text-blue-500"
            >
              Website of the 39th Research Project Presentation of the
              Mathematics and Science Gifted Class, Taipei Municipal Jianguo
              High School
            </Link>
          </div>
        </div>

        <div
          id="2025-ntuee-weekgame"
          onMouseOver={() => MouseOver("2025-ntuee-weekgame")}
          onMouseOut={() => MouseOut("2025-ntuee-weekgame")}
        >
          <div className="mx-auto my-5 max-w-4xl rounded-lg border border-gray-300 p-6 shadow-lg">
            <Link
              href={`/projects/2025ntueeweekgame`}
              className="block text-2xl text-white hover:text-blue-500"
            >
              2025 EE Week Web Mini Game
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
