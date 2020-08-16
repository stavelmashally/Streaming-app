import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends Component {
  componentDidMount() {
    // Load Google OAuth client lib
    window.gapi.load('client:auth2', () => {
      // Initialize Authentication Client
      window.gapi.client
        .init({
          clientId: process.env.REACT_APP_OAUTH_CLIENT_ID,
          scope: 'email',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          // Listen for Auth changes
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  // Dispatch actions
  onAuthChange = isSignedIn => {
    const userId = this.auth.currentUser.get().getId();

    if (isSignedIn) {
      // Change global state
      this.props.signIn(userId);
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = ({ auth }) => ({ isSignedIn: auth.isSignedIn });

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
