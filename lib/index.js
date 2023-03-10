"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linkStyler = exports.convert = exports.start = void 0;
const enum_1 = require("./enum");
const defaultSetting_1 = require("./constants/defaultSetting");
const convertTextLink_1 = require("./util/convertTextLink");
const convertTextHashtag_1 = require("./util/convertTextHashtag");
let setting;
function start(s = defaultSetting_1.DefaultSetting) {
    setting = Object.assign(Object.assign({}, defaultSetting_1.DefaultSetting), s);
    replaceLinks(enum_1.Type.ONLOAD);
}
exports.start = start;
function convert(text, s = defaultSetting_1.DefaultSetting) {
    setting = Object.assign(Object.assign({}, defaultSetting_1.DefaultSetting), s);
    return replaceLinks(enum_1.Type.CONVERT, text);
}
exports.convert = convert;
function replaceLinks(type, t = "") {
    if (type === enum_1.Type.ONLOAD) {
        if (typeof window !== "undefined") {
            window.addEventListener("load", function () {
                // Find all elements in the page that contain text
                const elements = document.querySelector("body");
                getAllElements(elements);
            });
        }
    }
    else if (type === enum_1.Type.CONVERT) {
        return (0, convertTextLink_1.convertTextLink)(t, setting);
    }
}
function getAllElements(node) {
    console.log("node --> ", node);
    if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== "") {
        const parentTag = node.parentNode;
        if (parentTag.tagName !== "A" || parentTag.tagName != "SCRIPT") {
            let html = parentTag.innerHTML;
            html = html.replace(node.textContent, (0, convertTextHashtag_1.convertTextHashtag)(node.textContent, setting));
            html = html.replace(node.textContent, (0, convertTextLink_1.convertTextLink)(node.textContent, setting));
            parentTag.innerHTML = html;
        }
    }
    else if (node.nodeType === Node.ELEMENT_NODE) {
        if (node.tagName !== "A") {
            let len = node.childNodes.length;
            let n = node;
            for (let i = 0; i < len; i++) {
                getAllElements(n.childNodes[i]);
            }
        }
    }
}
exports.linkStyler = {
    start: start,
    convert: convert,
};
