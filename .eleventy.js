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

  return {
    dir: {
      input: "src",
      output: "www",
    },
  };
};
