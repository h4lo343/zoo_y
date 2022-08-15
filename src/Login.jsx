import React, { Component } from 'react'
import {connect} from 'react-redux'
import {CreateAddUserAction} from './redux/login_action'
import {Link} from 'react-router-dom'
import logo from './paw.png'
import {userLogin} from './redux/user_action'

class Login extends Component {

  saveFormData = (datatype) => {
    return (event) => {
      this.setState({[datatype]:event.target.value})
    }
  }

  enter = ()=>{
    const email = this.enterEmail.value
    const password = this.enterPassword.value
    for(var i of this.props.user) {
      if(i.email===email&&i.password===password) {
        
        this.props.userLogin(
         {
           firstName : i.firstName,
           LastName : i.lastName,
           Gender : i.gender,
           Location  : i.location,
           Age : i.age

         }
 
        )
        alert("you have logged in")
         
        return
      }     
    }
    alert("password or email is wrong")
  }

  register = () => {
    const newUser = {
      firstName:this.state.firstName,
      lastName:this.state.lastName,
      age:this.state.age,
      gender:this.gender.value,
      location:this.state.location,
      email:this.state.email,
      password:this.state.password
    }
    for(var i in newUser) {
      if(newUser[i]===undefined||newUser[i]==='') {
        alert('you have to input your '+i)
        newUser= {}
        return 
      }
    }
    this.props.addUser(newUser)
    this.form.reset()
    alert('you have registered your account')
    newUser= {}
  }

  render() {
    return (
    <div> 
	  	<div id="header">
                <h1>Login / Register</h1>
				<img src={logo}  className="img-left"/>
		  </div>
		  <div className="container" id="top">
				<div className="nav">
          
          <ul>
              <li><Link to='/Home'>Home</Link></li>
							<li><Link to='/Profile'>Profile</Link></li>
							<li><Link to='/Post'>Post</Link></li>
							<li><Link to='/Moderator'>Moderator</Link></li>
							<li><Link to='/Database'>Database</Link></li>
							<li><Link to='/Characteristics'>Characteristic </Link></li>
							<li><Link to='/Zoos'>Zoos</Link></li>
							<li><Link to='/References'>References</Link></li>
							<li style={{ float: 'right' }}><Link to='/Login'>Login / Register</Link></li>
				  </ul>
				</div>
			<div className="main">
				<div className="wrapperlogin">
					<div style={{textAlign:'center'}} className="left">
						<h1>Sign in</h1>
				       <div className="input-field"><input ref={(a)=>this.enterEmail = a } placeholder="email" className="validate"/></div>
				       <div className="input-field"><input type="password" ref={(a)=>this.enterPassword = a } placeholder="password" className="validate"/></div>
				       <button onClick={this.enter} className="second-button">Sign in</button>
				    	 
						</div>
						<div className = "vertical"></div>
						<div style={{textAlign:'center'}} className="right">
						 <h1>Register</h1>
                <form action="" ref={(a) => {this.form=a}}>
						 	 <div className="input-field"><input onChange={this.saveFormData('firstName')} placeholder="FirstName" className="validate"/></div>
							 <div className="input-field"><input onChange={this.saveFormData('lastName')} placeholder="LastName" className="validate"/></div>
							 <div className="input-field"><input onChange={this.saveFormData('age')} type="Number" placeholder="Age" className="validate"/></div>
							 <select ref={(a)=>this.gender=a} id="gender" name="gender">
								  <option value="male">Male</option>
								  <option value="female">Female</option>
								  <option value="other">Other</option>
								  <option value="none">Rather Not Say</option>
							 </select>
							 <div className="input-field"><input onChange={this.saveFormData('location')} placeholder="Location" className="validate"/></div>
							 <div className="input-field"><input onChange={this.saveFormData('email')} placeholder="Email" className="validate"/></div>
		 		       <div className="input-field"><input type="password" onChange={this.saveFormData('password')} placeholder="Password" className="validate"/></div>
                </form>
		 		       <button onClick={this.register} className="second-button">Register</button>
					</div>
				</div>
			</div>
        <footer>
		</footer>
	  	</div>
    
  </div>
    )
  }
}

export default connect(
  state => ({user:state.user,
  userState:state.userState
  
  }),
  {
    addUser:CreateAddUserAction,
    userLogin:userLogin
  }
)(Login)