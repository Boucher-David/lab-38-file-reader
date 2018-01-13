import React from 'react';
import ReactDom from 'react-dom';


import UpdatePassword from './UpdatePassword.js';
import FileDashboard from './FileDashboard.js';

class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSignout = (e) => {
        event.preventDefault();
        this.props.actions.signout();
    }

    render() {
        return (
            <div>
                <UpdatePassword error={this.props.actions.error} update={this.props.actions.update}/>
                <button onClick={this.handleSignout}>Sign Out</button>


                <FileDashboard />
            </div>
        )
    }
}

module.exports = Content;