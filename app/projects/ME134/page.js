'use client';

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

export default function AdvancedRobotics() {
  const labs = [
    {
      title: "PID Controller",
      date: "January, 2025",
      desc: "Programmed a PID controller to maintain wheel velocity smoothly, tuning gains to achieve stable speed regulation while plotting tangential velocity for analysis.",
      link: "https://github.com/kaimartell/ME134_Advanced_Robotics/tree/main/Labs/lab%201%20-%20PID%20controller",
      img: "/pid.png",
      takeaways: [
        "Understanding Feedback Dynamics: Appreciated how proportional, integral, and derivative terms each contribute to stabilizing a system and correcting errors over time.",
        "Importance of Loop Tuning: Learned that careful gain selection—and the trade‑offs between responsiveness and overshoot—is key to robust controller performance."
      ],
    },
    {
      title: "State Machine",
      date: "February, 2025",
      desc: "Implemented a finite state machine enabling random walking, line following, and wall following modes with seamless transitions to navigate a full loop using ultrasonic and line sensors.",
      link: "https://github.com/kaimartell/ME134_Advanced_Robotics/tree/main/Labs/lab%202%20-%20state%20machine",
      img: "/statemachine.png",
      takeaways: [
        "Modular Behavior Design: Saw how clearly defined states and transitions make complex robot behaviors (random walk ↔ line follow ↔ wall follow) easier to develop and debug.",
        "Sensor Driven State Logic: Explored how sensor inputs (ultrasonic distance, line detection) can be fused into a single control architecture that triggers autonomous mode switching."
      ],
    },
    {
      title: "Forward Kinematics",
      date: "March, 2025",
      desc: "Analyzed forward kinematics by commanding straight, curved, and circular trajectories, plotting theoretical, calculated, and observed paths to evaluate model discrepancies and parameter effects.",
      link: "https://github.com/kaimartell/ME134_Advanced_Robotics/tree/main/Labs/lab%203%20-%20forward%20kinematics",
      img: "/fk.png",
      takeaways: [
        "Model vs. Reality: Compared theoretical trajectories with observed paths to highlight real‑world factors (e.g. wheel slip, calibration error) that pure kinematic equations can’t capture.",
        "Parameter Sensitivity: Discovered how small changes in physical parameters (like wheel track) dramatically affect predicted motion, underscoring the need for accurate measurements."
      ],
    },
    {
      title: "Kalman Filter",
      date: "April, 2025",
      desc: "Developed and tuned a Kalman Filter fusing encoder and gyroscope data for recursive pose estimation, comparing estimates against ground truth across high-speed turns and straight motions.",
      link: "https://github.com/kaimartell/ME134_Advanced_Robotics/tree/main/Labs/lab%204%20-%20kalman%20filter",
      img: "/kalman.png",
      takeaways: [
        "Sensor Fusion Power: Saw firsthand how blending encoder and gyro data in a recursive estimator yields smoother, more reliable pose estimates than either sensor alone.",
        "Covariance Tuning Tradeoff: Learned to adjust process and measurement covariances (Q & R) to balance trust between the motion model and noisy observations."
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Advanced Robotics – My Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative -top-20 min-h-screen bg-gray-900 text-white pt-8 pb-16 px-4">
        {/* Page Header with Background */}
        <header className="relative top-20 max-w-8xl mx-auto mb-12 h-[500] -mt-8">
          <Image
            src="/XRP.png"
            alt="Robotics Background"
            width={1920}
            height={500}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex flex-col justify-center p-8">
            <h1 className="text-5xl font-bold mb-4">Advanced Robotics with XRP</h1>
            <p className="text-gray-300 text-lg">
              Semester‑long labs and final project programming Tufts’ XRP platforms.
            </p>
          </div>
        </header>

        {/* Brief course description */}
        <section className="relative top-20 max-w-4xl mx-auto mb-8">
          <p className="text-gray-300 mb-4">
            This advanced robotics course focused on programming XRP platforms and and implementing theory into actual code.
            There were four main lab activities, each building on the last to develop a deeper understanding of robotics concepts such as PID control, state machines, forward kinematics, and Kalman filtering.
            For the final project, my group designed a relay race for the XRPs.
          </p>
          <p className="text-gray-300">
            See a brief description for each below, and access the source code through the github links.
          </p>
        </section>

        {/* Labs Accordion */}
        <section className="relative top-20 max-w-6xl mx-auto mb-16 space-y-2">
          <h2 className="text-3xl font-semibold mb-4">Labs Overview</h2>
          {labs.map((lab) => (
            <Disclosure key={lab.title} as="div" className="bg-gray-800 rounded-lg">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex flex-wrap justify-between w-full p-4">
                    <div>
                      <h3 className="text-xl font-medium">{lab.title}</h3>
                      <p className="text-gray-400 text-sm m-0">{lab.date}</p>
                    </div>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-6 h-6 text-gray-300`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="p-4 border-t border-gray-700">
                    <div className="md:flex md:space-x-6">
                      {lab.img && (
                        <div className="md:w-1/4 mb-4 md:mb-0">
                          <Image
                            src={lab.img}
                            alt={`${lab.title} thumbnail`}
                            width={400}
                            height={225}
                            className="rounded"
                          />
                        </div>
                      )}
                      <div className="md:flex-1 text-gray-300">
                        <p className="mb-2">{lab.desc}</p>
                        <ul className="list-disc list-inside mb-2">
                          {lab.takeaways.map((point, idx) => (
                            <li key={idx}>{point}</li>
                          ))}
                        </ul>
                        <Link href={lab.link}
                          
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:underline"
                        >  
                            View code ↗
                        
                        </Link>
                      </div>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </section>

        {/* Final Project */}
        <section className="relative top-20 max-w-6xl mx-auto bg-gray-800 rounded-lg p-6 mb-16">
          <h2 className="text-3xl font-semibold mb-4">Final Project: XRP Relay</h2>
          <div className="md:flex md:space-x-6">
            <div className="md:w-1/3 mb-4 md:mb-0">
              <Image
                src="/xrprelay.png"
                alt="XRP Relay Demo"
                width={400}
                height={225}
                className="rounded"
              />
            </div>
            <div className="md:flex-1 text-gray-300">
              <p className="mb-4">
                Utilized the line sensor, a smart HuskyLens camera, and wireless communication to relay multiple XRPs around a track.
              </p>
              <ul className="list-disc list-inside mb-4">
                <li>Controlled movement of XRP with bang-bang and PID controllers</li>
                <li>Used camera with AprilTag detection to identify checkpoints and detect fellow XRPs</li>
                <li>Communicated wirelessly with the user and between XRPs using MQTT functionality</li>
              </ul>
              <Link
                href="https://github.com/kaimartell/ME134_Advanced_Robotics/tree/main/final-project"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                View code ↗
              </Link>
            </div>
          </div>
        </section>

        {/* Back Link */}
        <div className="relative top-20 max-w-5xl mx-auto">
            <Link href="/" className="text-blue-400 hover:underline">
                ← Back to Home
            </Link>
        </div>
      </main>
    </>
  );
}
