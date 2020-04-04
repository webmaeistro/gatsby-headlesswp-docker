module.exports = {
  siteMetadata: {
    title: `WordPress + Gatsby + Preview 4 REPLACE-YOUR-DOMAIN`,
    author: `Martin Andersen`,
    description: `A starter for WordPress + Gatsby that supports live previews.`,
    siteUrl: `https://REPLACE-YOUR-DOMAIN.ai`,
    social: {
      twitter: `REPLACE-YOUR-DOMAINhumans`
    }
  },
  plugins: [
    {
      resolve: "gatsby-source-graphql-universal",
      options: {
        typeName: "WPGraphQL",
        fieldName: "wpgraphql",
        url: `http://localhost:3030/graphql`
      }
    }
  ]
};
