import { Data } from '../constants/data';
import { Setting } from '../interface';

export function convertTextLink(t: string, setting: Setting): string {
  const text = t;

  const regexLink =
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/g;
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

      let icon = Data[hostName] ? Data[hostName].svg : Data['defualt'].svg;
      let displayLink = `<span style='font-weight: bold;'>${displayHostName}</span>${
        url.pathname.length > setting.link.pathnameLengthLimit
          ? url.pathname.substring(0, setting.link.pathnameLengthLimit) + '...'
          : url.pathname
      }`;
      let replaceText = `<span style="
                  position: relative;
                  ${
                    setting.link?.bg ?? setting.bg
                      ? `background: ${
                          setting.link?.bgColor ?? setting.bgColor
                        }`
                      : ``
                  };
                  padding: 0px 3px;
                  border-radius: ${
                    setting.link?.borderRadius ?? setting.borderRadius
                  }px;
                  align-items: center;
                  white-space: nowrap;
                  font-size: 0.9em;
              ">
              ${
                setting.link?.showIcon ?? setting.showIcon
                  ? `<span style="
                    position: absolute;
                    top: 3px;
                    color: ${
                      setting.link?.iconColor ?? setting.iconColor
                        ? Data[hostName]
                          ? Data[hostName].color
                          : setting.link?.textColor ?? setting.textColor
                        : setting.link?.textColor ?? setting.textColor
                    };
                    margin-left: 2px;
                ">
                  ` +
                    icon +
                    `
                </span>`
                  : ``
              }
        <a href="${link}" style="
                    ${setting.showIcon ? `margin-left: 21px;` : ``}
                    ${
                      setting.link?.underline ?? setting.underline
                        ? `text-decoration: underline`
                        : `text-decoration: none`
                    };
                    color: ${setting.link?.textColor ?? setting.textColor};
                " title="${link}">${displayLink}</a>
              </span>`;
      replacedText = replacedText.replace(link, replaceText);
    } catch (error) {
      console.error(`Error fetching link title: ${error}`);
    }
  }

  if (setting.hashTag && setting.hashTag.enable) {
    while ((match = regexHashTag.exec(text)) !== null) {
      const hashTag = match[0];
      try {
        let hashTagText = hashTag.replace('#', '');
        let icon = Data['hashTag'].svg;
        let displayHashTag = `<span style='font-weight: bold;'>${
          setting.hashTag?.removeHashTagChar ? hashTagText : hashTag
        }</span>`;

        let replaceText = `<span style="
                position: relative;
                ${
                  setting.hashTag?.bg ?? setting.bg
                    ? `background: ${
                        setting.hashTag?.bgColor ?? setting.bgColor
                      }`
                    : ``
                };
                padding: 0px 3px;
                border-radius: ${
                  setting.hashTag?.borderRadius ?? setting.borderRadius
                }px;
                align-items: center;
                white-space: nowrap;
                font-size: 0.9em;
            ">
            ${
              setting.hashTag?.showIcon ?? setting.showIcon
                ? `<span style="
                  position: absolute;
                  top: 3px;
                  color: ${setting.hashTag?.textColor ?? setting.textColor};
                  margin-left: 2px;
              ">
                ` +
                  icon +
                  `
              </span>`
                : ``
            }
      <a href="${setting.hashTag.path + hashTagText}" style="
                  ${
                    setting.hashTag?.showIcon ?? setting.showIcon
                      ? `margin-left: 21px;`
                      : ``
                  }
                  ${
                    setting.hashTag?.underline ?? setting.underline
                      ? `text-decoration: underline`
                      : `text-decoration: none`
                  };
                  color: ${setting.hashTag?.textColor ?? setting.textColor};
              " title="${
                setting.hashTag.path + hashTagText
              }">${displayHashTag}</a>
            </span>`;
        replacedText = replacedText.replace(hashTag, replaceText);
      } catch (error) {
        console.error(`Error fetching link title: ${error}`);
      }
    }
  }

  if (setting.atsign && setting.atsign.enable) {
    while ((match = regexAtsign.exec(text)) !== null) {
      const atsign = match[0];

      try {
        let atsignText = atsign.replace('@', '');

        let icon = Data['atsign'].svg;
        let displayAtsign = `<span style='font-weight: bold;'>${
          setting.atsign?.removeAtsignChar ? atsignText : atsign
        }</span>`;
        let replaceText = `<span style="
                position: relative;
                ${
                  setting.atsign?.bg ?? setting.bg
                    ? `background: ${
                        setting.atsign?.bgColor ?? setting.bgColor
                      }`
                    : ``
                };
                padding: 0px 3px;
                border-radius: ${
                  setting.atsign.borderRadius ?? setting.borderRadius
                }px;
                align-items: center;
                white-space: nowrap;
                font-size: 0.9em;
            ">
            ${
              setting.atsign?.showIcon ?? setting.showIcon
                ? `<span style="
                  position: absolute;
                  top: 3px;
                  color: ${setting.atsign?.textColor ?? setting.textColor};
                  margin-left: 2px;
              ">
                ` +
                  icon +
                  `
              </span>`
                : ``
            }
      <a href="${setting.atsign.path + atsignText}" style="
                  ${
                    setting.atsign?.showIcon ?? setting.showIcon
                      ? `margin-left: 21px;`
                      : ``
                  }
                  ${
                    setting.atsign?.underline ?? setting.underline
                      ? `text-decoration: underline`
                      : `text-decoration: none`
                  };
                  color: ${setting.atsign?.textColor ?? setting.textColor};
              " title="${setting.atsign.path + atsignText}">${displayAtsign}</a>
            </span>`;
        replacedText = replacedText.replace(atsign, replaceText);
      } catch (error) {
        console.error(`Error fetching link title: ${error}`);
      }
    }
  }

  return replacedText;
}
