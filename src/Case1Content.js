import React, { Component } from 'react'
import PageFooter from './PageFooter'
import CloseIcon from './img/close-icon.svg';
import EssveSitemap from './img/essve-sitemap.jpg';
import EssveMood from './img/essve-mood@2x.jpg';
import EssveOnboard from './img/essve-onboarding.jpg';
import EssveDesign from './img/essve-design.jpg';
import EssveIcons from './img/essve-icons.jpg';
import EssveLoader from './img/essve-loader.svg';
import LongArrowBlack from './img/long-arrow-black.svg';


const Case1Content = () => {
  return (
    <div id="container">
      <section id="case-header" className="page-grid">
        <div id="case-header-left">
          <h1>Essguide</h1>
          <h2>A new tool for the craftsman</h2>
        </div>
        <div id="case-header-right">
          <a href="/">
            <img src={CloseIcon} alt="x"/>
          </a>
        </div>
      </section>

        <div className="case-big-img case1-big-img"></div>

        <div class="medium-space" />

        <section className="case-text-section page-grid-cols">
          <div class="case-title-block">
            <h3>01</h3>
            <div class="case-rule"></div>
            <h5>Context</h5>
          </div>
          <p>ESSVE has a strong reputation in the Nordics for creating the best fastening products such as screws and nails. ESSGUIDE helps craftsmen both to plan projects and buy the right parts as well as explain and visualise the end result for their clients.
          <br />
          By targeting professionals we aim to attract amateurs who wants the best gear as well. Therefore the app is mainly targeted at craftsmen but always aims to explain all concepts in a way that amateurs can follow too.
          </p>
        </section>

        <div class="medium-space" />

        <section className="small-image page-grid-cols">
          <img src={EssveMood} alt="Essve Essguide element collage" />
        </section>
        <p className="img-text">Early look and feel presented to client</p>

        <div class="medium-space" />

        <section className="case-text-section page-grid-cols">
          <div className="case-title-block">
            <h3>02</h3>
            <div class="case-rule"></div>
            <h5>Process</h5>
          </div>
          <p>
          I knew early that we would need to use icons and illustrations to instruct the users. So an early focus for me was to find a look for these illustrations that was both educational and visually pleasing. An element collage was presented to the client early in the project to sign of the design direction.
          <br />
          We proceeded to make a low-fi prototype of the core functionality. This was then tested with craftsmen to make sure that proposed navigation and functionality was on point.
          </p>
        </section>

        <div class="medium-space" />


        <section className="wide-image image-light page-grid-cols">
          <img src={EssveSitemap} alt="Essve Essguide Sitemap" />
        </section>
        <p className="img-text">Figma prototype tested on craftsmen</p>


        <div class="medium-space" />

        <section className="case-text-section page-grid-cols">
          <div className="case-title-block">
            <h3>03</h3>
            <div className="case-rule"></div>
            <h5>Realisation</h5>
          </div>
            <p>
            The design is new and fresh for ESSVE yet clearly grounded in their identity.
            <br />
            Besides the isometric illustrations I choose to use elements such as visible grid lines to hint at the concept of technical drawings and solid, well built things. I also introduced a new font – Founders Grotesk – to add more warmth and character. Founders Grotesk was used as a display font to complement Roboto that was already set as ESSVES digital font.
          </p>
        </section>

        <div class="medium-space" />

        <section className="small-image image-green page-grid-cols">
          <img src={EssveOnboard} alt="Essve Essguide onboarding" />
        </section>
        <p className="img-text">Onboarding</p>

        <div class="medium-space" />

        <section className="wide-image page-grid-cols">
          <img src={EssveDesign} alt="Essve Essguide design screens" />
        </section>

        <div class="medium-space" />

        <section className="small-image page-grid-cols">
          <img src={EssveIcons} alt="Essve Essguide icons" />
        </section>
        <p className="img-text">Essguide icon exploration</p>

        <div class="small-space" />

        <section id="essve-loader">
          <img src={EssveLoader} alt="Essve Essguide loader spinner" />
          <p className="img-text">The loader animation is a torx screw – first brought to Sweden by ESSVE</p>

        </section>

        <section id="next-case" className="page-grid-cols">

            <div>
              <a href="/coldcut">
                <h5>Visit next case</h5>
                <h3>Giving the future of fire fighting a new look</h3>
                <img src={LongArrowBlack} alt="Next case" />
              </a>
            </div>

        </section>

        <PageFooter />
    </div>
  )
}


export default Case1Content
