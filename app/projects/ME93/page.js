import Head from "next/head";
import Image from "next/image";

// Sample project data with more fields:
const projects = [
  {
    id: 1,
    title: "Project One",
    mainImage: "/course-project1-main.jpeg",
    description: `
      This is where a brief overview of the project goes. 
      Summarize what you built, why you built it, and any 
      interesting context or quick highlights here.
    `,
    technologies: ["React", "TailwindCSS", "Node.js"],
    materials: ["3D Printer", "Laser Cutter", "Plywood"],
    skills: ["CAD Design", "Programming", "Rapid Prototyping"],
    challenges: `
      Mention the biggest hurdles or tricky bits here. 
      Maybe the design wouldn't align, or code bugs gave you trouble.
    `,
    moreImages: [
      "/course-project1-extra1.jpeg",
      "/course-project1-extra2.jpeg",
      // Add more if needed
    ],
  },
  {
    id: 2,
    title: "Project Two",
    mainImage: "/course-project2-main.jpeg",
    description: `
      This project took a different direction. We explored 
      user interaction in a creative way...
    `,
    technologies: ["Arduino", "C++", "Sensors"],
    materials: ["Resin Printer", "Foam Core", "LED Strip"],
    skills: ["Circuit Design", "Firmware", "User Testing"],
    challenges: `
      Here, we had trouble with sensor calibration and ensuring 
      the user interface was intuitive. 
    `,
    moreImages: [
      "/course-project2-extra1.jpeg",
      "/course-project2-extra2.jpeg",
    ],
  },
  // Add more projects...
];

export default function MyNewCoursePortfolio() {
  return (
    <>
      <Head>
        <title>My New Course Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gray-900 text-white">
        {/* If you have a fixed navbar with top padding globally, consider -mt-20 here */}
        <div className="-mt-20">
          {/* Hero / Title Image (Optional) */}
          <div className="w-full relative">
            <Image
              src="/course-hero.jpeg"
              alt="Course Hero Image"
              layout="responsive"
              width={1920}
              height={1080}
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" />
          </div>

          {/* Page Content */}
          <div className="p-8">
            <div className="max-w-5xl mx-auto">
              {/* Page Heading */}
              <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                My New Coursework Portfolio
              </h1>
              <p className="text-gray-300 mb-12">
                In this ongoing course, I’m working on a variety of projects that combine
                creative design, technical skills, and hands-on problem solving. Below is an
                overview of each project, all documented on a single page.
              </p>

              {/* Render each project in its own card-like section */}
              {projects.map((proj) => (
                <div
                  key={proj.id}
                  className="mb-12 bg-gray-800 rounded-lg shadow-lg overflow-hidden"
                >
                  {/* Main Image */}
                  <div className="relative w-full h-64 sm:h-80 md:h-96">
                    <Image
                      src={proj.mainImage}
                      alt={`${proj.title} - Main`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>

                  {/* Project Content */}
                  <div className="p-6 space-y-6">
                    {/* Title */}
                    <h2 className="text-3xl font-semibold">
                      {proj.title}
                    </h2>

                    {/* Description */}
                    <p className="text-gray-300 whitespace-pre-line">
                      {proj.description}
                    </p>

                    {/* Technologies / Materials / Skills */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {/* Technologies */}
                      <div>
                        <h3 className="text-xl font-semibold text-purple-300 mb-2">
                          Technologies
                        </h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-1">
                          {proj.technologies.map((tech, i) => (
                            <li key={i}>{tech}</li>
                          ))}
                        </ul>
                      </div>
                      {/* Materials */}
                      <div>
                        <h3 className="text-xl font-semibold text-blue-300 mb-2">
                          Materials
                        </h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-1">
                          {proj.materials.map((mat, i) => (
                            <li key={i}>{mat}</li>
                          ))}
                        </ul>
                      </div>
                      {/* Skills */}
                      <div>
                        <h3 className="text-xl font-semibold text-green-300 mb-2">
                          Skills
                        </h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-1">
                          {proj.skills.map((skill, i) => (
                            <li key={i}>{skill}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Challenges */}
                    <div>
                      <h3 className="text-xl font-semibold text-red-300 mb-2">
                        Challenges
                      </h3>
                      <p className="text-gray-300 whitespace-pre-line">
                        {proj.challenges}
                      </p>
                    </div>

                    {/* More Pictures */}
                    {proj.moreImages && proj.moreImages.length > 0 && (
                      <div>
                        <h3 className="text-xl font-semibold text-yellow-300 mb-3">
                          More Pictures
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          {proj.moreImages.map((img, i) => (
                            <div key={i} className="relative w-full h-40 bg-gray-700 rounded-md overflow-hidden">
                              <Image
                                src={img}
                                alt={`${proj.title} - Extra ${i + 1}`}
                                layout="fill"
                                objectFit="cover"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Concluding Section */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-3 text-green-300">
                  Stay Tuned for More!
                </h2>
                <p className="text-gray-300">
                  I’ll keep this page updated with future projects as I progress through
                  the course. Check back regularly to see what’s new, or reach out if you’d
                  like to chat about my work. Thanks for following along!
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
