"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProjects = getProjects;

var _graphqlRequest = require("graphql-request");

var SPACE_ID = "zwitsr8jyr69";
var ACCESS_TOKEN = "6LkRZe-KHKSye0LfnJd91vDAeO5IqVIQB694ij9Vtwc";
var endpoint = "https://graphql.contentful.com/content/v1/spaces/".concat(SPACE_ID);
var client = new _graphqlRequest.GraphQLClient(endpoint, {
  headers: {
    authorization: "Bearer ".concat(ACCESS_TOKEN)
  }
});

function getProjects() {
  var query, data;
  return regeneratorRuntime.async(function getProjects$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          query = "\n    {\n      projectCollection {\n        items {\n          title\n          slug\n          description\n          thumbnail { url }\n          tags\n        }\n      }\n    }\n  ";
          _context.next = 3;
          return regeneratorRuntime.awrap(client.request(query));

        case 3:
          data = _context.sent;
          return _context.abrupt("return", data.projectCollection.items);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}