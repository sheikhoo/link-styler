# <img src="Logo.png" width="250" />

`link-styler` is a JavaScript package that helps you find links in text and replace them with a tag that has custom styling.

<a href="https://www.npmjs.com/package/link-styler"><img src="https://user-images.githubusercontent.com/11958698/222946410-f8c933d9-fff7-4c0f-9ca7-d60bc02a5f6e.png"  width="45" ></a> <a href="https://github.com/sheikhoo/link-styler"><img src="https://user-images.githubusercontent.com/11958698/222958629-a9503238-bb8e-4a45-820c-e0e696c5b4de.png"  width="45" ></a> <a href="https://sheikhoo.github.io/link-styler/example">demo</a> | <a href="https://github.com/sheikhoo/link-styler/issues">issues</a>

## Installation

You can install link-styler using npm:

```
npm install link-styler
```

### Usage

Here is an example of how to use link-styler:

```js
import { linkStyler } from 'link-styler';

linkStyler.start();
```

```html
<script src="https://unpkg.com/link-styler/dist/link-styler.js"></script>
<script>
  linkStyler.start();
</script>
```

### This will output the following:

![LinkStyler](https://user-images.githubusercontent.com/11958698/224471155-ab8a9df3-5d4e-4557-ac12-a91f77b61242.png)

By default, link-styler will style the link with `'#000000d9'` color and `'#a9a9a94f'` background color by border radius 15px. It will also add an external link icon. You can customize the styling by passing options to the linkStyler function:

```js
const options = {
  bg: true,
  bgColor: '#c7c7c7c2',
  textColor: '#000000d9',
  borderRadius: 15,
  showIcon: true,
  iconColor: true,
  underline: false,
  link: {
    pathnameLengthLimit: 20,
  },
  atsign: {
    enable: true,
    path: 'https://www.linkedin.com/in/',
    bg: false,
    textColor: '#e31a1ad9',
    showIcon: true,
    underline: true,
  },
  hashTag: {
    enable: true,
    path: 'https://www.linkedin.com/feed/hashtag/?keywords=',
    bg: false,
    textColor: '#0250ffd9',
    showIcon: true,
    underline: false,
  },
};

linkStyler.start(options);
```

## Options

`link-styler` accepts the following options:

| Option                   | Default Value | Type    | Optional | Description |
| ------------------------ | ------------- | ------- | -------- | ----------- |
| bg                       | `true`        | boolean | \*       | -           |
| bgColor                  | `'#a9a9a94f'` | string  | \*       | -           |
| textColor                | `'#000000d9'` | string  | \*       | -           |
| borderRadius             | `15`          | number  | \*       | -           |
| showIcon                 | `true`        | boolean | \*       | -           |
| iconColor                | `true`        | boolean | \*       | -           |
| underline                | `false`       | boolean | \*       | -           |
| link.pathnameLengthLimit | `20`          | number  | \*       | -           |
| link.bg                  |               | boolean | \*       | -           |
| link.bgColor             |               | string  | \*       | -           |
| link.textColor           |               | string  | \*       | -           |
| link.borderRadius        |               | number  | \*       | -           |
| link.showIcon            |               | boolean | \*       | -           |
| link.iconColor           |               | boolean | \*       | -           |
| link.underline           |               | boolean | \*       | -           |
| atsign.path              | `''`          | string  | \*       | -           |
| atsign.enable            | `true`        | boolean | \*       | -           |
| atsign.bg                | `false`       | boolean | \*       | -           |
| atsign.bgColor           |               | string  | \*       | -           |
| atsign.textColor         | `'#e31a1ad9'` | string  | \*       | -           |
| atsign.borderRadius      |               | number  | \*       | -           |
| atsign.showIcon          | `true`        | boolean | \*       | -           |
| atsign.iconColor         |               | boolean | \*       | -           |
| atsign.underline         | `true`        | boolean | \*       | -           |
| hashTag.enable           | `true`        | boolean | \*       | -           |
| hashTag.path             | `''`          | string  | \*       | -           |
| hashTag.bg               | `false`       | boolean | \*       | -           |
| hashTag.bgColor          |               | string  | \*       | -           |
| hashTag.textColor        | `'#0250ffd9'` | string  | \*       | -           |
| hashTag.borderRadius     |               | number  | \*       | -           |
| hashTag.showIcon         | `true`        | boolean | \*       | -           |
| hashTag.iconColor        |               | boolean | \*       | -           |
| hashTag.underline        | `false`       | boolean | \*       | -           |

## License

link-styler is licensed under the MIT License.
