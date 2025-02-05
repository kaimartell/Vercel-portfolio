// app/layout.tsx
import "./globals.css";
import Link from "next/link";

// You can also use the new metadata export to set global title/description
export const metadata = {
  title: "My Portfolio",
  description: "My Portfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Global Header */}
        <header className="fixed top-0 left-0 w-full z-50 bg-gray-900 bg-opacity-80 backdrop-blur-md">
          <nav className="container mx-auto flex justify-between items-center p-4">
            <div className="text-2xl font-bold">
              <Link href="/" className="hover:underline">
                My Portfolio
              </Link>
            </div>
            <ul className="flex space-x-6">
              <li>
                <Link
                  href="/#about"
                  className="font-bold hover:text-pink-400 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/#projects"
                  className="font-bold hover:text-orange-400 transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/#coursework"
                  className="font-bold hover:text-purple-400 transition-colors"
                >
                  Coursework
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="font-bold hover:text-green-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Give space so content isn't hidden behind the fixed header */}
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
