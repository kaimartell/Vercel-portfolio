import Head from "next/head";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Matchbox Car Launcher",
    mainImage: "/launcher.jpeg",
    subtitle: "'The BME is whooping your asses' - Brandon",
    date: "January 2025",
    description: `
      In this project, I built a launcher for mtchbox cars. The goal was to create a mechanism that could launch a matchbox car up an 8 inch ramp using the energy generated from rubber bands. 
      
      For my first prototype, I had a bare bones design that was able to launch the car up the ramp. However, I realized that to make the car rocket, a few items needed adjustment: 
        - The posts needed reinforcement to handle the pull of the rubber bands
        - The launch box needed to be lighter so energy distribution was more efficient
        - The track needed to be smoother to reduce friction
        - The release mechanism needed both a handle and a better swivel point

      My second prototype addressed these issues and was able to launch the car up the ramp with more force and accuracy. I made the launch box as compact as possible, the posts were reinforced by slotting them through the entire rig, and the release mechanism was very simple and quick. 
      The track still had a bit of friction, I doubled up on rubber bands (4 total) and increased the launch length which was more than enough to overcome the sliding friction. 
    `,
    
    technologies: ["Onshape", "Adobe Illustrator", "Laser Cutting"],
    materials: ["3mm Plywood", "4x Rubber Bands", "2x Ball Bearings", 
                "1x 1/8 inch Wooden Dowel", "2x Bolt", "3x Nuts", "2x Washer", 
                "Superglue", "Loc Tite", "Hot Glue"],
    skills: ["CAD Design", "Laser Cut Assembly"],
    challenges: `
      Managing the force created on the posts when the rubber bands are drawn
      Reducing friction of the launch box as it moves along the track
    `,
    moreImages: [
      "/launcher v1.1.jpeg",
      "/launcher v1.2.jpeg",
      "/launcher v2.1.jpeg",
      "/launcher v2.2.jpeg",
      
    ],

    imageCaptions: [
        "First Launcher Prototype - Side View",
        "First Launcher Prototype - Rear View",
        "Second Launcher Prototype",
        "Second Launcher Prototype"
    ]
  },
  {
    id: 2,
    title: "Chair",
    mainImage: "/chair.jpeg",
    date: "January 2025",
    description: `
      In this project, I built a chair from scratch. My goal for the chair was to create something minimalistic and sturdy, while incorporating an interesting angle. 
      To start, I designed the chair in Onshape, making sure to account for the angles and dimensions of the chair. I used the planar to smooth all pieces, and cut using the miter saw, the table saw, and the band saw.  Many of the joints were made using a dowel jig with dowels and wood glue to reinforce. 
    ` 
    ,
    technologies: ["Onshape/Solidworks", "Table Saw", "Miter Saw", "Biscuit Joiner", "Planar", "Band Saw", "Dowel Jig"],
    materials: ["2x 8ft. 2x4", "1x 15x15 plywood", "1x 8ft. 2x2", "Dowel Rods", "Wood Glue", "Screws"],
    skills: ["Wood Working", "CAD Design", "Joinery"],
    challenges: `
      The biggest challenge was the joinery. One of my project goals was to conceal all screws and dowels as much as possible. I used the dowel jig to join multiple pieces together, lots of wood glue, and learned how to create a pocket screw hole for angled, hidden joints.

    `,
    moreImages: [
      "/chair-proto.jpeg",
      "/chair-me.jpeg"
    ],

    imageCaptions: [
      "Chair prototype - clamping while gluing",
      "Me sitting in the chair"
    ]
  },
  {
    id: 3,
    title: "Lamp",
    mainImage: "/lamp.jpeg",
    date: "February 2025",
    description: `
      In this project, I built a sheet metal lamp inspired by a minecraft lantern. This was the first exposure I've had working with sheet metal, a much different medium to design with compared to wood and plastics.
      
      I started by creating a CAD model of the lamp, making sure to account for the bends and dimensions of the metal. Since material was limited, I designed the lamp with 4 bent metal posts capped off with a lid and a bottom. The metal pieces were riveted together at the top, and bolted down using bolts and clinch nuts at the bottom so that it could be removed and the lightbulb could be accessed.
     
      The windows are made from acrylic, which I frosted and cut in rectangular shapes in true Minecraft fashion, and they are attached to the metal frame with superglue and tape.

      Coincidentally, Amazon was having a sale on smart bulbs ($0.99 for a color changing RGB bulb) so of course I picked one up and installed it just for fun. It's neat that I can now control the hue, warmth, color, and intensity of the light. I also set it up so it turns on at sunset, just a fun addition to the lamp. 
      `
    ,
    technologies: ["Onshape/Solidworks", "Sheet Metal", "Laser Cutting", "Water Jetting", "Jump Shear", "Metal Bending"],
    materials: ["1x lightbulb socket with switch", "1x lightbulb", "1x 12x12 sheet of 5052-H32 aluminum, 0.032 in. thick", "1x 12x12 sheet of A1008 steel, 0.030 in. thick", "1x 12x24 sheet of transparent yellow acrylic", "1x 12x24 sheet of transparent orange acrylic", "1x 12x24 sheet of clear acrylic", "8x rivets", "4x #6-32 clinch nuts", "4x #6-32 phillips head bolts", "Tape", "Superglue", "PLA filament"],
    skills: ["CAD Design", "Laser Cut Assembly", "Metal Bending"],
    challenges: `
      There were a few challenges to this project, namely 
        - The metal bending was difficult to get right, and I had to redo a few pieces
        - Getting the rivets in the right spot was difficult, they aren't aligned perfectly since I was trying to hole punch with too many moving parts. I wish I had drawn out all of my cuts, aligned, and hole punched before I bent all of the pieces around. 
        - I used superglue for both piecing the windows together and attaching them to the frame, this created glue smudges and also wasn't the best adhesive for the job.
    `,
    moreImages: [
      "/inspo3.jpeg",
      "/lamplasercut.jpeg",
      "/lampframe.jpeg",
      "/lamp2.jpeg",
      "/lamp3.jpeg",
      "/lamp.gif"
    ],
    imageCaptions: [
      "Inspiration for the lamp",
      "A quick laser cut model to feel out scale and dimensions",
      "The frame pieces cut out and assembled with tape",
      "The first window, assembled",
      "Cleaned up window design, duplicated, and assembled with tape",
      "Smart bulb demonstration"
    ]
  }
  // More projects coming soon
];

