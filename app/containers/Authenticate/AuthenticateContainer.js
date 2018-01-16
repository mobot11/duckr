import React, { Component, PropTypes } from 'react';
import { Authenticate } from 'components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActionCreators from 'redux/modules/users';

class AuthenticateContainer extends Component {
  handleAuth() {
    this.props.fetchAndHandleAuthedUser();
  }
  render() {
    return (
      <Authenticate
        isFetching={this.props.isFetching}
        error={this.props.error}
        onAuth={this.handleAuth.bind(this)}
      />
    );
  }
}

AuthenticateContainer.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  fetchAndHandleAuthedUser: PropTypes.func.isRequired,

};

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    error: state.error,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(userActionCreators, dispatch);
};

const AuthConnect = connect(mapStateToProps, mapDispatchToProps)(
  AuthenticateContainer
);

export { AuthConnect };
