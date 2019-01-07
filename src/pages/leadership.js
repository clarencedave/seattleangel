import React from 'react'
import Layout from '../components/layout'
import logo from '../images/John.jpg'
import name from '../images/Keith.jpg'
import forever from '../images/Geoff.jpg'
import yolo from '../images/Josh.jpg'
import solo from '../images/Brad.jpg'
import SEO from '../components/seo'
const ContactPage = () => (
  <Layout>
       <SEO title="Leadership" />
      <br/> 
      <br/>

<div class="row">
    <div class="column">
        <div class="container">
            <div class="card">
                 <center><img src= {logo} alt="Avatar" class="avatar"/>
        <h2> John Sechrest </h2>
        <p class="title">Secretary</p></center>
        <p>John Sechrest started as a software engineer at HP, writing network code for calculators. He is the founder of PEAK Internet services. He spent 5 years as the Economic Development Director of Corvallis Oregon, where he founded the Willamette Angel Conference. He participated in the Oregon Angel Fund. He is working to bring that model of community investing to Seattle with the Seattle Angel Conference. 

</p>
        
    </div>
    </div>
    </div>

        <div class="column">
             <div class="container">
                 <div class="card">
                  <center>  <img src={name} alt="Jane" class="avatar" />
        <h2>Keith Laepple</h2>
        <p class="title">Treasurer</p></center>
        <p>Keith Laepple is a technology focused angel, seeking investment and engagement opportunities with Pacific Northwest startups. A Seattle Angel Conference participant since 2012, he has participated in five SAC investor funds, and is the fund manager leading the for SAC VI investor group. Keith is also a member of the Seattle Alliance of Angels.

Formerly a 22-year manager in operating system products at Microsoft, Keith has led teams in program management, technical evagelism, and business development for PC, mobile, and consumer electronics platforms.  </p>
    
        
    </div>  
    </div>
    </div>

        <div class="column">
            <div class="container">
                <div class="card">
                 <center>   <img src={forever} alt="Jane" class="avatar" />
        <h2>Geoff Harris</h2>
        <p class="title">Vice President</p></center>
        <p>Geoff Harris spent 15 years in executive leadership and engineering management positions at Microsoft Corporation. He developed new businesses and led teams in areas such as digital media, mobile and speech and natural language processing. Since retiring from Microsoft in late 2013, Geoff has turned his attention to developing a deeper angel investment community in Seattle through his involvement with the Alliance of Angels and the Seattle Angel Conference as well as advisory positions with several local start-ups. Geoff holds a bachelor’s degree from Brown University. He will be the fund manager for SAC VII.</p>
    
        
    </div>
    </div>
    </div>

<div class="column">
        <div class="container">
            <div class="card">
               <center>  <img src= {yolo} alt="Avatar" class="avatar"/>
        <h2> Josh Maher </h2>
        <p class="title">President</p></center>
        <p>Josh Maher is a passionate supporter of the Seattle startup community. He founded TechCafe (formerly Seattle Lunch 2.0) back in 2007, has provided mentorship, advising, and consulting to numerous startups on product definition, launching, fund raising, and customer development. He has also founded and worked in various capacities for startups. Past and current startups include SafeHarbor Technologies, Decider Technologies (closed), iConclude (sold to HP), IvyTalk, & KStream Media. He continues to engage with early stage companies as an angel investor and advisor.

</p>
        
    </div>
    </div>
    </div>
    
    <div class="column">
        <div class="container">
            <div class="card">
              <center>   <img src= {solo} alt="Avatar" class="avatar"/>
        <h2> Brad Carpenter </h2>
        <p class="title">Chairman</p></center>
        <p>Brad Carpenter, has been an active angel investor, mentor for tech entrepreneurs, and was the CEO for two early stage startups, Transparent IO and Newline Software. Prior to supporting the local startup community, Brad spent  20 years at Microsoft leading engineering teams for Windows, Unlimited Potential Group (focused on emerging geographies), PC hardware, and Microsoft Surface. Follow him @BradCarpenter.

</p>
        
    </div>
    </div>
    </div>














    </div>

  </Layout>
)

export default ContactPage
