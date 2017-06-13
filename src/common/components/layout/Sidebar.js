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

		  <nav className="sidebar-nav">
		    <Link to="/home" className="sidebar-nav-item" activeClassName="active">Home</Link>
		    <Link to="/portfolio" className="sidebar-nav-item" activeClassName="active">My Portfolio</Link>
		    <Link to="/services" className="sidebar-nav-item" activeClassName="active">My Services</Link>
		    <Link to="/about" className="sidebar-nav-item" activeClassName="active">About</Link>
		  </nav>

		</div>
    );
  }
}

export default Sidebar;