import React, { Component } from 'react';
import { getPortfolio } from '../api/portfolio';
import { Link } from 'react-router';
import classNames from 'classnames';

class Portfolio extends Component {

  constructor(props) {
		super(props);
	  }
	
  componentDidMount() {
		this.props.fetchReposIfNeeded();
	  }

  render() {

  	const portfolio = getPortfolio();
	const RoleRows = (roles) => {
		return roles.map((role) => {

			
			
			return (
					<li>
						<div className="pt-item">				
							<div className="pt-info">
							<div className={role.image}>
							
							</div>
							<div className="pt-info-back">
								{/*<h3>RESPONSIVE WEB DESIGN</h3>*/}
								<h3>{role.title}</h3>
								<p>{role.alttitle}</p>
								<Link to={role.link} className={role.case}><span className="larger-arrow">></span>Case study</Link>
								<Link to={role.link} className={role.more}><span className="larger-arrow">></span>More</Link>
							</div>	
							</div>
						</div>
					</li>

			)
		});
	}

    const PortfolioRows = portfolio.map((row) => {
    	const classname = classNames(row.classname);
        return (
            <div key={row.title} className="content-about">
				<div className="posts">
					<div className="white-bg"> 
					<div className="main-content no-pad">
					{/*<div className="title-circle"></div>*/}
					<div className="title-services"><h2>Portfolio</h2></div>
					</div>
					</div>
				</div>
				<div>
					<section className="main">
					<ul className="pt-grid">
						{RoleRows(row.roles)}
					</ul>
					</section>
				</div>
			</div>
        )
    });

    return (
        <div className="posts">
        	{PortfolioRows}
        </div>
    );

  }
}

export default Portfolio;
