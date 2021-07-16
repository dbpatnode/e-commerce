import React from 'react'
import FormInput from '../form-input/form-input.jsx'
import CustomButton from '../custom-button/custom-button.jsx'
import '../custom-button/custom-button.scss'

import { signInWithGoogle } from '../../firebase/firebase.utils.js'
import './sign-in.scss'



class SignIn extends React.Component {

    state = {
        email: '',
        password: ''
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({ email: '', password: '' })
    }

    // this is grabbing whatever the name value is from either input (in this case email and password)
    // and assigning it the value of whatever is typed
    handleChange = (e) => {
        const { value, name } = e.target
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="sign-in">
                <h2>Already have an account?</h2>
                <span>Sign in with your email and password.</span>

                <form onSubmit={(e) => this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        defaultValue={this.state.email}
                        handleChange={this.handleChange}
                        required
                        label="email"
                    />

                    <FormInput
                        name="password"
                        type="password"
                        defaultValue={this.state.password}
                        handleChange={this.handleChange}
                        required
                        label="password"
                    />
                    <div className="buttons">
                        <CustomButton
                            type="submit"
                        >
                            {/* anything within here is children. */}
                            Sign In
                        </CustomButton>
                        <button className="custom-button google"
                            onClick={signInWithGoogle}
                        >
                            {/* anything within here is children. */}
                            Sign In With Google
                        </button>
                    </div>
                </form>
            </div >
        )
    }
}

export default SignIn