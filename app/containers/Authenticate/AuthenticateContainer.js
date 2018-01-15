import React, { Component } from 'react';
import { Authenticate } from 'components';
import auth from 'helpers/auth';

class AuthenticateContainer extends Component {
  handleAuth() {
    const authedUser = auth();
    console.log('authed user', authedUser);
  }
  render() {
    return (
      <Authenticate
        isFetching={false}
        error=""
        onAuth={this.handleAuth.bind(this)}
      />
    );
  }
}

export { AuthenticateContainer };
