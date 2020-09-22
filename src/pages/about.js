import React from "react"
import "../../src/components/layout.css"
import AboutSection from "../components/AboutSection"
import Layout from "../components/layout"
import SEO from "../components/seo"


export const aboutObjOne = {
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Tresina Lockhart',
  headline: 'Founder',
  description:
    'Get access to our exclusive diamond card that allows you to  send unlimited transactions without getting charged any fees',
  imgStart: 'start',
  img: require('../images/undraw_female_avatar_w3jk.svg'),
  alt: 'Tresina Lockhart Photo'
};

const About = () => (
  <Layout>
    <SEO title="About" />
    <h1 className="about">About</h1>
    <AboutSection {...aboutObjOne}/>
  </Layout>
)

export default About
