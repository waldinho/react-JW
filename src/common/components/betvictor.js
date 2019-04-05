import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

class BetVictor extends Component {
  
    render () {
      return (
        <div className="page">
        <div className="content-about">
            <div className="posts">
              <div className="white-bg2">
                <div className="main-content no-pad">
                  <div className="company-image pt-img-8"></div>
                  <div className="center"><Link to="/portfolio" className="more"><span className="larger-arrow">&gt;</span>Back</Link></div>
                  <div className="main-content pad-50">
                  <p>Whislt at London Capital Group, I was assigned the task of re-working BetVictor's (a client of London Capital Groups) look and feel to thier trading website. This task was obviously front end focused, it involved me taking a pre-existing design produced by a Graphic designer and turning that into complicit clean and tidy code.</p> 
                  <p>BetVictor's website was CMS driven (Drupal) and I was given a large say in the look and feel of the website we produced, particularaly during the re-design process, which I was heavily involved in, with the implimentation of the new front end and UX of the website.</p> 
                  <p>The project turned out to be a big success as well as being delivered on time, the client was very happy with the end product.</p> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  
export default BetVictor;
