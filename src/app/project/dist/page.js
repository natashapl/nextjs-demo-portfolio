"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.generateStaticParams = void 0;
var navigation_1 = require("next/navigation");
var image_1 = require("next/image");
var contentful_1 = require("@/app/lib/contentful");
var Sidebar_1 = require("@/app/components/Sidebar");
var marked_1 = require("marked");
var link_1 = require("next/link");
// ✅ Generate Static Paths for SSG
function generateStaticParams() {
    return __awaiter(this, void 0, void 0, function () {
        var projects;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, contentful_1.getProjects()];
                case 1:
                    projects = _a.sent();
                    return [2 /*return*/, projects.map(function (project) { return ({ slug: project.slug }); })];
            }
        });
    });
}
exports.generateStaticParams = generateStaticParams;
// ✅ Fetch project details dynamically
function ProjectPage(_a) {
    var params = _a.params;
    return __awaiter(this, void 0, void 0, function () {
        var projects, project;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, contentful_1.getProjects()];
                case 1:
                    projects = _b.sent();
                    project = projects.find(function (p) { return p.slug === params.slug; });
                    if (!project)
                        return [2 /*return*/, navigation_1.notFound()];
                    return [2 /*return*/, (React.createElement("div", { className: "flex max-w-7xl mx-auto min-h-screen bg-gray-100" },
                            React.createElement(Sidebar_1["default"], { showFilter: false }),
                            React.createElement("main", { className: "max-w-4xl w-full p-10" },
                                React.createElement("h1", { className: "text-3xl font-bold" }, project.title),
                                React.createElement("div", { className: "prose prose-lg text-gray-600 mt-4", dangerouslySetInnerHTML: { __html: marked_1.marked(project.description) } }),
                                React.createElement("div", { className: "mt-6" },
                                    React.createElement(image_1["default"], { className: "w-full rounded-lg shadow-md", src: project.thumbnail.url, alt: project.thumbnail.description || project.title, width: project.thumbnail.width || 750, height: project.thumbnail.height || 500 })),
                                project.galleryImages && project.galleryImages.length > 0 && (React.createElement("div", { className: "mt-10" },
                                    React.createElement("h2", { className: "text-2xl font-semibold mb-4" }, "Gallery"),
                                    React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" }, project.galleryImages.map(function (image, index) { return (React.createElement(image_1["default"], { key: index, className: "rounded-md shadow", src: image.url, alt: image.description || "Gallery Image " + (index + 1), width: image.width || 350, height: image.height || 250 })); })))),
                                React.createElement("div", { className: "mt-6" },
                                    React.createElement(link_1["default"], { href: "/", className: "text-blue-500 hover:underline" }, "\u2190 Back to Portfolio")))))];
            }
        });
    });
}
exports["default"] = ProjectPage;
