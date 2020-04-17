import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import Home from './Home';
import Login from './Login';
import Protected from './Protected';

export default withRouter(class AppWithRouterAccess extends Component {
    constructor(props) {
        super(props);
        this.onAuthRequired = this.onAuthRequired.bind(this);
    }

    onAuthRequired() {
        this.props.history.push('/login');
    }

    render() {
        return (
            // <Security issuer='https://${yourOktaDomain}/oauth2/default'
            <Security issuer='https://dev-991236.okta.com/oauth2/default'
                      // clientId='{clientId}'
                      clientId='0oa5ksbd9t1I3g6ND4x6'
                      redirectUri={window.location.origin + '/implicit/callback'}
                      onAuthRequired={this.onAuthRequired}
                      pkce={true} >
                <Route path='/' exact={true} component={Home} />
                <SecureRoute path='/protected' component={Protected} />
                {/*<Route path='/login' render={() => <Login issuer='https://${yourOktaDomain}/oauth2/default' />} />*/}
                <Route path='/login' render={() => <Login issuer='https://dev-991236.okta.com/oauth2/default' />} />
                <Route path='/implicit/callback' component={LoginCallback} />
            </Security>
        );
    }
});
