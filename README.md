# ReactJS Boilerplate

An light and clear boilerplate to kickstart projects using ReactJS

**Features**

- ⚛️ ReactJs 16.13
- 🎨 Write SCSS & future CSS with PostCSS + preset-env
- 🍏 SVG icons library
- 👁 Lint your code with ESLint & Stylelint
- 🌈 Prettier for consistent code style
- 🐶 Husky + lint-staged for code quality assurance
- 🔀 Routing with react-router
- ⚙️ Editorconfig file for consistent indents
- 🔑 Structure for use absolute path (scripts and styles)
- 📂 Assets management from loader 
- 🥳 Included example app to shows how this all works together

## Getting started

Make sure you have Node and NPM installed and run:

```sh
$ npm install
```

### ⌨️ Development

Once all dependencies have been installed you can start development.

```sh
$ npm run dev
```

### 🖥 Production

To run your application in production make sure to run a build first:

```sh
$ npm run build
```

And then start you application with a provided port number (defaults to 3000 if not provided):

```sh
$ PORT=8080 npm run start
```

### 🧐 Linters

The boilerplate provides a couple of linters to help you keep an eye on code consistency.

You can use each of them separately using the following commands:

```sh
$ npm run lint:js
$ npm run lint:scss
```

*`TIP: To get the most out of your linters install the corresponding (Stylelint, ESLint) plugins for your editor or IDE`*

**Prettier**

Prettier helps you to enforce consistent (opinionated) code style. If possible, you can tell your editor to format you code when you save a file. If you are not able to do this, you can run prettier manually using:

```sh
$ npm run prettier
```

*`TIP: To enable auto formatter with prettier, install prettier extension to your IDE. (for active this feature in webstorm, add file watcher in preferences)`*

## Modules

### SCSS

**Import with default path**

By default the path `./src/common/css` is configured as an included path for our scss loader.
This means you can import any of this folder's files directly without the relative or absolute path:

```css
@import 'variables';
@import 'colors';
```

### Absolute path

To easily import modules can use absolute paths.

To add new path, add your path to alias in `webpack config` and `babelrc` files and to sense your IDE, add your target path to `jsconfig` file.

```js
import Header from '@components/Header'
import Footer from '@utils/device'
```
