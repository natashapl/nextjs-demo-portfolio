"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface BreadcrumbsProps {
  pageTitle?: string;
}

export default function Breadcrumbs({ pageTitle }: BreadcrumbsProps) {
  const pathname = usePathname();
  const isProjectPage = pathname.startsWith("/project/");

  // Capitalize first letter and shorten text if it's too long
  const formatText = (text: string, maxLength = 35) => {
    const capitalized = text.charAt(0).toUpperCase() + text.slice(1);
    return capitalized.length > maxLength ? `${capitalized.substring(0, maxLength)}...` : capitalized;
  };

  return (
    <nav className="text-sm text-gray-500 mb-4">
      <ul className="flex space-x-2">
        <li>
          <Link href="/" className="hover:underline text-blue-600">
            Portfolio
          </Link>
        </li>
        {isProjectPage && pageTitle && (
          <>
            <li>/</li>
            <li className="text-gray-500">{formatText(pageTitle)}</li>
          </>
        )}
      </ul>
    </nav>
  );
}
