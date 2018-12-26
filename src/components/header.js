
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
      <h1 class = "hide" style={{ margin: 0  }}>
       <div  style={{
            color: 'white',
            textDecoration: 'none',
          }}>     
         
         
          {siteTitle}





          <div id="navigate">
          <a href="/" id="logo"><img src = {logo} alt = ""/></a>
          <div id="navigate-right">
          <a  href="/">Home</a>
          <a href="aboutpage">About</a>
          <a href="sources">Resources</a>
          <a href="leadership">Leadership</a>
          </div>
          </div>






















           </div>
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
