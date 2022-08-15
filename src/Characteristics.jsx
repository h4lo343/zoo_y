import React, { Component } from 'react'
import logo from './paw.png'
import {Link} from 'react-router-dom'


export default class 
 extends Component {
  render() {
    return (
      <div>
        <div id="header">
                <h1>Characteristics</h1>
				<img src={logo} className="img-left"/>
			</div>
		<div className="container" id="top">
				<div className="nav">
				  <ul>
				  <li><Link to='/Home'>Home</Link></li>
							<li><Link to='/Profile'>Profile</Link></li>
							<li><Link to='/Post'>Post</Link></li>
							<li><Link to='/Moderator'>Moderator</Link></li>
							<li><Link to='/Characteristics'>Characteristic </Link></li>
							<li><Link to='/Zoos'>Zoos</Link></li>
							<li><Link to='/References'>References</Link></li>
							<li style={{ float: 'right' }}><Link to='/Login'>Login / Register</Link></li>
				  </ul>
				</div>

        
				<div className='main'>
							<li><Link to='/Extinction'>Extinction</Link></li>
							<li><Link to='/Welfare'>Welfare</Link></li>
							<li><Link to='/LifeStyle'>Zoo Lifestyle</Link></li>
							<li><Link to='/BC'>Breeding Conditions</Link></li>
							<li><Link to='/Awareness'>Public Awareness</Link></li>
							<li><Link to='/Contributors'>Contributors</Link></li>
				</div>
        <footer>
		</footer>
		</div>
      </div>
    )
  }
}
