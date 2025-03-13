"use client";
"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var navigation_1 = require("next/navigation");
var FilterContext_1 = require("../context/FilterContext");
var react_1 = require("react");
var image_1 = require("next/image");
function Sidebar() {
    var _a = FilterContext_1.useFilter(), selectedTag = _a.selectedTag, setSelectedTag = _a.setSelectedTag, uniqueTags = _a.uniqueTags;
    var pathname = navigation_1.usePathname();
    var showFilter = pathname === "/";
    var _b = react_1.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    // Capitalize first letter of each tag
    var capitalize = function (tag) { return tag.charAt(0).toUpperCase() + tag.slice(1); };
    return (React.createElement("aside", { className: "w-full sticky top-0 md:relative md:w-1/4 p-8 bg-gray-100 z-20" },
        React.createElement("button", { className: "md:hidden ml-auto flex items-center px-4 py-2 bg-black text-white border border-gray-300 rounded-md cursor-pointer", onClick: function () { return setIsOpen(!isOpen); } },
            isOpen ? "✕" : "☰",
            " "),
        React.createElement("div", { className: (isOpen ? "block" : "hidden") + " flex flex-col w-full md:block md:relative md:px-0 bg-gray-100 absolute p-8 left-0" },
            React.createElement("div", { className: "mt-3 mb-6 flex items-center justify-center" },
                React.createElement(link_1["default"], { href: "/", className: "block" },
                    React.createElement(image_1["default"], { className: "block", src: "/images/nworld-logo-400x435.webp", alt: "Natasha's World Logo", width: 120, height: 131, title: "Natasha's World Logo", priority: true }))),
            React.createElement("h1", { className: "text-gray-600 mb-6 font-bold text-lg" }, "Next.js Portfolio Demo"),
            React.createElement("nav", { className: "space-y-2 text-gray-700" },
                React.createElement(link_1["default"], { href: "/", className: "block " + (pathname === "/" ? "font-bold text-blue-600" : "hover:text-blue-600") }, "Portfolio"),
                React.createElement(link_1["default"], { href: "/About", className: "block " + (pathname === "/About" ? "font-bold text-blue-600" : "hover:text-blue-600") }, "About")),
            showFilter && uniqueTags.length > 0 && (React.createElement("div", { className: "mt-10" },
                React.createElement("h2", { className: "text-gray-600 uppercase text-sm mb-3 border-b border-gray-300 pb-2" }, "Filter"),
                React.createElement("ul", { className: "space-y-1 text-gray-700" },
                    React.createElement("li", null,
                        React.createElement("button", { className: "hover:text-blue-600 text-left cursor-pointer " + (selectedTag === null ? "text-blue-600 font-semibold" : ""), onClick: function () { return setSelectedTag(null); } }, "All")),
                    uniqueTags.map(function (tag) { return (React.createElement("li", { key: tag },
                        React.createElement("button", { className: "hover:text-blue-600 text-left cursor-pointer " + (selectedTag === tag ? "text-blue-600 font-semibold" : ""), onClick: function () { return setSelectedTag(tag); } }, capitalize(tag)))); })))))));
}
exports["default"] = Sidebar;
