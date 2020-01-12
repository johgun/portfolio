import React, { Component } from 'react'
import TinyArrowUp from './img/tiny-arrow-up.svg';

const today = new Date();

const PageFooter = () => {
  return (

      // <footer id="contact-section">
      //
      //   <div id="footer-left">
      //
      //     <div id="footer-left-content">
      //       <img src={SmallProfilePic} />
      //       <h5>Profile</h5>
      //       <p>I'm a digital designer and art director based in Gothenburg, Sweden. My current role encompasses oversight of the overall design output within our Scandinavian studios. With over a decades experience my expertise spans from user experience and interface design to art direction, branding and typography.</p>
      //       <br />
      //       <p>So far I have build digital product and services for brands like Telia, Volvo Cars, Mastercard, Aleris, Hultafors, Volvo Trucks, Mölnlycke Healthcare, Aller Media, and many more.</p>
      //     </div>
      //   </div>
      //
      //   <div id="footer-right">
      //     <h5>Say hi</h5>
      //     <p>I’m available on the following social media:</p>
      //     <ul>
      //       <li><a href="mailto:jogu84@gmail.com">Mail</a></li>
      //       <li><a href="http://www.twitter.com/nahoj">Twitter</a></li>
      //       <li><a href="http://www.linkedin.com">LinkedIn</a></li>
      //     </ul>
      //   </div>
<footer>
      <div id="sub-footer">
        <p>
          <a href="#">Back to top <img src={TinyArrowUp} alt="scroll up" /></a>
        </p>
      </div>

      <div id="sub-footer-right">
        <p>© Johan Gunnarsson {today.getFullYear()}</p>
      </div>

</footer>

  )
}

export default PageFooter
