import React, { Component } from 'react'
import logo from './paw.png'
import {Link} from 'react-router-dom'
import exx from "./Extinction.jpg"

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
		<div class="main">
			<p><br></br></p>
			<div class="paragraph">
				<h2>Why this animal lacks
					biosecurity <br></br>and is at risk of extinction?</h2></div>
					<img src = {exx}></img>
					 <p>Figure 1: Tiger laying on ground
						Source: Adapted from [4]</p>
			<div class="paragraph">
				<p>There are two major factors contributing to the tigers' risk of extinction, which are poaching and
					habitat loss.
				</p>
				<h3>
					Poaching </h3>
				<p> The poaching of tigers is the largest factor contributing to the endangerment of tigers, it has
					significantly increased since the 90's <sup>[1]</sup>. Tiger parts, such as bones and
					skin, are often traded in the black market and transnational crime syndicates can make a large
					profit from tiger parts due to persistent demand, mainly caused by their use in traditional Asian
					medicines <sup>[2],[3]</sup>.
				</p>
				<h3>
					Habitat Loss </h3>
				<p> Loss of habitat is primarily caused by direct and indirect human interference. Deforestation, for
					purposes such as gathering timber and building new structures including roads and buildings, has
					caused an estimated loss of 95% according to <sup>[2]</sup>. Climate change is also a factor
					contributing to habitat loss. Rising sea levels risk destroying forests where tigers make their home
					<sup>[2]</sup>.
				</p>
                <p><br></br></p>
				<p><br></br></p>
			<div class="ref">
				<p> <sup>[1]</sup> BBC, “Tigers on the rise.” BBC Earth.
					www.bbcearth.com/news/tigers-on-the-rise.
				</p>
				<p> <sup>[2]</sup> World Wildlife Fund. "Tiger." WWF.
					www.worldwildlife.org/species/tiger.
				</p>
				<p> <sup>[3]</sup> K. Nowell, Far from a cure : the tiger trade revisited.
					Traffic International, 2000, pp. Vii-1. [Online]. Available: portals.iucn.org/library/node/7661.
				</p>
				<p> <sup>[4]</sup> T. Allofs, WWF US. [Online]. Available: https://www.worldwildlife.org/species/tiger</p>
			</div>
			</div>
        <footer>
		</footer>
		</div>
      </div>
	  </div>
    )
  }
}
