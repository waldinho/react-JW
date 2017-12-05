import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';


class Shell extends Component {

  render () {
    return (
      <div className="content-about">
      	<div className="posts">
						<div className="white-bg2"> 
              <div className="main-content no-pad">
              <div className="company-image pt-img-6"></div>
              <div className="center"><Link to="/portfolio" className="more"><span className="larger-arrow">&gt;</span>Back</Link></div>
                <div className="main-content pad-50">
                  <p>During my time at Freedman International I worked extensively on the Shell account. The project that I was most pleased to work on with this account was the marketing campaign around the introduction of their QR codes. Basically what they wanted from this particular roject was for the user to recieve an email, then from there they would click through onto a landing page with a promotional video explaing how to use the QR codes to the user.</p>
                  <p>I was tasked with both the build of the HTML emails (5 in total) and the production of the promotional video using the footage they had supplied. The HTML email builds were no problem, they we completed fairly quickly. Although, as a relative video editing novice I found the production of said video far more challenging.</p>
                  <p>However, the video was eventually produced on time and to the satisfaction of the client, as well as this the campaign was a success and I learned a fair bit about various editing techniques after being taken well out of my comfort zone with the video production.</p>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Shell;
