import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Repos from './about/Repos';

import Loader from './layout/Loader';
import Banner from './layout/Banner';

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchReposIfNeeded();
  }

  render () {
    const { results, isFetching, lastUpdated, error } = this.props;
    return (
      <div>


      	  <div className="posts">
             <div className="white-bg"> 
               Blah <br/>Blah <br/>Blah <br/>Blah <br/>Blah <br/>Blah <br/>Blah <br/>Blah <br/>Blah <br/>Blah <br/>Blah <br/>
             </div>
      	  	
	      </div>

      </div>
    );
  }
}

About.propTypes = {
  results: PropTypes.array.isRequired,
  error: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired
};

export default About;