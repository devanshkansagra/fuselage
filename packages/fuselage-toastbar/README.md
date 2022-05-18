<!--header-->

<p align="center">
  <a href="https://rocket.chat" title="Rocket.Chat">
    <img src="https://github.com/RocketChat/Rocket.Chat.Artwork/raw/master/Logos/2020/png/logo-horizontal-red.png" alt="Rocket.Chat" />
  </a>
</p>

# `@rocket.chat/fuselage-toastbar`

> Fuselage ToastBar component

---

[![npm@latest](https://img.shields.io/npm/v/@rocket.chat/fuselage-toastbar/latest?style=flat-square)](https://www.npmjs.com/package/@rocket.chat/icons/v/latest) [![npm@next](https://img.shields.io/npm/v/@rocket.chat/fuselage-toastbar/next?style=flat-square)](https://www.npmjs.com/package/@rocket.chat/icons/v/next) ![react version](https://img.shields.io/npm/dependency-version/@rocket.chat/fuselage-toastbar/peer/react?style=flat-square) [![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://rocketchat.github.io/Rocket.Chat.Fuselage/fuselage-toastbar) ![npm downloads](https://img.shields.io/npm/dw/@rocket.chat/fuselage-toastbar?style=flat-square) ![License: MIT](https://img.shields.io/npm/l/@rocket.chat/fuselage-toastbar?style=flat-square)

![deps](https://img.shields.io/david/RocketChat/Rocket.Chat.Fuselage?path=packages%2Ffuselage-toastbar&style=flat-square) ![peer deps](https://img.shields.io/david/peer/RocketChat/Rocket.Chat.Fuselage?path=packages%2Ffuselage-toastbar&style=flat-square) ![dev deps](https://img.shields.io/david/dev/RocketChat/Rocket.Chat.Fuselage?path=packages%2Ffuselage-toastbar&style=flat-square) ![npm bundle size](https://img.shields.io/bundlephobia/min/@rocket.chat/fuselage-toastbar?style=flat-square)

<!--/header-->

## Install

<!--install-->

Firstly, install the peer dependencies (prerequisites):

```sh
npm i @rocket.chat/fuselage @rocket.chat/fuselage-polyfills react react-dom

# or, if you are using yarn:

yarn add @rocket.chat/fuselage @rocket.chat/fuselage-polyfills react react-dom
```

Add `@rocket.chat/fuselage-toastbar` as a dependency:

```sh
npm i @rocket.chat/fuselage-toastbar

# or, if you are using yarn:

yarn add @rocket.chat/fuselage-toastbar
```

<!--/install-->

## Contributing

<!--contributing(msg)-->

Contributions, issues, and feature requests are welcome!<br />
Feel free to check the [issues](https://github.com/RocketChat/Rocket.Chat.Fuselage/issues).

<!--/contributing(msg)-->

### Building

As this package dependends on others in this monorepo, before anything run the following at the root directory:

<!--yarn(build)-->

```sh
yarn build
```

<!--/yarn(build)-->

### Linting

To ensure the source is matching our coding style, we perform [linting](<https://en.wikipedia.org/wiki/Lint_(software)>).
Before commiting, check if your code fits our style by running:

<!--yarn(lint)-->

```sh
yarn lint
```

<!--/yarn(lint)-->

Some linter warnings and errors can be automatically fixed:

<!--yarn(lint-and-fix)-->

```sh
yarn lint-and-fix
```

<!--/yarn(lint-and-fix)-->

### Running tests

Whenever possible, add tests to describe exactly what your code do. You can run them by yourself:

<!--yarn(test)-->

```sh
yarn test
```

<!--/yarn(test)-->