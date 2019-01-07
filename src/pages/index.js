import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {Link} from 'gatsby'
const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['Seattle Angel', 'Seattle Angel Conference', 'Seattle']} />
    <div class  = "seattle">
    <h1>Seattle Angel </h1>
    <p class="line-1 anim-typewriter">A non-profit corporation. Sparking the flame of angel investing in the Northwest.</p>


  <Link to = "markdown">  <button class=" button "><span>Learn More </span></button></Link>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>


    </div>
    </div>





  </Layout>
)

export default IndexPage
