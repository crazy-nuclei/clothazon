import React, { Component } from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, SignInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ eamil: '', password: '' });
        } catch (error) {
            console.log(error);
        }
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
                    <div className='buttons'>
                        <CustomButton type='submit' >Sign In </CustomButton>
                        <CustomButton onClick={SignInWithGoogle} isGoogleSignIn>Sign In With Google </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}


export default SignIn;