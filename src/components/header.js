import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import logo from '../images/seattle-angel-logo.png'
import team from '../images/leadership.png'
import home from '../images/home.png'
import about from '../images/about.png'
import source from '../images/source.png'
import email from '../images/email.png'
const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'transparent',
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
          <Link id="logo" to="/"><img src = {logo} alt = ""/></Link>
          <div id="navigate-right">
          <Link to="/"><img  src = {home} alt = ""/>Home</Link>
          <Link to="aboutpage"><img  src = {about} alt = ""/>About</Link>
          <Link to="sources"><img  src = {source} alt = ""/>Resources</Link>
          <Link to="leadership"><img  src = {team} alt = ""/>  Leadership</Link>
          <Link to="newsletter"><img src = {email}  alt = ""/>  Newsletter</Link>
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
