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
      <img className="img-full" src="http://williamnewton.co/sidehustle/comps-1.jpg" />
      <img className="img-full" src="http://williamnewton.co/sidehustle/comps-2.jpg" />
      <img className="img-full" src="http://williamnewton.co/sidehustle/comps-3.jpg" />
      <br />
      <Link to="/">Go back to homepage</Link>
    </div>
  </div>

export default ArtPage
