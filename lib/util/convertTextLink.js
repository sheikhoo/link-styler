"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertTextLink = void 0;
const data_1 = require("../constants/data");
function convertTextLink(t, setting) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20;
    const text = t;
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
            let hostName = url.hostname.split('.').slice(-2).join('.');
            let displayHostName = url.hostname.replace('www.', '');
            let icon = data_1.Data[hostName] ? data_1.Data[hostName].svg : data_1.Data['defualt'].svg;
            let displayLink = `<span style='font-weight: bold;'>${displayHostName}</span>${url.pathname.length > setting.link.pathnameLengthLimit
                ? url.pathname.substring(0, setting.link.pathnameLengthLimit) + '...'
                : url.pathname}`;
            let replaceText = `<span style="
                  position: relative;
                  ${((_b = (_a = setting.link) === null || _a === void 0 ? void 0 : _a.bg) !== null && _b !== void 0 ? _b : setting.bg)
                ? `background: ${(_d = (_c = setting.link) === null || _c === void 0 ? void 0 : _c.bgColor) !== null && _d !== void 0 ? _d : setting.bgColor}`
                : ``};
                  padding: 1.5px 3px;
                  border-radius: ${(_f = (_e = setting.link) === null || _e === void 0 ? void 0 : _e.borderRadius) !== null && _f !== void 0 ? _f : setting.borderRadius}px;
                  align-items: center;
                  white-space: nowrap;
              ">
              ${((_h = (_g = setting.link) === null || _g === void 0 ? void 0 : _g.showIcon) !== null && _h !== void 0 ? _h : setting.showIcon)
                ? `<span style="
                    position: absolute;
                    top: 3px;
                    color: ${((_k = (_j = setting.link) === null || _j === void 0 ? void 0 : _j.iconColor) !== null && _k !== void 0 ? _k : setting.iconColor)
                    ? data_1.Data[hostName]
                        ? data_1.Data[hostName].color
                        : (_m = (_l = setting.link) === null || _l === void 0 ? void 0 : _l.textColor) !== null && _m !== void 0 ? _m : setting.textColor
                    : (_p = (_o = setting.link) === null || _o === void 0 ? void 0 : _o.textColor) !== null && _p !== void 0 ? _p : setting.textColor};
                    margin-left: 2px;
                ">
                  ` +
                    icon +
                    `
                </span>`
                : ``}
        <a href="${link}" style="
                    margin-left: 21px;
                    ${((_r = (_q = setting.link) === null || _q === void 0 ? void 0 : _q.underline) !== null && _r !== void 0 ? _r : setting.underline)
                ? `text-decoration: underline`
                : `text-decoration: none`};
                    color: ${(_t = (_s = setting.link) === null || _s === void 0 ? void 0 : _s.textColor) !== null && _t !== void 0 ? _t : setting.textColor};
                " title="${link}">${displayLink}</a>
              </span>`;
            replacedText = replacedText.replace(link, replaceText);
        }
        catch (error) {
            console.error(`Error fetching link title: ${error}`);
        }
    }
    if (setting.hashTag && setting.hashTag.enable) {
        while ((match = regexHashTag.exec(text)) !== null) {
            const hashTag = match[0];
            try {
                let hashTagText = hashTag.replace('#', '');
                let icon = data_1.Data['hashTag'].svg;
                let displayHashTag = `<span style='font-weight: bold;'>${hashTagText}</span>`;
                let replaceText = `<span style="
                position: relative;
                ${((_v = (_u = setting.hashTag) === null || _u === void 0 ? void 0 : _u.bg) !== null && _v !== void 0 ? _v : setting.bg)
                    ? `background: ${(_x = (_w = setting.hashTag) === null || _w === void 0 ? void 0 : _w.bgColor) !== null && _x !== void 0 ? _x : setting.bgColor}`
                    : ``};
                padding: 1.5px 3px;
                border-radius: ${(_z = (_y = setting.hashTag) === null || _y === void 0 ? void 0 : _y.borderRadius) !== null && _z !== void 0 ? _z : setting.borderRadius}px;
                align-items: center;
                white-space: nowrap;
            ">
            ${((_1 = (_0 = setting.hashTag) === null || _0 === void 0 ? void 0 : _0.showIcon) !== null && _1 !== void 0 ? _1 : setting.showIcon)
                    ? `<span style="
                  position: absolute;
                  top: 3px;
                  color: ${(_3 = (_2 = setting.hashTag) === null || _2 === void 0 ? void 0 : _2.textColor) !== null && _3 !== void 0 ? _3 : setting.textColor};
                  margin-left: 2px;
              ">
                ` +
                        icon +
                        `
              </span>`
                    : ``}
      <a href="${setting.hashTag.path + hashTagText}" style="
                  margin-left: 21px;
                  ${((_5 = (_4 = setting.hashTag) === null || _4 === void 0 ? void 0 : _4.underline) !== null && _5 !== void 0 ? _5 : setting.underline)
                    ? `text-decoration: underline`
                    : `text-decoration: none`};
                  color: ${(_7 = (_6 = setting.hashTag) === null || _6 === void 0 ? void 0 : _6.textColor) !== null && _7 !== void 0 ? _7 : setting.textColor};
              " title="${setting.hashTag.path}">${displayHashTag}</a>
            </span>`;
                replacedText = replacedText.replace(hashTag, replaceText);
            }
            catch (error) {
                console.error(`Error fetching link title: ${error}`);
            }
        }
    }
    if (setting.atsign && setting.atsign.enable) {
        while ((match = regexAtsign.exec(text)) !== null) {
            const atsign = match[0];
            try {
                let atsignText = atsign.replace('@', '');
                let icon = data_1.Data['atsign'].svg;
                let displayAtsign = `<span style='font-weight: bold;'>${atsignText}</span>`;
                let replaceText = `<span style="
                position: relative;
                ${((_9 = (_8 = setting.atsign) === null || _8 === void 0 ? void 0 : _8.bg) !== null && _9 !== void 0 ? _9 : setting.bg)
                    ? `background: ${(_11 = (_10 = setting.atsign) === null || _10 === void 0 ? void 0 : _10.bgColor) !== null && _11 !== void 0 ? _11 : setting.bgColor}`
                    : ``};
                padding: 1.5px 3px;
                border-radius: ${(_12 = setting.atsign.borderRadius) !== null && _12 !== void 0 ? _12 : setting.borderRadius}px;
                align-items: center;
                white-space: nowrap;
            ">
            ${((_14 = (_13 = setting.atsign) === null || _13 === void 0 ? void 0 : _13.showIcon) !== null && _14 !== void 0 ? _14 : setting.showIcon)
                    ? `<span style="
                  position: absolute;
                  top: 3px;
                  color: ${(_16 = (_15 = setting.atsign) === null || _15 === void 0 ? void 0 : _15.textColor) !== null && _16 !== void 0 ? _16 : setting.textColor};
                  margin-left: 2px;
              ">
                ` +
                        icon +
                        `
              </span>`
                    : ``}
      <a href="${setting.atsign.path + atsignText}" style="
                  margin-left: 21px;
                  ${((_18 = (_17 = setting.atsign) === null || _17 === void 0 ? void 0 : _17.underline) !== null && _18 !== void 0 ? _18 : setting.underline)
                    ? `text-decoration: underline`
                    : `text-decoration: none`};
                  color: ${(_20 = (_19 = setting.atsign) === null || _19 === void 0 ? void 0 : _19.textColor) !== null && _20 !== void 0 ? _20 : setting.textColor};
              " title="${setting.atsign.path + atsignText}">${displayAtsign}</a>
            </span>`;
                replacedText = replacedText.replace(atsign, replaceText);
            }
            catch (error) {
                console.error(`Error fetching link title: ${error}`);
            }
        }
    }
    return replacedText;
}
exports.convertTextLink = convertTextLink;
