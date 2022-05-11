import * as React from "react"
//import Header from "../components/Common/header"
import Footer from "../components/Common/footer"
import Grid from "../components/Common/grid"
import Navbar from "../components/Common/navBar"
import Carousel from "../components/Common/carousel"
import Paper from "../components/Common/paper"

// Styles
import "../components/Common/styles/reset.css"
import "../components/Common/styles/accessibility.css"
import "../components/Common/styles/global.module.css"
import "../components/Common/fonts/fonts.css"
import * as styles from "./layout.module.css"

const Layout = (props) => {
  return (
    <>
      <Navbar />
      <Carousel />
      <Grid />
      <Paper />
      <Footer />
    </>
  )
}

export default Layout
