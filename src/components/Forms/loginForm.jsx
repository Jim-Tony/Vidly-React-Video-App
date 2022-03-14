import React, { Component } from 'react';
import FormGroup from './formGroup';
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
                    <FormGroup
                        name="username"
                        label="Username"
                        value={account.username}
                        type="text"
                        onChange={this.handleChange}
                    />
                    <FormGroup
                        name="password"
                        label="Password"
                        value={account.password}
                        type="password"
                        onChange={this.handleChange}
                    />
                    <button className="btn btn-primary">Submit</button>
                </form>    
            </div>
        );
    }
}
export default LoginForm;