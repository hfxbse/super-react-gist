# super-react-gist

Simple and flexible component that allows you to embed [GitHub Gists](https://gist.github.com/)
in [React](https://reactjs.org/) projects.

## Features

- Embed a **single file** from Gist repository!
- Embed **multiple files** from multiple Gist repositories!
- Embed the **whole Gist** repository!
- **Easy usage**: Just copy-paste the Gist's repository URL to embed the whole repository, or copy-paste the permalink
  of an individual file to include just that.
- Maximize Development Experience with **custom error handling**.
- **Lightweight**: ~9KB minified (~4kb if gzipped).
- Packaged as **UMD module** that can be loaded everywhere.
- **Works both on secret and public repositories**.

## Table of contents

- [Installation](#installation)
- [Component Properties](#component-properties)
- [Examples](https://hfxbse.github.io/super-react-gist/)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [Contributing](#contributing)
- [License](#license)

## Installation

### Through NPM

To install through npm run:

```bash
npm install super-react-gist@github:hfxbse/super-react-gist
```

## Component Properties

| Name               | Type        | Required | Description                                                                                    |
|:-------------------|:------------|:--------:|:-----------------------------------------------------------------------------------------------|
| `url`              | *string*    |    ✅     | The URL of the Gist repository or the permalink of an individual gist file.                    |
| `file`             | *string*    |          | Filename to include.                                                                           |
| `onLoad`           | *function*  |          | Callback triggered on Gist load.                                                               |
| `onError`          | *function*  |          | Callback triggered on fetch error.                                                             |
| `LoadingComponent` | *Component* |          | React component to render on Gist loading.                                                     |
| `ErrorComponent`   | *Component* |          | React component to render if Gist fetch fails.                                                 |
| `colorMode`        | *string*    |          | Color mode to apply. Available values are `light`, `dark`, and `auto`. `light` is the default. |

## Bugs and feature requests

Have a bug or a feature request? [Please open a new issue](https://github.com/hfxbse/super-react-gist/issues).

## Contributing

Please read through our contributing guidelines
in [CONTRIBUTING.md](https://github.com/hfxbse/super-react-gist/blob/master/CONTRIBUTING.md) file.

Editor preferences are available in the editor config for easy use in common text editors.
Read more and download plugins at [http://editorconfig.org](http://editorconfig.org).

## License

Code released under the [MIT License](https://opensource.org/licenses/MIT).
See [LICENSE.md](https://github.com/hfxbse/super-react-gist/blob/master/LICENSE.md) for more details.
