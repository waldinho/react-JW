import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

class Sidebar extends Component {


  constructor(props){
	super(props);
	this.eventCloseSidebar = this.eventCloseSidebar.bind(this)
  }

  eventCloseSidebar (e) {
  	this.props.toggleSidebar(!this.props.layout.sidebarOpen);
  }

  render() {

    return (

    	<div className="sidebar">

			<div className="profile-wrap">

				<div className="profile"></div>
				<span className="up-arrow">^</span> Me bossin' it in Hong Kong.

			</div>

		  <nav className="sidebar-nav">
		    <Link to="/home" className="sidebar-nav-item" activeClassName="active">Home</Link>
		    <Link to="/portfolio" className="sidebar-nav-item" activeClassName="active">Portfolio</Link>
		    <Link to="/services" className="sidebar-nav-item" activeClassName="active">Services</Link>
		    <Link to="/about" className="sidebar-nav-item" activeClassName="active">About</Link>
				<Link to="http://www.james-waller.co.uk/CV" className="sidebar-nav-item" activeClassName="active" target="_blank">CV</Link>
		  </nav>

		</div>
    );
  }
}

export default Sidebar;