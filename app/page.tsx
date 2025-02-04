import Head from 'next/head';
import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white relative">
        {/* Sticky Navigation Bar */}
        <header className="fixed top-0 left-0 w-full z-50 bg-gray-900 bg-opacity-80 backdrop-blur-md">
          <nav className="container mx-auto flex justify-between items-center p-4">
            <div className="text-2xl font-bold">
              My Portfolio
            </div>
            <ul className="flex space-x-6">
              <li>
                <a href="#about" className="font-bold hover:text-pink-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="font-bold hover:text-orange-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#coursework" className="font-bold hover:text-purple-400 transition-colors">
                  Coursework
                </a>
              </li>
              <li>
                <a href="#contact" className="font-bold hover:text-green-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>

        {/* Main Content */}
        <div className="relative z-10 pt-20">
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
              <Link href="/Kai Martell Resume.pdf" legacyBehavior>
                <a className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-3 rounded transition-colors max-w-xs mx-auto">
                  View My Resume
                </a>
              </Link>
            </div>

            {/* Responsive, Enlarged Profile Picture */}
            <div className="relative z-10 md:w-1/2 mt-8 md:mt-0 flex justify-center">
                <div className="relative w-full max-w-lg rounded-lg overflow-hidden shadow-lg md:transform md:-translate-x-20">
                {/* The container below uses an aspect ratio to keep the image responsive */}
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
            <h2 className="text-3xl font-semibold text-center mb-10">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((id) => (
                <Link key={id} href={`/projects/project-${id}`} legacyBehavior>
                  <a className="bg-gray-800 p-6 rounded-2xl shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300">
                    {/* Thumbnail Image */}
                    <div className="relative w-full h-48 mb-4">
                      <Image
                        src={`/projects/project-${id}.jpeg`}
                        layout="fill"
                        objectFit="cover"
                        alt={`Project ${id} Thumbnail`}
                        className="rounded-md"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Project {id}</h3>
                    <p className="text-gray-400">
                      A brief description of project {id}. Learn more about its innovative solutions and technical details.
                    </p>
                  </a>
                </Link>
              ))}
            </div>
          </section>

          {/* Coursework Portfolio Section */}
          <section id="coursework" className="py-20 px-4">
            <h2 className="text-3xl font-semibold text-center mb-10">Coursework Portfolio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4].map((id) => (
                <Link key={id} href={`/coursework/coursework-${id}`} legacyBehavior>
                  <a className="bg-gray-800 p-4 rounded-2xl shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300">
                    {/* Thumbnail Image */}
                    <div className="relative w-full h-32 mb-4">
                      <Image
                        src={`/coursework/coursework-${id}.jpeg`}
                        layout="fill"
                        objectFit="cover"
                        alt={`Coursework ${id} Thumbnail`}
                        className="rounded-md"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Coursework {id}</h3>
                    <p className="text-gray-400 text-sm">
                      A brief description of coursework {id}.
                    </p>
                  </a>
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
      </main>
    </>
  );
}
