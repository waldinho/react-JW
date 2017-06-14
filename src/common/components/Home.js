import React, { Component } from 'react';

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

          <div className="picture-bg-holder"><div className="circle"></div></div>
            <h1><span>Hello</span><br/><span>and</span><br/><span>Welcome!</span><br/></h1>

          {/*<h1><span>
          Blah blah blah
          </span></h1>

          <h1><span>
          Blah blah blah
          </span></h1>

          <h1><span>
          Blah blah blah
          </span></h1>*/}

          </div>
        </div>

  		
  
    );
  }
}

export default Home;