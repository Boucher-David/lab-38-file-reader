import React from 'react';
import ReactDom from 'react-dom';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    

    handleChange = (e) => {
        let {name, value} = e.target;
        this.setState({
            [name]: value
          });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let signedIn = (e.target.id === 'signup') ? true : false; 
        this.props.collect({...this.state, signedIn});
    }

    render() {
        let username = <label htmlFor="username">
        <span>Username</span>
        <input
            type="text"
            name="username"
            placeholder="username"
            required="true"
            onChange={this.handleChange}
        />
    </label>;
        let password = <label htmlFor="password">
        <span>Password</span>
        <input
            type="password"
            name="password"
            placeholder="password"
            required="true"
            onChange={this.handleChange}
        />
    </label>;

        return (
            <div>
                <form>
                    {username}
                    {password}
                </form>    
                <button id="signup" onClick={this.handleSubmit}>Sign Up</button>
                <button id="signin" onClick={this.handleSubmit}>Sign In</button>
            </div>
        )
    }
}

module.exports = Form;