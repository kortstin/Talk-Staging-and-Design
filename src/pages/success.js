import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"


const Success = () => (
    <Layout>
      <SEO title="Payment Success" />
      <div className="container-fluid">
      <img src={require("../images/undraw_super_thank_you_obwk.svg")} alt="Payment" className="image-success"/>
      <h1>Your Payment Was Successful</h1>
    </div>

    </Layout>
  )
  
  export default Success