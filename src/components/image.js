import React from "react"
import {graphql, useStaticQuery} from 'gatsby'
import Img from "gatsby-image"
import './image.css'


const Image = () => {

    const data = useStaticQuery(graphql`
    query MyQuery {
        allFile(filter: {extension: {regex: "/(jpg)|(png)|(jpeg)/"}, name: {nin: ["background1", "background2", "background3"]}}) {
          edges {
            node {
              base
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                } 
              }
            }
          }
        }
      }`)

      return (
          <div className="image-container">
              
              <div className="image-grid">
                  {data.allFile.edges.map((image, key) => (
                      <Img key={key}
                      className="image-item"
                      fluid={image.node.childImageSharp.fluid}
                      alt={image.node.base.split('.')[0]}
                      />
                  ))}
              </div>
          </div>
      )
}

export default Image
