import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact Me Page" />
    <main id="contact">
      <h1 className="lg-heading">
        Contact
        <span className="text-secondary"> Me</span>
      </h1>
      <h2 className="sm-heading">
        This is how you can reach me...
      </h2>
      <div className="boxes">
        <div>
          <span className="text-secondary">Email:</span>
          johnny5@example.com
        </div>
        <div>
          <span className="text-secondary">Phone:</span>
          (555) 555-5555
        </div>
        <div>
          <span className="text-secondary">Address:</span>
          50 Center St, Boston NM 87101
        </div>
      </div>
    </main>
  </Layout>
)

export default ContactPage
