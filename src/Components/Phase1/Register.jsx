import React, { Component } from "react";
// import RegistrationService from "../Authentication/RegistrationService";
import UserDataService from "../../api/user/UserDataService.js"
import { Formik, Form, Field, ErrorMessage } from 'formik'

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
            password: this.state.password,
            favoriteTeam: this.state.favoriteTeam
        }
        console.log("register clicked")

        try {
            UserDataService.registerUser(user)
                .then(() => this.props.history.push('/login'))
        } catch (error) {
            this.setState({showSuccessMessage:false})
            this.setState({hasRegistrationFailed:true})
        }
        // RegistrationService.hashPass(password)
        // .then( (response) => {
        //     RegistrationService.registerUser(this.state.name, this.state.username, this.state.email, response, this.state.favoriteTeam)
        //     this.props.history.push('/login')
        // }).catch( () => {
        //     this.setState({showSuccessMessage:false})
        //     this.setState({hasRegistrationFailed:true})
        // })
    }


    // render() {
    //     return (
    //         <div className="container">
    //         <h1>Register</h1>
    //         <div>
    //             {this.state.showSuccessMessage && <div>Registration Successful</div>}
    //             {this.state.hasRegistrationFailed && <div className="alert alert-warning">Invalid inputs. Registration failed</div>}
    //             <div>
    //                 Name: <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
    //                 User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
    //                 Email: <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
    //                 Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
    //                 Please confirm password: <input type="password" name="password2" value={this.state.password2} onChange={this.handleChange} />
    //                 favoriteTeam: <input type="text" name="favoriteTeam" value={this.state.favoriteTeam} onChange={this.handleChange} />
    //                 <button className="btn btn-success" onClick={this.registerClicked} >Register</button>
    //             </div>
    //         </div>
    //         </div>
    //     )
    // }

    render() {
        return (
            <div>
                <h1>Register</h1>
                <div className="container">
                    <Formik 
                            onSubmit={this.registerClicked}
                            validateOnBlur={false}
                            validateOnChange={false}
                            validate={this.validate}
                            enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <fieldset className="form-group">
                                        <label>Name</label>
                                        <Field className="form-control" type="text" name="name"/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Username</label>
                                        <Field className="form-control" type="text" name="username" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Email</label>
                                        <Field className="form-control" type="email" name="email"/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Password</label>
                                        <Field className="form-control" type="password" name="password" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Confirm Password</label>
                                        <Field className="form-control" type="password" name="password2" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Favorite Team</label>
                                        <Field className="form-control" type="text" name="favoriteTeam" />
                                    </fieldset>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        )
    }

}

export default Register