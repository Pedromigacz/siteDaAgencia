import React from "react"
import '../styles/global.css'
import {
  Home,
  AboutUs,
  SkillListsContainer,
  Footer
} from '../components'

const IndexPage = () => (
  <div>
    <Home />
    <AboutUs />
    <SkillListsContainer />
    <Footer />
  </div>
)

export default IndexPage
