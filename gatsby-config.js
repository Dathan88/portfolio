module.exports = {
  siteMetadata: {
    title: `Dathan Spencer`,
    description: `Webpage for personal Javascript related projects I have completed.`,
    author: `Dathan Spencer`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-catch-links`,
    `gatsby-transformer-remark`,
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
          name: `pages`,
          path: `${__dirname}/src/pages`,
        },
      },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dathan Spencer Portfolio`,
        short_name: `DS Portfolio`,
        start_url: `/`,
        background_color: `#444`,
        theme_color: `#000`,
        display: `standalone`,
        icon: `src/images/metallicLogo_negative.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
