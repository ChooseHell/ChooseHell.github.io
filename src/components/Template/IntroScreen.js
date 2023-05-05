import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Screen = ({ data, title, sub }) => (
  <article className="post" id="index">
    <header>
      <div id={title} className="title">
        <h2 data-testid="heading"><Link to="/">{title}</Link></h2>
        <p>
          {sub}
        </p>
      </div>
    </header>
    {data}
  </article>
);

Screen.propTypes = {
  data: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  sub: PropTypes.string.isRequired,
};

export default Screen;
