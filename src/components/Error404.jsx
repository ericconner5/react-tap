import React from 'react';
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

export default Error404;
