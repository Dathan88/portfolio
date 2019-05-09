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
    number: 0,
    href: "#!",
    imgId: "item1",
    alt: "logo",
    eyeLink: "https://dathan88.github.io/battleship",
    eyeClass: "btn-light",
    eyeIconClass: "fas fa-eye",
    eyeTitle: "Project",
    hubLink: "https://github.com/Dathan88/battleship",
    hubClass: "btn-dark",
    hubIconClass: "fas fa-github",
    hubTitle: "Github",
    gif: "https://media.giphy.com/media/1wogBSJ7N0EOrPl16n/giphy.gif",
  },
  {
    number: 1,
    href: "#!",
    imgId: "item2",
    alt: "logo",
    eyeLink: "https://dathan88.github.io/Etch-a-Sketch",
    eyeClass: "btn-light",
    eyeTitle: "Project",
    hubLink: "https://github.com/Dathan88/Etch-a-Sketch",
    hubClass: "btn-dark",
    hubTitle: "Github",
    gif: "https://media.giphy.com/media/37QN7rVCX8rySQ3RUR/giphy.gif",
  },
  {
    number: 2,
    href: "#!",
    imgId: "item3",
    alt: "logo",
    eyeLink: "https://dathan88.github.io/Calculator",
    eyeClass: "btn-light",
    eyeTitle: "Project",
    hubLink: "https://github.com/Dathan88/Calculator",
    hubClass: "btn-dark",
    hubTitle: "Github",
    gif: "https://media.giphy.com/media/wsUDJZ6ZVcSdo5AI7f/giphy.gif",
  },
  {
    number: 3,
    href: "#!",
    imgId: "item4",
    alt: "logo",
    eyeLink: "https://dathan88.github.io/Library",
    eyeClass: "btn-light",
    eyeTitle: "Project",
    hubLink: "https://github.com/Dathan88/Library",
    hubClass: "btn-dark",
    hubTitle: "Github",
    gif: "https://media.giphy.com/media/9rfYsFnLaeSRUem4W5/giphy.gif",
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
        fluid(maxWidth: 450, maxHeight: 450) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    etchASketch: file(relativePath: { eq: "etch-sketch.png" }) {
      childImageSharp {
        fluid(maxWidth: 450, maxHeight: 450) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    calculator: file(relativePath: { eq: "calc.png" }) {
      childImageSharp {
        fluid(maxWidth: 450, maxHeight: 450) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bookList: file(relativePath: { eq: "books.png" }) {
      childImageSharp {
        fluid(maxWidth: 450, maxHeight: 450) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

// Etch-a-Sketch gif
// https://media.giphy.com/media/37QN7rVCX8rySQ3RUR/giphy.gif

// Etch embedded iframe
// <div style="width:100%;height:0;padding-bottom:56%;position:relative;"><iframe src="https://giphy.com/embed/37QN7rVCX8rySQ3RUR" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/etch-a-sketch-37QN7rVCX8rySQ3RUR">via GIPHY</a></p>

// tictactoe gif
// https://gph.is/g/EJVOxeE
