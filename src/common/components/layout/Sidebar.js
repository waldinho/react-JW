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
				<span className="up-arrow">^</span><span className="bio">Me bossin' it in Hong Kong.</span>

			</div>

		  <nav className="sidebar-nav">
		    <Link to="/home" className="sidebar-nav-item" activeClassName="active">Home</Link>
		    <Link to="/portfolio" className="sidebar-nav-item" activeClassName="active">Portfolio</Link>
		    <Link to="/services" className="sidebar-nav-item" activeClassName="active">Services</Link>
		    <Link to="/about" className="sidebar-nav-item" activeClassName="active">About</Link>
				<Link to="http://www.james-waller.co.uk/CV" className="sidebar-nav-item" activeClassName="active" target="_blank">CV</Link>
		  </nav>

			<div className="icon-wrap">
				<a href="https://www.facebook.com/waldinho" target="_blank"><div className="facebook"></div></a>
				<a href="https://github.com/waldinho" target="_blank"><div className="git"></div></a>
				<a href="https://www.linkedin.com/in/james-waller-573b81b/" target="_blank"><div className="linkedin"></div></a>
				<a href="https://plus.google.com/u/0/112625426367168441968" target="_blank"><div className="google"></div></a>
			</div>

		</div>
    );
  }
}

export default Sidebar;