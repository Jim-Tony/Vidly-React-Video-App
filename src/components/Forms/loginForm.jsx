import React, { Component } from 'react';
class LoginForm extends Component { 
    state={
        account:{username:'',password:''},
    };
    handleChange = ({currentTarget:input})=>{
        const account = {...this.state.account};
        account[input.name] = input.value
        this.setState({account});
    }
    handleSubmit = e=>{ 
        e.preventDefault();
    };
    render() { 
        const {account} = this.state;
        return (
            <div className="w-25 m-5">
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group mb-3'>
                        <label className='form-label' htmlFor="username">User Name</label>
                        <input name='username' onChange={this.handleChange} value={account.username} autoFocus autoComplete='off' className='form-control' id='username' type="text" />
                    </div>
                    <div className='form-group mb-3'>
                        <label className='form-label' htmlFor="password">Password</label>
                        <input name='password' onChange={this.handleChange} value={account.password} className='form-control' id='password' type="password" />
                    </div>
                    <button className="btn btn-primary">Submit</button>
                </form>    
            </div>
        );
    }
}
export default LoginForm;