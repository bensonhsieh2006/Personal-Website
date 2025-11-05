"use client";
import Navbar from "../components/Navbar";

export default function Page() {
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
      about.style.transform = "scale(1.00)";
    }
  }

  return (
    <div className="font-(family-name:--font-quicksand)">
      <div className="w-full items-center justify-items-center">
        <Navbar />
      </div>
      <div className="flex flex-col">
        <div
          id="about"
          className="mx-30 mt-30 mb-10 gap-5 rounded-lg border border-gray-300 p-5 shadow-lg"
          onMouseOver={() => MouseOver("about")}
          onMouseOut={() => MouseOut("about")}
        >
          <div className="mb-5 border-b border-gray-300 py-10 pl-10 text-5xl font-bold">
            <h1>About me</h1>
          </div>
          <div className="px-10 py-5 text-2xl font-normal">
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
          className="mx-30 my-10 gap-5 rounded-lg border border-gray-300 p-5 shadow-lg"
          onMouseOver={() => MouseOver("education")}
          onMouseOut={() => MouseOut("education")}
        >
          <div className="mb-5 border-b border-gray-300 py-10 pl-10 text-5xl font-bold">
            <h1>Education</h1>
          </div>
          <div className="p-5 text-2xl">
            <ul className="list-inside list-disc font-normal">
              <li className="p-5">
                Mathematics and Science Gifted Class, Taipei Municipal Chien Kuo
                High School (2020 ~ 2023)
              </li>
              <li className="p-5">
                Department of Electrical Engineering, National Taiwan University
                (2023 ~ Present)
              </li>
            </ul>
          </div>
        </div>
        <div
          id="skills"
          className="mx-30 my-10 rounded-lg border border-gray-300 p-5 shadow-lg"
          onMouseOver={() => MouseOver("skills")}
          onMouseOut={() => MouseOut("skills")}
        >
          <div className="mb-5 border-b border-gray-300 py-10 pl-10 text-5xl font-bold">
            <h1>Skills</h1>
          </div>
          <div className="p-5 text-2xl">
            <ul className="font-regular list-inside list-disc">
              <li className="p-5">Programming (Python, C++, Java)</li>
              <li className="p-5">Deep Learning</li>
              <li className="p-5">
                Web Development (HTML, CSS, JavaScript, TypeScript, DB, SQL)
              </li>
            </ul>
          </div>
        </div>
        <div
          id="projects"
          className="mx-30 my-10 rounded-lg border border-gray-300 p-5 shadow-lg"
          onMouseOver={() => MouseOver("projects")}
          onMouseOut={() => MouseOut("projects")}
        >
          <div className="mb-5 border-b border-gray-300 py-10 pl-10 text-5xl font-bold">
            <h1>Projects</h1>
          </div>
          <div className="p-5 text-2xl">
            <ul className="list-inside list-disc">
              <li className="p-5 font-bold">Deep Learning</li>
              <ol className="list-decimal pl-20 font-normal">
                <li className="p-5">
                  Real-Time Sleep Apnea Monitoring Using Convolutional Neural
                  Networks and Long Short-Term Memory Networks
                </li>
              </ol>
              <li className="p-5 font-bold">Web Development</li>
              <ol className="list-decimal pl-20 font-normal">
                <li className="p-5">
                  Website of the 39th Research Project Presentation of the
                  Mathematics and Science Gifted Class, Taipei Municipal Jianguo
                  High School
                </li>
                <li className="p-5">2025 EE Week Web Mini-Game</li>
              </ol>
            </ul>
          </div>
        </div>
        <div
          id="awards"
          className="mx-30 my-10 rounded-lg border border-gray-300 p-5 font-bold shadow-lg"
          onMouseOver={() => MouseOver("awards")}
          onMouseOut={() => MouseOut("awards")}
        >
          <div className="mb-5 border-b border-gray-300 py-10 pl-10 text-5xl">
            <h1>Awards</h1>
          </div>
          <div className="p-5 text-2xl">
            <ul className="list-inside list-disc">
              <li className="p-5">
                Honorable Mention & Award for Outstanding Creativity
              </li>
              <p className="list-decimal pb-10 pl-15 font-normal">
                The 56th Taipei City Science Fair for Elementary and Secondary
                Schools
              </p>
              <li className="p-5">
                Honorable Mention & Award for Outstanding Creativity
              </li>
              <p className="list-decimal pb-10 pl-15 font-normal">
                The 55th Taipei City Science Fair for Elementary and Secondary
                Schools
              </p>
              <li className="p-5">Award of Excellence</li>
              <p className="list-decimal pb-10 pl-15 font-normal">
                Taipei Municipal Jianguo High School Science Fair, Academic Year
                2022
              </p>
              <li className="p-5">Award of Excellence</li>
              <p className="list-decimal pb-10 pl-15 font-normal">
                Taipei Municipal Jianguo High School Science Fair, Academic Year
                2021
              </p>
            </ul>
          </div>
        </div>
        <div 
          id="experience"
          className="mx-30 my-10 rounded-lg border border-gray-300 p-5 shadow-lg"
          onMouseOver={() => MouseOver("experience")}
          onMouseOut={() => MouseOut("experience")}
        >
          <div className="mb-5 border-b border-gray-300 py-10 pl-10 text-5xl font-bold">
            <h1>Experience</h1>
          </div>
          <div className="p-5 text-2xl">
            <ul className="list-inside list-disc">
              <li className="p-5">Member</li>
              <p className="list-decimal pb-10 pl-15 font-normal">
                Information Division, Electrical Engineering Student
                Association, National Taiwan University
              </p>
              <li className="p-5">Event General Coordinator</li>
              <p className="list-decimal pb-10 pl-15 font-normal">
                The 39th Research Project Presentation of the Mathematics and
                Science Gifted Class, Taipei Municipal Jianguo High School
              </p>
              <li className="p-5">Participant</li>
              <p className="list-decimal pb-10 pl-15 font-normal">
                International Science Youth Forum @ Singapore
              </p>
            </ul>
          </div>
        </div>
        <div
          id="language" 
          className="mx-30 my-10 rounded-lg border border-gray-300 p-5 shadow-lg"
          onMouseOver={() => MouseOver("language")}
          onMouseOut={() => MouseOut("language")}
          >
          <div className="mb-5 border-b border-gray-300 py-10 pl-10 text-5xl font-bold">
            <h1>Language</h1>
          </div>
          <div className="p-5 text-2xl">
            <ul className="list-inside list-disc font-(family-name:--font-quicksand-regular)">
              <li className="p-5">Mandarin</li>
              <li className="p-5">English</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
