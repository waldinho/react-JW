import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';


class KurtGeiger extends Component {

  render () {
    return (
      <div className="content-about">
      	<div className="posts">
						<div className="white-bg2"> 
              <div className="main-content no-pad">
              <div className="company-image pt-img-5"></div>
              <div className="center"><Link to="/portfolio" className="more"><span className="larger-arrow">&gt;</span>Back</Link></div>
                <div className="main-content pad-50">
                  <p>This particular work for Kurt Gieger was landed through a freelance opportunity. I was assined the job of re-working the front end of thier careers section on thier website inline with thier new branding. I was allowed access to this particular area of the repo in order to make the changes.</p>
                  <p>The actual task it self was quite straight forward and jut involved me matching the PSD's provided to to front end but at the time I was thrilled to work with such a huge company such as Kurt Geiger and promptly completed the task well within the deadline and to a very high standard where all involved were very happy with the end product.</p>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default KurtGeiger;
