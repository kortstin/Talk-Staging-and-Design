import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import HeroSection from "../components/HeroSection"
import InfoSection from "../components/InfoSection"


const homeObjOne = {
  primary: true,
  lightBg: false,
  lightTopLine: true,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Marketing Agency',
  headline: 'Lead Generation Specialist for Online Businesses',
  description:
    'We help business owners increase their revenue. Our team of unique specialist can help you achieve your business goals.',
  buttonLabel: 'Get Started',
  imgStart: '',
  img: require('../images/undraw_interior_design_9i70.svg'),
  alt: 'Interior Designer',
  start: ''
};

const homeObjTwo = {
  primary: false,
  lightBg: true,
  lightTopLine: false,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Marketing Agency',
  headline: 'Lead Generation Specialist for Online Businesses',
  description:
    'We help business owners increase their revenue. Our team of unique specialist can help you achieve your business goals.',
  buttonLabel: 'Get Started',
  imgStart: 'start',
  img: require('../images/undraw_Designer_mindset_re_2w1k.svg'),
  alt: 'Interior Designer',
  start: ''
};

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection />
    <InfoSection {...homeObjOne} />
    <Image />
    <InfoSection {...homeObjTwo} />


  </Layout>
)

export default IndexPage
