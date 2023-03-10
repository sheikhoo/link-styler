import { Setting } from "./interface";
import { Type } from "./enum";
import { Data } from "./constants/data";
import { DefaultSetting } from "./constants/defaultSetting";
import { convertTextLink } from "./util/convertTextLink";

let setting: Setting;

export function start(s: Setting = DefaultSetting) {
  setting = { ...DefaultSetting, ...s };
  replaceLinks(Type.ONLOAD);
}

export function convert(text: string, s: Setting = DefaultSetting) {
  setting = { ...DefaultSetting, ...s };
  return replaceLinks(Type.CONVERT, text);
}

function replaceLinks(type: Type, t: string = "") {
  if (type === Type.ONLOAD) {
    if (typeof window !== "undefined") {
      window.addEventListener("load", function () {
        // Find all elements in the page that contain text
        const elements = document.querySelector("body");

        getAllElements(elements);
      });
    }
  } else if (type === Type.CONVERT) {
    return convertTextLink(t, setting);
  }
}

function getAllElements(node) {
  console.log("node --> ", node);

  if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== "") {
    const parentTag = node.parentNode;
    if (parentTag.tagName !== "A" || parentTag.tagName != "SCRIPT") {
      let html = parentTag.innerHTML;
      html = html.replace(
        node.textContent,
        convertTextLink(node.textContent, setting)
      );
      // console.log("temp", node.textContent);
      // console.log("html", html);

      // html = html.replace(node.textContent, convertTextAtsign(html, setting));

      // html = html.replace(node.textContent, convertTextLink(html, setting));
      parentTag.innerHTML = html;
    }
  } else if (node.nodeType === Node.ELEMENT_NODE) {
    if (node.tagName !== "A") {
      let len = node.childNodes.length;
      let n = node;
      for (let i = 0; i < len; i++) {
        getAllElements(n.childNodes[i]);
      }
    }
  }
}

export const linkStyler = {
  start: start,
  convert: convert,
};
