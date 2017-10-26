import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () =>
  <div className="half-page">
    <h1>👋 Hi, I'm Will</h1>
    <div className="indent">
      <p>I design and build experiences that people love.</p>
      <p>I'm currently making payroll & HR software that people love at <a target="_blank" href="https://gusto.com">Gusto</a>.</p>
      <p>Previously I worked with a talented team to create a DJ app that people love
      called <a target="_blank" href="https://www.crossfader.fm/">Crossfader</a>.</p>
      <p>Also designed a little app called <a target="_blank" href="http://breatheapp.co/">Breathe</a>.</p>
      <p>Living and working in San Francisco, California.</p>

      <div className="divider rainbow"></div>

      <div className="links-section">
        <p>Work, details, socials & stuff:</p>
        <ul className="home-list">
          <li><Link to="/work/">Work</Link></li>
          <li><Link to="/writing/">Writing</Link></li>
          <li><Link to="/art/">Art</Link></li>
          <li><Link to="/music/">Music</Link></li>
        </ul>

        <ul className="home-list">
          <li><a target="_blank" href="https://twitter.com/willdjthrill">Twitter</a></li>
          <li><a target="_blank" href="https://dribbble.com/willdjthrill">Dribbble</a></li>
          <li><a target="_blank" href="https://medium.com/@willdjthrill">Medium</a></li>
          <li><a target="_blank" href="https://instagram.com/wow_willnewton">Instagram</a></li>
        </ul>

        <ul className="home-list">
          <li><a target="_blank" href="https://mixcloud.com/willaa">Mixcloud</a></li>
          <li><a target="_blank" href="https://soundcloud.com/djwillaa">Soundcloud</a></li>
        </ul>
      </div>
    </div>
  </div>

export default IndexPage
