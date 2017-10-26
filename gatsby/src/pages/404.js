import React from 'react'
import Link from 'gatsby-link'

const NotFoundPage = () =>
  <div
    style={{
      marginTop: '30vh',
    }}
  >
    <h1>404</h1>
    <p>How'd you even get here?</p>
    <Link to="/">go back</Link>
  </div>

export default NotFoundPage
