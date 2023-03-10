import { Data } from "../constants/data";
import { Setting } from "../interface";

export function convertTextAtsign(t:string,setting: Setting):string{
    const text = t;
    const regex =
    /([@])\w+/g;
    let replacedText = text;

  // Find all links within the text and replace them with their titles
  let match;
  while ((match = regex.exec(text)) !== null) {
    const atsign = match[0];

    try {
      let atsignText = atsign.replace('@','');

      let icon = Data["atsign"].svg;
      let displayAtsign =
        `<span style='font-weight: bold;'>${atsignText}</span>`;
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
      <a href="${setting.atsignPath+atsignText}" style="
                  margin-left: 21px;
                  text-decoration: none;
                  color: ${setting.textColor};
              " title="${setting.atsignPath+atsignText}">${displayAtsign}</a>
            </span>`;
      replacedText = replacedText.replace(atsign, replaceText);
    } catch (error) {
      console.error(`Error fetching link title: ${error}`);
    }
  }
  return replacedText;
}