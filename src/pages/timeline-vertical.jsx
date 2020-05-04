import React from 'react';
import { Navbar, Page, BlockTitle } from 'framework7-react';

export default () => (
  <Page>
    <Navbar title="Car Accident Timeline - Case #000294" backLink="Back"></Navbar>
	
    <BlockTitle>The Accident</BlockTitle>
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
	
	<BlockTitle>Claims, Investigation, and Negotiation</BlockTitle>
    <div className="timeline">
      <div className="timeline-item">
        <div className="timeline-item-date">29 <small>MAY</small></div>
        <div className="timeline-item-divider"></div>
        <div className="timeline-item-content">
          <div className="timeline-item-inner">
            <div className="timeline-item-time">10:32</div>
            <div className="timeline-item-title">Files Claim</div>
            <div className="timeline-item-subtitle">Legacy App</div>
            <div className="timeline-item-text">Muhammad files a claim through the Legacy App's Chatbot Agent.</div>
          </div>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-item-date">31 <small>MAY</small></div>
        <div className="timeline-item-divider"></div>
        <div className="timeline-item-content">
          <div className="timeline-item-inner">
            <div className="timeline-item-time">2:42</div>
            <div className="timeline-item-title">Files Claim (2nd Party)</div>
            <div className="timeline-item-subtitle">AllCity Insurance</div>
            <div className="timeline-item-text">Secondary party files insurance claim through AllCity Insurance webportal.</div>
          </div>
        </div>
      </div>
	  <div className="timeline-item">
        <div className="timeline-item-date">1 <small>APRIL</small></div>
        <div className="timeline-item-divider"></div>
        <div className="timeline-item-content">
          <div className="timeline-item-inner">
            <div className="timeline-item-time">9:00</div>
            <div className="timeline-item-title">Investigation Begins</div>
            <div className="timeline-item-subtitle"></div>
            <div className="timeline-item-text">Data from both parties has been released to Claims Adjusters, Examiners, and Appraisers.</div>
          </div>
        </div>
      </div>
	  <div className="timeline-item">
        <div className="timeline-item-date">9 <small>APRIL</small></div>
        <div className="timeline-item-divider"></div>
        <div className="timeline-item-content">
          <div className="timeline-item-inner">
            <div className="timeline-item-time">3:00</div>
            <div className="timeline-item-title">Investigation Ends</div>
            <div className="timeline-item-subtitle">Negotiation Round 1 - Offer</div>
            <div className="timeline-item-text">2nd Party is found at fault and offers $X,XXX in settlement.</div>
          </div>
        </div>
      </div>
	  <div className="timeline-item">
        <div className="timeline-item-date">11 <small>APRIL</small></div>
        <div className="timeline-item-divider"></div>
        <div className="timeline-item-content">
          <div className="timeline-item-inner">
            <div className="timeline-item-time">3:00</div>
            <div className="timeline-item-title">Negotiation</div>
            <div className="timeline-item-subtitle">Negotiation Round 1 - Response</div>
            <div className="timeline-item-text">Muhammad accepts the settlement. Both insurance agents lock in the amount.</div>
          </div>
        </div>
      </div>
    </div>
	
	<BlockTitle>Settlement and Payment</BlockTitle>
    <div className="timeline">
      <div className="timeline-item">
        <div className="timeline-item-date">20 <small>APRIL</small></div>
        <div className="timeline-item-divider"></div>
        <div className="timeline-item-content">
          <div className="timeline-item-inner">
            <div className="timeline-item-time">1:00</div>
            <div className="timeline-item-title">Payment Sent</div>
            <div className="timeline-item-subtitle">Fars Wellgo Bank</div>
            <div className="timeline-item-text">2nd Party pays $X,XXX.</div>
          </div>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-item-date">21 <small>APRIL</small></div>
        <div className="timeline-item-divider"></div>
        <div className="timeline-item-content">
          <div className="timeline-item-inner">
            <div className="timeline-item-time">1:00</div>
            <div className="timeline-item-title">Payment Recieved</div>
            <div className="timeline-item-subtitle">Bank of American</div>
            <div className="timeline-item-text">Muhammad recieves settlement payment.</div>
          </div>
        </div>
      </div>
    </div>
	
  </Page>
);