export default function MyNewCoursePortfolio() {
  return (
    <>
      <Head>
        <title>ME93 - Design for Fabrication</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gray-900 text-white">
        <div className="-mt-20">
          <div className="w-full relative">
            <Image
              src="/dff-background.jpeg"
              alt="DFF Background"
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
              <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 leading-tight">
                ME93 - Design for Fabrication
              </h1>
              <p className="text-gray-300 mb-10">
                In this ongoing course, I’m working on a variety of projects that combine
                creative design, technical skills, and hands-on problem solving. Below is an
                overview of each project.
              </p>

              {/* Render like cards */}
              {projects.map((proj) => (
                <div
                  key={proj.id}
                  className="mb-12 bg-gray-800 rounded-lg shadow-lg overflow-hidden"
                >
                <div className="relative w-full" style={{ paddingBottom: '100%' }}>
                    <Image
                        src={proj.mainImage}
                        alt={`${proj.title} - Main`}
                        layout="fill"
                        objectFit="cover"
                    />
                </div>

                {/* Project Content */}
                  <div className="p-6 space-y-6">
                    <h2 className="text-3xl font-semibold">
                      {proj.title}
                    </h2>

                    <h3 className="text-xl font-small text-gray-400 italic">
                        {proj.subtitle}
                    </h3>

                    <p className="text-gray-300">
                      {proj.date}
                    </p>

                    <p className="text-gray-300 whitespace-pre-line">
                      {proj.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
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

                    <div>
                      <h3 className="text-xl font-semibold text-red-300 mb-2">
                        Challenges
                      </h3>
                      <p className="text-gray-300 whitespace-pre-line">
                        {proj.challenges}
                      </p>
                    </div>

                    {proj.moreImages && proj.moreImages.length > 0 && (
                    <div>
                        <h3 className="text-xl font-semibold text-yellow-300 mb-3">
                        More Pictures
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {proj.moreImages.map((img, i) => (
                            <div key={i} className="relative w-full h-auto bg-gray-700 rounded-md overflow-hidden">
                            <Image
                                src={img}
                                alt={`${proj.title} - Extra ${i + 1}`}
                                layout="responsive"
                                width={500}
                                height={300}
                                objectFit="contain"
                            />
                            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center p-2">
                                {proj.imageCaptions[i]}
                            </div>
                            </div>
                        ))}
                        </div>
                    </div>
                    )}
                </div>
                </div>
            ))}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-3 text-green-300">
                  Stay Tuned for More!
                </h2>
                <p className="text-gray-300">
                  I’ll keep this page updated with future projects as I progress through
                  the course. Check back regularly to see what’s new, or reach out if you’d
                  like to chat about my work.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
