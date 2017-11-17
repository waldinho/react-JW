import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';


class Tradefair extends Component {

  render () {
    return (
      <div className="content-about">
      	<div className="posts">
						<div className="white-bg2"> 
              <div className="main-content no-pad">
              <div className="company-image pt-img-7"></div>
              <div className="center"><Link to="/portfolio" className="more"><span className="larger-arrow">&gt;</span>Back</Link></div>
                <div className="main-content pad-50">
                  <p>During my time at London Capital Group, I was assigned the task of re-working Tradefair's (a client of London Capital Groups) online application form for their live and demo trading accounts. This task was Front End focused, it involved me taking a pre-existing design produced by a Graphic designer and turning that into complicit clean and tidy code. The application form interacted with the live and demo accounts databases so I had to be very aware of this while making any changes to the mark up and styling.</p>
                  <p>The project turned out to be a big success, was delivered to the clients satisfaction and within the delivery deadline. Although the branding and styling has changed since I completed this project in 2010, you can see <Link to="https://tradefair.applyforanaccount.com/EN-GB/TF/live/step1.aspx" target="_blank">here</Link> that the application form I worked on is still used today.</p>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tradefair;
