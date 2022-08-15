import React, { Component } from 'react'
import logo from './paw.png'
import { Link } from 'react-router-dom'
import ll from './Zoo Lifestyle.jpg'

export default class
	extends Component {
	render() {
		return (
			<div>
				<div id="header">
					<h1>Characteristics</h1>
					<img src={logo} className="img-left" />
				</div>
				<div className="container" id="top">
					<div className="nav">
						<ul>
							<li><Link to='/Home'>Home</Link></li>
							<li><Link to='/Profile'>Profile</Link></li>
							<li><Link to='/Moderator'>Moderator</Link></li>
							<li><Link to='/Database'>Database</Link></li>
							<li><Link to='/Post'>Post</Link></li>
							<li style={{ float: 'right' }}><Link to='/Login'>Login / Register</Link></li>
						</ul>
					</div>
					<div className="main">
						<div class="paragraph">

							<h2>How this animal would experience &nbsp;what it experiences in a zoo

							</h2>
							<img src={ll}></img>Figure 1: Tigers in enclosure at Australia Zoo
Source: Adapted from [3]

							<p> A tiger is often given an enclosure to themselves, due to their solitary nature <sup>[1]</sup>.
								Their enclosures are made as large as possible, and vegetation is used to accommodate them by
								simulating their natural habitat. Stimulation is provided to them through their environment and
								toys. Their enclosures can contain ledges and waterfalls, and toys are provided in order to enrich
								them and cater to their natural instincts <sup>[2]</sup>. Due to their fondness of bathing and
								swimming, a zoo may include a large pool of water in their enclosure <sup>[1]</sup>. Behaviors such
								as pacing are often a sign of stress for tigers in captivity, as this is not normally present with
								tigers in the wild <sup>[2]</sup>. This can be caused by factors such as lack of stimulation and
								enrichment in their environment (e.g. lack of space, vegetation, toys, etc) <sup>[2]</sup>.
							</p>
							<p>&nbsp;</p>
							<div class="ref">
								<p><sup>[1]</sup> Animal Welfare Victoria. “Code of practice for the public display of the
									exhibition
									of animals.” Agriculture Victoria.
									agriculture.vic.gov.au/livestock-and-animals/animal-welfare-victoria/pocta-act-1986/victorian-codes-of-practice-for-animal-welfare/code-of-practice-for-the-public-display-of-exhibition-of-animals.
								</p>
								<p><sup>[2]</sup> L. Pitsko. “Wild Tigers in Captivity: A Study of the Effects of the Captive
									Environment on Tiger Behavior”, Virginia Tech, 2003. Available: hdl.handle.net/10919/32620.
								</p>
								<p><sup>[3]</sup> 
 Australia Zoo. [Online]. Available: https://www.australiazoo.com.au/wildlife/our-animals/sumatran-tiger/.	</p>
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
