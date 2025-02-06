import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function HandWarmingBracelet() {
  // Example images array for the gallery
  const images = [
    "/handiheat1.jpeg",
    "/handiheat2.jpeg",
    "/handiheat3.jpeg",
    // Add more as needed
  ];

return (
    <>
        <Head>
            <title>Hand-Warming Bracelet - My Portfolio</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="min-h-screen bg-gray-900 text-white">
            {/* If you have a global fixed nav with top padding, offset it with "-mt-20" if needed. */}
            <div className="-mt-20">
                {/* Hero Image */}
                <div className="w-full relative">
                    <Image
                        src="/bme66-background.jpeg" // Replace with your hero image path
                        alt="Hand-Warming Bracelet Hero"
                        layout="responsive"
                        width={1920}
                        height={1080}
                        objectFit="cover"
                    />
                    {/* Optional overlay for better contrast */}
                    <div className="absolute inset-0 bg-black bg-opacity-40" />
                </div>

                <div className="p-8">
                    <div className="max-w-5xl mx-auto">
                        {/* Title */}
                        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-orange-400 to-purple-400">
                            Hand-Warming Bracelet
                        </h1>

                        {/* Short Description */}
                        <p className="text-gray-300 mb-6">
                            This semester-long project focused on designing and prototyping a wearable
                            device that can warm your hands on the go. Our goal was to seamlessly blend
                            aesthetics, comfort, and functionality—perfect for chilly environments or
                            anyone who wants an on-demand heat boost.
                        </p>

                        {/* External Link to Full Project Website */}
                        <div className="mb-8">
                            <Link
                                href="https://www.example-handwarmingbracelet.com"
                                className="inline-block px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded shadow-md text-white font-medium transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Visit the Full Project Website
                            </Link>
                        </div>

                        {/* Photos Section */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-3">Photos</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {images.map((imgSrc, i) => (
                                    <div
                                        key={i}
                                        className="relative w-full h-auto bg-gray-800 rounded-lg overflow-hidden"
                                    >
                                        <Image
                                            src={imgSrc}
                                            alt={`Bracelet Photo ${i + 1}`}
                                            layout="responsive"
                                            width={500}
                                            height={500}
                                            objectFit="cover"
                                        />
                                    </div>
                                ))}
                            </div>
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
