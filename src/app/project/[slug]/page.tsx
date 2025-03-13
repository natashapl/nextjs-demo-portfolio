import { notFound } from "next/navigation";
import Image from "next/image";
import { getProjects } from "@/app/lib/contentful";
import { marked } from "marked";
import Sidebar from "../../components/Sidebar";
import Breadcrumbs from "../../components/Breadcrumbs";

// ✅ Define `params` as a Promise
type Params = Promise<{ slug: string }>;

export default async function ProjectPage({ params }: { params: Params }) {
  // ✅ Await `params` since Next.js 15 treats them as async
  const { slug } = await params;

  // Fetch all projects
  const allProjects = await getProjects();

  // Find the project by slug
  const project = allProjects.find((p) => p.slug === slug);

  // Handle case where project is not found
  if (!project) {
    console.warn(`No project found for slug: ${slug}`);
    return notFound();
  }

  // Convert markdown to HTML
  const htmlContent = marked.parse(project.description);

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
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>
      </main>
    </>
  );
}
