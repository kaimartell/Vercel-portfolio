import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function TopographicalMaps() {
  return (
    <>
      <Head>
        <title>Topographical Maps - My Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gray-900 text-white">
        {/* Cancel out any global top padding if needed */}
        <div className="-mt-20">
          {/* Full‑Width Title Image */}
          <div className="w-full">
            <Image
              src="/topo-thumbnail.jpeg" // Update if you have a different title image path
              alt="Title Image"
              layout="responsive"
              width={1920}
              height={1080}
              objectFit="contain"
            />
          </div>

          {/* Content Container */}
          <div className="p-8">
            {/* Increase max-w from 4xl to 5xl for a wider layout */}
            <div className="max-w-5xl mx-auto">

              {/* Header */}
              <h1 className="text-4xl font-bold mb-4">Topographical Maps</h1>
              
              {/* Introduction */}
              <p className="mb-6 text-gray-300">
                I’m passionate about maps, mountains, and the art of turning real-world 
                locations into tangible 3D models. So, I took two places I love—San Francisco, 
                my home turf, and Lake Tahoe, a beloved getaway—and transformed them into 
                laser-cut topographical maps.
              </p>

              {/* Highlights / Quick Overview */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-3">Project Highlights</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>
                    Converted real map data into detailed 3D models with <strong>map2stl</strong>.
                  </li>
                  <li>
                    Tweaked parameters like <em>water level</em> and <em>mountain gain</em> to emphasize terrain features.
                  </li>
                  <li>
                    Sliced models into multiple <strong>SVG layers</strong> using <em>Kiri:Moto</em>.
                  </li>
                  <li>
                    Laser-cut all the layers from <strong>3mm plywood</strong> and <strong>3mm blue acrylic</strong>.
                  </li>
                  <li>
                    Stacked and glued the layers to create physical topographical maps.
                  </li>
                </ul>
              </section>

              {/* Why These Places */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-3">Why These Places?</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>
                    <strong>San Francisco:</strong> My home city and its iconic hills, the 
                    bay, and crazy microclimates — I loved capturing those dramatic elevation changes in wood.
                  </li>
                  <li>
                    <strong>Lake Tahoe:</strong> Crystal-clear waters, gorgeous mountain peaks, 
                    and plenty of shoreline to highlight with acrylic. It’s one of my favorite 
                    spots on Earth.
                  </li>
                </ul>
              </section>

              {/* Technologies & Materials */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-3">Technologies &amp; Materials</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
                  {/* Tech List */}
                  <ul className="list-disc list-inside space-y-2 bg-gray-800 p-4 rounded-lg">
                    <li><strong>map2stl</strong> for 3D map conversion</li>
                    <li><strong>Kiri:Moto</strong> for slicing into SVG layers</li>
                    <li><strong>Adobe Illustrator</strong> for touch-ups & laser cutter pre-processing</li>
                  </ul>
                  {/* Materials List */}
                  <ul className="list-disc list-inside space-y-2 bg-gray-800 p-4 rounded-lg">
                    <li>Laser cutter</li>
                    <li>3mm plywood</li>
                    <li>3mm blue acrylic</li>
                    <li>Wood glue &amp; superglue</li>
                  </ul>
                </div>
              </section>

              {/* Images Section */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Project Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* First Image Card */}
                  <div className="bg-gray-800 rounded-lg overflow-hidden">
                    <div className="relative w-full h-[50vh]">
                      <Image
                        src="/SF-sideview.jpeg"
                        layout="fill"
                        objectFit="cover"
                        alt="San Francisco Side View"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2">San Francisco Side View</h3>
                      <p className="text-gray-300 text-sm">
                        Capturing the iconic hills of the city in stacked layers for a stunning 3D profile.
                      </p>
                    </div>
                  </div>

                  {/* Second Image Card */}
                  <div className="bg-gray-800 rounded-lg overflow-hidden">
                    <div className="relative w-full h-[50vh]">
                      <Image
                        src="/tahoe-sideview.jpeg"
                        layout="fill"
                        objectFit="cover"
                        alt="Lake Tahoe Side View"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2">Lake Tahoe Side View</h3>
                      <p className="text-gray-300 text-sm">
                        Showcasing the crisp shorelines and mountainous terrain of a beloved getaway spot.
                      </p>
                    </div>
                  </div>
                  {/* Third Image Card (Full Width) */}
                  <div className="bg-gray-800 rounded-lg overflow-hidden md:col-span-2">
                    <div className="relative w-full h-[50vh]">
                      <Image
                        src="/tahoesvg.jpeg"
                        layout="fill"
                        objectFit="cover"
                        alt="Lake Tahoe Vector Layers"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2">Lake Tahoe Vector Layers</h3>
                      <p className="text-gray-300 text-sm">
                        An example of a stacked SVG layers showcasing detailed topography.
                      </p>
                    </div>
                  </div>
                </div>
              </section>


              {/* Challenges & Next Steps Section */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Challenges &amp; Next Steps</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>
                    Laser cutting tiny pieces was tricky. It was difficult to decide which 
                    smaller parts to cut and which to merge or ignore.
                  </li>
                  <li>
                    Layering had to be extremely precise, so I created outlines to help position 
                    each piece accurately.
                  </li>
                  <li>
                    I&apos;m hoping to create another map of <strong>Olympic Valley</strong>—one 
                    of my favorite ski mountains.
                  </li>
                  <li>
                    I&apos;d also love to craft a model of the <strong>White Mountains</strong> in
                    New Hampshire.
                  </li>
                </ul>
              </section>

              {/* Navigation Back to Home */}
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
