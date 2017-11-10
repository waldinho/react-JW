import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';


class Independent extends Component {

  render () {
    return (
      <div className="content-about">
      	<div className="posts">
						<div className="white-bg2"> 
              <div className="main-content no-pad">
              <div className="company-image pt-img-1"></div>
              <div className="center"><Link to="/portfolio" className="more"><span className="larger-arrow">&gt;</span>Back</Link></div>
                <div className="main-content pad-50">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Independent;