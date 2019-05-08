import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTitle from "../components/PageTitle"
import SubTitle from "../components/SubTitle"
import Project from "../components/Project"

const titleProps = ["My", "Work"]
const subProps = "Check out some of my projects..."
const projectProps = [
  {
    href: "https://dathan88.github.io/battleship/",
    imgId: "item1",
    alt: "logo",
    eyeLink: "#!",
    eyeClass: "btn-light",
    eyeIconClass: "fas fa-eye",
    eyeTitle: "Project",
    hubLink: "#!",
    hubClass: "btn-dark",
    hubIconClass: "fas fa-github",
    hubTitle: "Github",
  },
  {
    href: "https://dathan88.github.io/Etch-a-Sketch",
    imgId: "item2",
    alt: "logo",
    eyeLink: "#!",
    eyeClass: "btn-light",
    eyeTitle: "Project",
    hubLink: "#!",
    hubClass: "btn-dark",
    hubTitle: "Github",
  },
  {
    href: "https://dathan88.github.io/Calculator",
    imgId: "item3",
    alt: "logo",
    eyeLink: "#!",
    eyeClass: "btn-light",
    eyeTitle: "Project",
    hubLink: "#!",
    hubClass: "btn-dark",
    hubTitle: "Github",
  },
  {
    href: "https://dathan88.github.io/Library",
    imgId: "item4",
    alt: "logo",
    eyeLink: "#!",
    eyeClass: "btn-light",
    eyeTitle: "Project",
    hubLink: "#!",
    hubClass: "btn-dark",
    hubTitle: "Github",
  },
]

const ProjectsPage = ({ data }) => (
  <Layout>
    <SEO title="My Projects" />
    <main id="projects">
      <PageTitle titleProps={titleProps} />
      <SubTitle subProps={subProps} />
      <Project projectProps={projectProps} data={data} />
    </main>
  </Layout>
)

export default ProjectsPage
export const pageQuery = graphql`
  query {
    battleship: file(relativePath: { eq: "battleship.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    placeholder1: file(relativePath: { eq: "etch-sketch.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    placeholder2: file(relativePath: { eq: "calc.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    placeholder3: file(relativePath: { eq: "books.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

// Etch-a-Sketch gif
// https://media.giphy.com/media/37QN7rVCX8rySQ3RUR/giphy.gif
