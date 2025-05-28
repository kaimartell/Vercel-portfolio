import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Matchbox Car Launcher",
    mainImage: "/launcher.jpeg",
    subtitle: "'The BME is whooping your butts' - Brandon",
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
    { src: "/launcher v1.1.jpeg", isLandscape: false, type: "image" },
    { src: "/launcher v1.2.jpeg", isLandscape: false, type: "image" },
    { src: "/launcher v2.1.jpeg", isLandscape: false, type: "image" },
    { src: "/launcher v2.2.jpeg", isLandscape: false, type: "image" }
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
      { src: "/chair-proto.jpeg", isLandscape: false, type: "image" },
      { src: "/chair-me.jpeg", isLandscape: false, type: "image" }
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
      { src: "/inspo3.jpeg", isLandscape: false, type: "image" },
      { src: "/lamplasercut.jpeg", isLandscape: false, type: "image" },
      { src: "/lampframe.jpeg", isLandscape: false, type: "image" },
      { src: "/lamp2.jpeg", isLandscape: false, type: "image" },
      { src: "/lamp3.jpeg", isLandscape: false, type: "image" },
      { src: "https://youtube.com/embed/TNHR8792aew", isLandscape: false, type: "youtube" }
    ],

    imageCaptions: [
      "Inspiration for the lamp",
      "A quick laser cut model to feel out scale and dimensions",
      "The frame pieces cut out and assembled with tape",
      "The first window, assembled",
      "Cleaned up window design, duplicated, and assembled with tape",
      "Smart bulb demonstration"
    ]
  },
  {
    id: 4,
    title: "Gravity Powered Record Player",
    mainImage: "/recordplayer1.jpeg",
    date: "March 2025",
    description: `
      The goal of this project was to use some sort of gravity powered mechanism to spin a record player. The record player had to spin a 7 inch record at 45rpm, for 4 and a half minutes. I wanted to create something that was both functional and aesthetically pleasing, while also being a fun challenge to build.
      
      There were a couple routes that I considered taking - a weight falling to spin an axel, some sort of perpetual motion machine, marbles falling down a track, or a water wheel, to name a few. I ended up going the water wheel route, I felt like it would be easy to adjust the speed of the water wheel by tweaking the volume of water and the distance the water is falling. 
      
      I started by designing the water wheel in Onshape to confirm a proof of concept. I laser cut the wheel out of acryllic for quick assembly, and verified that it could spin pretty quickly under a slow water stream from the sink. I created the chasis of the record player out of laser cut acryllic as well. 

      Because my record player is water powered, I decided to buy a cheap water pump on Amazon so I can have a constant flow of water. This seems anti gravity powered, but I implemented it in the name of water conservation. The pump dropped off water into a basin at the top, so the flow from the pump wasn't actually what was powering the wheel, it was purely there for preservation purposes. A big tank at the top would have had the same effect. 

      The chasis of the record player is comprised of this lower level water tank which has the pump, and the water fall area with the water wheel. The water wheel is attached to a drive shaft which runs through the box and is converted into vertical rotational movement with a 3D printed miter gear. 

      The needle and speaker components were a bit of an after thought, since it is hard to design and create a proper amplifier with the materials on hand. The arm of the needle is laser cut and mounted onto a swivel point so the needle can follow the grooves of the record. The vibrations are amplified through a paper cone, simply taped to the needle arm. The quality of the audio is admittedly quite terrible. 
      `,
    technologies: ["Onshape/Solidworks", "Laser Cutting", "3D Printing"],
    materials: ["3x 12x24 sheet of colored acryllic", "1x 200mm x 4mm metal rod", "2x 3D printed miter gears", "4x 8mm OD ball bearings", "1x PULACO Submersible Water Pump", "1x 3D printed needle arm stand", "1x bolt", "1x nut", "1x sheet of A24 paper", "Tape", "A ton of hot glue", "Silicone glue", "Needle", "7in record", "Water"],
    skills: ["CAD Design", "Laser Cut Assembly", "3D Printing", "Assembly"],
    challenges: `
      Assembly of the record player was the most difficult part of this project. I had to make sure that all of the elements of the drive shaft were aligned correctly before cementing them in place. The rods, holes, and bearings had to be perfectly centered in order for smooth rotation. 
      
      The water wheel was also a challenge, I had to make sure that the water was flowing at the right speed and angle to get the wheel to spin at the right speed. I also had to make sure that the water was flowing evenly across the wheel, otherwise it would spin unevenly and cause the record to skip.
    `,
    moreImages: [
      { src: "/topdown.jpeg", isLandscape: true, type: "image" },
      { src: "/waterwheel.jpeg", isLandscape: false, type: "image" },
      { src: "https://www.youtube.com/embed/-Qc_X85o3xg", isLandscape: false, type: "youtube" }
    ],
    imageCaptions: [
      "Top down view",
      "Water wheel mechanism"
      //"Record player demo"
    ]
  },
  {
    id: 5,
    title: "Big Wheel",
    mainImage: "/bigwheel1.jpeg",
    date: "April 2025",
    description: `
      The goal of this project was to create a human powered vehicle to be raced around the patio of our engineering building. The vehicle had to fit under the Archways of Despair, a pair of 32 inch wide and 45 inch tall arches. 
      
      The course begins on a downward slope, followed by a sharp left turn into a flat, curved section where the Archways of Despair are located. After passing through the arches, there is another sharp left turn into the final uphill section. To complete the race, the course must be lapped twice, and the vehicle must be able to make it up the hill without any assistance.
      
      I worked with Natalie Long and Geri Tabbachino on this project. Taking some inspiration from our childhood, we decided a big wheel would be the best option given the archway constraint. We began by modeling the big wheel in Solidworks and making a list of all the materials we would need. Considering the tools we had access to, and in aim of keeping our big wheel as light as possible, we decided to create the frame out of wood. 
      
      The frame was made mostly out of 1x3s and a sheet of plywood for the seat. For the big wheel up front, we used the 16 inch diameter wheel we were given, and we purchased a pair of 8 inch diameter wheels for the rear. The rear wheels were attached to a 1/2 inch steel rod with bearings. 
      
      The fork was made using 2x4s and a 1/2 inch steel rod as the stem. The fork was attached to the frame using bearings. The downtube and seat was stacked with wood and cut at precise angles so the screws holding the pieces together weren't taking on any shear force. 

      I took charge on creating the pedaling mechanism, which proved to be a great challenge because this portion of the bike had to be able to withstand high force while also being locked onto the wheel itself, and be able to rotate smoothly within the fork and where the pedals interface with the crank arms. I started by jamming wooden inserts into the existing divots of the wheel, and then I created a 100% infill 3D printed part that would fit fit through the center of the wheel. A 3/4 inch wooden dowel was pressfit through the 3D part and then screwed into place through the entire wheel hub. This created a very rigid through axel to connect the crank arms to.
      
      The crank arms were also made out of wood. The first few iterations were made out of 1x3s, however the wood was too soft and the arms snapped and bent under pressure. I ended up using two layers of 1/2 inch plywood, glued together with bearings to connect to the through axel. Finally, the pedals were made simply out of 1x3s and 8mm steel rod which also threaded through the crank arms. 
      
      This pedaling mechanism worked well in theory and in limited testing, however in practice, the materials we used were not strong enough to withstand the forces of pedaling, especially with the power needed to race and go up the hill.
      
      Similarly, the fork with the steel rod was not strong enough to withstand a ride. The rod bent under pressure, causing misalignment with the bearings and the wheel, causing issues in steering. To try and fix this, we added a secondary steel tube around the rod, cut to size, and a third PVC pipe, cut to size, around it all. This was in hopes of adding more rigidity around the stem and to keep the rod from bending too much.
      
      The was threaded and bolted into the frame, and since the wood was soft, the rod and nuts began to slip leading to unresponsive steering. This same issue was present in the handle bars, where the nuts clamping the handle bars in place dug into the wood and caused the handle bars to slip. To fix these steering issues, we drilled holes through the steel rod at both the fork and the handle bars, and used a bolt to clamp the rod in place. This worked well for both, however the hole we drilled and the bolt we used were not exactly the same size, causing a slight lag and wobble in the steering. Definitely suboptimal. 
      
      While our final product failed on the uphill part of the course, we were able to create a vehicle that could be pedaled and steered and could fit within the Arches of Despair. We were most proud of the fact that we did not use any existing bike components, like frame pieces, crank arms and pedals, cassettes and derailleurs - which seemed to be a unique attribute in comparison to other teams. I am proud of the vehicle we created, and I might add that it is aesthetically pleasing as well!
      `
      ,
    technologies: ["Onshape/Solidworks", "3D Printing"],
    materials: ["3x 8ft 1x3", "1x 48x48 sheet of plywood", "1x 16 inch wheel", "2x 8 inch wheels", "1x 6ft 1/2 inch steel rod", "1x 4ft 8mm steel rod", "1x 2ft 3/4 inch wooden dowel", "8x 8mm ball bearings", "4x 3/4 inch ball bearings", "2x 1/2 inch ball bearings", "1x 2ft 14mm steel tube", "1x 2ft PVC pipe", "Custom 3D printed PLA components/mounts", "Wood screws", "Wood glue", "Nuts and bolts of all sizes", "Clinch nuts"],
    skills: ["CAD Design", "Wood Working", "3D Printing", "Assembly"],
    challenges: `
      Challenges mostly illustrated in the description above. The biggest challenge was the pedaling mechanism, which was difficult to get right and be able to withstand the force of pedaling. The materials we used were not strong enough, especially with the power needed. Perhaps a sturdier piece of wood or using metal components would have been better. 
      
      The steering also posed a challenge, and we left the steering mechanisms to the last minute (Not purposefully, just how it worked out). `,
    moreImages: [
      //{ src: "/bigwheel1.jpeg", isLandscape: true, type: "image" },
      { src: "/bigwheel3.jpeg", isLandscape: false, type: "image" },
      { src: "/ME93-team.JPG", isLandscape: false, type: "image" }
    ],
    imageCaptions: [
      //"Big wheel and Arches of Despair",
      "Big wheel, fork and pedals",
      "Big wheel trio (I lack a better photo, and some camera awareness)",
      //"Me sitting on the big wheel"
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
            <div className="max-w-6xl mx-auto">
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
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center items-center">
                      {proj.moreImages.map((imgObj, i) => {
                        return (
                          <div
                            key={i}
                            className={`relative w-full h-auto bg-gray-700 rounded-md overflow-hidden 
                              ${imgObj.isLandscape ? "sm:col-span-2" : ""}`}
                          >
                            {imgObj.type === "youtube" ? (
                              <iframe
                                src={imgObj.src}
                                title={`${proj.title} - Extra ${i + 1}`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="h-full w-full aspect-[9/16] justify-center"
                              />
                            ) : imgObj.type === "video" ? (
                              <video
                                src={imgObj.src}
                                controls
                                className="h-full aspect-[4/3] object-contain"
                              />
                            ) : (
                              <Image
                                src={imgObj.src}
                                alt={`${proj.title} - Extra ${i + 1}`}
                                layout="responsive"
                                width={500}
                                height={300}
                                objectFit="contain"
                                className="h-full w-full justify-center"
                              />
                            )}
                            <div className="bg-black bg-opacity-50 text-white text-center p-2">
                              {proj.imageCaptions[i]}
                            </div>
                          </div>
                        );
                      })}
                      </div>
                    </div>
                  )}
                </div>
                </div>
            ))}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-3 text-green-300">
                  That's a wrap!
                </h2>
                <p className="text-gray-300">
                  Thank you for taking the time to look through my projects! This class ended in May 2025. 
                  I learned a lot about design, fabrication, and the importance of iteration.
                  See the class page here for more information and references on the projects: 
                </p>
                <a
                  href="https://designforfab.com"
                  className="text-blue-400 hover:text-blue-300 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  designforfab.com
                </a>
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
