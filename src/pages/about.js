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
    company: "Core Skills",
    // job: "Front-End Developer",
    summary: `JavaScript, 
    CSS3, 
    HTML5, 
    Responsive 
    Web Design, 
    Websockets, 
    Node.js, 
    MySQL,
    WordPress`,
  },
  {
    class: "job job-2",
    company: "Libraries",
    // job: "Graphic Designer",
    summary: `React,
    Gatsby,
    Express,
    jQuery,
    Bootstrap,
    Sass,
    Pug/Jade`,
  },
  {
    class: "job job-3",
    company: "Interests",
    // job: "Front-End Developer",
    summary: `Computers/Programming/Tech,
    Design/Art,
    Movies,
    Music/Drums,
    Video Games,
    Auto Mechanics,
    History,
    Family,
    DIY Projects,`,
  },
]
const bioProps = {
  class: "bio",
  title: "BIO",
  summary:
    "I am a Front-End Developer and designer from Albuquerque, New Mexico, currently residing in the greater SLC, Utah area. I have 2+ years experience creating websites, games, and responsive/progressive web apps. I’ve worked in customer service most of my life and, while I enjoy working with and helping people, the industry did not challenge me or satisfy my desire to learn and grow.",
  summary2:
    " in 2016, and quickly found that I loved the entire process of creating a web page or web app. Especially fixing bugs, figuring out why they happened and how to prevent them.",
  summary3:
    "I love solving problems and creating things that people will enjoy or find useful. I am always looking for work and new projects to challenge and help me grow, so feel free to ",
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
