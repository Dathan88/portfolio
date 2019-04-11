import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About Me" />
    <h1>About Me</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi fugit
      corporis, ipsam magni error laboriosam. Odit praesentium numquam quas
      ipsam nostrum quaerat quae itaque, aliquid labore voluptatibus! Atque,
      tenetur quod!
    </p>
    <p>
      Occaecat laboris occaecat eu ullamco officia consectetur aliqua Lorem
      ipsum ut anim. Laborum qui eiusmod elit quis aute. Ex eu adipisicing ipsum
      mollit voluptate minim ut officia voluptate aute consectetur.
    </p>
    <p>
      Quis nisi officia deserunt magna eu occaecat dolor proident esse. Eiusmod
      amet nostrud tempor eiusmod ullamco excepteur culpa. Voluptate non esse
      magna adipisicing. Dolor qui ea cillum ullamco qui cillum Lorem incididunt
      laboris. Adipisicing elit irure veniam amet ea in occaecat qui mollit
      pariatur do.
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
