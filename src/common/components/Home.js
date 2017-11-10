import React, { Component } from 'react';
import Loader from './layout/Loader';

class Home extends Component {

  constructor(props){
    super(props);
    this.eventToggleSidebar = this.eventToggleSidebar.bind(this)
  }

  eventToggleSidebar(e) {
    e.preventDefault();
    this.props.toggleSidebar(!this.props.layout.sidebarOpen);
  }

  render() {

    return (
              <div className="posts">
                <div className="picture-bg">
                  <div className="picture-bg-wrap">
                    <div className="circle"></div>
                    <h1 className="lobster"><span>Hello</span><br/><span>and</span><br/><span>Welcome!</span><br/></h1>
                  </div>
                </div>
              </div>
            );
          }
        }

export default Home;