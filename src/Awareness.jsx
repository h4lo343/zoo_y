import React, { Component } from 'react'
import logo from './paw.png'
import { Link } from 'react-router-dom'
import pic from './Public Awareness.jpg'

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
                            <h2>What has been done to promote awareness of this animal to the general public?</h2></div>
                        <img src={pic}></img>
                        <p>Figure 1: Group of people celebrating International Tiger Day
Source: Adapted from [3]</p>
                        <div class="paragraph">

                            
                                <p>The following are several ways people and organizations have promoted awareness for the tiger:
                                    Several charities and organizations accept donations in order to support the welfare of tigers. For
                                    example, the WWF allows people to 'adopt' a tiger. People can choose an amount to donate monthly,
                                    which will go towards their protection <sup>[1]</sup>.
                                    Not only exclusive to tigers, but zoos and wildlife sanctuaries provide a place for the general
                                    public to learn and observe them in person. Some zoos offer encounters, which allow visitors to get
                                    the opportunity to meet a tiger in real life.
                                    International Tiger Day is hosted by the WWF every July 29th, founded in 2010 when the TX2 program
                                    was started <sup>[2]</sup>. Its purpose is to raise awareness about the tiger on a global scale.
                                </p>
                                <p><br></br></p>
                                <div class="ref">
                                    <p><sup>[1]</sup> World Wildlife Fund. "WWF Australia - Tiger
                                        adoption." WWF Australia.
                                        donate.wwf.org.au/adopt/international-species/adopt-a-tiger#gs.0uya2j.
                                    </p>
                                    <p><sup>[2]</sup> World Wildlife Fund. "The World Celebrates
                                        World Tiger Day." WWF.
                                        tigers.panda.org/news_and_stories/stories/the_world_celebrates_world_tiger_day/.
                                    </p>
                                    <p><sup>[3]</sup>  WWF UK. [Online]. Available: 
https://tigers.panda.org/news_and_stories/stories/the_world_celebrates_world_tiger_day/.
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