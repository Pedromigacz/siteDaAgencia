import React from "react"
import { Helmet } from "react-helmet"

const SEO = () => {
    const title = 'Agência Pedro Migacz'
    const description = 'Somos uma agência especializada no desenvolvimento de ecommerces. Venha fazer um orçamento!'
    const url = 'https://pedromigacz.com'
    const image = 'https://api.pedromigacz.com/uploads/meta_Image_d4aa6f50eb.png'
    const fbAppId = '880823279352753'

  return (
    <Helmet>
    {/* General tags */}
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="image" content={image} />

    {/* OpenGraph tags */}
    <meta property="fb:app_id" content={fbAppId} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={url} />
    <meta property="og:title" content={title} />
    <meta property="og:image" content={image} />
    <meta property="og:description" content={description} />

    {/* Twitter Card tags */}
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:creator" content="@pedgoshini" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
  </Helmet>
  )
}

export default SEO
