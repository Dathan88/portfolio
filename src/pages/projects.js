import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTitle from "../components/PageTitle"
import SubTitle from "../components/SubTitle"
import Project from "../components/Project"
import logo from "../images/ms-icon-310x310.png"

const titleProps = ["My", "Work"]
const subProps = "Check out some of my projects..."
const projectProps = [
  {
    link: "#!",
    imgId: "item1",
    src: logo,
    alt: "logo",
    eyeLink: "#!",
    eyeClass: "btn-light",
    eyeIconClass: 'fas fa-eye',
    eyeTitle: "Project",
    hubLink: "#!",
    hubClass: "btn-dark",
    hubIconClass: 'fas fa-github',
    hubTitle: "Github",
  },
  {
    link: "#!",
    imgId: "item2",
    src: logo,
    alt: "logo",
    eyeLink: "#!",
    eyeClass: "btn-light",
    eyeTitle: "Project",
    hubLink: "#!",
    hubClass: "btn-dark",
    hubTitle: "Github",
  },
  {
    link: "#!",
    imgId: "item3",
    src: logo,
    alt: "logo",
    eyeLink: "#!",
    eyeClass: "btn-light",
    eyeTitle: "Project",
    hubLink: "#!",
    hubClass: "btn-dark",
    hubTitle: "Github",
  },
  {
    link: "#!",
    imgId: "item4",
    src: logo,
    alt: "logo",
    eyeLink: "#!",
    eyeClass: "btn-light",
    eyeTitle: "Project",
    hubLink: "#!",
    hubClass: "btn-dark",
    hubTitle: "Github",
  },
]

const ProjectsPage = () => (
  <Layout>
    <SEO title="My Projects" />
    <main id="projects">
      <PageTitle titleProps={titleProps} />
      <SubTitle subProps={subProps} />
      <Project projectProps={projectProps} />
    </main>
  </Layout>
)

export default ProjectsPage
