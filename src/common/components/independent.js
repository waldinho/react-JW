import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';


class Independent extends Component {

  render () {
    return (
      <div className="content-about">
      	<div className="posts">
						<div className="white-bg2"> 
              <div className="main-content no-pad">
              <div className="company-image pt-img-1"></div>
              <div className="center"><Link to="/portfolio" className="more"><span className="larger-arrow">&gt;</span>Back</Link></div>
                <div className="main-content pad-50">
                  <p>I recieved a brief while working at The Independent to create a landing page for users that had subscribed to The Independent daily app the previous year to offer them a free gift for renewing thier yearly subscription. The Lading page consisted of several options of the free gift the user was able to choose plus a simple form to fill out providing the customer support team with the relevent details of said user.</p>
                  <p>The functionality where the user was able to select thier free gift was built using javascript with the landing page template being built using standard HTML and CSS and the email being sent out to from the form the filled in to the customer support team using a php.</p>
                  <p>The finished version of the landing page can be found <Link to="http://www.james-waller.co.uk/loyal-subscribers" className="link-indy" target="_blank">here</Link>.</p>
                  <p>And, the original designs for the landing page can be perused below. The only change from the original design was to implement a different font on the landing page to what was on the original designs.</p>
                  <div className="indy-sub"></div>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Independent;