import React, { Component } from 'react';
import { getPortfolio } from '../api/portfolio';
import { Link } from 'react-router';
import classNames from 'classnames';


class Services extends Component {

  render () {
    return (
      <div className="content-about">
      	<div className="posts">
						<div className="white-bg"> 
              <div className="main-content no-pad">
                {/*<div className="title-circle"></div>*/}
                <div className="title-services"><h2>LCG</h2></div>
                <div className="main-content pad-50">
                  <p>My main responsibility at London Capital Group was the conversion of static HTML websites into CMS (Drupal) driven websites, completing full build from start to finish. I was responsible for the build of various microsites and email campaigns for external and internal marketing teams. Again I was responsible for working on the development of the numerous internal tools used for communication between the IT support team and Development team, for example the bug logging and ticketing system we used, as well as writing applications to automate different tasks performed by the support team to streamline the process as much as possible, for example the implementation of the live chat functionality for communication with clients across the business. London Capital Group operates within an agile environment; working at the company for four years, this methodology is something I am well versed in having been exposed to.</p>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
