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
        })
    };

    handlePassword = ({target}) => {
        const password = target.value;
        this.setState({
            password,
        })
    };

    onBlur = (type) => {
        const { email, password } = this.state;
        if(type === 'email' && !!email) {
            this.setState({
                isEmailError: !validateEmail(email),
            })
        }
        if(type === 'password' && !!password) {
            this.setState({
                isPasswordError: !validatePassword(password),
            })
        }
    }

    onFocus= (type) => {
        if(type === 'email') {
            this.setState({
                isEmailError: false,
            })

        }
        if(type === 'password') {
            this.setState({
                isPasswordError: false,
            })
        }
    }

    render() {
        const { email, password, isPasswordError, isEmailError } = this.state;
        return(
            <form className="login" onSubmit={this.onFormSubmit}>
                <div className="login__header">Login</div>
                    <Input 
                        placeholder="e-mail"
                        type="text"
                        isError={isEmailError}
                        errorText="Incorrect e-mail"
                        value={email}
                        onBlur={() => this.onBlur('email')}
                        onFocus={() => this.onFocus('email')}
                        onChange={this.handleEmail}
                    />
                    <Input 
                        placeholder="password"
                        type="password"
                        value={password}
                        isError={isPasswordError}
                        onFocus={() => this.onFocus('password')}
                        onBlur={() => this.onBlur('password')}
                        errorText="Incorrect password"
                        onChange={this.handlePassword}
                    />
                    <Button 
                        type="submit"
                        onClick={this.onFormSubmit}
                        disabled={!validateEmail(email) || !validatePassword(password)}
                    >
                        Submit
                    </Button>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    currentUser: state.currentUser,
});

export default connect(mapStateToProps, { entryUser })(Login);