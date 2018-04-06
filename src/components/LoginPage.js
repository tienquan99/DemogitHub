import React, {Component} from "react";
import PropTypes from "prop-types";
import {Redirect} from "react-router-dom";


class LoginPage extends Component {
    state = {
        auth: false
    };

    render() {
        const {auth} = this.state;

        if (auth) {
            return <Redirect to="/"/>;
        }

        return (
            <div className="LoginPage">
                Login
            </div>
        );
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                auth: true
            });
        }, 3000);
    }
}

LoginPage.propTypes = {
    any: PropTypes.any
};

export default LoginPage;