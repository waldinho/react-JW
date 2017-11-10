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

                  <p>I live in London, after graduating as a Bachelor of Multimedia Technology from Leeds Metropolitan University in 2006. Since then I have enjoyed working in web design and development for over 7 years.</p>

                  <p>I like creating unique clean sites that are easy to understand and navigate. All my works comply with web standards, use the latest industry techniques and are hand coded.</p></div>
             </div>
	      </div>

      </div>
    );
  }
}

export default About;