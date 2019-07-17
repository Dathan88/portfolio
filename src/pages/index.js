import React from "react"
import { Link } from "gatsby"
import { IconContext } from "react-icons"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import PageTitle from "../components/PageTitle"
import SubTitle from "../components/SubTitle"
import Layout from "../components/layout"
import SEO from "../components/seo"

const titleProps = ["Dathan", "Spencer"]
const subProps = "Web Developer & UX/UI Designer"

const HomePage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`gatsby`, `application`, `react`, `personal`, `portfolio`]}
    />
    <main id="home">
      <PageTitle titleProps={titleProps} />
      <SubTitle subProps={subProps} />
      <IconContext.Provider value={{ size: "2rem" }}>
        <div className="icons">
          <a href={"https://github.com/Dathan88"}>
            <FaGithub />
          </a>
        </div>
      </IconContext.Provider>
    </main>
  </Layout>
)

export default HomePage
