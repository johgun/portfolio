import React, { Component } from 'react'
import PageFooter from './PageFooter'
import CloseIcon from './img/close-icon.svg';
import LongArrowBlack from './img/long-arrow-black.svg';
import CCSPres from './img/ccs-pres.jpg';
import CCSDesignConcept from './img/ccs-design-concept.jpg';
import CCSIdentity from './img/ccs-identity.jpg';
import CCSHome from './img/ccs-home.jpg';
import CCSMethod from './img/ccs-method.jpg';
import CCSObjects from './img/ccs-objects.jpg';



const Case2Content = () => {
  return (
    <div id="container">
      <section id="case-header" className="page-grid">
        <div id="case-header-left">
          <h1>Coldcut system</h1>
          <h2>Giving the future of fire fighting a new look</h2>
        </div>
        <div id="case-header-right">
          <a href="/">
            <img src={CloseIcon} alt="x"/>
          </a>
        </div>
      </section>

        <div className="case-big-img case2-big-img"></div>

        <div class="medium-space" />

        <section className="case-text-section page-grid-cols">
          <div class="case-title-block">
            <h3>01</h3>
            <div class="case-rule"></div>
            <h5>Context</h5>
          </div>
          <p>Coldcut Systems creates the Coldcut Cobra cutting extinguishers – a unique product that enables fire fighters to extinguish fires from outside a burning structure. The extinguisher quickly cuts a hole in the wall and then sprays a high pressure water mist inside to cool the fire.
          <br />
          From the start I was tasked with designing a new web page but the scope later grew to including a new design direction for their entire brand.
          </p>
        </section>

        <div class="medium-space" />

        <section className="full-image page-grid-cols">
          <img src={CCSPres} alt="Coldcut Systems first presentation" />
        </section>
        <p className="img-text">The goal with my first presentation was to agree upon the scope and purpose of the work</p>

        <div class="medium-space" />

        <section className="case-text-section page-grid-cols">
          <div class="case-title-block">
            <h3>02</h3>
            <div class="case-rule"></div>
            <h5>Process</h5>
          </div>

          <p>
          Early in the project we held a full day workshop with product experts from Coldcut Systems. Involving the client as much as possible is helpful in many ways; it gives me the understanding I need to design the right thing and it gives the client a sense of co-creation and participation. All the insights gathered during the workshop was then turned in to wireframe that was later approved by the client. Parallel to my design work Coldcut was developing text, image and video content for the site.
          <br />
          As the scope grew my initial focus shifted to finding a strong set of elements that would help Coldcut convey their products efficiently. The color palette is a development of their old colors and draws inspiration from fire fighting and heat vs cold. I enhanced the intensity of the colors since their products are used by fire fighters in emergencies where high visibility is a priority.
          <br />
          As the main font I choose Modern Era, which besides offering great legibility also conveys an aura of stability and precise engineering. I also added Foundry Gridnik as a decorative font that can be added as a graphical element. </p>
        </section>

        <div class="medium-space" />

        <section className="wide-image page-grid-cols">
          <img src={CCSDesignConcept} alt="Design concept" />
        </section>
        <p className="img-text">Early design concepts</p>

        <div class="medium-space" />

        <section className="case-text-section page-grid-cols">
          <div class="case-title-block">
            <h3>03</h3>
            <div class="case-rule"></div>
            <h5>Realisation</h5>
          </div>
          <p>By using strong colors and bold typography Coldcut now has a confident expression. The high visibility and utilitarian look of the identity fits well with the field in which they operate.
          <br />
          The web showcases the new identity, restructures the content and present Coldcuts products and services in a new way. The Method sections has been given extra care and demonstrates how to use Coldcut Cobra in 4 steps; Scan, Attack, Ventilate and Enter. By making the section interactive we are able the explain the process in an educational and exciting way.
          </p>
        </section>

        <div class="medium-space" />

        <section className="wide-image image-light page-grid-cols">
          <img src={CCSIdentity} alt="Coldcut brand identity" />
        </section>
        <p className="img-text">An update to Coldcuts corporate identity born from the digital design</p>

        <div class="medium-space" />

        <section className="wide-image page-grid-cols">
          <img src={CCSHome} alt="Coldcut web home" />
        </section>

        <section className="wide-image page-grid-cols">
          <img src={CCSMethod} alt="Coldcut web method" />
        </section>

        <section className="wide-image page-grid-cols">
          <img src={CCSObjects} alt="Coldcut web graphics" />
        </section>

        <div class="medium-space" />

        <section id="next-case" className="page-grid-cols">

            <div>
              <a href="/bolon" >
                <h5>Visit next case</h5>
                <h3>Innovators at heart</h3>
                <img src={LongArrowBlack} alt="Next case" />
              </a>
            </div>

        </section>

        <PageFooter />
    </div>
  )
}


export default Case2Content
