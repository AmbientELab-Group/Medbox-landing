module.exports = {
  siteMetadata: {
    title: "Ambient Landing Page",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `translations`,
        path: `${__dirname}/src/locales/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
    `gatsby-transformer-json`,
  ],
};
