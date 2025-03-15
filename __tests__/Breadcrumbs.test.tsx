import React from "react";
import { render, screen } from "@testing-library/react";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider";

jest.mock("next/navigation", () => ({
  usePathname: () => "/project/project-one",
}));

test("renders breadcrumbs correctly with dynamic project title", () => {
  const mockTitle = "Project One";

  render(
    <MemoryRouterProvider>
      <Breadcrumbs pageTitle={mockTitle} />
    </MemoryRouterProvider>
  );

  // Ensure "Portfolio" exists and is a link
  const portfolioLink = screen.getByText("Portfolio");
  expect(portfolioLink).toBeInTheDocument();
  expect(portfolioLink.closest("a")).toHaveAttribute("href", "/");

  // Ensure current page title is dynamic and not a link
  const currentPage = screen.getByText(mockTitle);
  expect(currentPage).toBeInTheDocument();
  expect(currentPage.closest("a")).toBeNull();
});
