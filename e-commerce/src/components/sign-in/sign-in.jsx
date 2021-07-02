import React from 'react'
import './sign-in.jsx'

class SignIn extends React.Component {

    state = {
        email: '',
        password: ''
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({ email: '', password: '' })
    }

    render() {
        return (
            <div className="sign-in">
                <h2>Already have an account?</h2>
                <span>Sign in with your email and password.</span>

                <form onSubmit={(e) => this.handleSubmit}>
                    <input name="email" type="email" required />
                    <label>Email</label>

                    <input name="password" type="password" required />
                    <label>Password</label>

                    <input type="submit" value="Sign In" />
                    <input type="submit" value="Sign In With Google" />
                </form>
            </div >
        )
    }
}

export default SignIn