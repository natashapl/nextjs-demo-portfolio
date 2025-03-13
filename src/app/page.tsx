import { Project, getProjects } from "./lib/contentful";
import Portfolio from "./components/Portfolio";
import { FilterProvider } from "./context/FilterContext";
import Sidebar from "./components/Sidebar";
import UpdateTags from "./components/UpdateTags";

export default async function Home() {
  const projects: Project[] = await getProjects(); // Fetch all projects (not a single project)

  // Extract unique tags from all projects (Server Side)
  const uniqueTags = Array.from(new Set(projects.flatMap((project) => project.tags))).sort();

  return (
    <FilterProvider uniqueTags={uniqueTags}>
      <Sidebar />
      <UpdateTags uniqueTags={uniqueTags} />
      <Portfolio projects={projects} />
    </FilterProvider>
  );
}
