import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact Me Page" />
    <h1>Contact Info</h1>
    <address>
      <a href="mailto:dpspencer88@gmail.com">dpspencer88@gmail.com</a>
    </address>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
      voluptas ipsa corporis nemo explicabo quod magni consequatur error
      accusamus esse quo adipisci odit tempora voluptatum accusantium, maiores
      cupiditate fugit aspernatur?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia modi enim
      ipsam, adipisci esse, odit dicta repellat cupiditate sapiente blanditiis
      ducimus deserunt reiciendis nam ipsa voluptatem repudiandae iusto.
      Voluptatum, eos?
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ContactPage
