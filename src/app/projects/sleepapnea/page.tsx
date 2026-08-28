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
            <h1>
              Real-time Monitoring of Sleep Apnea Using Convolutional Neural
              Networks and Long Short-Term Memory
            </h1>
          </div>

          <div className="section-content font-normal">
            <p className="">
              This research introduces an intelligent mobile application that
              has been developed to identify sleep apnea in real-time. This is
              achieved through the utilization of Convolutional Neural Networks
              &#40;CNN&#41; and Long Short-Term Memory &#40;LSTM&#41;
              algorithms. In contrast to the intricate and contact
              polysomnography &#40;PSG&#41; testing that is typically employed
              for the diagnosis of sleep apnea, this method utilizes non-contact
              analysis of audio signals. This enables individuals to undergo
              testing in the convenience of their own homes, thereby replicating
              real-world conditions. Two real-time monitoring models, namely the
              Hopping Window Model and the Sliding Window Model, were
              introduced.
            </p>
          </div>

          <div className="section-content font-normal">
            <FontAwesomeIcon
              icon={faGithub}
              className="text-2xl sm:text-3xl lg:text-4xl"
            />{" "}
            <a
              className="hover:text-blue-500"
              href="https://github.com/bensonhsieh2006/Sleep_Apnea"
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
