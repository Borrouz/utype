import React from 'react';
import { connect } from 'react-redux';
import './LoginForm.css';

import {signInWithEmailAndPassword} from '../server';

import {inputData} from '../redux/actions/LoginInputActions';

const LoginForm = ({inputData, inputs}) => {
    const inputValidationRegEx = {
        email: /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim,
        password:  /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/
    }
    let isEmailValid = inputValidationRegEx.email.test(inputs.email);
    let isPasswordValid = inputValidationRegEx.password.test(inputs.password);

    return (
        <form onSubmit={(e) =>{ e.preventDefault(); signInWithEmailAndPassword(inputs.email, inputs.password)}} className="form flex-column center-box shadow max-width-500 padding-all-25" method="post">
            <h2 className="h2 text-center">Sign In</h2>
            <div className="form-group flex-end">
                <label htmlFor="email" className={isEmailValid? "input__valid":"input__invalid"}>Email</label>
                <input onChange={(e) => inputData(e)} 
                        value={inputs.email} 
                        className={inputs.email.length>0? "form-input " + (isEmailValid? "input__valid":"input__invalid"):"form-input"}
                        type="email" 
                        name="email" 
                        placeholder="Enter your email" />
            </div>
            <div className="form-group flex-end">
                <label htmlFor="password" className={isEmailValid? "input__valid":"input__invalid"}>Password</label>
                <input onChange={(e) => inputData(e)} 
                        value={inputs.password} 
                        className={inputs.password.length>0? "form-input " + (isPasswordValid? "input__valid":"input__invalid"):"form-input"}
                        type="password" 
                        name="password" 
                        placeholder="Enter your password"/>
            </div>
            <a href="#" className="text-center form-group">Forgot Password?</a>
            <button className="btn" type="submit" label="Sign In">Sign In</button>
            <small className="text-center"><span>Need to create an account?</span><a href="#">Sign Up</a></small>
        </form>
    );
};

function mapStateToProps (state) {
    return {
      inputs: state.inputs,
    }
  }
  
function mapDispatchToProps(dispatch) {
    return {
        inputData: (e) => dispatch(inputData(e))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);