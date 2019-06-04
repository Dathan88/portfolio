import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTitle from "../components/PageTitle"
import SubTitle from "../components/SubTitle"
import ContactBox from "../components/ContactBox"

const titleProps = ["Contact", "Me"]
const subProps = "This is how you can reach me..."
const contactProps = [
  {
    type: "Email: ",
    info: "dathanpspencer@gmail.com",
  },
  /*  {
    type: "Phone: ",
    info: "(555) 555-5555",
  },
  {
    type: "Address: ",
    info: "50 Center St, Boston NM 87101",
  }, */
]

const ContactPage = () => (
  <Layout>
    <SEO title="Contact Me Page" />
    <main id="contact">
      <PageTitle titleProps={titleProps} />
      <SubTitle subProps={subProps} />
      <ContactBox contactProps={contactProps} />
    </main>
  </Layout>
)

export default ContactPage
