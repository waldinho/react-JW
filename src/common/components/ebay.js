import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';


class eBay extends Component {

  render () {
    return (
      <div className="content-about">
      	<div className="posts">
						<div className="white-bg2"> 
              <div className="main-content no-pad">
              <div className="company-image pt-img-3"></div>
              <div className="center"><Link to="/portfolio" className="more"><span className="larger-arrow">&gt;</span>Back</Link></div>
                <div className="main-content pad-50">
                  <p>During my time at FEED, my main responsibilty was working on various different projects for the eBay account. These projects mainly consisted of building landing pages, micro tools and promotional emails for the main eBay site.</p>
                  <p>I have included a few examples below of a small selection of work I did during my time working on the eBay account.</p>
                  <p className="title-text">Car tyre finder <span className="larger-arrow">&gt;</span></p>
                  <p>A common problem eBay were having was that users, whilst on thier site, didn't know the specific tyre type for thier car. So to make this process easier we decided to create a piece of functionality that would find the particular tyres you required by simply typing in you car registration number. This was done by querying a database that eBay had set up with all the different tyre and car varients.</p>
                  <p>Example:</p>
                  <div className="parts-finder"></div>
                  <p>I have also included a couple a landing page and promotional email as examples of other typical pieces of work I would of done on the eBay account.</p>
                  <p className="title-text">Global shipping programme landing page <span className="larger-arrow">&gt;</span></p>
                  <p><Link to="http://portal.ebay.co.uk/gsp" target="_blank" className="lp-link">Link to landing page</Link></p>
                  <p className="title-text">German fashion promotional email <span className="larger-arrow">&gt;</span></p>
                  <div className="ebay-fashion"></div>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default eBay;
