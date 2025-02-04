// pages/projects/[projectId].js
import Link from 'next/link';

export default function ProjectPage({ project }) {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="mb-8">{project.description}</p>
        <Link href="/">
          <a className="text-blue-400 hover:underline">← Back to Home</a>
        </Link>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  // For example, if you have three projects
  const projects = [{ id: 'project-1' }, { id: 'project-2' }, { id: 'project-3' }];
  const paths = projects.map((proj) => ({
    params: { projectId: proj.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Fetch or define project data based on params.projectId.
  // Here, we simply return a dummy project.
  const projectData = {
    'project-1': {
      title: 'Project 1',
      description: 'Details and information about Project 1.',
    },
    'project-2': {
      title: 'Project 2',
      description: 'Details and information about Project 2.',
    },
    'project-3': {
      title: 'Project 3',
      description: 'Details and information about Project 3.',
    },
  };

  return {
    props: {
      project: projectData[params.projectId],
    },
  };
}
