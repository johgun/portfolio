import React, { Component } from 'react';
import TinyArrowDown from './img/tiny-arrow-down.svg';

document.title = "Johan Gunnarsson – Digital product designer";

const PageHeader = () => {
  return (
    <header className="page-grid" id="page-top">
      <div className="header-left">
        <h1>Johan Gunnarsson</h1>
        <h2>
          <span class="hide-mobile">About</span>
          <span class="hide-desktop">Digital Product Design, Art Direction & UX</span>
        </h2>
        <p>I design things for screens. With more than ten years of experience I focus on the right problems and solve them in ways that are both beautiful and usable.</p>
        <div className="rule"></div>
        <h6>
          <a href="#contact-section">
            Bio & Contact
            <img src={TinyArrowDown} alt="scroll down" />
          </a>
        </h6>
      </div>
      <div className="header-right hide-mobile">
        <h6>Digital Product Design, Art Direction & UX</h6>
        <h5>Assorted Clients</h5>
        <p>Telia, Polestar, Mastercard, Volvo Trucks, Hultafors, Aleris, EFG, Volvo Buses, Bolon, Aller Media, Mölnlycke Healthcare</p>
        <div className="rule"></div>
        <h6>
          <a href="#work-section">
            Work
            <img src={TinyArrowDown} alt="scroll down" />
          </a>
        </h6>
      </div>
    </header>
  )
}


export default PageHeader
