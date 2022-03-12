import React, { Component } from 'react';
class LoginForm extends Component { 
    render() { 
        return (
            <div className="w-25 m-5">
                <h1>Login</h1>
                <form>
                    <div className='form-group mb-3'>
                        <label className='form-label' htmlFor="username">User Name</label>
                        <input className='form-control' id='username' type="text" />
                    </div>
                    <div className='form-group mb-3'>
                        <label className='form-label' htmlFor="password">Password</label>
                        <input className='form-control' id='password' type="password" />
                    </div>
                    <button className="btn btn-primary">Submit</button>
                </form>    
            </div>
        );
    }
}
 
export default LoginForm;