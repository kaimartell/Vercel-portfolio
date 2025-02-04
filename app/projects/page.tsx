import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-10">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((id) => (
          <Link key={id} href={`/projects/project-${id}`}>
            <div className="bg-gray-800 p-6 rounded-2xl shadow-lg cursor-pointer hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold">Project {id}</h3>
              <p className="text-gray-400 mt-2">Detailed project description here.</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
