import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function SegmentHunter() {
  return (
    <>
      <Head>
        <title>Topographical Maps - My Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-gray-900 text-white p-8">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <h1 className="text-4xl font-bold mb-4">Topographical Maps</h1>
          <p className="mb-8 text-gray-300">
            This is a placeholder page for the Topographical Maps project.
            Edit this content with your project details.
          </p>

          {/* Editable Title Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Project Title</h2>
            <input
              type="text"
              placeholder="Enter project title here"
              className="w-full p-2 bg-gray-800 text-white rounded border border-gray-700 focus:outline-none focus:border-green-500"
            />
          </div>

          {/* Editable Description Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Project Description</h2>
            <textarea
              placeholder="Enter project description here"
              rows="4"
              className="w-full p-2 bg-gray-800 text-white rounded border border-gray-700 focus:outline-none focus:border-green-500"
            ></textarea>
          </div>

          {/* Images Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Images</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* First Image Card */}
              <div className="bg-gray-800 rounded-lg p-4 flex flex-col items-center">
                <div className="relative w-full h-48 mb-2 bg-gray-700 rounded-md overflow-hidden">
                  <Image
                    src="/placeholder-image.jpeg"
                    layout="fill"
                    objectFit="cover"
                    alt="Placeholder for Topographical Maps Image"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Image caption"
                  className="w-full p-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:border-green-500"
                />
              </div>
              {/* Second Image Card */}
              <div className="bg-gray-800 rounded-lg p-4 flex flex-col items-center">
                <div className="relative w-full h-48 mb-2 bg-gray-700 rounded-md overflow-hidden">
                  <Image
                    src="/placeholder-image.jpeg"
                    layout="fill"
                    objectFit="cover"
                    alt="Placeholder for Topographical Maps Image"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Image caption"
                  className="w-full p-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:border-green-500"
                />
              </div>
            </div>
          </div>

          {/* Additional Information Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Additional Information</h2>
            <textarea
              placeholder="Enter any additional information or details here"
              rows="4"
              className="w-full p-2 bg-gray-800 text-white rounded border border-gray-700 focus:outline-none focus:border-green-500"
            ></textarea>
          </div>

          {/* Navigation Back to Home */}
          <Link href="/" className="text-blue-400 hover:underline">
            ← Back to Home
          </Link>
        </div>
      </main>
    </>
  );
}
