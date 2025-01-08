import { parse } from "node-html-parser";
import { extname } from "path";

function isExternal(link) {
  const target = link.getAttribute("target");

  return "_blank" === target;
}

export default function (eleventyConfig, userOptions = {}) {
  const options = {
    screenReaderClass: "sr-only",
    icon: "↗",
    iconClass: undefined,
    newWindowText: "new window",
    selector: "a",
    ...userOptions,
  };

  let suffix = `<span class="${options.screenReaderClass}">&nbsp;-&nbsp;${options.newWindowText}</span>`;
  suffix += `<span title="${options.newWindowText}" ${
        options.iconClass && 'class="' + options.iconClass + '"'
      } aria-hidden="true">${options.icon}</span>`;

  eleventyConfig.addTransform(options.extensions, (content, outputPath) => {
    if (outputPath && extname(outputPath) === ".html") {
      const root = parse(content);
      const links = root.querySelectorAll(options.selector);
      links.forEach((link) => {
        if (isExternal(link)) {
          link.append(suffix);
        }
      });
      return root.toString();
    }
    return content;
  });
}
