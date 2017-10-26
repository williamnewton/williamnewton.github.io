import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

const Header = () =>
  <div className='header-diagonal rainbow'>
    <div
      style={{
        margin: '0 auto',
        padding: '1.45rem 1.0875rem',
      }}
    >
    </div>
  </div>

const TemplateWrapper = ({ children }) =>
  <div>
    <Helmet
      title="William Newton"
      meta={[
        { name: 'description', content: 'The work, writing, and art of William Newton' },
        { name: 'keywords', content: 'design, art, tech' },
      ]}
    />
    <Header />
    <div className="main">
      {children()}
    </div>
  </div>

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
