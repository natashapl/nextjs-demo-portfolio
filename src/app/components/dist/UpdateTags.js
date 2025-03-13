"use client"; // This must be a client component
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var FilterContext_1 = require("../context/FilterContext");
function UpdateTags(_a) {
    var uniqueTags = _a.uniqueTags;
    var setUniqueTags = FilterContext_1.useFilter().setUniqueTags; // Get the setter function from context
    react_1.useEffect(function () {
        setUniqueTags(uniqueTags); // Update uniqueTags in context
    }, [uniqueTags, setUniqueTags]);
    return null; // This component doesn't render anything
}
exports["default"] = UpdateTags;
