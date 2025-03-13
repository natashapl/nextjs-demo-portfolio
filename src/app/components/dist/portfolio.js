"use client";
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var FilterContext_1 = require("../context/FilterContext");
var link_1 = require("next/link");
var Footer_1 = require("./Footer");
function Portfolio(_a) {
    var projects = _a.projects;
    var selectedTag = FilterContext_1.useFilter().selectedTag;
    // Filter projects based on selected tag
    var filteredProjects = selectedTag
        ? projects.filter(function (project) { return project.tags.includes(selectedTag); })
        : projects;
    return (React.createElement("main", { className: "max-w-4xl w-full p-10 z-10" },
        React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4" }, filteredProjects.map(function (project) { return (React.createElement("div", { key: project.slug, className: "bg-white shadow-md rounded-md overflow-hidden zoomIn" },
            React.createElement(link_1["default"], { key: project.slug, href: "/project/" + project.slug, className: "block" },
                React.createElement(image_1["default"], { className: "w-full object-cover", src: project.thumbnail.url, alt: project.thumbnail.description || project.title, width: project.thumbnail.width || 350, height: project.thumbnail.height || 250, title: project.thumbnail.description || project.title, priority: true })))); })),
        React.createElement(Footer_1["default"], null)));
}
exports["default"] = Portfolio;
