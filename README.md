> This repo has been archived and moved [here](https://github.com/etn-ccis/blui-react-component-library).

# Brightlayer UI React Components

[![](https://img.shields.io/circleci/project/github/brightlayer-ui/react-component-library/master.svg?style=flat)](https://circleci.com/gh/brightlayer-ui/react-component-library/tree/master)
![npm](https://img.shields.io/npm/v/@brightlayer-ui/react-components?label=%40brightlayer-ui%2Freact-components) [![codecov](https://codecov.io/gh/brightlayer-ui/react-component-library/branch/master/graph/badge.svg?token=HQFW5YF7WP)](https://codecov.io/gh/brightlayer-ui/react-component-library)

This is a library of re-usable React components for use in Brightlayer UI applications. For the most part, these components are meant to simplify building your application by providing drop-in components that implement common use cases in Brightlayer UI and eliminate the need for multiple teams to build their own components for these.

Refer to the [Component Library](https://brightlayer-ui-components.github.io/react) API documentation site for a list of available components or see the repository [documentation](https://github.com/brightlayer-ui/react-component-library/tree/master/docs) for each individual component.

## Installation

To install the Brightlayer UI react components from NPM as a dependency for your project, you can run the following command in your project root:

```shell
yarn add @brightlayer-ui/react-components
```

> **NOTE**: This install command will install the package from NPM. If you are a Brightlayer UI developer working with components locally, you will want to follow the manual linking instructions - see below.

## Building the Library

To work with this library, first clone down the repository and install dependencies:

```shell
git clone https://github.com/brightlayer-ui/react-component-library
cd react-component-library
yarn initialize
```

The library can be built by running the following command. The resulting output will be in the /dist folder.

```shell
yarn build
```

## Using with @brightlayer-ui/react-themes

We recommend using this library in conjunction with [@brightlayer-ui/react-themes](https://www.npmjs.com/package/@brightlayer-ui/react-themes). If you are using version 6.0.0+ of the Brightlayer UI themes, you must upgrade to at least version 5.1.0 of @brightlayer-ui/react-components or you may see some unintended default styles on some components.

## Running the demo projects

This repository comes with two demo projects found within the `/demos` folder.
The first is a [Storybook](https://storybook.js.org/) application that allows you to see the components in isolation and interact with their properties. The second is a Showcase project (from [react-showcase-demo](https://github.com/brightlayer-ui/react-showcase-demo)) that shows a combination of components in the context of a realistic interface.

You can build, link, and start the demo applications in a single step by calling either

```shell
yarn start:storybook
```

or

```shell
yarn start:showcase
```

from the root directory.

## Using the Components

See the [documentation](https://github.com/brightlayer-ui/react-component-library/tree/master/docs) for information on using these components.

## Browser Support

Brightlayer UI libraries will work with any modern browser. For details refer to our [Browser Support](https://brightlayer-ui.github.io/development/frameworks-web/react#browser-support) documentation.
