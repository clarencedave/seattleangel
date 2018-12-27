
import PropTypes from 'prop-types'
import React from 'react'
import logo from '../images/seattle-angel-logo.png'
import team from '../images/leadership.png'
import home from '../images/home.png'
import about from '../images/about.png'
import source from '../images/source.png'

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
          <a  href="/"><img  src = {home} alt = ""/>Home</a>
          <a href="aboutpage"><img  src = {about} alt = ""/>About</a>
          <a href="sources"><img  src = {source} alt = ""/>Resources</a>
          <a href="leadership"><img  src = {team} alt = ""/>  Leadership</a>
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
