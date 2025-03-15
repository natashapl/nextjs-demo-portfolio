"use client";

import Sidebar from "../components/Sidebar";
import Breadcrumbs from "../components/Breadcrumbs";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Sidebar />
      <main className="max-w-4xl w-full p-10">
        <Breadcrumbs />
        <h1 className="text-3xl font-bold mb-4">About This Project</h1>
        <p className="text-gray-600 mb-6">
          This <strong>Next.js portfolio demo</strong> was built as part of my learning journey into modern
          React frameworks. It is a fully dynamic portfolio site powered by <strong>Next.js 13+, Tailwind CSS,</strong>
          and <strong>Contentful</strong> as a headless CMS.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-2">Features</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li><strong>Dynamic Content</strong> - Projects are stored in <strong>Contentful</strong> and fetched using <strong>GraphQL</strong>.</li>
          <li><strong>Client-side Filtering</strong> - Users can filter portfolio projects by category.</li>
          <li><strong>Markdown Support</strong> - Content is written in <strong>Markdown</strong> and converted to HTML.</li>
          <li><strong>Next.js App Router</strong> - Learning <strong>SSG, SSR, and API routes</strong>.</li>
          <li><strong>Unit Testing</strong> - Implemented tests using <strong>Jest</strong> and <strong>React Testing Library</strong>.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-6 mb-2">What I Learned</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li><strong>Next.js App Router</strong> - Using layouts, dynamic routing, and client/server components.</li>
          <li><strong>GraphQL Queries</strong> - Fetching data from <strong>Contentful CMS</strong>.</li>
          <li><strong>Tailwind CSS</strong> - Creating responsive and accessible UI designs.</li>
          <li><strong>Markdown to HTML Conversion</strong> - Rendering structured content dynamically.</li>
          <li><strong>Testing Best Practices</strong> - Writing unit tests for UI components.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-6 mb-2">Future Improvements</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>Implementing <strong>dark mode</strong>.</li>
          <li>Improving <strong>SEO optimization</strong> (meta tags, structured data).</li>
          <li>Expanding test coverage to more components.</li>
        </ul>
        
        <Footer />
      </main>   
    </>
  );
}
