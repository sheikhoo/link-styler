"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linkStyler = exports.convert = exports.start = void 0;
const enum_1 = require("./enum");
const data_1 = require("./constants/data");
let defaultSetting = {
    bg: true,
    bgColor: '#a9a9a94f',
    textColor: '#000000d9',
    borderRadius: 15,
    showIcon: true,
    iconColor: true,
    pathnameLengthLimit: 20
};
let setting;
function start(s = defaultSetting) {
    setting = Object.assign(Object.assign({}, defaultSetting), s);
    replaceLinks(enum_1.Type.ONLOAD);
}
exports.start = start;
function convert(text, s = defaultSetting) {
    setting = Object.assign(Object.assign({}, defaultSetting), s);
    return replaceLinks(enum_1.Type.CONVERT, text);
}
exports.convert = convert;
function replaceLinks(type, t = '') {
    if (type === enum_1.Type.ONLOAD) {
        if (typeof window !== 'undefined') {
            window.addEventListener('load', function () {
                // Find all elements in the page that contain text
                const elements = document.querySelector('body');
                getAllElements(elements);
            });
        }
    }
    else if (type === enum_1.Type.CONVERT) {
        return convertText(t);
    }
}
function getAllElements(node) {
    console.log('node --> ', node);
    if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '') {
        const parentTag = node.parentNode;
        if (parentTag.tagName !== 'A') {
            let html = parentTag.innerHTML;
            parentTag.innerHTML = html.replace(node.textContent, convertText(node.textContent));
        }
    }
    else if (node.nodeType === Node.ELEMENT_NODE) {
        if (node.tagName !== 'A') {
            let len = node.childNodes.length;
            let n = node;
            for (let i = 0; i < len; i++) {
                getAllElements(n.childNodes[i]);
            }
        }
    }
}
function convertText(t) {
    const text = t;
    const regex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/g;
    let replacedText = text;
    // Find all links within the text and replace them with their titles
    let match;
    while ((match = regex.exec(text)) !== null) {
        const link = match[0];
        try {
            let url = new URL(link);
            let hostName = url.hostname.split('.').slice(-2).join('.');
            let displayHostName = url.hostname.replace('www.', '');
            let icon = data_1.Data[hostName] ? data_1.Data[hostName].svg : data_1.Data["defualt"].svg;
            let displayLink = `<span style='font-weight: bold;'>${displayHostName}</span>${url.pathname.length > setting.pathnameLengthLimit ? url.pathname.substring(0, setting.pathnameLengthLimit) + '...' : url.pathname}`;
            let replaceText = `<span style="
                position: relative;
                background: ${setting.bgColor};
                padding: 1.5px 3px;
                border-radius: ${setting.borderRadius}px;
                align-items: center;
                white-space: nowrap;
            ">
            ${setting.showIcon
                ? `<span style="
                  position: absolute;
                  top: 3px;
                  color: ${setting.iconColor
                    ? data_1.Data[hostName]
                        ? data_1.Data[hostName].color
                        : setting.textColor
                    : setting.textColor};
                  margin-left: 2px;
              ">
                ` +
                    icon +
                    `
              </span>`
                : ``}
      <a href="${link}" style="
                  margin-left: 21px;
                  text-decoration: none;
                  color: ${setting.textColor};
              " title="${link}">${displayLink}</a>
            </span>`;
            replacedText = replacedText.replace(link, replaceText);
        }
        catch (error) {
            console.error(`Error fetching link title: ${error}`);
        }
    }
    return replacedText;
}
exports.linkStyler = {
    start: start,
    convert: convert,
};
