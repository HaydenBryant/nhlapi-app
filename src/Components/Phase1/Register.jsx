import React, { Component } from "react";
// import RegistrationService from "../Authentication/RegistrationService";
import UserDataService from "../../api/user/UserDataService.js"
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';

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
                        initialValues = {{
                            name: '',
                            username: '',
                            email: '',
                            password: '',
                            password2: '',
                            favoriteTeam: ''
                        }}

                        validationSchema = {Yup.object().shape({
                            name: Yup.string()
                                .min(2, 'Name must be longer than 1 character')
                                .max(75, 'Name cant be more than 75 characters')
                                .required('Name is required'),
                            username: Yup.string()
                                .min(2, 'Username must be longer than 1 character')
                                .max(75, 'Username cant be more than 75 characters')
                                .required('Username is required'),
                            email: Yup.string()
                                .email('Invalid Email')
                                .required('Email is required'),
                            password: Yup.string()
                                .min(6, 'Password must be at least 6 characters')
                                .required('Password is required'),
                            password2: Yup.string()
                                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                                .required('Confirm Password is required')
                        })}

                        onSubmit={this.registerClicked}
                        validateOnBlur={false}
                        validateOnChange={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {({ errors, touched }) => (
                                <Form>
                                    <fieldset className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <Field className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')} type="text" name="name"/>
                                        <ErrorMessage name="name" component="div" className="invalid-feedback" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label htmlFor="username">Username</label>
                                        <Field className={'form-control' + (errors.username && touched.username ? ' is-invalid' : '')} type="text" name="username" />
                                        <ErrorMessage name="username" component="div" className="invalid-feedback" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <Field className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} type="email" name="email"/>
                                        <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <Field className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} type="password" name="password" />
                                        <ErrorMessage name="password" component="div" className="invalid-feedback" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label htmlFor="password2">Confirm Password</label>
                                        <Field className={'form-control' + (errors.password2 && touched.password2 ? ' is-invalid' : '')} type="password" name="password2" />
                                        <ErrorMessage name="password2" component="div" className="invalid-feedback" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label htmlFor="favoriteTeam">Favorite Team</label>
                                        <Field className={'form-control' + (errors.favoriteTeam && touched.favoriteTeam ? ' is-invalid' : '')} type="text" name="favoriteTeam" />
                                        <ErrorMessage name="favoriteTeam" component="div" className="invalid-feedback" />
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Register</button>
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