"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface BreadcrumbsProps {
  pageTitle?: string;
}

export default function Breadcrumbs({ pageTitle }: BreadcrumbsProps) {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment);

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
          {pathSegments.length > 0 && <span> / </span>}
        </li>

        {pathSegments.map((segment, index) => {
          const isLast = index === pathSegments.length - 1;
          const href = "/" + pathSegments.slice(0, index + 1).join("/");

          if (segment === "project") return null;

          // Use the project title instead of slug, and apply truncation
          const label = isLast && pageTitle ? formatText(pageTitle) : formatText(decodeURIComponent(segment));

          return (
            <li key={href}>
              {isLast ? (
                <span title={pageTitle} className="text-gray-700">{label}</span>
              ) : (
                <Link href={href} title={pageTitle} className="hover:underline text-blue-600">
                  {label}
                </Link>
              )}
              {!isLast && <span> / </span>}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
