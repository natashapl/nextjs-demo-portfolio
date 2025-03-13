import { notFound } from "next/navigation";
import Image from "next/image";
import { getProjects } from "@/app/lib/contentful";
import { marked } from "marked";
import Sidebar from "../../components/Sidebar";
import Breadcrumbs from "../../components/Breadcrumbs";

// Define a minimal type for params
interface PageParams {
  params: {
    slug?: string;
  };
}

export default async function ProjectPage({ params }: PageParams) {
  // Explicitly await the params object itself
  const resolvedParams = await Promise.resolve(params);
  const slug = resolvedParams.slug || "";
  
  // Now fetch projects
  const allProjects = await getProjects();
  
  // Find the project using the now-resolved slug
  const project = allProjects.find(p => p.slug === slug);
  
  // Handle case when project is not found
  if (!project) {
    console.warn(`No project found for slug: ${slug}`);
    return notFound();
  }

  // Convert markdown to HTML - make sure it's a string, not a Promise
  const htmlContent = marked.parse(project.description);
  
  // Make sure htmlContent is a string
  const safeHtmlContent = typeof htmlContent === 'string' 
    ? htmlContent 
    : await Promise.resolve(htmlContent);

  // Render the project
  return (
    <>
      <Sidebar />
      <main className="max-w-4xl w-full p-10 z-10">
        <Breadcrumbs pageTitle={project.title} />
        <div className="project-detail">
          <h1 className="text-3xl font-bold">{project.title}</h1>


          {/* Gallery Images (if available) */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="mt-10">
              <div className="grid grid-cols-1">
                {project.gallery.map((image, index) => (
                  <Image
                    key={index}
                    className="rounded-md"
                    src={image.url}
                    alt={image.description || `Gallery Image ${index + 1}`}
                    width={image.width || 350}
                    height={image.height || 250}
                  />
                ))}
              </div>
            </div>
          )}

          
          {/* Render the markdown as HTML */}
          <div
            className="prose prose-lg text-gray-600 mt-4"
            dangerouslySetInnerHTML={{ __html: safeHtmlContent }} 
          />
        </div>
      </main>
    </>
  );
}