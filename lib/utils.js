"use strict";

module.exports.defaultOptions = {
    "elementId": "container",
    "site": "twitter",
    "className": "mentionified"
};

module.exports.sites = {
    "linkedin": "linkedin.com/in/",
    "reddit": "reddit.com/u/"
};

module.exports.regexes = {
    "default": /\B(\@)([a-zA-Z0-9-_]+)\b/g,
    "linkedin": /\B(\/in\/)([a-zA-Z0-9-_]+)\b/g,
    "reddit": /\B(\/u\/)([a-zA-Z0-9-_]+)\b/g,
    "auto": /\B(\@)([a-zA-Z0-9-_]+)\(([a-zA-Z0-9-_]+)\)/g
};