import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function CapstonePortfolio() {
  const sections = [
    {
      id: 1,
      title: "Project Overview",
      image: "/liverguard.jpeg",
      width: 1920,
      height: 1080,
      description:`
        Livers only have a short window of time to be transplanated after removal from the donor. Paragonix is working on a device to perfuse the liver with perfusate to extend this time to up to 48 hours.
        
        Our team developed a cannula prototype to connect the liver portal vein to the Paragonix device in a safe ane secure fashion. 
        `,
    },
    {
      id: 2,
      title: "Existing Solution",
      image: "/bme9-barb.jpeg",
      width: 1200,
      height: 800,
      description:
        "Currently, Paragonix uses a barb cannula to connect the liver portal vein to their device. The cannula is inserted and a suture is tied around to secure it in place. This solution creates a good seal, however it causes significant damage to the portal vein, meaning surgeons on the receiving end have to remove a section of the portal vein and reattach it to the liver.",
    },
    {
        id: "break-1",
        type: "break",
        title: "Engineering Requirements",
        content_top:"",
        content_bottom:"Before we started ideating, we noted some of the engineering requirements our cannula had to meet. Of utmost importance was the seal quality of the cannula, and the strain on the portal vein, since we want to minimize damage to the transplant site.",
        image: "/bme9-er1.jpeg",
        width: 1920,
        height: 800,
    },
    {
        id: "break-2",
        type: "break",
        title: "Design Constraints",
        content_top:"",
        content_bottom:"We brainstormed quite a few different design ideas, everything from magnets and suction methods, to adhesives and mechanical clamps.",
        image: "/bme9-ideas.jpeg",
        width: 1200,
        height: 800,
    },
    {
      id: 3,
      title: "Prototyping",
      image: "/bme9-proto1.jpeg",
      width: 282,
      height: 676,
      description:`
              We eventually settled on a 2 part design that uses a silicone ring and a tapered inner cannula. The silicone ring slides around the outside of the portal vein, and the tapered inner cannula is inserted into the portal vein. The two are brought together to create a seal, and the silicone allows for a better seal with less compressive force.

              Our first successful ideation indicated this was a plausible design, however the attachment mechanism between the ring and the body of the cannula needed some attention.

              We created this intial design using reversable zip ties, which demonstrated the concept. However when we got to test it in a porcine model, the zip ties got in the way of cannulation, so we moved onto more flexible designs. 


        `,
    },
    {
      id: 4,
      title: "Final Prototype",
      image: "/bme9-final.jpg",
      width: 1200,
      height: 800,
      description:`
              Our final prototype used the same silicone ring and tapered inner cannula design, but we replaced the zip ties with hinging arms that could swing down during cannulation, and swing back up to secure the cannula in place. 
              
              This design was much more flexible, and it had ridges for the arms to lock into place, with the added benefit of both a tactile and auditory feedback. `,
    },
    {
        id: 5,
        title: "Testing",
        image: "/bme9-testing.jpg",
        width: 1200,
        height: 800,
        description:`
              We ran a series of tests to validate our design, including this pictured leak test. We attached our cannula models to a peristaltic pump and measured leakage across hour long periods at 5 minute increments. 
              
              We also tested user experience by having fellow peers try to cannulate and timing and measuring their experience. 
              
              We found that our design created a significantly better seal than the existing barb cannula by nearly 66% less leakage on average. Our cannula took an average of 2 minutes and 14 seconds to cannulate, which was slightly slower than that of the barb, however we believe the tradeoff for security and safety is worth this small time.`,
    },
    {
        id: "break-3",
        type: "break",
        title: "See our full report at this link!",
        externalLink: "https://tufts.box.com/s/s7ukn3e60sggm3hxhel3zilrobxo7nb6",
        linkcaption: "BME9 Capstone Report",
        content_top: "",
        content_bottom: "",
        image: "/bme9-poster.jpeg",
        width: 1200,
        height: 800,
    }
  ];

  return (
    <>
      <Head>
        <title>Capstone Project Portfolio - My Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" relative top-10 min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-black text-white">
        <div className="-mt-20">
          <div className="w-full relative overflow-hidden">
            <Image
              src="/bme9-banner.JPG"
              alt="Capstone Project Hero"
              layout="responsive"
              width={1920}
              height={800}
              objectFit="fit"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" />
          </div>

          <div className="p-8">
            <div className="max-w-5xl mx-auto">
              <h1 className="text-5xl font-extrabold leading-snug mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-500">
                Biomedical Engineering Capstone
              </h1>

              <p className="mb-10 text-gray-300">
                In my senior capstone, our team developed an innovative medical device to address liver
                perfusion challenges during transplantation, in collaboration with Paragonix. Below you'll find the key
                stages - from initial research through final presentation - with links to more documentation.
              </p>

              <p className="mb-10 text-gray-300">
                This project was a semester long effort in collaboration with Katie Lew, Anupama McCulloch, and Stephen Albright.
              </p>

              {/* Render sections and breaks */}
              {sections.map((section, index) => {
                // Render full-width break
                if (section.type === "break") {
                  return (
                    <div key={section.id} className="mb-20">
                      <div className="max-w-4xl mx-auto text-left">
                        <h2 className="text-3xl font-semibold mb-4 text-center">
                          {section.title}
                        </h2>
                        <h2 className="text-2xl font-semibold mb-2 text-center text-indigo-400">
                            {section.externalLink && (
                            <Link
                            href={section.externalLink}
                            className="inline-block mt-2 text-blue-400 hover:text-blue-300 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            {section.linkcaption} →
                            </Link>
                            )}
                        </h2>
                        <p className="text-gray-300 mb-6">{section.content_top}</p>
                        <div className="relative w-full rounded-lg overflow-hidden mx-auto">
                          <Image
                            src={section.image}
                            alt={section.title}
                            width={section.width}
                            height={section.height}
                            layout="responsive"
                            objectFit="contain"
                          />
                        <p className="text-gray-300 mb-6 text-center">{section.content_bottom}</p>
                        </div>
                      </div>
                    </div>
                  );
                }

                // Standard alternating layout
                const isReversed = index % 2 === 1;
                return (
                  <div
                    key={section.id}
                    className={`flex flex-col md:flex-row ${
                      isReversed ? "md:flex-row-reverse" : ""
                    } items-center gap-6 mb-20`}
                  >
                    <div
                      className="relative w-full md:w-1/2 mx-auto overflow-hidden flex justify-center items-center transition transform hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-indigo-500 hover:ring-offset-2 hover:ring-offset-gray-900 rounded-lg"
                    >
                      {section.id === 3 ? (
                        // Fixed-size centered prototype image
                        <div className="relative w-full h-[500px]">
                          <Image
                            src={section.image}
                            alt={section.title}
                            layout="fill"
                            objectFit="contain"
                            objectPosition="center"
                            className="rounded-lg"
                          />
                        </div>
                      ) : (
                        <Image
                          src={section.image}
                          alt={section.title}
                          layout="responsive"
                          width={section.width}
                          height={section.height}
                          objectFit="contain"
                          objectPosition="center"
                          className="rounded-lg max-h-[500px]"
                        />
                      )}
                    </div>

                    <div className="md:w-1/2 flex flex-col justify-center">
                      <h3 className="text-2xl font-semibold mb-2">
                        {section.title}
                      </h3>
                      <p className="text-gray-300 mb-4 whitespace-pre-line">{section.description}</p>
                      {section.externalLink && (
                        <Link
                          href={section.externalLink}
                          className="inline-block mt-2 text-blue-400 hover:text-blue-300 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {section.linkcaption} →
                        </Link>
                      )}
                    </div>
                  </div>
                );
              })}

              <Link href="/" className="text-blue-400 hover:underline">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>

        {/*add a spacer at the bottom of the page*/}
        <div className="h-40"></div>
      </main>
    </>
  );
}
