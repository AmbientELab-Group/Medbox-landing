module.exports = {
  siteMetadata: {
    title: "Ambient Landing Page",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `translations`,
        path: `${__dirname}/src/translations/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    `gatsby-transformer-json`,
  ],
};
