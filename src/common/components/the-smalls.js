import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';


class Smalls extends Component {

  render () {
    return (
      <div className="content-about">
      	<div className="posts">
	   <div className="white-bg2"> 
              <div className="main-content no-pad">
              <div className="company-image pt-img-10"></div>
              <div className="center"><Link to="/portfolio" className="more"><span className="larger-arrow">&gt;</span>Back</Link></div>
                <div className="main-content pad-50">
                  <p>My core responsibility was to look after the day to day running of The Smalls Website. In this varied role I was exposed to all types of development work as I was the sole internal developer at the company.</p> 
                  <p>I primary worked on the front end of the website but also experienced working on server side technologies, from database administration using MySQL to full on server migration whilst working at The Smalls.</p>
                  <p>The Smalls website was CMS driven (Drupal) and I was given a large say in the look and feel of the website we produced, particularaly when The Smalls went through a re-design process, which I was heavily involved in, with the implimentation of the new front end and UX of the website.</p> 
                  <p>I was als responsible for writing documentation and bug fixing. This role was predominantly web based but I developed applications and tools for internal use as well.</p>
                </div>
              </div>
           </div>
        </div>
      </div>
    );
  }
}

export default Smalls;
