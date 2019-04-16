import React from "react"
import { Link } from "gatsby"
import { IconContext } from "react-icons"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import Layout from "../components/layout"
import SEO from "../components/seo"

const HomePage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`gatsby`, `application`, `react`, `personal`, `portfolio`]}
    />
    <main id="home">
      <h1 className="lg-heading">
        Dathan <span className="text-secondary">Spencer</span>
      </h1>
      <h2 className="sm-heading">Web Developer & UX/UI Designer</h2>
      <IconContext.Provider value={{ size: "2rem" }}>
        <div className="icons">
          <Link to="#!">
            <FaGithub />
          </Link>
          <Link to="#!">
            <FaLinkedin />
          </Link>
        </div>
      </IconContext.Provider>
    </main>
  </Layout>
)

export default HomePage
