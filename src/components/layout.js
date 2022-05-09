import * as React from "react"
import Header from "./header"
//import Footer from "./footer"
import Footer from '../components/Common/Footer/footer'
import Proposal from '../components/Common/proposal/proposal'
import Head from "./head"
import "../styles.css"

const Layout = (props) => {
  return (
    <>
      <Head {...props} />
      <Header />
      {props.children}
      <Proposal />
      <Footer />
    </>
  )
}

export default Layout
