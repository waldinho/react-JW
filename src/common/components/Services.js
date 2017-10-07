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
                    <div className="ch-info-front ch-img-1"></div>
                    <div className="ch-info-back">
                      <h3>RESPONSIVE WEB DESIGN</h3>
                      <p>blah blah</p>
                    </div>	
                  </div>
                </div>
              </li>
              <li>
                <div className="ch-item">
                  <div className="ch-info">
                    <div className="ch-info-front ch-img-2"></div>
                    <div className="ch-info-back">
                      <h3>INTERACTIVE DESIGN</h3>
                      <p>blah blah</p>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="ch-item">
                  <div className="ch-info">
                    <div className="ch-info-front ch-img-3"></div>
                    <div className="ch-info-back">
                      <h3>FOCUSED DEVELOPMENT</h3>
                      <p>blah blah</p>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="ch-item">
                  <div className="ch-info">
                    <div className="ch-info-front ch-img-3"></div>
                    <div className="ch-info-back">
                      <h3>SOCIAL MEDIA INTERGRATION</h3>
                      <p>blah blah</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </section>
          <div className="posts">
          <div className="white-bg"> 
            <div className="main-content pad-50">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
          </div>
	      </div>
      </div>
    );
  }
}

export default Services;