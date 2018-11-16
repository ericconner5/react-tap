import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Error404(props) {
  return(
    <div>
      <h3>You seemed to have goofed the url, good sir.</h3>
      <h2>{props.location.pathname} is not a page.</h2>
      <h1>However, <Link to="/">Home</Link> is a page. Try again.</h1>
    </div>
  );
}

Error404.proptypes = {
  location: PropTypes.object
};

export default Error404;
