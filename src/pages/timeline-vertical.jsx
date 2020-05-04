import React from 'react';
import { Navbar, Page, BlockTitle } from 'framework7-react';

export default () => (
  <Page>
    <Navbar title="Car Accident Timeline" backLink="Back"></Navbar>
	
    <BlockTitle>Case #000294</BlockTitle>
    <div className="timeline">
      <div className="timeline-item">
        <div className="timeline-item-date">23 <small>MAY</small></div>
        <div className="timeline-item-divider"></div>
        <div className="timeline-item-content">
          <div className="timeline-item-inner">
            <div className="timeline-item-time">10:32</div>
            <div className="timeline-item-title">Purchased Car Insurance</div>
            <div className="timeline-item-subtitle">Gold Star Plan - Gecko Insurance</div>
            <div className="timeline-item-text">Muhammad purchased the Gold Star Plan from Gecko Insurance Agent "Gerard" of the "San Mateo" branch, location number #52. $20,000 worth of coverage was purchased for a monthly premium of $XX.</div>
          </div>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-item-date">27 <small>MAY</small></div>
        <div className="timeline-item-divider"></div>
        <div className="timeline-item-content">
          <div className="timeline-item-inner">
            <div className="timeline-item-time">8:05</div>
            <div className="timeline-item-title">Left House</div>
            <div className="timeline-item-subtitle">Google Maps</div>
            <div className="timeline-item-text">Muhammad left his house at 8:05am. This information was imported from Google Maps.</div>
          </div>
          <div className="timeline-item-inner">
            <div className="timeline-item-time">8:24</div>
            <div className="timeline-item-title">Car Accident</div>
            <div className="timeline-item-subtitle">Legacy App</div>
            <div className="timeline-item-text">At 8:24, Muhammad logged into his Legacy mobile app to record his accident. He recorded his audio conversation with the other party, and took 7 pictures of both cars.</div>
          </div>
        </div>
      </div>
    </div>
  </Page>
);
