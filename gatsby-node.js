exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  // Creates namespace from the filename/path
  const pageFileNameRegex = /([^\/]+)(?=\.)(?!=\/)/;
  const [ns] = page.componentPath.match(pageFileNameRegex);

  deletePage(page);
  createPage({
    ...page,
    context: {
      ...page.context,
      ns,
    },
  });
};
