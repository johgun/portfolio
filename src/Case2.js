import React, { Component } from 'react'
import LongArrow from './img/long-arrow.svg';

const Case2 = () => {
  return (
    <section className="case case-2" id="work-section">
      <div class="case-banner-grid">
            <h5>Coldcut systems</h5>
            <h3>Giving the future of fire fighting a new look</h3>
            <p className="hide-mobile">A new visual identity and online presence for Coldcut Systems — makers of the worlds first cutting extinguishers </p>
            <p className="case-banner-button"><a href="/coldcut">View case<img src={LongArrow} /></a></p>
        </div>
    </section>
  )
}


export default Case2
