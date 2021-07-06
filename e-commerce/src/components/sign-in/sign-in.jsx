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
                    <input
                        name="email"
                        type="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required />
                    <label>Email</label>

                    <input
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        required />
                    <label>Password</label>

                    <input type="submit" value="Sign In" />
                    <input type="submit" value="Sign In With Google" />
                </form>
            </div >
        )
    }
}

export default SignIn