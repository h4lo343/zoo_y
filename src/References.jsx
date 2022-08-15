import React, { Component } from 'react'
import logo from './paw.png'
import {Link} from 'react-router-dom'


export default class 
 extends Component {
  render() {
    return (
      <div>
        <div id="header">
                <h1>Conclusion</h1>
				<img src={logo} className="img-left"/>
		</div>
		<div className="container" id="top">
				<div className="nav">
				  <ul>
				  			<li><Link to='/Home'>Home</Link></li>
							<li><Link to='/Profile'>Profile</Link></li>
							<li><Link to='/Post'>Post</Link></li>
							<li><Link to='/Moderator'>Moderator</Link></li>
							<li><Link to='/Extinction'>Characteristic </Link></li>
							<li><Link to='/Zoos.html'>Zoos</Link></li>
							<li><Link to='/References'>References</Link></li>
							<li style={{ float: 'right' }}><Link to='/Login'>Login / Register</Link></li>
				  </ul>
		</div>
		<div class="main">
			<p><br></br></p>
			
            <div class="paragraph">
                <h2>Quality of Reference Material</h2>
                <p>
                    The reference material used for this website are from authoritative sources. Websites that were
                    used include the WWF, BBC Earth, Panthera, Agriculture Victoria, Britannica and Zoos Victoria.
                    Britannica is an encyclopedia, which gathers facts from other sources with authority. Agriculture
                    Victoria has high authority since they determine the codes and standards that zoos must abide by in
                    the state of Victoria. Panthera, WWF, and Zoos Victoria have high authority concerning the
                    information about animals, and the actions they have taken to conserve them. Aside from the websites
                    that were used, journal articles and books were obtained from online databases provided by the IUCN
                    (International Union for Conservation of Nature), Wiley/ZSL (Zoological Society of London), Virginia
                    Tech, SSRN (Social Science Research Network), and Oxford Academic. The journals used are reputable
                    sources, and the academic papers have academic authority.
                    <br></br> The accuracy of these sources may vary. For example, information gathered about organizations
                    running campaigns mostly derived from what the organizations have said themselves in their own
                    official websites (i.e. WWF, Panthera, Zoos Victoria). This information is more likely to be biased
                    towards their successes, rather than their failures, because they would want to give a good
                    impression to the public. Another potential risk to accuracy is that there are many different
                    approaches zoos can take in caring for their animals (e.g. countries using different
                    codes/standards). It is not guaranteed that the facts included about the treatment of animals in
                    zoos apply to all zoos internationally.
                    <br></br> Currency also varies between different reference materials. Most of the academic papers and
                    journal articles used are quite dated, the earliest being 1967. A risk of using information from
                    these sources is that there is a higher chance that it will be outdated. In contrast, many of the
                    websites used are more recent, and are published within the last decade. This means that the facts
                    included in them are more likely to be up-to-date.
                    <br></br> References sourced from websites such as Zoos Victoria, and Agriculture Australia are relevant
                    to Australia, but may not reflect the practices of other countries and zoos. All the sources used
                    for information about animals, such as the tiger, are relevant. This is because the animal is either
                    the subject of the resource, or they are mentioned in the resource. For example, organizations such
                    as the WWF and Panthera take part in the conservation of animals, and it is expected that they would
                    be knowledgeable about it.

                </p>
            </div>
        <footer>
		</footer>
		</div>
      </div>
	  </div>
    )
  }
}