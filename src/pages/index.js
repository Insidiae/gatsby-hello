import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hello world!</h1>
    <p>
      This is a simple Gatsby site, created for the purpose of me Joining the
      JAMstack Hackathon
    </p>
    <p>I look forward to building something awesome!</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
