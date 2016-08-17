import React, { Component } from 'react';
import './Login.css';


class Login extends Component {
  render() {
    return (
      <div className="login container-fluid">
        <h2 className="page-header">Login</h2>
        <form>
       		<div className="form-group">
	        	<label>Username</label>
	        	<input className="form-control" type='text' placeholder='Username' />
        	</div>
        	<div className="form-group">
	        	<label>Password</label>
	        	<input className="form-control" type='text' placeholder='Password' />
	        	<br/>
	        	<button className="btn btn-default">Submit</button>
        	</div>
        </form>
      </div>
    );
  }
}

export default Login;
