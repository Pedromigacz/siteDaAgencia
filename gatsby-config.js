module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Oswald\:300,400`,
          `Roboto Mono\:300,400,500` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.GATSBY_STRAPI_URL,
        queryLimit: 1000, // Default to 100
        contentTypes: [`assets`, `skills`],
        //If using single types place them in this array.
        singleTypes: [`contact`, `curriculum`],
        // Possibility to login with a strapi user, when content types are not publically available (optional).
        loginData: {
          identifier: "",
          password: "",
        },
      },
    },
  ],
}
