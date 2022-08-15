import React, { Component } from 'react'
import logo from './paw.png'
import {Link} from 'react-router-dom'


export default class 
 extends Component {
  render() {
    return (
      <div>
        <div id="header">
                <h1>Conclusion </h1>
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
				<h2>Social License</h2>
				<p>
					In general, all animals in zoos are kept in captivity to educate the public and for their
					recreation, and to conserve and research animals <sup>[1]</sup>. However, according to <sup>[1]</sup>, many zoos do not
					accommodate their natural instinctual behaviors, caused by issues such as lack of space, leading to
					lower welfare. Because the tigers' natural habitat is large, and their behavior is predatory, this
					issue is more prevalent <sup>[1]</sup>. Due to their declining numbers, many zoos prioritize their conservation
					breeding programs <sup>[1]</sup>. But there is a lack of research focused on the tiger <sup>[1]</sup>.
				</p>
				<p>Zoos have provided several ways for the community to engage with their animals. Zoos can provide
					visitors the opportunity to educate their guests, through shows and presentations, zookeeper talks,
					close encounters, and conservation campaigns. For example, the zoos maintained by Zoos Victoria
					promote campaigns such as Beads For Wildlife, and Don't Palm Us Off to get people involved in
					helping animals that suffer from endangerment <sup>[2]</sup>. For tigers, in Melbourne Zoo, they host keeper
					talks and close encounters for their Sumatran Tigers <sup>[3]</sup>.
				</p>
				<p>For conservation efforts of the tiger, many campaigns focus on tackling the two main threats to their
					extinction, which are poaching and loss of habitat. There are also efforts to increase their
					population through conservation breeding programs <sup>[1]</sup>. One example is the Don't Palm Us Off Campaign
					run by Zoos Victoria, which aims to reduce deforestation by motivating manufacturers to reduce the
					amount of palm oil that is used in their products <sup>[4]</sup>. They are hoping to introduce a law in
					Australia that requires products to disclose whether they contain palm oil, in order to raise the
					public's awareness of it, and discourage people from buying these products <sup>[4]</sup>.
				</p>
				<p>The Sixth Mass Body of Extinction refers to the belief that earth has begun its next mass extinction
					event, where 75% of species will die out <sup>[5]</sup>. The cause is due to humans using earth's natural
					resources irresponsibly <sup>[5]</sup>. This theory is based on many articles and books, which highlight the
					annual decrease in the number of species on the planet <sup>[5]</sup>. Although the research is based on a
					large number of resources, a problem with this theory, that is supported by <sup>[5]</sup>, is that it only
					considers biodiversity loss, and does not address the gains. However, it is true that species that
					were previously thriving have declined due to issues such as habitat loss <sup>[5]</sup>. This is why it is
					important for zoos and the community to take action, to prevent the eradication of the planet's
					species. <br></br>
				</p>
                <br></br>
				<div class="ref">
				<p >[1] L. Pitsko. “Wild Tigers in Captivity: A Study of the
					Effects of the Captive Environment on Tiger Behavior”, Virginia Tech, 2003. Available:
					hdl.handle.net/10919/32620.
				</p>
				<p >[2] Zoos Victoria. “Community Conservation Campaigns.” Zoos
					Victoria. www.zoo.org.au/fighting-extinction/community-conservation-campaigns/.
				</p>
				<p>[3] Zoos Victoria. “ Sumatran Tiger.” Zoos Victoria.
					www.zoo.org.au/melbourne/habitats/trail-of-the-elephants/sumatran-tiger/.
				</p>
				<p>[4] Zoos Victoria. “Don't Palm Us Off.” Zoos Victoria.
					www.zoo.org.au/dont-palm-us-off/.
				</p>
				<p>[5] J. Briggs, "Emergence of a sixth mass extinction?",
					Biological Journal of the Linnean Society, vol. 122, no. 2, pp. 243-248, 2017. Available:
					10.1093/biolinnean/blx063.
				</p>
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