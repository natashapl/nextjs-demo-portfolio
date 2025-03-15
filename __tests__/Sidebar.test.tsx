import React from "react";
import { render, screen } from "@testing-library/react";
import Sidebar from "@/app/components/Sidebar";
import { FilterProvider } from "@/app/context/FilterContext";

const uniqueTags = ["tag1", "tag2"];

test("renders Sidebar with Portfolio link", () => {
  render(
    <FilterProvider uniqueTags={uniqueTags}>
      <Sidebar />
    </FilterProvider>
  );
  expect(screen.getByText("Portfolio")).toBeInTheDocument();
});

test("renders Sidebar with About link", () => {
  render(
    <FilterProvider uniqueTags={uniqueTags}>
      <Sidebar />
    </FilterProvider>
  );
  expect(screen.getByText("About")).toBeInTheDocument();
});
