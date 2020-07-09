import React, { Component } from "react";
import RegistrationService from "../Authentication/RegistrationService";

class Register extends Component{
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            username: '',
            email: '',
            password: '',
            password2: '',
            favoriteTeam: '',
            showSuccessMessage: false,
            hasRegistrationFailed: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.registerClicked = this.registerClicked.bind(this)
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name] : event.target.value
            }
        )
    }

    // onSubmit = async e => {
    //     e.preventDefault();
    //     if (password !== password2) {
    //       setAlert('Passwords do not match', 'danger');
    //     } else {
    //       register({ name, email, password });
    //     }
    //   };

    registerClicked() {

        let user = {
            name: this.state.name,
            username: this.state.username,
            email: this.state.email,
            password: RegistrationService.hashPass(this.state.password),
            favoriteTeam: this.state.favoriteTeam
        }
        console.log("register clicked")

        // try {
            RegistrationService.registerUser(user)
            this.props.history.push('/login')
        // } catch (error) {
        //     this.setState({showSuccessMessage:false})
        //     this.setState({hasRegistrationFailed:true})
        // }
        // RegistrationService.hashPass(password)
        // .then( (response) => {
        //     RegistrationService.registerUser(this.state.name, this.state.username, this.state.email, response, this.state.favoriteTeam)
        //     this.props.history.push('/login')
        // }).catch( () => {
        //     this.setState({showSuccessMessage:false})
        //     this.setState({hasRegistrationFailed:true})
        // })
    }


    render() {
        return (
            <div className="container">
            <h1>Register</h1>
            <div>
                {this.state.showSuccessMessage && <div>Registration Successful</div>}
                {this.state.hasRegistrationFailed && <div className="alert alert-warning">Invalid inputs. Registration failed</div>}
                <div>
                    Name: <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                    User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                    Email: <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    Please confirm password: <input type="password" name="password2" value={this.state.password2} onChange={this.handleChange} />
                    favoriteTeam: <input type="text" name="favoriteTeam" value={this.state.favoriteTeam} onChange={this.handleChange} />
                    <button className="btn btn-success" onClick={this.registerClicked} >Register</button>
                </div>
            </div>
            </div>
        )
    }

}

export default Register