import React, { Component } from 'react'
import PageFooter from './PageFooter'
import CloseIcon from './img/close-icon.svg';
import LongArrowBlack from './img/long-arrow-black.svg';
import BolonHub from './img/bolon-hub.jpg';
import BolonScope from './img/bolon-scope.png';
import BolonDesign1 from './img/bolon-design-1.jpg';
import BolonDesign2 from './img/bolon-design-2.jpg';
import BolonDesign3 from './img/bolon-design-3.jpg';



const Case3Content = () => {
  return (
    <div id="container">
      <section id="case-header" className="page-grid">
        <div id="case-header-left">
          <h1>Bolon</h1>
          <h2>Innovators at heart</h2>
        </div>
        <div id="case-header-right">
          <a href="/">
            <img src={CloseIcon} alt="x"/>
          </a>
        </div>
      </section>

        <div className="case-big-img case3-big-img"></div>

        <div class="medium-space" />

        <section className="case-text-section page-grid-cols">
          <div class="case-title-block">
            <h3>01</h3>
            <div class="case-rule"></div>
            <h5>Context</h5>
          </div>
          <p>
            Bolon is a high end flooring manufacturer who frequently collaborates with famous designers and architects from around the world.

            For this project Bolon came to us with a request to design three campaign sites as well as new product pages to launch several new collections.
          </p>
        </section>

        <div class="medium-space" />

        <section className="small-image page-grid-cols">
          <img src={BolonScope} alt="Bolon project scope" />
        </section>
        <p className="img-text">The scope</p>

        <div class="medium-space" />

        <section className="case-text-section page-grid-cols">
          <div class="case-title-block">
            <h3>02</h3>
            <div class="case-rule"></div>
            <h5>Process</h5>
          </div>
          <p>
            As time was short me and our CD at that time move in to a war room and to focus only at this task for the coming weeks.
            <br />
            The main challenge was to find a look and feel that could be applied to all four sites. User experience had to be baked in to the general design process as there was no time for a separate UX process. This was risky but worked since the sites had a relatively low complexity when it came to the flow and structure.
            <br />
            In my experiences a small and focused team working closely with the client often produces the best results and are able to to so in a short time. Being able to shut out all other distractions and find a good flow was what made this project successful despite the short time frame.
          </p>
        </section>

        <div class="medium-space" />

        <section className="full-image page-grid-cols">
          <img src={BolonHub} alt="Bolon hub" />
        </section>

        <p className="img-text">The campaign hub is a large collage that can be navigate by using the arrow keys or your ordinary input device</p>

        <div class="medium-space" />

        <section className="case-text-section page-grid-cols">
          <div class="case-title-block">
            <h3>03</h3>
            <div class="case-rule"></div>
            <h5>Realisation</h5>
          </div>
          <p>
            We managed to find a common design language yet differentiate the sites enough from each other. They obviously share a lot with Bolons brand idintity, but also manages to explore some new visual directions. It was challenging but fun to sketch and iterate on multiple design directions for many different sites at the same time. And it was rewarding to see them built and launched in such a short time.
            <br />
            The sites were developed by Level Nine and went live in time for the launch of the new collections.
          </p>
        </section>

        <div class="medium-space" />

        <section className="full-image page-grid-cols">
          <img src={BolonDesign1} alt="Bolon Design 1" />
        </section>

        <section className="full-image page-grid-cols">
          <img src={BolonDesign2} alt="Bolon Design 2" />
        </section>

        <section className="full-image page-grid-cols">
          <img src={BolonDesign3} alt="Bolon Design 3" />
        </section>

        <section id="next-case" className="page-grid-cols">

            <div>
              <a href="/essguide" >
                <h5>Visit next case</h5>
                <h3>A new tool for the craftsman</h3>
                <img src={LongArrowBlack} alt="Next case" />
              </a>
            </div>

        </section>

        <PageFooter />
    </div>
  )
}


export default Case3Content
