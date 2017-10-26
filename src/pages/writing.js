import React from 'react'
import Link from 'gatsby-link'
import BackNav from '../components/BackNav'

const WritingPage = () =>
  <div className='half-page relative'>
    <h1>📝 Writing</h1>
    <BackNav />
    <div className="indent">
      <p> Follow me on <a target="_blank" href="https://www.medium.com/@willdjthrill">Medium</a> for instant udpates.</p>
      <p> Popular &amp; recent articles:</p>
      <ul className="indent">
        <li>
          <a target="_blank" href="https://medium.com/@willdjthrill/designing-delightful-business-software-51612a9f2f">Designing Delightful Business Software</a>
        </li>
        <li>
          <a target="_blank" href="https://medium.com/@willdjthrill/the-design-process-a-pyramid-c77135c177d4">The Design Process: A Pyramid</a>
        </li>
        <li>
          <a target="_blank" href="https://medium.com/@willdjthrill/waiting-for-a-sign-to-start-building-your-design-teams-component-library-c43f4352c764?source=user_profile---------4----------------">Building a component library in Figma</a>
        </li>
        <li>
          <a target="_blank" href="https://medium.com/@willdjthrill/how-to-create-ideas-b1d8984f603d">How to Create Ideas</a>
        </li>
        <li>
          <a target="_blank" href="https://medium.com/@willdjthrill/on-zen-and-design-bea3ecf4f9c1?source=user_profile---------13----------------">On Zen and Design</a>
        </li>
      </ul>
      <Link to="/">Go back to homepage</Link>
    </div>
  </div>

export default WritingPage
