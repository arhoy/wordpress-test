const path = require(`path`);
const { slash } = require(`gatsby-core-utils`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // query content for WordPress posts
  const result = await graphql(`
    query {
      allWordpressPage {
        nodes {
          id
          acf {
            slug
          }
        }
      }
    }
  `);

  const pageTemplate = path.resolve(`./src/templates/PropertyPage.js`);
  result.data.allWordpressPage.nodes.forEach((node) => {
    createPage({
      // `path` will be the url for the page
      path: node.acf.slug,
      // specify the component template of your choice
      component: slash(pageTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this posts's data.
      context: {
        id: node.id,
      },
    });
  });
};
