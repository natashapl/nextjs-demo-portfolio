"use client"; // This must be a client component

import { useEffect } from "react";
import { useFilter } from "../context/FilterContext";

interface UpdateTagsProps {
  uniqueTags: string[];
}

export default function UpdateTags({ uniqueTags }: UpdateTagsProps) {
  const { setUniqueTags } = useFilter(); // Get the setter function from context

  useEffect(() => {
    setUniqueTags(uniqueTags); // Update uniqueTags in context
  }, [uniqueTags, setUniqueTags]);

  return null; // This component doesn't render anything
}
