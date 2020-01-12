import React, { Component } from 'react'
import LongArrow from './img/long-arrow.svg';

const Case1 = () => {
  return (
    <section className="case case-1" id="work-section">
      <div class="case-banner-grid">
            <h5>Essve</h5>
            <h3>A new tool for the craftsman</h3>
            <p className="hide-mobile">A progressive web app that helps both professionals and amateurs to plan wooden decks and buy all the right materials</p>
            <p className="case-banner-button"><a href="/essguide">View case<img src={LongArrow} /></a></p>
        </div>
    </section>
  )
}


export default Case1
