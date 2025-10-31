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

export default function Page() {
  return (
    <div className={bold_quicksand.className}>
      <div className="w-full items-center justify-items-center">
        <Navbar />
      </div>
      <div className="flex flex-col">
        <div className="mx-30 mt-30 mb-10 gap-5 rounded-lg border border-gray-300 p-5 shadow-lg">
          <div className="mb-5 border-b border-gray-300 py-10 pl-10 text-5xl">
            <h1>About me</h1>
          </div>
          <div className="px-10 py-5 text-2xl">
            <p className={reg_quicksand.className}>
              Second year Electrical Engineering student in National Taiwan
              University with experience in Python programming and web
              development.
            </p>
            <p className={reg_quicksand.className}>
              Completed a project on IoT-based sleep monitoring and actively
              participated in student association activities.
            </p>
          </div>
        </div>
        <div className="mx-30 my-10 gap-5 rounded-lg border border-gray-300 p-5 shadow-lg">
          <div className="mb-5 border-b border-gray-300 py-10 pl-10 text-5xl">
            <h1>Education</h1>
          </div>
          <div className="p-5 text-2xl">
            <ul className={`${reg_quicksand.className} list-inside list-disc`}>
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
        <div className="mx-30 my-10 rounded-lg border border-gray-300 p-5 shadow-lg">
          <div className="mb-5 border-b border-gray-300 py-10 pl-10 text-5xl">
            <h1>Skills</h1>
          </div>
          <div className="p-5 text-2xl">
            <ul className={`${reg_quicksand.className} list-inside list-disc`}>
              <li className="p-5">Programming (Python, C++, Java)</li>
              <li className="p-5">Deep Learning</li>
              <li className="p-5">
                Web Development (HTML, CSS, JavaScript, TypeScript, DB, SQL)
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-30 my-10 rounded-lg border border-gray-300 p-5 shadow-lg">
          <div className="mb-5 border-b border-gray-300 py-10 pl-10 text-5xl">
            <h1>Projects</h1>
          </div>
          <div className="p-5 text-2xl">
            <ul className="list-inside list-disc">
              <li className="p-5">Deep Learning</li>
              <ol className={`${reg_quicksand.className} list-decimal pl-20`}>
                <li className="p-5">
                  Real-Time Sleep Apnea Monitoring Using Convolutional Neural
                  Networks and Long Short-Term Memory Networks
                </li>
              </ol>
              <li className="p-5">Web Development</li>
              <ol className={`${reg_quicksand.className} list-decimal pl-20`}>
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
        <div className="mx-30 my-10 rounded-lg border border-gray-300 p-5 shadow-lg">
          <div className="mb-5 border-b border-gray-300 py-10 pl-10 text-5xl">
            <h1>Awards</h1>
          </div>
          <div className="p-5 text-2xl">
            <ul className="list-inside list-disc">
              <li className="p-5">
                Honorable Mention & Award for Outstanding Creativity
              </li>
              <p
                className={`${reg_quicksand.className} list-decimal pb-10 pl-15`}
              >
                The 56th Taipei City Science Fair for Elementary and Secondary
                Schools
              </p>
              <li className="p-5">
                Honorable Mention & Award for Outstanding Creativity
              </li>
              <p
                className={`${reg_quicksand.className} list-decimal pb-10 pl-15`}
              >
                The 55th Taipei City Science Fair for Elementary and Secondary
                Schools
              </p>
              <li className="p-5">Award of Excellence</li>
              <p
                className={`${reg_quicksand.className} list-decimal pb-10 pl-15`}
              >
                Taipei Municipal Jianguo High School Science Fair, Academic Year
                2022
              </p>
              <li className="p-5">Award of Excellence</li>
              <p
                className={`${reg_quicksand.className} list-decimal pb-10 pl-15`}
              >
                Taipei Municipal Jianguo High School Science Fair, Academic Year
                2021
              </p>
            </ul>
          </div>
        </div>
        <div className="mx-30 my-10 rounded-lg border border-gray-300 p-5 shadow-lg">
          <div className="mb-5 border-b border-gray-300 py-10 pl-10 text-5xl">
            <h1>Experience</h1>
          </div>
          <div className="p-5 text-2xl">
            <ul className="list-inside list-disc">
              <li className="p-5">Member</li>
              <p
                className={`${reg_quicksand.className} list-decimal pb-10 pl-15`}
              >
                Information Division, Electrical Engineering Student
                Association, National Taiwan University
              </p>
              <li className="p-5">Event General Coordinator</li>
              <p
                className={`${reg_quicksand.className} list-decimal pb-10 pl-15`}
              >
                The 39th Research Project Presentation of the Mathematics and
                Science Gifted Class, Taipei Municipal Jianguo High School
              </p>
              <li className="p-5">Participant</li>
              <p
                className={`${reg_quicksand.className} list-decimal pb-10 pl-15`}
              >
                International Science Youth Forum @ Singapore
              </p>
            </ul>
          </div>
        </div>
        <div className="mx-30 my-10 rounded-lg border border-gray-300 p-5 shadow-lg">
          <div className="mb-5 border-b border-gray-300 py-10 pl-10 text-5xl">
            <h1>Language</h1>
          </div>
          <div className="p-5 text-2xl">
            <ul className={`${reg_quicksand.className} list-inside list-disc`}>
              <li className="p-5">Mandarin</li>
              <li className="p-5">English</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
