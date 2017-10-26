import React from 'react'
import Link from 'gatsby-link'
import BackNav from '../components/BackNav'


const WorkPage = () =>
  <div className="half-page relative">
    <BackNav />
    <h1>💼 Case Studies</h1>
    <div className="indent">
    <h2 className='font-weight-normal'>Coming soon!!!</h2>
    <p>Projects in which I've had a lead design role:</p>
      <ul>
        <li>Gusto Complete & Concierge Onboarding (2017)</li>
        <li>Gusto Documents & Offer Letters (2016)</li>
        <li>Gusto Email System (2016)</li>
        <li>Crossfader Live (2016)</li>
        <li>Crossfader Interaction Design (2014)</li>
        <li>Breathe iOS App (2014)</li>
        <li>Feathr networking application (2013)</li>
      </ul>
      <Link to="/">Go back to homepage</Link>
    </div>
  </div>

export default WorkPage
