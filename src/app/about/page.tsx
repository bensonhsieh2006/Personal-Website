"use client";
import Navbar from "../components/Navbar";
import { useUser } from "@auth0/nextjs-auth0/client";
import { MouseOver, MouseOut } from "../utils";

export default function Page() {
  const { user } = useUser();

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
            className="section-card"
            onMouseOver={() => MouseOver("about")}
            onMouseOut={() => MouseOut("about")}
          >
            <div className="section-header">
              <h1>About me</h1>
            </div>
            <div className="section-content font-normal">
              <p className="mb-5">
                Third year Electrical Engineering student in National Taiwan
                University with experience in Python & C++ programming and web
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
            className="section-card"
            onMouseOver={() => MouseOver("education")}
            onMouseOut={() => MouseOut("education")}
          >
            <div className="section-header">
              <h1>Education</h1>
            </div>
            <div className="section-content font-normal">
              <ul className="section-list font-normal">
                <li className="section-list-item">
                  Mathematics and Science Gifted Class, Taipei Municipal Chien
                  Kuo High School (2020 ~ 2023)
                </li>
                <li className="p-3 sm:p-5">
                  Department of Electrical Engineering, National Taiwan
                  University (2023 ~ Present)
                </li>
              </ul>
            </div>
          </div>

          <div
            id="experience"
            className="section-card"
            onMouseOver={() => MouseOver("experience")}
            onMouseOut={() => MouseOut("experience")}
          >
            <div className="section-header">
              <h1>Experience</h1>
            </div>
            <div className="section-content">
              <ul className="section-list">
                <li className="section-list-item font-bold">President</li>
                <p className="pb-6 pl-6 font-normal sm:pl-8 lg:pl-10">
                  Information Division, Electrical Engineering Student
                  Association, National Taiwan University
                </p>
                <li className="p-3 font-bold sm:p-5">
                  Event General Coordinator
                </li>
                <p className="pb-6 pl-6 font-normal sm:pl-8 lg:pl-10">
                  The 39th Research Project Presentation of the Mathematics and
                  Science Gifted Class, Taipei Municipal Jianguo High School
                </p>
                <li className="p-3 font-bold sm:p-5">Participant</li>
                <p className="pb-6 pl-6 font-normal sm:pl-8 lg:pl-10">
                  International Science Youth Forum @ Singapore
                </p>
              </ul>
            </div>
          </div>

          <div
            id="skills"
            className="section-card"
            onMouseOver={() => MouseOver("skills")}
            onMouseOut={() => MouseOut("skills")}
          >
            <div className="section-header">
              <h1>Skills</h1>
            </div>
            <div className="section-content">
              <ul className="section-list">
                <li className="section-list-item">
                  Programming (Python, C++, Java)
                </li>
                <li className="section-list-item">Deep Learning</li>
                <li className="section-list-item">
                  Web Development (HTML, CSS, JavaScript, TypeScript, DB, SQL)
                </li>
              </ul>
            </div>
          </div>

          <div
            id="projects"
            className="section-card"
            onMouseOver={() => MouseOver("projects")}
            onMouseOut={() => MouseOut("projects")}
          >
            <div className="section-header">
              <h1>Projects</h1>
            </div>
            <div className="section-content">
              <ul className="section-list">
                <li className="section-list-item font-bold">Deep Learning</li>
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
                    Mathematics and Science Gifted Class, Taipei Municipal
                    Jianguo High School
                  </li>
                  <li className="p-3 sm:p-5">2025 EE Week Web Mini-Game</li>
                </ol>
              </ul>
            </div>
          </div>

          <div
            id="awards"
            className="section-card font-bold"
            onMouseOver={() => MouseOver("awards")}
            onMouseOut={() => MouseOut("awards")}
          >
            <div className="section-header">
              <h1>Awards</h1>
            </div>
            <div className="section-content">
              <ul className="section-list">
                <li className="section-list-item">
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
                  Taipei Municipal Jianguo High School Science Fair, Academic
                  Year 2022
                </p>
                <li className="p-3 sm:p-5">Award of Excellence</li>
                <p className="pb-6 pl-6 font-normal sm:pl-8 lg:pl-10">
                  Taipei Municipal Jianguo High School Science Fair, Academic
                  Year 2021
                </p>
              </ul>
            </div>
          </div>

          <div
            id="language"
            className="section-card"
            onMouseOver={() => MouseOver("language")}
            onMouseOut={() => MouseOut("language")}
          >
            <div className="section-header">
              <h1>Language</h1>
            </div>
            <div className="section-content font-(family-name:--font-quicksand-regular)">
              <ul className="section-list">
                <li className="section-list-item">Mandarin</li>
                <li className="section-list-item">English</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
