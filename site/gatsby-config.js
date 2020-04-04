/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
module.exports = {
  siteMetadata: {
    title: `WordPress-docker-image  Gatsbyjs [YOUR CLIENT] site`,
    author: `Martin Anderen `,
    description: `A Gatsby WordPress site special love for Netlify`,
    siteUrl: `https://gatsby-wordpress-docker.netlify.com`,
    social: {
      twitter: `webmaeistro`,
    },
    postPrefix : '/blog',
    pagePrefix: '',
  },
  plugins: [
    'wordpress-gatsby-preview-starter',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
