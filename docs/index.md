# link-styler
`link-styler` is a JavaScript package that helps you find links in text and replace them with a tag that has custom styling.

## Installation
You can install link-styler using npm:
```
npm install link-styler
```

### Usage
Here is an example of how to use link-styler:

```js
import linkStyler from 'link-styler';

linkStyler();
```

### This will output the following:
![New Project (5)](https://user-images.githubusercontent.com/11958698/222882482-1e9d0546-7484-4543-8db1-2eaf02a46cf5.png)


By default, link-styler will style the link with `'#000000d9'` color and `'#a9a9a94f'` background color by border radius 15px. It will also add an external link icon. You can customize the styling by passing options to the linkStyler function:

```js
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

| Option | Default Value | Description |
| --------------- | --------------- | --------------- |
| bg | `true` | - |
| bgColor | `'#a9a9a94f'` | - |
| textColor | `'#000000d9'` | - |
| borderRadius | `15` | - |
| showIcon | `true` | - |

## License
link-styler is licensed under the MIT License.
