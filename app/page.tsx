import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kai Martell</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="-mt-20 min-h-screen bg-gradient-to-br from-gray-900 to-black text-white relative">
        {/* About Section */}
        <section
          id="about"
          className="relative flex flex-col md:flex-row items-center justify-center min-h-screen px-4"
        >
          {/* Background Image*/}
          <div className="absolute inset-0">
            <Image
              src="/background1.jpeg"
              layout="fill"
              objectFit="cover"
              alt="Background"
              className="opacity-40"
            />
          </div>

          {/* Bio Text */}
          <div className="relative z-10 md:w-1/2 text-center flex flex-col justify-center">
            <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-orange-400 to-green-400">
              Hi, I&apos;m Kai!
            </h1>
            <p className="text-lg text-gray-300 mb-1">
              I'm a recent graduate of Tufts University with a degree in Biomedical Engineering.
            </p>
            <p className="text-lg text-gray-300 mb-1">
              I'm passionate about building instruments and creating new 
            </p>
            <p className="text-lg text-gray-300 mb-6">
              technologies to apply to the medical field.
            </p>
            <p className="text-lg text-gray-300 mb-6">
            See some of my work below!
            </p>
            <Link
              href="/Kai Martell Resume.pdf"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-3 rounded transition-colors max-w-xs mx-auto"
            >
              View My Resume
            </Link>
          </div>

          {/* Profile Picture */}
          <div className="relative z-10 md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <div className="relative w-full max-w-lg rounded-lg overflow-hidden shadow-lg md:transform md:-translate-x-20">
              <div className="relative aspect-[3/4]">
                <Image
                  src="/profile.jpeg"
                  layout="fill"
                  objectFit="cover"
                  alt="Profile Picture"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4">
          <h2 className="text-3xl font-semibold text-center mb-10">Projects & Coursework</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6, 7].map((id) => (
              <Link
                key={id}
                href={id === 6 ? "/projects/topo-maps" 
                    : id === 3 ? "/projects/ME35"
                    : id === 1 ? "/projects/ME93"
                    : id === 4 ? "/projects/BME66"
                    : id === 2 ? "/projects/BME9"
                    : id === 5 ? "projects/ME134"
                    : id === 7 ? "/projects/this-website"
                    : id === 10 ? "/projects/segment-hunter"
                    : `/projects/project-${id}`}
                className="bg-gray-800 p-6 rounded-2xl shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300"
              >
                <div className="relative w-full h-80 mb-4">
                  <Image
                    src={
                        id === 1
                          ? "/dff-background.jpeg"
                          : id === 2
                          ? "/bme9-banner.JPG"
                          : id === 3
                          ? "/me35-thumbnail.jpeg"
                          : id === 4
                          ? "/bme66-thumbnail.jpeg"
                          : id === 5
                          ? "/XRP.png"
                          : id === 6
                          ? "/topo-thumbnail.jpeg"
                          : id === 7
                          ? "/website-thumbnail.jpeg"
                          : id === 10
                          ? "/segment-hunter-thumbnail.jpeg"
                          : `/projects/project-${id}.jpeg`
                    }
                    layout="fill"
                    objectFit="cover"
                    alt={
                      id === 6
                        ? "Topographical Maps Thumbnail"
                        : id === 3
                        ? "ME35 Thumbnail"
                        : id === 1
                        ? "ME93 Thumbnail"
                        : id === 4
                        ? "BME66 Thumbnail"
                        : id === 2
                        ? "BME9 Thumbnail"
                        : id === 5
                        ? "ME134 Thumbnail"
                        : id === 7
                        ? "This Website Thumbnail"
                        : id === 10
                        ? "Segment Hunter Thumbnail"
                        : `Project ${id} Thumbnail`
                    }
                    className="rounded-md"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {id === 6 ? "Topographical Maps" 
                  : id === 3 ? "ME35 - Intro to Robotics"
                  : id === 1 ? "ME93 - Design for Fabrication"
                  : id === 4 ? "BME66 - Engineering Design"
                  : id === 2 ? "BME 9 - Senior Capstone Design"
                  : id === 5 ? "ME134 - Advanced Robotics"
                  : id === 7 ? "This Website"
                  : id === 10 ? "Segment Hunter"
                  : `Project ${id}`}
                </h3>
                <p className="text-gray-400">
                  {id === 6
                    ? "Explore my topographical maps project"
                    : id === 3
                    ? "Learn about my ME35 coursework"
                    : id === 1
                    ? "Classwork around purely mechanical design"
                    : id === 4
                    ? "Designing a product for hand warmth"
                    : id === 2
                    ? "Liver Portal Vein Cannula Developement"
                    : id === 5
                    ? "Advanced robotics work with XRP Robots"
                    : id === 7
                    ? "A brief overview of the creation of this website"
                    : id === 10
                    ? "A tool for Strava users to find segments"
                    : `A brief description of project ${id}. 
                      Learn more about its innovative solutions and technical details.`}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">Connect with Me</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/kaimartell"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-blue-400 hover:text-blue-500 transition-colors"
            >
              <FaLinkedin size={24} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/kaimartell"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-400 hover:text-gray-500 transition-colors"
            >
              <FaGithub size={24} />
              <span>GitHub</span>
            </a>
            <a
              href="mailto:martell.kai@gmail.com"
              className="flex items-center space-x-2 text-red-400 hover:text-red-500 transition-colors"
            >
              <FaEnvelope size={24} />
              <span>Email</span>
            </a>
            <a
              href="tel:+14157154856"
              className="flex items-center space-x-2 text-green-400 hover:text-green-500 transition-colors"
            >
              <FaPhone size={24} />
              <span>+1 (415) 715-4856</span>
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
