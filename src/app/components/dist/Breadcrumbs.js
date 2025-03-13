"use client";
"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var navigation_1 = require("next/navigation");
function Breadcrumbs(_a) {
    var pageTitle = _a.pageTitle;
    var pathname = navigation_1.usePathname();
    var pathSegments = pathname.split("/").filter(function (segment) { return segment; });
    // Capitalize first letter and shorten text if it's too long
    var formatText = function (text, maxLength) {
        if (maxLength === void 0) { maxLength = 35; }
        var capitalized = text.charAt(0).toUpperCase() + text.slice(1);
        return capitalized.length > maxLength ? capitalized.substring(0, maxLength) + "..." : capitalized;
    };
    return (React.createElement("nav", { className: "text-sm text-gray-500 mb-4" },
        React.createElement("ul", { className: "flex space-x-2" },
            React.createElement("li", null,
                React.createElement(link_1["default"], { href: "/", className: "hover:underline text-blue-600" }, "Portfolio"),
                pathSegments.length > 0 && React.createElement("span", null, " / ")),
            pathSegments.map(function (segment, index) {
                var isLast = index === pathSegments.length - 1;
                var href = "/" + pathSegments.slice(0, index + 1).join("/");
                if (segment === "project")
                    return null;
                // Use the project title instead of slug, and apply truncation
                var label = isLast && pageTitle ? formatText(pageTitle) : formatText(decodeURIComponent(segment));
                return (React.createElement("li", { key: href },
                    isLast ? (React.createElement("span", { title: pageTitle, className: "text-gray-700" }, label)) : (React.createElement(link_1["default"], { href: href, title: pageTitle, className: "hover:underline text-blue-600" }, label)),
                    !isLast && React.createElement("span", null, " / ")));
            }))));
}
exports["default"] = Breadcrumbs;
