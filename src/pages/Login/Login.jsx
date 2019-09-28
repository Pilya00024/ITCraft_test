import React, { Component } from 'react';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { connect } from 'react-redux';
import { entryUser } from '../../utils/redux/actions/actionUsers';
import { validateEmail, validatePassword} from '../../utils/validators';
import history from '../../utils/history';
import routeNames from '../../utils/routeNames';
import './Login.scss';

class Login extends Component {
    state = {
        email: '',
        password: '',
        isPasswordError: false,
        isEmailError: false,
    };

    onFormSubmit = (e) => {
        e.preventDefault();
        const { entryUser } = this.props;
        const { email, password } = this.state;
        const isEmailError = !validateEmail(email);
        const isPasswordError = !validatePassword(password);
        if( isEmailError || isPasswordError) {
            this.setState({
                isPasswordError,
                isEmailError,
            })
        } else {
            entryUser({
                email,
                password,
                isAuthorization: true,
            })
            this.setState({
                email: '',
                password: '',
                isPasswordError: false,
                isEmailError: false,
            })
            history.push(routeNames.market)
        }
        
    };

    handleEmail = ({target}) => {
        const email = target.value;
        this.setState({
            email,
            isEmailError: false,
        })
    };

    handlePassword = ({target}) => {
        const password = target.value;
        this.setState({
            password,
            isPasswordError: false,
        })
    };

    render() {
        console.log(this)
        const { email, password, isPasswordError, isEmailError } = this.state;
        return(
            <form className="login" onSubmit={this.onFormSubmit}>
                <div className="login-container">
                    <div className="login__header">Login</div>
                    <Input 
                        placeholder="e-mail"
                        type="text"
                        isError={isEmailError}
                        value={email}
                        onChange={this.handleEmail}
                    />
                    <Input 
                        placeholder="password"
                        type="password"
                        value={password}
                        isError={isPasswordError}
                        onChange={this.handlePassword}
                    />
                    <Button 
                        type="submit"
                        onClick={this.onFormSubmit}
                        disabled={!validateEmail(email) || !validatePassword(password)}
                    >
                        Submit
                    </Button>
                </div>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    currentUser: state.currentUser,
});

export default connect(mapStateToProps, { entryUser })(Login);