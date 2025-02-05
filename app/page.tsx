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
      {/* 
        The container below cancels out the global top padding (pt-20) from the layout 
        while applying the original background gradient and text color.
      */}
      <div className="-mt-20 min-h-screen bg-gradient-to-br from-gray-900 to-black text-white relative">
        {/* About Section */}
        <section
          id="about"
          className="relative flex flex-col md:flex-row items-center justify-center min-h-screen px-4"
        >
          {/* Background Image (only for About Section) */}
          <div className="absolute inset-0">
            <Image
              src="/background.jpeg"
              layout="fill"
              objectFit="cover"
              alt="Background"
              className="opacity-40"
            />
          </div>

          {/* Bio Text Content */}
          <div className="relative z-10 md:w-1/2 text-center flex flex-col justify-center">
            <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-orange-400 to-green-400">
              Hi, I&apos;m Kai!
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              Something something something
            </p>
            <Link
              href="/Kai Martell Resume.pdf"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-3 rounded transition-colors max-w-xs mx-auto"
            >
              View My Resume
            </Link>
          </div>

          {/* Responsive, Enlarged Profile Picture */}
          <div className="relative z-10 md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <div className="relative w-full max-w-lg rounded-lg overflow-hidden shadow-lg md:transform md:-translate-x-20">
              {/* Use an aspect ratio container for responsiveness */}
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
            {[1, 2, 3].map((id) => (
              <Link
                key={id}
                href={id === 1 ? "/projects/topo-maps" : `/projects/project-${id}`}
                className="bg-gray-800 p-6 rounded-2xl shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300"
              >
                {/* Thumbnail Image */}
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src={
                      id === 1
                        ? "/topo-thumbnail.jpeg"
                        : `/projects/project-${id}.jpeg`
                    }
                    layout="fill"
                    objectFit="cover"
                    alt={
                      id === 1
                        ? "Topographical Maps Thumbnail"
                        : `Project ${id} Thumbnail`
                    }
                    className="rounded-md"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {id === 1 ? "Topographical Maps" : `Project ${id}`}
                </h3>
                <p className="text-gray-400">
                  {id === 1
                    ? "Explore my topographical maps project."
                    : `A brief description of project ${id}. 
                      Learn more about its innovative solutions and technical details.`}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Contact / Socials Section */}
        <section id="contact" className="py-20 px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">Connect with Me</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/kai-martell-b27858188/"
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
