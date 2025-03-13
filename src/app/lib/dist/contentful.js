"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.getProjects = exports.getProject = void 0;
var graphql_request_1 = require("graphql-request");
// Initialize Contentful GraphQL Client
var client = new graphql_request_1.GraphQLClient("https://graphql.contentful.com/content/v1/spaces/" + process.env.CONTENTFUL_SPACE_ID, {
    headers: {
        Authorization: "Bearer " + process.env.CONTENTFUL_ACCESS_TOKEN
    }
});
// GraphQL Query to Fetch a Single Project
var GET_PROJECT_QUERY = graphql_request_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query GetProject($slug: String!) {\n    projectCollection(where: { slug: $slug }, limit: 1) {\n      items {\n        title\n        slug\n        description\n        thumbnail {\n          url\n          title\n          description\n          width\n          height\n        }\n        galleryImagesCollection(limit: 10) { # Ensures the gallery exists\n          items {\n            url\n            title\n            description\n            width\n            height\n          }\n        }\n        tags\n      }\n    }\n  }\n"], ["\n  query GetProject($slug: String!) {\n    projectCollection(where: { slug: $slug }, limit: 1) {\n      items {\n        title\n        slug\n        description\n        thumbnail {\n          url\n          title\n          description\n          width\n          height\n        }\n        galleryImagesCollection(limit: 10) { # Ensures the gallery exists\n          items {\n            url\n            title\n            description\n            width\n            height\n          }\n        }\n        tags\n      }\n    }\n  }\n"])));
// Fetch a Single Project
function getProject(slug) {
    var _a;
    return __awaiter(this, void 0, Promise, function () {
        var data, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, client.request(GET_PROJECT_QUERY, { slug: slug })];
                case 1:
                    data = _b.sent();
                    console.log("🚀 Fetching project data for:", slug);
                    console.log("🔍 GraphQL Response:", JSON.stringify(data, null, 2)); // Debugging
                    if (!data.projectCollection.items.length)
                        return [2 /*return*/, null];
                    return [2 /*return*/, __assign(__assign({}, data.projectCollection.items[0]), { gallery: ((_a = data.projectCollection.items[0].galleryImagesCollection) === null || _a === void 0 ? void 0 : _a.items) || [] })];
                case 2:
                    error_1 = _b.sent();
                    console.error("❌ Error fetching project:", error_1);
                    return [2 /*return*/, null];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getProject = getProject;
// GraphQL Query to Fetch All Projects
var GET_PROJECTS_QUERY = graphql_request_1.gql(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  query GetProjects {\n    projectCollection {\n      items {\n        title\n        slug\n        description\n        thumbnail {\n          url\n          title\n          description\n          width\n          height\n        }\n        galleryImagesCollection(limit: 10) {\n          items {\n            url\n            title\n            description\n            width\n            height\n          }\n        }\n        tags\n      }\n    }\n  }\n"], ["\n  query GetProjects {\n    projectCollection {\n      items {\n        title\n        slug\n        description\n        thumbnail {\n          url\n          title\n          description\n          width\n          height\n        }\n        galleryImagesCollection(limit: 10) {\n          items {\n            url\n            title\n            description\n            width\n            height\n          }\n        }\n        tags\n      }\n    }\n  }\n"])));
// Fetch All Projects (for Homepage)
function getProjects() {
    return __awaiter(this, void 0, Promise, function () {
        var data, transformedProjects, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, client.request(GET_PROJECTS_QUERY)];
                case 1:
                    data = _a.sent();
                    transformedProjects = data.projectCollection.items.map(function (item) {
                        var _a;
                        return (__assign(__assign({}, item), { gallery: ((_a = item.galleryImagesCollection) === null || _a === void 0 ? void 0 : _a.items) || [] // Map galleryImagesCollection to gallery
                         }));
                    });
                    return [2 /*return*/, transformedProjects || []];
                case 2:
                    error_2 = _a.sent();
                    console.error("Error fetching projects:", error_2);
                    return [2 /*return*/, []];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getProjects = getProjects;
var templateObject_1, templateObject_2;
