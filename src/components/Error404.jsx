import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Error404(props) {
  return(
    <div>
      <style jsx> {`
          div {
            background-color: rgba(211, 211, 211, 0.6);
            text-align: center;
            margin-left: auto;
            margin-right: auto;
            width: 70%;
            text-shadow: 0px 0px 7px grey;
          }
            `}</style>
      <h3>You seemed to have goofed the url.</h3>
      <h2>{props.location.pathname} is not a page.</h2>
      <h1>However, <Link to="/">Home</Link> is a page. Try again.</h1>
    </div>
  );
}

Error404.propTypes = {
  location: PropTypes.object
};

export default Error404;
