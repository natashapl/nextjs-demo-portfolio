"use client"; // Context must be in a Client Component

import { createContext, useContext, useState, ReactNode } from "react";

interface FilterContextType {
  selectedTag: string | null;
  setSelectedTag: (tag: string | null) => void;
  uniqueTags: string[];
  setUniqueTags: (tags: string[]) => void; // Allow updating uniqueTags dynamically
}

interface FilterProviderProps {
  children: ReactNode;
  uniqueTags: string[];
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

// Create Provider that accepts `uniqueTags` as a prop
export function FilterProvider({ children, uniqueTags }: FilterProviderProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [storedUniqueTags, setUniqueTags] = useState<string[]>(uniqueTags);

  return (
    <FilterContext.Provider value={{ selectedTag, setSelectedTag, uniqueTags: storedUniqueTags, setUniqueTags }}>
      {children}
    </FilterContext.Provider>
  );
}

// Custom Hook for easy access
export function useFilter() {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
}
