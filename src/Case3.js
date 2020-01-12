import React, { Component } from 'react'
import LongArrow from './img/long-arrow.svg';

const Case3 = () => {
  return (
    <section className="case case-3" id="work-section">
      <div class="case-banner-grid">
            <h5>Bolon</h5>
            <h3>Innovators at heart</h3>
            <p className="hide-mobile">A series of campaign sites to help launch Bolons new collections, including a new architectural flooring designed by architect Jean Nouvel</p>
            <p className="case-banner-button"><a href="/bolon">View case<img src={LongArrow} /></a></p>
        </div>
    </section>
  )
}


export default Case3
