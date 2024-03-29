/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};

{
  /**
exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: '@babel/plugin-transform-react-jsx',
    options: {
      runtime: 'automatic',
    },
  });
};

exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`);
};
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions, page }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(
    `${__dirname}/src/containers/Charity/FeedSpotArticleSection/index.js`
  );
  const result = await graphql(`
    query {
      allFeedFeedSpot {
        edges {
          node {
            id
            title
            link
            content
          }
        }
      }
    }
  `);
  result.data.allFeedFeedSpot.edges.forEach((edge, index, edges) => {
    const prev = index === 0 ? null : edges[index - 1];
    const next = index === edges.length - 1 ? null : edges[index + 1];

    let trimedLinkSlug = edge.node.link
      .replace(/.*\/\/[^\/]*/
  //, '')
  {
    /*
      .replace('\n/', '')
      .replace(/\/$/, ``);

    if (trimedLinkSlug.includes('/')) {
      let tmpArray = trimedLinkSlug.split('/');
      trimedLinkSlug = tmpArray[tmpArray.length - 1];
    }
    result.data.allFeedFeedSpot.edges[index].node.slug = trimedLinkSlug;

    createPage({
      ...page,
      path: `${trimedLinkSlug}`,
      component: blogPostTemplate,
      context: {
        ...page,
        id: edge.node.id,
        title: edge.node.title,
        link: edge.node.link,
        content: edge.node.content,
        slug: trimedLinkSlug,
        prev,
        next,
        count: index,
        allPosts: result,
      },
    });
  });
};
 */
  }
}
