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
                <div className="title-services"><h2>Services</h2></div>
              </div>
             </div>
	      </div>
        <section className="main">
            <ul className="ch-grid">
              <li>
                <div className="ch-item">				
                  <div className="ch-info">
                    <div className="ch-info-front">
                      <h3>RESPONSIVE WEB DESIGN</h3>
                      <p className="smaller mobile">I have gained extensive experience designing and building many responsive websites. I have developed a personal approach to testing different solutions that brought me to design mostly in the browser.</p>
                    </div>
                    <div className="ch-info-back ch-img-1">
                      {/*<h3>RESPONSIVE WEB DESIGN</h3>*/}
                      <p className="smaller no-mobile">I have gained extensive experience designing and building many responsive websites. I have developed a personal approach to testing different solutions that brought me to design mostly in the browser.</p>
                    </div>	
                  </div>
                </div>
              </li>
              <li>
                <div className="ch-item">
                  <div className="ch-info">
                    <div className="ch-info-front">
                      <h3>INTERACTIVE DESIGN</h3>
                      <p className="smaller mobile">A key area of focus in my design process is to ensure the best interaction for each situation to guide the user through their digital journey, as this is essential in creating engaging and effective user experiences.</p>
                    </div>
                    <div className="ch-info-back ch-img-2">
                      {/*<h3>INTERACTIVE DESIGN</h3>*/}
                      <p className="smaller no-mobile">A key area of focus in my design process is to ensure the best interaction for each situation to guide the user through their digital journey, as this is essential in creating engaging and effective user experiences.</p>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="ch-item">
                  <div className="ch-info">
                    <div className="ch-info-front">
                      <h3>FOCUSED DEVELOPMENT</h3>
                      <p className="smaller mobile">It’s important to discover why you have or want a website in the first place and what you are hoping to achieve with it. I’ll then drill down into the finer details and establish exactly how you will measure the success of your new site.</p>
                    </div>
                    <div className="ch-info-back ch-img-3">
                      {/*<h3>FOCUSED DEVELOPMENT</h3>*/}
                      <p className="no-mobile">It’s important to discover why you have or want a website in the first place and what you are hoping to achieve with it. I’ll then drill down into the finer details and establish exactly how you will measure the success of your new site.</p>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="ch-item">
                  <div className="ch-info">
                    <div className="ch-info-front">
                      <h3>SOCIAL MEDIA INTERGRATION</h3>
                      <p className="smaller mobile">Social Media has grown rapidly in popularity, but while these tools are easily accessed, planning is paramount. The use of tools like Twitter and Facebook can enhance your marketing efforts, with your website acting as your hub.</p>
                    </div>
                    <div className="ch-info-back ch-img-4">
                      {/*<h3>SOCIAL MEDIA INTERGRATION</h3>*/}
                      <p className="no-mobile">Social Media has grown rapidly in popularity, but while these tools are easily accessed, planning is paramount. The use of tools like Twitter and Facebook can enhance your marketing efforts, with your website acting as your hub.</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </section>
      </div>
    );
  }
}

export default Services;
