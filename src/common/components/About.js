import React, { Component } from 'react';
import classNames from 'classnames';
class About extends Component {

  render () {
    return (
      <div className="content-about">

      	  <div className="posts">
             <div className="white-bg"> 
                {/*<div className="title-circle"></div>*/}
                <div className="title"><h2>About <br/>me!</h2></div>
                <div className="main-content">
                  <p>My name is James Waller and I am a Web Developer specialising in everything your average web visitor sees and feels. User interface design and front end development.</p>

                  <p>I live in Sydney, Australia, after working in London, England for 9 years as a UX Designer / Front End Developer and graduating as a Bachelor of Multimedia Technology from Leeds Metropolitan University, England in 2006.</p>

                  <p>I like creating unique clean sites that are easy to understand and navigate. All my works comply with web standards, use the latest industry techniques and are hand coded.</p></div>
                  <ul className="abt-grid">
                    <li>
                      <div className="abt-item">				
                        <div className="abt-info">
                          <div className="abt-img-1">
                          </div>	
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="abt-item">				
                        <div className="abt-info">
                          <div className="abt-img-2">
                          </div>	
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="abt-item">				
                        <div className="abt-info">
                          <div className="abt-img-3">
                          </div>	
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="abt-item">				
                        <div className="abt-info">
                          <div className="abt-img-4">
                          </div>	
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="abt-item">				
                        <div className="abt-info">
                          <div className="abt-img-5">
                          </div>	
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="abt-item">				
                        <div className="abt-info">
                          <div className="abt-img-6">
                          </div>	
                        </div>
                      </div>
                    </li>
                  </ul>
             </div>
	      </div>

      </div>
    );
  }
}

export default About;
