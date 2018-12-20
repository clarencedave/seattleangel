import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import logo from '../images/seattle-angel-logo.png'



const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'White',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '.0rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}





          <div id="navigate">
          <a href="/" id="logo"><img src = {logo} alt = ""/></a>
          <div id="navigate-right">
          <a  href="/">Home</a>
          <a href="about">About</a>
          <a href="#Resources">Resources</a>
          <a href="#Leadership">Leadership</a>
          </div>
          </div>






















          
        </Link>
      </h1>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
