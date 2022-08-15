import React, { Component } from 'react'
import logo from './paw.png'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import icon from './icon.png'

 class Profile
 extends Component {
  render() {
    return (
      <div>
          <div id="header">
                <h1>Profile</h1>
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
			<div className="main">
				<div className="main">
					<div className="wrapper">
						<div className="left">
              {!this.props.userState.logged ? <div className='Loginhint'>you have not logged in, please Log in first  <Link to='/Login'>Login</Link></div> : <div> <img className="Icon" src={icon} />
							<h4>First Name: {this.props.userState.FirstName} </h4>  
							<h4>Last Name: {this.props.userState.LastName }</h4>
							<h4>Gender: {this.props.userState.Gender }</h4>
							<h4>Age: {this.props.userState.Age}</h4>
							<h4>Location: {this.props.userState.Location}</h4></div>}
              
						</div>
						 
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
  state => ({
    userState:state.userState
  })
)(Profile)