import React from "react"
import Layout from "../components/layout"
import Pricing from "../components/Pricing"
import Products from "../components/Products/Products"
import SEO from "../components/seo"

const Services = () => (
  <Layout>
    <SEO title="Services" />
    <h1 className="services">Services</h1>
    <Products />
  </Layout>
)

export default Services
