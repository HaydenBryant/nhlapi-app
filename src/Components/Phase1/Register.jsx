import React, { Component } from "react";
// import RegistrationService from "../Authentication/RegistrationService";
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
        console.log(user)

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
                                            {/* <option value="Boston Bruins" label="Boston Bruins" />
                                            <option value="Buffalo Sabres" label="Buffalo Sabres" />
                                            <option value="Detroit Red Wings" label="Detroit Red Wings" />
                                            <option value="Florida Panthers" label="Florida Panthers" />
                                            <option value="Montréal Canadiens" label="Montréal Canadiens" />
                                            <option value="Ottawa Senators" label="Ottawa Senators" />
                                            <option value="Tampa Bay Lightning" label="Tampa Bay Lightning" />
                                            <option value="Toronto Maple Leafs" label="Toronto Maple Leafs" />
                                            <option value="Carolina Hurricanes" label="Carolina Hurricanes" />
                                            <option value="Columbus Blue Jackets" label="Columbus Blue Jackets" />
                                            <option value="New Jersey Devils" label="New Jersey Devils" />
                                            <option value="New York Islanders" label="New York Islanders" />
                                            <option value="New York Rangers" label="New York Rangers" />
                                            <option value="Philadelphia Flyers" label="Philadelphia Flyers" />
                                            <option value="Pittsburgh Penguins" label="Pittsburgh Penguins" />
                                            <option value="Washington Capitals" label="Washington Capitals" />
                                            <option value="Chicago Blackhawks" label="Chicago Blackhawks" />
                                            <option value="Colorado Avalanche" label="Colorado Avalanche" />
                                            <option value="Dallas Stars" label="Dallas Stars" />
                                            <option value="Minnesota Wild" label="Minnesota Wild" />
                                            <option value="Nashville Predators" label="Nashville Predators" />
                                            <option value="St. Louis Blues" label="St. Louis Blues" />
                                            <option value="Winnipeg Jets" label="Winnipeg Jets" />
                                            <option value="Anaheim Ducks" label="Anaheim Ducks" />
                                            <option value="Arizona Coyotes" label="Arizona Coyotes" />
                                            <option value="Calgary Flames" label="Calgary Flames" />
                                            <option value="Edmonton Oilers" label="Edmonton Oilers" />
                                            <option value="Los Angeles Kings" label="Los Angeles Kings" />
                                            <option value="San Jose Sharks" label="San Jose Sharks" />
                                            <option value="Vancouver Canucks" label="Vancouver Canucks" />
                                            <option value="Vegas Golden Knights" label="Vegas Golden Knights" /> */}
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