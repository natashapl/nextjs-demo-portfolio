import React from "react";
import { render, screen } from "@testing-library/react";
import Portfolio from "@/app/components/Portfolio";
import { FilterProvider } from "@/app/context/FilterContext";
import { Project } from "@/app/lib/contentful";
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider";

const mockProjects: Project[] = [
  {
    title: "Project One",
    slug: "project-one",
    description: "First project",
    thumbnail: {
      url: "/image1.jpg",
      title: "Image 1",
      description: "Thumbnail for Project One",
      width: 300,
      height: 200,
    },
    gallery: [],
    tags: ["Design"],
  },
  {
    title: "Project Two",
    slug: "project-two",
    description: "Second project",
    thumbnail: {
      url: "/image2.jpg",
      title: "Image 2",
      description: "Thumbnail for Project Two",
      width: 300,
      height: 200,
    },
    gallery: [],
    tags: ["Development"],
  },
];

const uniqueTags = ["Design", "Development"];

test("renders project thumbnails and links", () => {
  render(
    <MemoryRouterProvider>
      <FilterProvider uniqueTags={uniqueTags}>
        <Portfolio projects={mockProjects} />
      </FilterProvider>
    </MemoryRouterProvider>
  );

  // Ensure the first project's thumbnail appears
  const projectOneImage = screen.getByAltText("Thumbnail for Project One");
  expect(projectOneImage).toBeInTheDocument();
  expect(projectOneImage.getAttribute("src")).toContain("/_next/image?url=%2Fimage1.jpg");

  // Ensure the second project's thumbnail appears
  const projectTwoImage = screen.getByAltText("Thumbnail for Project Two");
  expect(projectTwoImage).toBeInTheDocument();
  expect(projectTwoImage.getAttribute("src")).toContain("/_next/image?url=%2Fimage2.jpg");

  // ✅ Ensure project links exist and have the correct hrefs
  const projectOneLink = screen.getByRole("link", { name: /Thumbnail for Project One/i });
  expect(projectOneLink).toHaveAttribute("href", "/project/project-one");

  const projectTwoLink = screen.getByRole("link", { name: /Thumbnail for Project Two/i });
  expect(projectTwoLink).toHaveAttribute("href", "/project/project-two");
});
