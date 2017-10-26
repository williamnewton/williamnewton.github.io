import React from 'react'
import Link from 'gatsby-link'
import BackNav from '../components/BackNav'

const ArtPage = () =>
  <div className='relative'>
    <BackNav />
    <h1>🎨 Art 4 Sale</h1>
    <div className="indent half-page">
      <p>Store coming soon.</p>
      <p>Idea for something epic? Contact me directly.</p>
      <br />
      <Link to="/">Go back to homepage</Link>
    </div>
  </div>

export default ArtPage
