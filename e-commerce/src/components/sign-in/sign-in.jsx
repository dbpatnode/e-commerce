import React from 'react'
import FormInput from '../form-input/form-input.jsx'
import CustomButton from '../custom-button/custom-button.jsx'
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
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required
                        label="email"
                    />

                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        required
                        label="password"
                    />

                    <CustomButton
                        type="submit"
                    >
                        {/* anything within here is children. */}
                        Sign In
                    </CustomButton>
                </form>
            </div >
        )
    }
}

export default SignIn