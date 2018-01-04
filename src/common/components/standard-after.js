import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';


class After extends Component {

  render () {
    return (
      <div className="content-about">
      	<div className="posts">
						<div className="white-bg2"> 
              <div className="main-content no-pad">
              <div className="company-image pt-img-2"></div>
              <div className="center"><Link to="/portfolio" className="more"><span className="larger-arrow">&gt;</span>Back</Link></div>
                <div className="main-content pad-50">
                  <p>During summer 2017, I undertook a huge prjoect for The Evening Standard, the task was to re-work the whole of the site's front end. As you may or may not know The Evening Standard is a huge website, so this was no mean feat.</p>
                  <p>I recieved the designs from the internal Graphic Designer. The designs were very different from the old site, as well as this we had decided to make the site more modular so sections of the site were now controlled in modules on the front and back end. So this meant changing the SASS and the template structuring.</p>
                  <p>The templates were built using ejs templates, this allowed us to parse the data in using a json feed. The whole site worked on the MVC framework structuring principle and as you can see from the before and after shots below I think it turned out very well.
                  </p>
                  <div className="tabs">
                    <Link to="/portfolio/evening-standard" className="tab">Before</Link>
                    <Link to="/portfolio/evening-standard-after" className="tab active-tab">After</Link>
                  </div>
                  <div className="es-new"></div>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default After;

