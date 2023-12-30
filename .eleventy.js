module.exports = function (config) {
  config.addPassthroughCopy({ public: "/" });
  config.addPassthroughCopy("img");
  config.addPassthroughCopy("./src/styles");
  config.addPassthroughCopy({ static: "/" });

  config.addWatchTarget("./src/styles/");

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
