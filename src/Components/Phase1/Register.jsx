import React, { Component } from "react";
import UserDataService from "../../api/user/UserDataService.js"
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';
import {teams} from '../../Constants'

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

    registerClicked() {

        let user = {
            name: this.state.name,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            favoriteTeam: this.state.favoriteTeam
        }
        console.log("register clicked")
        console.log(user)

        try {
            UserDataService.registerUser(user)
                .then(() => this.props.history.push('/login'))
        } catch (error) {
            this.setState({showSuccessMessage:false})
            this.setState({hasRegistrationFailed:true})
        }
    }


    generateTeamOptions(){

            const teamElements = []

            teams.map(team => {
                teamElements.push(<option value={team} label={team} />)
            });

            return teamElements
    }

    render() {
        return (
            <div>
                <h1>Register</h1>
                {this.state.showSuccessMessage && <div>Registration Successful</div>}
                {this.state.hasRegistrationFailed && <div className="alert alert-warning">Invalid inputs. Registration failed</div>}                
                <div className="container">
                    <Formik 
                        initialValues = {{
                            name: this.state.name,
                            username: this.state.username,
                            email: this.state.email,
                            password: this.state.password,
                            password2: this.state.password2,
                            favoriteTeam: this.state.favoriteTeam
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
                                        <Field className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')} type="text" name="name" onChange={this.handleChange}/>
                                        <ErrorMessage name="name" component="div" className="invalid-feedback" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label htmlFor="username">Username</label>
                                        <Field className={'form-control' + (errors.username && touched.username ? ' is-invalid' : '')} type="text" name="username" onChange={this.handleChange}/>
                                        <ErrorMessage name="username" component="div" className="invalid-feedback" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <Field className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} type="email" name="email" onChange={this.handleChange}/>
                                        <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <Field className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} type="password" name="password" onChange={this.handleChange}/>
                                        <ErrorMessage name="password" component="div" className="invalid-feedback" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label htmlFor="password2">Confirm Password</label>
                                        <Field className={'form-control' + (errors.password2 && touched.password2 ? ' is-invalid' : '')} type="password" name="password2" onChange={this.handleChange}/>
                                        <ErrorMessage name="password2" component="div" className="invalid-feedback" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label htmlFor="favoriteTeam">Favorite Team</label>

                                        <select className={'form-control' + (errors.favoriteTeam && touched.favoriteTeam ? ' is-invalid' : '')} style={{ display: 'block' }} name="favoriteTeam" onChange={this.handleChange}>
                                            <option value="" label="Select your favorite team" />
                                            {this.generateTeamOptions()}
                                        </select>
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