import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function ME35Portfolio() {
  // Example array of 6 projects
  const projects = [
    {
      id: 1,
      title: "Lighthouse Nightlight",
      image: "/lighthouse.jpeg",
      width: 600,    // approximate dimensions
      height: 800,
      notionLink: "https://ember-walleye-c49.notion.site/Proj-1-Cont-Lighthouse-Nightlight-51b83c953cfc414d90a7d5d2e80ef86d?pvs=74",
      description:
        "An interactive nightlight that uses an accelerometer for tap control, and MQTT functionality for remote operation.",
    },
    {
      id: 2,
      title: "Zombie Tag",
      image: "/me35-pvz.jpeg",
      width: 600,
      height: 800,
      notionLink: "https://ember-walleye-c49.notion.site/Zombie-Tag-4e51919f09a64d558a3b782293c37415?pvs=74",
      description:
        "A multiplayer game using bluetooth to detect tags from other players, with a Plants Vs. Zombies themed figure.",
    },
    {
      id: 3,
      title: "Jeep",
      image: "/me35-background.jpeg",
      width: 1920,
      height: 1080,
      notionLink: "https://ember-walleye-c49.notion.site/Jeep-113e7595b6cd80b0acb7deb19e4482d5?pvs=74",
      description:
        "A remote-controlled Jeep with a rack and pinion steering system, complete with a steering wheel that uses OpenMV camera and AprilTags. A pyscript control page to complement the hardware. With Cory Lemberg, see corylemberg.com",
    },
    {
      id: 4,
      title: "Modified Jeep",
      image: "/waymo.jpeg",
      width:1920,
      height:1080,
      notionLink: "https://ember-walleye-c49.notion.site/Smart-Driving-11ae7595b6cd80b19bb5d18b3be66951?pvs=74",
      description:
        "The Jeep with an OpenMV camera and PID controlling to follow an AprilTag.",
    },
    {
      id: 5,
      title: "Music Sampling Pad",
      image: "/music-pad.jpeg",
      width:1920,
      height:1080,
      notionLink: "https://ember-walleye-c49.notion.site/I-am-Fred-Again-122e7595b6cd80148abfdbe3a7ba0075?pvs=74",
      description:
        "A music pad that uses capacitive touch sensors, silicone pad buttons, and filters to sample and play sounds.",
    },
    {
      id: 6,
      title: "Marble Track",
      image: "/marble-track.jpeg",
      width:600,
      height:800,
      notionLink: "https://ember-walleye-c49.notion.site/Final-Project-159e7595b6cd80339368d697e9c55016?pvs=74",
      description:
        "An interactive marble track that requires puzzle completions to clear the track. Designed for a children’s playground game.",
    },
  ];

  return (
    <>
      <Head>
        <title>ME35 Robotics Portfolio - My Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* 
        Updated background to a subtle gradient.
        Text color remains white by default.
      */}
      <main className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-black text-white">
        <div className="-mt-20">
          {/* Title / Hero Image */}
          <div className="w-full relative overflow-hidden">
            <Image
              src="/me35-background.jpeg"
              alt="ME35 Robotics Class Hero"
              layout="responsive"
              width={1920}
              height={1080}
              objectFit="cover"
            />
            {/* Optional overlay color effect */}
            <div className="absolute inset-0 bg-black bg-opacity-40" />
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="max-w-5xl mx-auto">
              {/* 
                Main Title with gradient text
                - use text-transparent & bg-clip-text for gradient text
              */}
              <h1 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-500">
                ME35 Robotics Portfolio
              </h1>

              <p className="mb-10 text-gray-300">
                Welcome to my ME35 Robotics class portfolio! This course was all about
                hands-on exploration of mechanical and electrical systems, creative
                prototyping, and bringing robots to life. Below you’ll find the projects
                I've created for this class, along with links to more detailed documentation
                on Notion.
              </p>

              {/* Alternating Projects Layout */}
              {projects.map((project, index) => {
                const isReversed = index % 2 === 1;
                return (
                  <div
                    key={project.id}
                    className={`flex flex-col md:flex-row ${
                      isReversed ? "md:flex-row-reverse" : ""
                    } items-center gap-6 mb-20`}
                  >
                    {/* 
                      Project Image Container with hover effects: 
                      scale, shadow, ring glow.
                    */}
                    <div className="relative w-full md:w-1/2 md:max-w-md rounded-lg overflow-hidden mx-auto transition transform hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-indigo-500 hover:ring-offset-2 hover:ring-offset-gray-900">
                      <Image
                        src={project.image}
                        alt={project.title}
                        layout="responsive"
                        width={project.width}
                        height={project.height}
                        objectFit="contain"
                      />
                    </div>

                    {/* Project Description */}
                    <div className="md:w-1/2 flex flex-col justify-center">
                      <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-gray-300 mb-4">{project.description}</p>
                      <Link
                        href={project.notionLink}
                        className="inline-block mt-2 text-blue-400 hover:text-blue-300 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read More on Notion →
                      </Link>
                    </div>
                  </div>
                );
              })}

              {/* Next Steps */}
              <section className="mb-12">
                {/* Subtle color shift for heading */}
                <h2 className="text-3xl font-bold mb-3 text-indigo-200 hover:text-indigo-100 transition-colors">
                  Next Steps
                </h2>
                <p className="text-gray-300">
                  Update later
                </p>
              </section>

              <Link href="/" className="text-blue-400 hover:underline">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
