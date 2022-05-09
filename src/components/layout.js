import * as React from "react"
import Header from "./header"
//import Footer from "./footer"
import Footer from '../components/Common/Footer/footer'
import Navbar from "../components/Common/Navbar/navbar"
import Head from "./head"
import "../styles.css"

const Layout = (props) => {
  return (
    <>
      <Head {...props} />
      <Header />
      <Navbar />
      {props.children}
      <Footer />
    </>
  )
}

export default Layout
