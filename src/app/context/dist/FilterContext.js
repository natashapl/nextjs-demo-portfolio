"use client"; // Context must be in a Client Component
"use strict";
exports.__esModule = true;
exports.useFilter = exports.FilterProvider = void 0;
var react_1 = require("react");
var FilterContext = react_1.createContext(undefined);
// Create Provider that accepts `uniqueTags` as a prop
function FilterProvider(_a) {
    var children = _a.children, uniqueTags = _a.uniqueTags;
    var _b = react_1.useState(null), selectedTag = _b[0], setSelectedTag = _b[1];
    var _c = react_1.useState(uniqueTags), storedUniqueTags = _c[0], setUniqueTags = _c[1];
    return (React.createElement(FilterContext.Provider, { value: { selectedTag: selectedTag, setSelectedTag: setSelectedTag, uniqueTags: storedUniqueTags, setUniqueTags: setUniqueTags } }, children));
}
exports.FilterProvider = FilterProvider;
// Custom Hook for easy access
function useFilter() {
    var context = react_1.useContext(FilterContext);
    if (!context) {
        throw new Error("useFilter must be used within a FilterProvider");
    }
    return context;
}
exports.useFilter = useFilter;
