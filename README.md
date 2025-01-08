# eleventy-plugin-accessible-external-links

A very loooong name for a basic plugin that does only one thing: add informations that a link is going to open a new window.

## Installation

With NPM

`npm install -D eleventy-plugin-accessible-external-links`

With Yarn

`yarn add -D eleventy-plugin-accessible-external-links`

## Usage

Add this transform in yout eleventy config file.

```js
const accessibleExternalLinks = require("eleventy-plugin-accessible-external-links");

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(accessibleExternalLinks, {
    screenReaderClass: "sr-only",
    icon: "↗",
    iconClass: undefined,
    newWindowText: "new window",
    selector: "a",
  });
};
```

## Description

This plugin adds two informations:

- An indication for screen readers that that link opens a new window
- A visual indicator

An example is worth a thousand words. This link:

```html
<a href="https://www.example.org" target="_blank" rel="noopener"> Example </a>
```

turns into

```html
<a href="https://www.example.org" target="_blank" rel="noopener">
  Example
  <!-- This gets added -->
  <span class="sr-only"> - new window</span>
  <span title="new window" aria-hidden="true">↗</span>
  <!--  -->
</a>
```

## Options

| Name              | Description                                                                          |
| ----------------- | ------------------------------------------------------------------------------------ |
| screenReaderClass | (optional) The CSS class applied to the suffix new window text. Default to "sr-only" |
| icon              | (optional) Default to "↗"                                                            |
| iconClass         | (optional) The CSS class applied to the icon wrapper. Default to                     |
| `undefined`.      |
| newWindowText     | (optional) The text that annonce the new window opening. Default to "new window"     |
| selector          | (optional) Css-ish way to target anchor in the document. Default to "a"              |

## Credits

Based on [a post by Julie Moynat on Mastodon](https://mastodon.design/@juliemoynat@eldritch.cafe/113792038936349405)

Structure heavily inspired by [eleventy-plugin-external-links](https://github.com/vimtor/eleventy-plugin-external-links)
