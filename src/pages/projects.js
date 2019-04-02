import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects Page" />
    <h1>Hi from the second page</h1>
    <p>Welcome to the projects page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ProjectsPage
