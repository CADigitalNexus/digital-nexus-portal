import * as React from "react"
import Header from "./header"
//import Footer from "./footer"
import Footer from '../components/Common/Footer/footer'
import Card from '@mui/material/Card';
import Grid from '../components/Common/Grid/Grid'
import Head from "./head"
import "../styles.css"

const Layout = (props) => {
  return (
    <>
      <Head {...props} />
      <Header />
      {props.children}
      
      <Grid container spacing={6}>
      </Grid>
      
      <Footer />
    </>
  )
}

export default Layout
