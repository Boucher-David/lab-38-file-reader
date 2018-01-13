import React from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';
import { Link, Route, Router} from 'react-router-dom';

import * as actions from '../actions/auth-action.js';

import Home from './Home/Home.js';
import Content from './Content/Content.js';
import ErrorDisplay from './ErrorDisplay.js'

class App extends React.Component {
    constructor(props) {
        super(props);
        console.log('Initial props: ', props);
        props.init();
    }

    render() {
        return (
            <div id="base-div">

                <nav>
                    <Link to="/">Home</Link>
                </nav>

                <main>
                    {(this.props.state.auth.loggedIn) ? <Content actions={this.props}/> : <Home error={this.props.error} auth={this.props} state={this.props.state}/>}
                    <ErrorDisplay message={this.props.state.auth.message}/>
                </main>
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        state
    }
}

const mapDispatchToProps = (dispatch, payload) => {

    return {
        signup: payload => dispatch(actions.auth_signup(payload)),
        signin: payload => dispatch(actions.auth_signin(payload)),
        signout: payload => dispatch(actions.auth_signout(payload)),
        update: payload => dispatch(actions.auth_update(payload)),
        init: () => dispatch(actions.auth_init()),
        error: message => dispatch(actions.error(message))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);