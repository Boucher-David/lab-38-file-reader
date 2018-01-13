import React from 'react';
import ReactDom from 'react-dom';



class UpdatePassword extends React.Component {
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
        if ((this.state.username === undefined) || (this.state.oldPassword === undefined) || (this.state.newPassword === undefined)) return this.props.error("Please fill out all form fields.");
        this.props.update(this.state);
    }


    render() {

        let username = <input
        type="text"
        name="username"
        placeholder="username"
        required="true"
        onChange={this.handleChange}
    />;
        let oldPassword = <input
        type="password"
        name="oldPassword"
        placeholder="Enter old password"
        required="true"
        onChange={this.handleChange}
    />;
        let newPassword = <input
        type="password"
        name="newPassword"
        placeholder="Enter new password"
        required="true"
        onChange={this.handleChange}
    />;

        return (
            <div>
                <form>
                    {username}
                    {oldPassword}
                    {newPassword}
                </form>
                <button onClick={this.handleSubmit}>Update Password</button>
            </div>
        )
    }
}

module.exports = UpdatePassword;