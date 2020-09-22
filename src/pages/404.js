import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../../src/components/layout.css"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="container-fluid">
      <img src={require("../images/undraw_page_not_found_su7k.svg")} alt="404 Page Not Found"/>
    </div>
  </Layout>
)

export default NotFoundPage
