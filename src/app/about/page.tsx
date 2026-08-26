"use client";
import Navbar from "../components/Navbar";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Page() {
  const { user } = useUser();
  function MouseOver(id: string) {
    document.body.style.cursor = "pointer";
    const about = document.getElementById(id);
    if (about) {
      about.style.transform = "scale(1.02)";
    }
  }

  function MouseOut(id: string) {
    document.body.style.cursor = "default";
    const about = document.getElementById(id);
    if (about) {
      about.style.transform = "scale(1)";
    }
  }

  return (
    <>
      <Navbar user={user} />
      <div
        data-page-shell="true"
        className="px-3 py-4 font-(family-name:--font-quicksand) sm:px-6 lg:px-10"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-6">
          <div
            id="about"
            className="rounded-lg border border-gray-300 p-4 shadow-lg transition-transform duration-200 sm:p-6 lg:p-8"
            onMouseOver={() => MouseOver("about")}
            onMouseOut={() => MouseOut("about")}
          >
            <div className="mb-5 border-b border-gray-300 py-5 pl-3 text-3xl font-bold sm:py-7 sm:pl-5 sm:text-4xl lg:pl-8 lg:text-5xl">
              <h1>About me</h1>
            </div>
            <div className="px-2 py-4 text-base font-normal sm:px-4 sm:text-lg lg:px-8 lg:text-2xl">
              <p className="mb-5">
                Second year Electrical Engineering student in National Taiwan
                University with experience in Python programming and web
                development.
              </p>
              <p>
                Completed a project on IoT-based sleep monitoring and actively
                participated in student association activities.
              </p>
            </div>
          </div>

          <div
            id="education"
            className="rounded-lg border border-gray-300 p-4 shadow-lg transition-transform duration-200 sm:p-6 lg:p-8"
            onMouseOver={() => MouseOver("education")}
            onMouseOut={() => MouseOut("education")}
          >
            <div className="mb-5 border-b border-gray-300 py-5 pl-3 text-3xl font-bold sm:py-7 sm:pl-5 sm:text-4xl lg:pl-8 lg:text-5xl">
              <h1>Education</h1>
            </div>
            <div className="p-2 text-base sm:p-4 sm:text-lg lg:p-6 lg:text-2xl">
              <ul className="list-inside list-disc font-normal">
                <li className="p-3 sm:p-5">
                  Mathematics and Science Gifted Class, Taipei Municipal Chien Kuo
                  High School (2020 ~ 2023)
                </li>
                <li className="p-3 sm:p-5">
                  Department of Electrical Engineering, National Taiwan University
                  (2023 ~ Present)
                </li>
              </ul>
            </div>
          </div>

          <div
            id="skills"
            className="rounded-lg border border-gray-300 p-4 shadow-lg transition-transform duration-200 sm:p-6 lg:p-8"
            onMouseOver={() => MouseOver("skills")}
            onMouseOut={() => MouseOut("skills")}
          >
            <div className="mb-5 border-b border-gray-300 py-5 pl-3 text-3xl font-bold sm:py-7 sm:pl-5 sm:text-4xl lg:pl-8 lg:text-5xl">
              <h1>Skills</h1>
            </div>
            <div className="p-2 text-base sm:p-4 sm:text-lg lg:p-6 lg:text-2xl">
              <ul className="list-inside list-disc">
                <li className="p-3 sm:p-5">Programming (Python, C++, Java)</li>
                <li className="p-3 sm:p-5">Deep Learning</li>
                <li className="p-3 sm:p-5">
                  Web Development (HTML, CSS, JavaScript, TypeScript, DB, SQL)
                </li>
              </ul>
            </div>
          </div>

          <div
            id="projects"
            className="rounded-lg border border-gray-300 p-4 shadow-lg transition-transform duration-200 sm:p-6 lg:p-8"
            onMouseOver={() => MouseOver("projects")}
            onMouseOut={() => MouseOut("projects")}
          >
            <div className="mb-5 border-b border-gray-300 py-5 pl-3 text-3xl font-bold sm:py-7 sm:pl-5 sm:text-4xl lg:pl-8 lg:text-5xl">
              <h1>Projects</h1>
            </div>
            <div className="p-2 text-base sm:p-4 sm:text-lg lg:p-6 lg:text-2xl">
              <ul className="list-inside list-disc">
                <li className="p-3 font-bold sm:p-5">Deep Learning</li>
                <ol className="list-decimal pl-6 font-normal sm:pl-8 lg:pl-10">
                  <li className="p-3 sm:p-5">
                    Real-Time Sleep Apnea Monitoring Using Convolutional Neural
                    Networks and Long Short-Term Memory Networks
                  </li>
                </ol>
                <li className="p-3 font-bold sm:p-5">Web Development</li>
                <ol className="list-decimal pl-6 font-normal sm:pl-8 lg:pl-10">
                  <li className="p-3 sm:p-5">
                    Website of the 39th Research Project Presentation of the
                    Mathematics and Science Gifted Class, Taipei Municipal Jianguo
                    High School
                  </li>
                  <li className="p-3 sm:p-5">2025 EE Week Web Mini-Game</li>
                </ol>
              </ul>
            </div>
          </div>

          <div
            id="awards"
            className="rounded-lg border border-gray-300 p-4 font-bold shadow-lg transition-transform duration-200 sm:p-6 lg:p-8"
            onMouseOver={() => MouseOver("awards")}
            onMouseOut={() => MouseOut("awards")}
          >
            <div className="mb-5 border-b border-gray-300 py-5 pl-3 text-3xl sm:py-7 sm:pl-5 sm:text-4xl lg:pl-8 lg:text-5xl">
              <h1>Awards</h1>
            </div>
            <div className="p-2 text-base sm:p-4 sm:text-lg lg:p-6 lg:text-2xl">
              <ul className="list-inside list-disc">
                <li className="p-3 sm:p-5">
                  Honorable Mention & Award for Outstanding Creativity
                </li>
                <p className="pb-6 pl-6 font-normal sm:pl-8 lg:pl-10">
                  The 56th Taipei City Science Fair for Elementary and Secondary
                  Schools
                </p>
                <li className="p-3 sm:p-5">
                  Honorable Mention & Award for Outstanding Creativity
                </li>
                <p className="pb-6 pl-6 font-normal sm:pl-8 lg:pl-10">
                  The 55th Taipei City Science Fair for Elementary and Secondary
                  Schools
                </p>
                <li className="p-3 sm:p-5">Award of Excellence</li>
                <p className="pb-6 pl-6 font-normal sm:pl-8 lg:pl-10">
                  Taipei Municipal Jianguo High School Science Fair, Academic Year
                  2022
                </p>
                <li className="p-3 sm:p-5">Award of Excellence</li>
                <p className="pb-6 pl-6 font-normal sm:pl-8 lg:pl-10">
                  Taipei Municipal Jianguo High School Science Fair, Academic Year
                  2021
                </p>
              </ul>
            </div>
          </div>

          <div
            id="experience"
            className="rounded-lg border border-gray-300 p-4 shadow-lg transition-transform duration-200 sm:p-6 lg:p-8"
            onMouseOver={() => MouseOver("experience")}
            onMouseOut={() => MouseOut("experience")}
          >
            <div className="mb-5 border-b border-gray-300 py-5 pl-3 text-3xl font-bold sm:py-7 sm:pl-5 sm:text-4xl lg:pl-8 lg:text-5xl">
              <h1>Experience</h1>
            </div>
            <div className="p-2 text-base sm:p-4 sm:text-lg lg:p-6 lg:text-2xl">
              <ul className="list-inside list-disc">
                <li className="p-3 sm:p-5">Member</li>
                <p className="pb-6 pl-6 font-normal sm:pl-8 lg:pl-10">
                  Information Division, Electrical Engineering Student
                  Association, National Taiwan University
                </p>
                <li className="p-3 sm:p-5">Event General Coordinator</li>
                <p className="pb-6 pl-6 font-normal sm:pl-8 lg:pl-10">
                  The 39th Research Project Presentation of the Mathematics and
                  Science Gifted Class, Taipei Municipal Jianguo High School
                </p>
                <li className="p-3 sm:p-5">Participant</li>
                <p className="pb-6 pl-6 font-normal sm:pl-8 lg:pl-10">
                  International Science Youth Forum @ Singapore
                </p>
              </ul>
            </div>
          </div>

          <div
            id="language"
            className="rounded-lg border border-gray-300 p-4 shadow-lg transition-transform duration-200 sm:p-6 lg:p-8"
            onMouseOver={() => MouseOver("language")}
            onMouseOut={() => MouseOut("language")}
          >
            <div className="mb-5 border-b border-gray-300 py-5 pl-3 text-3xl font-bold sm:py-7 sm:pl-5 sm:text-4xl lg:pl-8 lg:text-5xl">
              <h1>Language</h1>
            </div>
            <div className="p-2 text-base sm:p-4 sm:text-lg lg:p-6 lg:text-2xl">
              <ul className="list-inside list-disc font-(family-name:--font-quicksand-regular)">
                <li className="p-3 sm:p-5">Mandarin</li>
                <li className="p-3 sm:p-5">English</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
