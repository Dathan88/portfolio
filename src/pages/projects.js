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
    number: 1,
    name: "battleship",
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
    gif: "https://media.giphy.com/media/KdqUBrwlcbs3HBRHFS/giphy.gif",
  },
  {
    number: 2,
    name: "etchASketch",
    href: "#!",
    imgId: "item2",
    alt: "logo",
    eyeLink: "https://dathan88.github.io/Etch-a-Sketch",
    eyeClass: "btn-light",
    eyeTitle: "Project",
    hubLink: "https://github.com/Dathan88/Etch-a-Sketch",
    hubClass: "btn-dark",
    hubTitle: "Github",
    gif: "https://media.giphy.com/media/W2RN3fpyo5qPMziSoC/giphy.gif",
  },
  {
    number: 3,
    name: "calculator",
    href: "#!",
    imgId: "item3",
    alt: "logo",
    eyeLink: "https://dathan88.github.io/Calculator",
    eyeClass: "btn-light",
    eyeTitle: "Project",
    hubLink: "https://github.com/Dathan88/Calculator",
    hubClass: "btn-dark",
    hubTitle: "Github",
    gif: "https://media.giphy.com/media/U3gTBwYZMd10HRjGG6/giphy.gif",
  },
  {
    number: 4,
    name: "movieList",
    href: "#!",
    imgId: "item4",
    alt: "logo",
    eyeLink: "https://movie-list-app-1.herokuapp.com/",
    eyeClass: "btn-light",
    eyeTitle: "Project",
    hubLink: "https://github.com/Dathan88/MovieListApp",
    hubClass: "btn-dark",
    hubTitle: "Github",
    gif: "https://media.giphy.com/media/eidv63dxClXjnv0GhJ/giphy.gif",
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
    battleship: file(relativePath: { eq: "battleship2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1600, maxHeight: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    etchASketch: file(relativePath: { eq: "Etch.png" }) {
      childImageSharp {
        fluid(maxWidth: 1600, maxHeight: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    calculator: file(relativePath: { eq: "calc2Pic.png" }) {
      childImageSharp {
        fluid(maxWidth: 1600, maxHeight: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    movieList: file(relativePath: { eq: "MovieList.png" }) {
      childImageSharp {
        fluid(maxWidth: 1600, maxHeight: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`