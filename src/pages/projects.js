import React from "react"
import Layout from "../components/layout"
import { FaGithub, FaEye } from "react-icons/fa"
import SEO from "../components/seo"
import logo from "../images/ms-icon-310x310.png"

const ProjectsPage = () => (
  <Layout>
    <SEO title="My Projects" />
    <main id="projects">
      <h1 className="lg-heading">
        My <span className="text-secondary">Work</span>
        <h2 className="sm-heading">Check out some of my projects...</h2>
      </h1>
      <div className="projects">
        <div className="item">
          <a href="#!">
            <img id="item1" src={logo} alt="logo" />
          </a>
          <a href="#!" className="btn-light">
            <FaEye className="fas fa-eye" /> Project
          </a>
          <a href="#!" className="btn-dark">
            <FaGithub className="fas fa-github" /> Project
          </a>
        </div>
        <div className="item">
          <a href="#!">
            <img id="item2" src={logo} alt="logo" />
          </a>
          <a href="#!" className="btn-light">
            <FaEye className="fas fa-eye" /> Project
          </a>
          <a href="#!" className="btn-dark">
            <FaGithub className="fas fa-github" /> Project
          </a>
        </div>
        <div className="item">
          <a href="#!">
            <img id="item3" src={logo} alt="logo" />
          </a>
          <a href="#!" className="btn-light">
            <FaEye className="fas fa-eye" /> Project
          </a>
          <a href="#!" className="btn-dark">
            <FaGithub className="fas fa-github" /> Project
          </a>
        </div>
        <div className="item">
          <a href="#!">
            <img id="item4" src={logo} alt="logo" />
          </a>
          <a href="#!" className="btn-light">
            <FaEye className="fas fa-eye" /> Project
          </a>
          <a href="#!" className="btn-dark">
            <FaGithub className="fas fa-github" /> Project
          </a>
        </div>
      </div>
    </main>
  </Layout>
)

export default ProjectsPage
