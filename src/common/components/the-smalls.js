import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';


class Services extends Component {

  render () {
    return (
      <div className="content-about">
      	<div className="posts">
						<div className="white-bg"> 
              <div className="main-content no-pad">
                {/*<div className="title-circle"></div>*/}
                <div className="title-services"><h2>The Smalls</h2></div>
                <div className="main-content pad-50">
                  <p>In this varied role I was exposed to all types of development work as I was the sole internal developer at the company. I primary worked on the front end of these websites but have also experienced working on server side technologies, from database administration using MySQL to full on server migration. I looked after a number of CMS driven websites (Drupal and Wordpress) and I was given a large say in the look and feel of the websites we produced as well as writing documentation and bug fixing. This role was predominantly web based but I also developed applications and tools for internal use as well.</p>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
