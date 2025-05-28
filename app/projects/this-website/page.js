import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function WebsiteCreation() {
  const images = [
    {
      src: "/github.jpeg",
      alt: "GitHub Screenshot",
      width: 1200, 
      height: 600,
    },
    {
      src: "/vscode.jpeg",
      alt: "VSCode Screenshot",
      width: 600, 
      height: 800,
    },
  ];

  return (
    <>
      <Head>
        <title>Website Creation - My Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative -top-15 min-h-screen bg-gray-900 text-white">
        <div className="p-8 max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-400">
            Building This Website
          </h1>

          {/* Intro / Background */}
          <p className="text-gray-300 mb-6">
            This page documents how I developed my personal portfolio using Next.js and
            Tailwind CSS, hosted on Vercel, and version-controlled with GitHub. This journey
            has been an ongoing process, with incremental improvements and new features
            added as I’ve learned more about modern web development.
          </p>

          {/* Skills & Tools Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-indigo-400">Skills &amp; Tools</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Next.js for server-side rendering and routing</li>
              <li>Tailwind CSS for rapid and consistent styling</li>
              <li>Vercel for quick and seamless deployment</li>
              <li>Git &amp; GitHub for version control and collaboration</li>
              <li>React Icons &amp; other libraries to enhance UI</li>
            </ul>
          </section>

          {/* Hosting & Deployment */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-green-400">Hosting &amp; Deployment</h2>
            <p className="text-gray-300">
              Vercel makes it incredibly straightforward to deploy a Next.js project. Each
              push to the main branch on GitHub triggers an automatic build and deployment,
              keeping the live site up to date. The integrated preview URLs are also 
              fantastic for testing changes before they go live.
            </p>
          </section>

          {/* GitHub Repo Link */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-blue-400">Source Code</h2>
            <p className="text-gray-300 mb-2">
              The entire project is open-source on GitHub. Feel free to explore the code!
            </p>
            <Link
              href="https://github.com/kaimartell/Vercel-portfolio"
              className="inline-block px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded shadow-md text-white font-medium transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              View GitHub Repo
            </Link>
          </section>

          {/* Photo Section - Single Column */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">Development Photos</h2>
            <div className="flex flex-col space-y-8">
              {images.map((img, i) => (
                <div key={i} className="bg-gray-800 rounded-lg overflow-hidden mx-auto">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    layout="intrinsic"
                    width={img.width}
                    height={img.height}
                    className="max-w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Closing Thoughts */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-red-300">Closing Thoughts</h2>
            <p className="text-gray-300">
              From the initial scaffold to the ongoing updates, developing this portfolio
              has shown how powerful modern frameworks can be. There’s always more to refine,
              but I’m proud of the progress so far and excited to keep iterating!
            </p>
          </section>

          {/* Back to Home Link */}
          <Link href="/" className="text-blue-400 hover:underline">
            ← Back to Home
          </Link>
        </div>
      </main>
    </>
  );
}
