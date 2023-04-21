const path = require("path");
const pages = require("./src/data/page.json");

exports.createPages = async ({ actions }) => {
  pages.forEach((page) => {
    console.log(page.title);
    actions.createPage({
      path: "/" + page.title.toLowerCase(),
      component: path.resolve("./src/templates/page.js"),
      context: page,
    });
  });
};
