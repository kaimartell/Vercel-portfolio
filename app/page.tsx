import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-8 relative">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full opacity-20">
        <Image 
          src="/background.jpeg" 
          layout="fill" 
          objectFit="cover"  
          alt="Background" 
        />
      </div>

      {/* Intro Section */}
      <section className="flex items-center justify-center py-20 relative z-10">
        <div className="w-full md:w-2/3 lg:w-1/2 text-center">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
        Welcome to My Portfolio
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Hi, I&apos;m [Your Name], a [Your Profession]. I love building cool things with technology.
          </p>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/4">
          <Image src="/profile.jpeg" width={1000} height={1250} className="rounded-lg mx-auto mb-6" alt="Profile" />
        </div>
      </section>



      {/* Projects Section */}
      <section className="py-20 relative z-10">
        <h2 className="text-3xl font-semibold text-center mb-10">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((id) => (
            <Link key={id} href={`/projects/project-${id}`}>
              <div className="bg-gray-800 p-6 rounded-2xl shadow-lg cursor-pointer hover:scale-105 transition-transform">
                <h3 className="text-xl font-semibold">Project {id}</h3>
                <p className="text-gray-400 mt-2">A brief description of the project.</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Social Section */}
      <section className="py-20 text-center relative z-10">
        <h2 className="text-3xl font-semibold mb-6">Connect with Me</h2>
        <div className="flex justify-center space-x-6">
          <a href="https://linkedin.com" target="_blank" className="text-blue-400 hover:underline">LinkedIn</a>
          <a href="https://github.com" target="_blank" className="text-gray-400 hover:underline">GitHub</a>
          <a href="mailto:your@email.com" className="text-red-400 hover:underline">Email</a>
          <a href="/resume.pdf" className="text-green-400 hover:underline">Resume</a>
        </div>
      </section>
    </main>
  );
}

