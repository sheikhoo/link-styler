# link-styler

`link-styler` is a JavaScript package that helps you find links in text and replace them with a tag that has custom styling.

<a href="https://www.npmjs.com/package/link-styler"><img src="https://user-images.githubusercontent.com/11958698/222946410-f8c933d9-fff7-4c0f-9ca7-d60bc02a5f6e.png"  width="45" ></a> <a href="https://github.com/sheikhoo/link-styler"><img src="https://user-images.githubusercontent.com/11958698/222958629-a9503238-bb8e-4a45-820c-e0e696c5b4de.png"  width="45" ></a>

## Installation

You can install link-styler using npm:

```
npm install link-styler
```

### Usage

Here is an example of how to use link-styler:

```
import linkStyler from 'link-styler';

linkStyler();
```

### This will output the following:

![New Project (5)](https://user-images.githubusercontent.com/11958698/222882482-1e9d0546-7484-4543-8db1-2eaf02a46cf5.png)

By default, link-styler will style the link with `'#000000d9'` color and `'#a9a9a94f'` background color by border radius 15px. It will also add an external link icon. You can customize the styling by passing options to the linkStyler function:

```
const options = {
    bg: true,
    bgColor: '#a9a9a94f',
    textColor: '#000000d9',
    borderRadius: 15,
    showIcon: true,
  };

linkStyler(options);
```

## Options

`link-styler` accepts the following options:

| Option       | Default Value | Description |
| ------------ | ------------- | ----------- |
| bg           | `true`        | -           |
| bgColor      | `'#a9a9a94f'` | -           |
| textColor    | `'#000000d9'` | -           |
| borderRadius | `15`          | -           |
| showIcon     | `true`        | -           |

## License

link-styler is licensed under the MIT License.
