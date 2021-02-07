import React from "react"
import '../styles/global.css'
import {
  Home,
  AboutUs,
  SkillListsContainer,
  Footer,
  Navbar,
  SEO
} from '../components'

import ContactContextProvider from '../contexts/ContactContext.js'

const IndexPage = () => (
  <ContactContextProvider>
    <SEO />
    <Navbar />
    <Home />
    <AboutUs />
    <SkillListsContainer />
    <Footer />
  </ContactContextProvider>
)

export default IndexPage
