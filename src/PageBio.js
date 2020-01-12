import React, { Component } from 'react'
import SmallProfilePic from './img/small-profile-pic@2x.png';


const PageBio = () => {
  return (

      <footer id="contact-section">

        <div id="footer-left">

          <div id="footer-left-content">
            <img src={SmallProfilePic} />
            <h5>Profile</h5>
            <p>I'm a digital designer and art director based in Gothenburg, Sweden. With over ten years of experience  in digital design my expertise spans from UX and interface design to art direction, branding and typography. I thrive in complex projects where tech, UX, UI and brand all interplay to create complex challenges and the conditions for great solutions. </p>
            <br />
            <p>So far I have built digital products and services for companies like Telia, Polestar, Mastercard, Aleris, Hultafors, Volvo Trucks, Mölnlycke Healthcare, Aller Media, and many more.</p>
          </div>
        </div>

        <div id="footer-right">
          <h5>Say hi</h5>
          <p>I’m available on the following social media:</p>
          <ul>
            <li><a href="mailto:jogu84@gmail.com">Mail</a></li>
            <li><a href="http://www.twitter.com/nahoj">Twitter</a></li>
            <li><a href="http://www.linkedin.com">LinkedIn</a></li>
          </ul>
        </div>

      </footer>

  )
}

export default PageBio
