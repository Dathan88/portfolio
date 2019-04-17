import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects Page" />
    <h1>Welcome to the projects page</h1>
    <ol>
      <li>
        Pariatur qui quis qui aliquip aliquip officia nostrud Lorem nisi
        exercitation anim cupidatat est.
      </li>
      <li>
        Laborum consectetur adipisicing Lorem laborum elit aute non aute enim
        aliqua consequat ea elit deserunt.
      </li>
      <li>Tempor aliquip enim fugiat dolore consequat irure elit.</li>
      <li>Ad amet duis occaecat ut dolore excepteur excepteur sit.</li>
      <li>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quia ex
        tempora necessitatibus impedit repellat doloremque mollitia, hic quam
        placeat explicabo laboriosam aliquid molestias dolores. Quod,
        architecto. Totam, itaque soluta.
      </li>
    </ol>
    {/* <Link to="/">Go back to the homepage</Link> */}
  </Layout>
)

export default ProjectsPage
