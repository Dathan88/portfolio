import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About Me" />
    <main id="about">
      <h1 className="lg-heading">
        About <span className="text-secondary">Me</span>
      </h1>
      <h2 className="sm-heading">Let me tell you a few things...</h2>
      <div className="about-info">
        <div alt="personal photo" className="bio-image portriat" />
        <div className="bio">
          <h3 className="text-secondary">BIO</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, error! Atque fugit non beatae vero, repudiandae hic
            sunt odit dolore sed eos similique nobis maxime tenetur! Esse itaque
            unde animi.
          </p>
        </div>
        <div className="job job-1">
          <h3>Jakubowski Inc.</h3>
          <h6>Front-End Developer</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi fugit
            corporis, ipsam magni error laboriosam. Odit praesentium numquam
            quas ipsam nostrum quaerat quae itaque, aliquid labore voluptatibus!
            Atque, tenetur quod!
          </p>
        </div>
        <div className="job job-2">
          <h3>Blick Group</h3>
          <h6>Graphic Designer</h6>
          <p>
            Occaecat laboris occaecat eu ullamco officia consectetur aliqua
            Lorem ipsum ut anim. Laborum qui eiusmod elit quis aute. Ex eu
            adipisicing ipsum mollit voluptate minim ut officia voluptate aute
            consectetur.
          </p>
        </div>
        <div className="job job-3">
          <h3>Zemlak - Stanton</h3>
          <h6>Front-End Developer</h6>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
            quisquam enim labore quam unde tenetur eum, ratione magni, nobis qui
            iste?
          </p>
        </div>
      </div>
    </main>
  </Layout>
)

export default AboutPage
