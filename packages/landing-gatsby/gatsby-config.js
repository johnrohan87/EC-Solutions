module.exports = {
  siteMetadata: {
    title: `EC Solutions`,
    description: `Crisis Management`,
    author: `@johnrohan87`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        minify: false, // Breaks styles if not set to false
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `common`,
        path: `${__dirname}/src/common/assets/`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/common/data/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: [
            'Poppins:300,400,500,600,700',
            'DM Sans:100,300,400,400i,500,500i,600,700,700i',
            'B612:400,400i,700,700i',
            'Heebo:300,400,500,600,700,800',
            'Raleway:500,600',
            'Open Sans:300,400,600,700,800',
            'Lato:300,400,700',
            'Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i',
          ],
        },
      },
    },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `http://static.userland.com/gems/backend/rssTwoExample2.xml`,
        name: `ExampleRSS`,
        // Optional
        // Read parser document: https://github.com/bobby-brennan/rss-parser#readme
        parserOption: {
          customFields: {
            item: ['itunes:duration'],
          },
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
