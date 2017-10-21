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
                      <h3>RESPONSIVEWEB DESIGN</h3>
                    </div>
                    <div className="ch-info-back">
                      <p className="smaller">I have gained extensive experience designing and building many responsive websites. I have developed a personal approach to testing different solutions that brought me to design mostly in the browser.</p>
                    </div>	
                  </div>
                </div>
              </li>
              <li>
                <div className="ch-item">
                  <div className="ch-info">
                    <div className="ch-info-front">
                      <h3>INTERACTIVE DESIGN</h3>
                    </div>
                    <div className="ch-info-back">
                      <p className="smaller">A key area of focus in my design process is to ensure the best interaction for each situation to guide the user through their digital journey, as this is essential in creating engaging and effective user experiences.</p>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="ch-item">
                  <div className="ch-info">
                    <div className="ch-info-front">
                      <h3>FOCUSED DEVELOPMENT</h3>
                    </div>
                    <div className="ch-info-back">
                      <p>It’s important to discover why you have or want a website in the first place and what you are hoping to achieve with it. I’ll then drill down into the finer details and establish exactly how you will measure the success of your new site.</p>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="ch-item">
                  <div className="ch-info">
                    <div className="ch-info-front">
                      <h3>SOCIAL MEDIA INTERGRATION</h3>
                    </div>
                    <div className="ch-info-back">
                      <p>Social Media has grown rapidly in popularity, but while these tools are easily accessed, planning is paramount. The use of tools like Twitter and Facebook can enhance your marketing efforts, with your website acting as your hub.</p>
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