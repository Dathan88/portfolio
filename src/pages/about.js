import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTitle from "../components/PageTitle"
import SubTitle from "../components/SubTitle"
import Jobs from "../components/Jobs"
import Bio from "../components/Bio"

const titleProps = ["About", "Me"]
const subProps = "Let me tell you a few things..."
const jobProps = [
  {
    class: "job job-1",
    company: "Jakubowski Inc.",
    job: "Front-End Developer",
    summary: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi fugit corporis, ipsam magni error laboriosam. Odit praesentium numquam quas ipsam nostrum quaerat quae itaque, aliquid labore voluptatibus! Atque, tenetur quod!`,
  },
  {
    class: "job job-2",
    company: "Blick Group",
    job: "Graphic Designer",
    summary: `Occaecat laboris occaecat eu ullamco officia consectetur aliqua
      Lorem ipsum ut anim. Laborum qui eiusmod elit quis aute. Ex eu
      adipisicing ipsum mollit voluptate minim ut officia voluptate aute
      consectetur.`,
  },
  {
    class: "job job-3",
    company: "Zemlak - Stanton",
    job: "Front-End Developer",
    summary: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
    quisquam enim labore quam unde tenetur eum, ratione magni, nobis qui
    iste?`,
  },
]
const bioProps = {
  class: "bio",
  title: "BIO",
  summary: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, error! Atque fugit non beatae vero, repudiandae hic
            sunt odit dolore sed eos similique nobis maxime tenetur! Esse itaque
            unde animi.`,
}

const AboutPage = () => (
  <Layout>
    <SEO title="About Me" />
    <main id="about">
      <PageTitle titleProps={titleProps} />
      <SubTitle subProps={subProps} />
      <div className="about-info">
        <div alt="personal photo" className="bio-image portriat" />
        <Bio bioProps={bioProps} />
        <Jobs jobProps={jobProps[0]} />
        <Jobs jobProps={jobProps[1]} />
        <Jobs jobProps={jobProps[2]} />
      </div>
    </main>
  </Layout>
)

export default AboutPage
