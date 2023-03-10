"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertTextLink = void 0;
const data_1 = require("../constants/data");
function convertTextLink(t, setting) {
    const text = t;
    console.log("--->", t);
    const regexLink = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/g;
    const regexAtsign = /([@])\w+/g;
    const regexHashTag = /([#])\w+/g;
    let replacedText = text;
    // Find all links within the text and replace them with their titles
    let match;
    while ((match = regexLink.exec(text)) !== null) {
        const link = match[0];
        try {
            let url = new URL(link);
            let hostName = url.hostname.split(".").slice(-2).join(".");
            let displayHostName = url.hostname.replace("www.", "");
            let icon = data_1.Data[hostName] ? data_1.Data[hostName].svg : data_1.Data["defualt"].svg;
            let displayLink = `<span style='font-weight: bold;'>${displayHostName}</span>${url.pathname.length > setting.pathnameLengthLimit
                ? url.pathname.substring(0, setting.pathnameLengthLimit) + "..."
                : url.pathname}`;
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
    while ((match = regexHashTag.exec(text)) !== null) {
        const hashTag = match[0];
        try {
            let hashTagText = hashTag.replace("#", "");
            let icon = data_1.Data["hashTag"].svg;
            let displayHashTag = `<span style='font-weight: bold;'>${hashTagText}</span>`;
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
                  color: ${setting.textColor};
                  margin-left: 2px;
              ">
                ` +
                    icon +
                    `
              </span>`
                : ``}
      <a href="${setting.hashPath + hashTagText}" style="
                  margin-left: 21px;
                  text-decoration: none;
                  color: ${setting.textColor};
              " title="${setting.hashPath}">${displayHashTag}</a>
            </span>`;
            replacedText = replacedText.replace(hashTag, replaceText);
        }
        catch (error) {
            console.error(`Error fetching link title: ${error}`);
        }
    }
    while ((match = regexAtsign.exec(text)) !== null) {
        const atsign = match[0];
        try {
            let atsignText = atsign.replace("@", "");
            let icon = data_1.Data["atsign"].svg;
            let displayAtsign = `<span style='font-weight: bold;'>${atsignText}</span>`;
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
                  color: ${setting.textColor};
                  margin-left: 2px;
              ">
                ` +
                    icon +
                    `
              </span>`
                : ``}
      <a href="${setting.atsignPath + atsignText}" style="
                  margin-left: 21px;
                  text-decoration: none;
                  color: ${setting.textColor};
              " title="${setting.atsignPath + atsignText}">${displayAtsign}</a>
            </span>`;
            replacedText = replacedText.replace(atsign, replaceText);
        }
        catch (error) {
            console.error(`Error fetching link title: ${error}`);
        }
    }
    return replacedText;
}
exports.convertTextLink = convertTextLink;
