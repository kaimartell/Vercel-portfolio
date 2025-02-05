import Link from "next/link";
import { notFound } from "next/navigation";

// This function tells Next.js which dynamic routes to pre-render at build time.
export async function generateStaticParams() {
  const projects = [
    { projectId: "project-1" },
    { projectId: "project-2" },
    { projectId: "project-3" },
  ];
  return projects;
}

export default function ProjectPage({ params }) {
  const { projectId } = params;

  // Dummy project data – update with your actual data/fetching logic.
  const projectData = {
    "project-1": {
      title: "Project 1",
      description: "Details and information about Project 1.",
    },
    "project-2": {
      title: "Project 2",
      description: "Details and information about Project 2.",
    },
    "project-3": {
      title: "Project 3",
      description: "Details and information about Project 3.",
    },
  };

  const project = projectData[projectId];

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="mb-8">{project.description}</p>
        <Link href="/" className="text-blue-400 hover:underline">
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}
