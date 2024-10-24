const { feedPlugin } = require("@11ty/eleventy-plugin-rss");

module.exports = function (config) {
  config.addPassthroughCopy("./src/styles");
  config.addPassthroughCopy({ assets: "/" });
  config.addPassthroughCopy({ static: "/" });

  config.addWatchTarget("./src/styles/");
  config.addWatchTarget("./assets/styles/");

  config.addFilter("randomItem", (arr) => {
    arr.sort(() => {
      return 0.5 - Math.random();
    });
    return arr.slice(0, 1);
  });

  config.addFilter("utc", (date) => date.toUTCString())
  config.addFilter("iso", (date) => date.toISOString())

  config.addFilter("excerpt", (post, len) => {
    const content = post.replace(/(<([^>]+)>)/gi, "");
    return content.substr(0, content.lastIndexOf(" ", 200)) + "...";
  });

  config.addPlugin(feedPlugin, {
    type: "atom",
    outputPath: "/feed.xml",
    collection: {
      name: "post",
      limit: 15,
    },
    metadata: {
      language: "en",
      title: "evvil.town",
      subtitle: "the ramblings of an outdoor shut-in",
      base: "https://evvil.town/",
      author: {
        name: "wren",
        email: "",
      }
    }
  });

  return {
    dir: {
      input: "src",
      output: "www",
    },
  };
};
