"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var google_1 = require("next/font/google");
require("./styles/globals.css");
var FilterContext_1 = require("./context/FilterContext");
var geistSans = google_1.Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"]
});
var geistMono = google_1.Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"]
});
exports.metadata = {
    title: "My portfolio",
    description: "This is a portfolio page that uses Next.js and Contentful to store project details"
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en" },
        React.createElement("body", { className: geistSans.variable + " " + geistMono.variable + " antialiased" },
            React.createElement("div", { className: "md:flex max-w-7xl mx-auto min-h-screen" },
                React.createElement(FilterContext_1.FilterProvider, { uniqueTags: [] }, children)))));
}
exports["default"] = RootLayout;
