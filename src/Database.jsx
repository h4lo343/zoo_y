import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import logo from './paw.png'

class Database extends Component {
   
  state = {
    isLogin: false
  }
  submitPassword = () => {
     
    if (this.password === "12345") {
      alert("you have logged in as a moderator")
      this.setState({isLogin:true})
      
    }
    else {
      alert("password wrong")
    }
  }
  
  inputPassword = (event) => {
    this.password = event.target.value
  
  }
   
  render() {
   
    return (
      <div>
        <div id="header">
                <h1>Database</h1>
				<img src={logo} className="img-left"/>
			</div>
		<div className="container" id="top">
				<div className="nav">
				  <ul>
            <li><Link to='/Home'>Home</Link></li>
						<li><Link to='/Profile'>Profile</Link></li>
						<li><Link to='/Moderator'>Moderator</Link></li>
            <li><Link to='/Database'>Database</Link></li>
            <li><Link to='/Post'>Post</Link></li>
						<li style={{float:'right'}}><Link to='/Login'>Login / Register</Link></li>
				  </ul>
				</div>
        {!this.state.isLogin? <div className='DatabaseLog'>
          <span><div>To access this page, you need moderator password </div></span>
        <input onChange = {this.inputPassword} type="password" placeholder="Moderator Password" className="validate"/>
        &nbsp;&nbsp;<button onClick = {this.submitPassword}>submit</button>
        </div>
        : this.props.user.map((user,index)=>{
          return <div key={index} className="userData">
            <div><span  className='dataLabel'>username:</span> {user.firstName+ " " + user.lastName} </div> 
            <div><span className='dataLabel'>user age:</span> {user.age}</div>
            <div><span className='dataLabel'> user gender:</span> {user.gender}</div>
            <div> <span className='dataLabel'>user location: </span>{user.location}</div>
            <div> <span className='dataLabel'>user email:</span> {user.email}</div>
                 </div>
        })
        
        }
      
		</div>
        
       
      </div>
    )
  }
}

export default connect(
  state => ({user:state.user}),
  {
   
  }
)(Database)

