import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';


class StubHub extends Component {

  render () {
    return (
      <div className="content-about">
      	<div className="posts">
						<div className="white-bg2"> 
              <div className="main-content no-pad">
              <div className="company-image pt-img-4"></div>
              <div className="center"><Link to="/portfolio" className="more"><span className="larger-arrow">&gt;</span>Back</Link></div>
                <div className="main-content pad-50">
                <p>During my time at FEED, I was assigned the task of creating a Euro 2016 "wall chart" for StubHub. This was designed to allow users to keep a track of the fixtures and results of the competition, as well as allowing them to buy tickets up to an hour before the game on the StubHub ticket marketplace.</p>
                <p>The website used an external API set up specifically for Euro 2016. This would then populate the project with all the correct data, home team, away team, stadium, kick off date and time, etc. Then once the time had gotten to an hour before keick off the buy and now buttons would be hidden.</p>
                <p>As well as this we ran a cron job every couple of minutes to update the score as if the scores were live, the functionality of the project was built using php and the templates were structured using handlebars.js. This worked fine at the time, however if I were to build this project again today (January 2018) I would almost definitely use react.js as this would eliminate the need to run a cron job on the server every few minutes to update the scores.</p>
                <p>A screenshot of the finished project can be seen below:</p>
                  <div className="euro-2016"></div>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StubHub;
