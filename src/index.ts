interface Setting {
  bg: boolean;
  bgColor: string;
  textColor: string;
  borderRadius: number;
  showIcon: boolean;
}

enum Type {
  ONLOAD = 0,
  CONVERT = 1,
}

let defaultSetting: Setting = {
  bg: true,
  bgColor: '#a9a9a94f',
  textColor: '#000000d9',
  borderRadius: 15,
  showIcon: true,
};

let setting: Setting;

export function start(s: Setting = defaultSetting) {
  setting = s;
  replaceLinks(Type.ONLOAD);
}

export function convert(text: string, s: Setting = defaultSetting) {
  setting = s;
  return replaceLinks(Type.CONVERT, text);
}

function replaceLinks(type: Type, t: string = '') {
  if (type === Type.ONLOAD) {
    if (typeof window !== 'undefined') {
      window.addEventListener('load', function () {
        // Find all elements in the page that contain text
        const elements = document.querySelector('body');

        getAllElements(elements);
      });
    }
  } else if (type === Type.CONVERT) {
    return convertText(t);
  }
}

function getAllElements(node) {
  console.log('node --> ', node);

  if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '') {
    const parentTag = node.parentNode;
    if (parentTag.tagName !== 'A') {
      let html = parentTag.innerHTML;
      parentTag.innerHTML = html.replace(
        node.textContent,
        convertText(node.textContent)
      );
    }
  } else if (node.nodeType === Node.ELEMENT_NODE) {
    if (node.tagName !== 'A') {
      let len = node.childNodes.length;
      let n = node;
      for (let i = 0; i < len; i++) {
        getAllElements(n.childNodes[i]);
      }
    }
  }
}

function convertText(t: string): string {
  const text = t;

  const regex =
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/g;
  let replacedText = text;

  // Find all links within the text and replace them with their titles
  let match;
  while ((match = regex.exec(text)) !== null) {
    const link = match[0];

    try {
      let replaceText = `<span style="
                position: relative;
                background: ${setting.bgColor};
                padding: 1.5px 3px;
                border-radius: ${setting.borderRadius}px;
                align-items: center;
            ">`;
      replaceText += setting.showIcon
        ? `<span style="
                  position: absolute;
                  top: 3px;
              ">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
                  <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                  <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                </svg>
              </span>`
        : ``;
      replaceText += `<a href="${link}" style="
                  margin-left: 19px;
                  text-decoration: none;
                  color: ${setting.textColor};
              ">${link}</a>
            </span>`;
      replacedText = replacedText.replace(link, replaceText);
    } catch (error) {
      console.error(`Error fetching link title: ${error}`);
    }
  }
  return replacedText;
}
