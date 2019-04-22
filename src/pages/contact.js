import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTitle from "../components/PageTitle"
import SubTitle from "../components/SubTitle"

const titleProps = ['Contact', 'Me'];
const subProps = 'This is how you can reach me...';

const ContactPage = () => (
  <Layout>
    <SEO title="Contact Me Page" />
    <main id="contact">
      <PageTitle titleProps={titleProps} />
      <SubTitle subProps={subProps} />
      <div className="boxes">
        <div>
          <span className="text-secondary">Email: </span>
          johnny5@example.com
        </div>
        <div>
          <span className="text-secondary">Phone: </span>
          (555) 555-5555
        </div>
        <div>
          <span className="text-secondary">Address: </span>
          50 Center St, Boston NM 87101
        </div>
      </div>
    </main>
  </Layout>
)

export default ContactPage
