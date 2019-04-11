import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        fileName: file(relativePath: { eq: "Dathan2.2.min.png" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.fileName.childImageSharp.fluid} />}
    
  />
)
export default Image
