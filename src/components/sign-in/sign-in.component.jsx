import React, { Component } from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: '' })
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className='sign-in'>
                <h2 className="title">already have an account</h2>
                <span>sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>

                    <FormInput type='email' name='email' value={this.state.email} required handleChange={this.handleChange} label='Email' />
                    <FormInput type='password' name='password' value={this.state.password} required handleChange={this.handleChange} label='Password' />
                    <CustomButton type='submit' >Sign In </CustomButton>
                </form>
            </div>
        )
    }
}


export default SignIn;