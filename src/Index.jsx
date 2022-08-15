import React, { Component } from 'react'
import logo from './paw.png'
import tiger from './tiger.jpg'
import {Link} from 'react-router-dom'


export default class 
 extends Component {
  render() {
    return (
      <div>
        <div id="header">
                <h1>Home</h1>
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
			<div className="main">
				<h2>The Tiger</h2> 
				<p style={{fontSize:'30px'}}>Learn about this facinating Endangered Species</p>
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/cOiw6aMsvyI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				<div className='right'>
							<li><Link to='/Extinction'>Extinction</Link></li>
							<li><Link to='/Welfare'>Welfare</Link></li>
							<li><Link to='/LifeStyle'>Zoo Lifestyle</Link></li>
							<li><Link to='/BC'>Breeding Conditions</Link></li>
							<li><Link to='/Awareness'>Public Awareness</Link></li>
							<li><Link to='/Contributors'>Contributors</Link></li>
				</div>
        <img src={tiger}  />
        <div>&nbsp;</div>
			</div>
        <footer>
		</footer>
		</div>
      </div>
    )
  }
}
