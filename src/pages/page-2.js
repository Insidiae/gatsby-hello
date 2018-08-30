import React from 'react'
import Link from 'gatsby-link'

const SecondPage = () => (
  <div>
    <h1>Hello from the other side!</h1>
    <p>I hope you didn't have to call a thousand times :)</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default SecondPage
