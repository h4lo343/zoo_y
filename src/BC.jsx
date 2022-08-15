import React, { Component } from 'react'
import logo from './paw.png'
import { Link } from 'react-router-dom'
import pic from './Breeding Conditions.jpg'

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
                            <h2>What conditions are needed for successful captive breeding?</h2></div>
                            <img src={pic}></img>
                        <p>Figure 1: Three tiger cubs
Source: Adapted from [5]</p>
                        <div class="paragraph">

                            <p>Tigers can breed during all periods of the year, however, their peak seasons are between March to
                                June, and September <sup>[1]</sup>. For females, tigers reach sexual maturity when they are between
                                three and four years old, and males mature between four and five years old <sup>[2]</sup>. In the
                                wild, tigers are individualistic, it is believed that males and females only meet together to breed
                                <sup>[1]</sup>. According to <sup>[2]</sup>, female tigers often birth two to four cubs every two
                                years. Mother tigers and their cubs have close relationships, and cubs often do not leave their
                                mother until they reach around two years old, when they are old enough to hunt on their own
                                <sup>[3]</sup>. In captivity, it is challenging to breed tigers because of their solitary nature.
                                Firstly, tigers should not be kept in large groups. For example, they can be kept in pairs (one male
                                and one female) or small groups (just one male with more than one female) to allow for mating
                                <sup>[4]</sup>. Then, it is important that mother tigers are given privacy and be isolated from the
                                public a few months after getting pregnant <sup>[4]</sup>. Once the cubs are born, they should be
                                kept with their mothers for several months and be given vaccines to protect them from diseases such
                                as feline panleukopenia <sup>[4]</sup>. Mother tigers should also be provided with a variety of
                                food, including extra vitamins and minerals, and fresh air <sup>[4]</sup>.
                            </p>

                            <p><br></br></p>
                            <div class="ref">
                                <p><sup>[1]</sup> K. Sankhala, "Breeding behaviour of the tiger Panthera tigris in Rajasthan",
                                    International Zoo Yearbook, vol. 7, no. 1, pp. 133-147, 1967. Available:
                                    10.1111/j.1748-1090.1967.tb00354.x.
                                </p>
                                <p><sup>[2]</sup> World Wildlife Fund. "Tiger." WWF. www.worldwildlife.org/species/tiger.
                                </p>
                                <p><sup>[3]</sup> Britannica. “Tiger.” Britannica. www.britannica.com/animal/tiger.
                                </p>
                                <p><sup>[4]</sup> A. Bemmel, "breeding tigers Panthera tigris at Rotterdam Zoo", International Zoo
                                    Yearbook, vol. 8, no. 1, pp. 60-63, 1968. Available: 10.1111/j.1748-1090.1968.tb00437.x.
                                </p>
                                <p><sup>[5]</sup>
TimeOut. [Online]. Available: https://www.timeout.com/london/news/watch-a-sumatran-tiger-cub-take-its-first-stepsat-london-zoo-011322.

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