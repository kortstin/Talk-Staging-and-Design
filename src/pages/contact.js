import React from "react"
import Layout from "../components/layout"
import ContactForm from "../components/ContactForm/ContactForm"
import ContactSection from '../components/ContactSection'
import SEO from "../components/seo"

const contactObjOne = {
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Want to Reach Out?',
  headline: 'Leave Us a Message Below',
  description:
    'We would love to hear from you and and will get back with you as soon as possible.',
  imgStart: '',
  img: require('../images/undraw_contact_us_15o2.svg'),
  alt: 'Credit Card'
};

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <ContactSection {...contactObjOne} />
    <ContactForm />
    
  </Layout>
)

export default Contact