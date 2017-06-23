import React, { Component } from 'react';
import { getPortfolio } from '../api/portfolio';
import classNames from 'classnames';

class Portfolio extends Component {

  render() {

  	const portfolio = getPortfolio();
	const RoleRows = (roles) => {
		return roles.map((role) => {
			return (
				/*<div key={role.title} className="role_wrapper clearfix">
					<p className="role">Role</p>
					<p className="role_title">{role.title}<br />
					<span className="role_skills">{role.skills}</span></p>
				</div>*/
				{/*<div className="content-portfolio">
				<div className="grid">
					<figure className="effect-jazz">
						<img src="assets/25.jpg" alt="img25"/>
						<figcaption>
							<h2>Dynamic <span>Jazz</span></h2>
							<p>When Jazz starts to chase cars, the whole world stands still.</p>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
					<figure className="effect-jazz">
						<img src="assets/6.jpg" alt="img06"/>
						<figcaption>
							<h2>Dynamic <span>Jazz</span></h2>
							<p>When Jazz starts to chase cars, the whole world stands still.</p>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
				</div>
				</div>*/}
			)
		});
	}

    const PortfolioRows = portfolio.map((row) => {
    	const classname = classNames('portfolio_item','clearfix',row.classname);
        return (
            // <div key={row.title} className={classname}>
				// <h2><a href={row.link} target="_blank">(visit site)</a> {row.title}</h2>
				// {RoleRows(row.roles)}
				<div className="content-portfolio">
				<div className="grid">
					<figure className="effect-jazz">
						<img src="assets/25.jpg" alt="img25"/>
						<figcaption>
							<h2>Dynamic <span>Jazz</span></h2>
							<p>When Jazz starts to chase cars, the whole world stands still.</p>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
					<figure className="effect-jazz">
						<img src="assets/6.jpg" alt="img06"/>
						<figcaption>
							<h2>Dynamic <span>Jazz</span></h2>
							<p>When Jazz starts to chase cars, the whole world stands still.</p>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
				</div>
				</div>
			// </div>
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