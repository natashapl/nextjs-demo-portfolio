"use client";

import Image from "next/image";
import { useFilter } from "../context/FilterContext";
import { Project } from "../lib/contentful";
import Link from "next/link";
import Footer from  "./Footer"

interface PortfolioProps {
  projects: Project[];
}

export default function Portfolio({ projects }: PortfolioProps) {

  const { selectedTag } = useFilter();

  // Filter projects based on selected tag
  const filteredProjects = selectedTag
    ? projects.filter((project) => project.tags.includes(selectedTag))
    : projects;

  return (
    <main className="max-w-4xl w-full p-10 z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {filteredProjects.map((project) => (
        <div key={project.slug} className="bg-white shadow-md rounded-md overflow-hidden zoomIn">
          <Link key={project.slug} href={`/project/${project.slug}`} className="block">
            <Image
              className="w-full object-cover"
              src={project.thumbnail.url}
              alt={project.thumbnail.description || project.title}
              width={project.thumbnail.width || 350}
              height={project.thumbnail.height || 250}
              title={project.thumbnail.description || project.title}
              priority
            />              
          </Link>
        </div>
        ))}
      </div>
      <Footer />
    </main>
  );
}
