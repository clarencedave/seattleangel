import React from 'react'


import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <Layout>
    <SEO title="Newsletter" />

    <form name = "newsletter" method = "post" netlify = "true">
     <input type="hidden" name="newsletter" value="newsletter" />  
     

      
     <label for="name">Name:</label>
      <input id="name" name="name" placeholder="Name" type = "text" ></input>
    


      <label for="Email">Email Address:</label>
      <input id="Email" name="Email" placeholder="Email Address" type = "text" ></input>
   
      <button class = "btnsubmit"  type ="submit">Send</button>

    </form>

  </Layout>
)

export default SecondPage
