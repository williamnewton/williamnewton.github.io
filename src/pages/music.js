import React from 'react'
import Link from 'gatsby-link'
import art2 from '../images/Willaa-Space-Diva-Art.jpg';
import art1 from '../images/willaa-how-u-sey-art.jpg';
import art3 from '../images/Willaa-EYEDU-art.jpg';
import willaa from '../images/willaa-2.png';
import BackNav from '../components/BackNav'

const MusicPage = () =>
  <div className="relative">
    <BackNav />
    <h1>🎶 Music Please</h1>
    <div className="indent">
      <p>I DJ under the name Willaa, and I play house music.</p>
      <p>These are my original releases:</p>
      <div className="flex-row">
        <div className="item">
          <a target="_blank" href="https://soundcloud.com/djwillaa/sets/how-u-sey-ep">
            <img className="img-full art" src={art1} />
          </a>
          <p className='margin-none'>How U Sey EP</p>
          <span>
            <a target="_blank" href="https://soundcloud.com/djwillaa/sets/how-u-sey-ep">Stream</a> | <a target="_blank" href="https://www.dropbox.com/sh/gixolmpmut07f8a/AAD4X8einXv2LwDJzA82_qBEa?dl=0">Download</a>
          </span>
        </div>
        <div className="item">
          <a target="_blank" href="https://soundcloud.com/djwillaa/sets/space-diva-ep-preview">
            <img className="img-full art" src={art2} />
          </a>
          <p className='margin-none'>Space Diva EP</p>
          <span>
            <a target="_blank" href="https://soundcloud.com/djwillaa/sets/space-diva-ep-preview">Stream</a> | <a target="_blank" href="https://www.dropbox.com/sh/24xhb7wwd7i2pp0/AABr7h8ylwtaJFUAwFNjljFfa?dl=0">Download</a>
          </span>
        </div>
        <div className="item">
          <a target="_blank" href="https://soundcloud.com/djwillaa/sets/eyedu-ep-preview/s-lwkN9">
            <img className="img-full art" src={art3} />
          </a>
          <p className='margin-none'>EYEDU EP</p>
          <span>
            <a target="_blank" href="https://soundcloud.com/djwillaa/sets/eyedu-ep-preview/s-lwkN9">Stream</a> | <a target="_blank" href="https://www.dropbox.com/sh/r9jqxj35a4dkaht/AAClksy1j1T6LiwQGIzd0u3va?dl=0">Download</a>
          </span>
        </div>
      </div>
    </div>
    <div className="indent margin-top-50">
      <p>I have a mixtape series called SF Nights. Here is the latest:</p>
        <iframe width="100%" height="120" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fwillaa%2Fsf-nights-volume-30-lost-vegas%2F" frameBorder="0" ></iframe>
    </div>
    <div className="indent flex-row">
      <p className='bio-quote'>
        If you want to make the world a happier place, play it a song.<br /><br />
        That's Willa's philosophy, and it's the bumping rhythm at the heart of his sound. From his DJ sets to his productions, Willa's music pulses with an excitable, positive energy. It's his mission to infect the world with groove. Each set is another opportunity to dig into your soul, each dance floor a bed for seeds to grow into pure, danceable joy.
      </p>
      <img className="bio-pic margin-top-50" src={willaa} />
    </div>
  </div>

export default MusicPage
