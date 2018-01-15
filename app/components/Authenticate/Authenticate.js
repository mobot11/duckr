import React, { PropTypes } from 'react';

const Authenticate = ({ error, isFetching, onAuth }) => {
  return (
    <div>
      <h1>{'Authenticate'}</h1>
      <p>Facebook auth button</p>
      {error ? <p>{error}</p> : null}
    </div>
  );
};

Authenticate.propTypes = {
  error: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  onAuth: PropTypes.func.isRequired,
};

export { Authenticate };
