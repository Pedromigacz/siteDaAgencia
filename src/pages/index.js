import React from "react"
import '../styles/global.css'
import {
  Home,
  AboutUs,
  SkillListsContainer,
  Footer,
  Navbar
} from '../components'

const IndexPage = () => (
  <div>
    <Navbar />
    <Home />
    <AboutUs />
    <SkillListsContainer />
    <Footer />
  </div>
)

export default IndexPage
