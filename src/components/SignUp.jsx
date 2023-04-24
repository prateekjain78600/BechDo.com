import React, { Component } from 'react'
import '../StyleSheet/SignUp.css'
import axios from 'axios'
export default class SignUp extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"",
            email:"",
            password:"",
            vpassword:"",
        }

        this.submit=this.submit.bind(this);
        this.handleForm=this.handleForm.bind(this);
    }
    handleForm(e){
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    submit(e){
        e.preventDefault();
        const data=new FormData();
        data.append('email',this.state.email)
        data.append('password',this.state.password)
        data.append('name',this.state.name)
        data.append('verifiedPassword',this.state.vPassword)

        axios.post('http://localhost:5000/api/user-register',data).then(response=>{
            alert(response.data.msg)
        }).catch(error=>{
            alert(error.response.data.msg);
        })
    }
  render() {
    return (
      <div className='SignUp_container'>
        <form className='SignUp_form'>
            <label>Name</label>
            <input type="text" placeholder='Enter Your Name' id='name'
            onChange={this.handleForm}/>
            <label>Email</label>
            <input type="email" placeholder='Enter Valid email' id='email'
            onChange={this.handleForm}/>
            <label >Password</label>
            <input type="password" placeholder='Enter password' id='password'
            onChange={this.handleForm}/>
            <label > Varified Password</label>
            <input type="password" placeho lder='Varified password' id='vpassword'
            onChange={this.handleForm}/>
            <button onClick={this.submit}>SIGN UP</button>
        </form>
        
      </div>
    )
  }
}
