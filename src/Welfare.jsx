import React, { Component } from 'react'
import logo from './paw.png'
import {Link} from 'react-router-dom'
import ww from "./Welfare.jpg"

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
				<h2>What are its welfare needs ?</h2></div>
					<img src = {ww}></img>
					 <p>Figure 1: Tiger swimming
Source: Adapted from [3]</p>
            </div>
			<div class="paragraph">
                
                <p>The following points refer to requirements needed for tigers' welfare:</p>
                <p> ● Tigers are Asia's largest species of big cats, an apex predator native to rainforests, grasslands
                    and mangrove swamps located in countries such as China, India, Indonesia, North Korea and Russia
                    <sup><sup>[1]</sup></sup>.
                </p>
                <p> ● They need a large, sufficient amount of space to themselves, because they are solitary animals and
                    are highly territorial <sup>[2]</sup>.
                </p>
                <p> ● They are carnivores, their common prey are larger animals, including deer and boar <sup>[1]</sup>.
                </p>
                <p> ● Stimulation is required to enhance their welfare, especially since they are hunters/predators.
                </p>
                <p> ● They are fond of bathing and are adept at swimming, which may be caused by their lower tolerance
                    of heat. They therefore require a pool of water to soak in <sup>[1]</sup>.
                </p>
                <p><br></br></p>
                <div class="ref">
                <p > <sup>[1]</sup> Britannica. “Tiger.” Britannica.
                    www.britannica.com/animal/tiger.
                </p>
                <p> <sup>[2]</sup> World Wildlife Fund. "Tiger." WWF.
                    www.worldwildlife.org/species/tiger.
                </p>
                <p> <sup>[3]</sup>          
Dairon655, National Geographic Kids. [Online]. Available: 
https://kids.nationalgeographic.com/animals/mammals/facts/tiger.
</p>    </div>
            </div>
        <footer>
		</footer>
		</div>
      </div>
	 
    )
  }
}