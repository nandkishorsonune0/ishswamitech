import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import CaseStudyContent from "@/components/CaseStudyContent";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | Case Study | NexaSoft Solutions`,
    description: project.description,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const relatedProjects = projects
    .filter((p) => p.id !== project.id)
    .slice(0, 3);

  return <CaseStudyContent project={project} relatedProjects={relatedProjects} />;
}
