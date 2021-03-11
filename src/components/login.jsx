import axios from "axios";
import Joi from "joi";
// import jwtDecode from "jwt-decode";
import React, { Component } from "react";
import SecureLS from "secure-ls";
import authentication from "../authentication";

var ls = new SecureLS({encodingType: 'aes'});



class Login extends Component {
  state = {
      email:"",
      password:"",
      error:""
  };

  error = "";

  validateLoginForm = () => {
    let schema = Joi.object({
        email:Joi.string().email({ tlds: { allow: ['com', 'net'] } }).required(),
        password:Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,30}$')).required()
    })
    let state = {...this.state}
    delete state.error;
    return schema.validate(state, {abortEarly:false});
  }
  loginFormChange = e => {
    let state = {...this.state}
    state[e.target.name] = e.target.value
    this.setState(state)
  }

  sendLoginData = async () => {
    let state = {...this.state}
    delete state.error;
    let response = await axios.post(`https://academy-training.appssquare.com/api/login`, state);
    let {data} =  response;
    
    if(data.token)
    {
        ls.set("currentUser", data.token);
        authentication.login(() => {
            this.props.history.replace("/home");
        })
        return true
    } else return false;
  }

  submitLoginForm = e => {
      e.preventDefault()
    //   
    let validationResponse = this.validateLoginForm();
    if(validationResponse.error) {
        let state = {...this.state};
        state.error = validationResponse.error;
        this.setState(state);
    } else {
        this.sendLoginData();
    }
    
  }


  render() {
    return (
      <React.Fragment>
        <header className="vh-100 d-flex justify-content-center align-items-center">
          <form
            onSubmit={this.submitLoginForm}
            className="w-50 p-5 text-center text-white"
            style={
              ({ backgroundColor: "#24353f" },
              { boxShadow: "-5px 2px 54px -9px rgb(0 0 0)" })
            }
          >
            <h3 className="mb-3 text-info">Smart login system</h3>
            {this.state.error && <div className="alert alert-danger">{this.state.error.message}</div> } 
            <input
              type="email"
              name="email"
              placeholder="enter your email"
              className="form-control w-100 mb-3 text-white bg-transparent"
              onChange={this.loginFormChange}
            />
            <input
              type="password"
              name="password"
              placeholder="enter your password"
              className="form-control w-100 mb-5 text-white bg-transparent"
              onChange={this.loginFormChange}
            />
            <button type="submit" className="btn btn-outline-info w-100 mb-2">
              login
            </button>
            <p>don't have an account? signUp</p>
          </form>
        </header>
      </React.Fragment>
    );
  }
}

export default Login;
