import React, { Component } from 'react'
import logo from './paw.png'
import { Link } from 'react-router-dom'
import ccc from "./Contributors.jpg"

export default class
    extends Component {
    render() {
        return (
            <div>
                <div id="header">
                    <h1>Home</h1>
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
                            <h2>Who are some current contributors to this animals' conservation?</h2></div>
                        <img src={ccc}></img>
                        <p>Figure 1: Tiger in the wild
                            Source: Adapted from [5]</p>
                        <div class="paragraph">

                            <p>The following are several contributors to the conservation of tigers:
                                The WWF started the TX2 program, which stands for 'Tigers times two', in 2010. The goal is to double
                                the population of tigers, which was 3200 during 2010, by 2022, which happens to be the Chinese year
                                of the tiger <sup>[1]</sup>.
                                Panthera created the Tigers Forever campaign. Located across several sites in Asia, in the countries
                                "Bhutan, India, Indonesia, Malaysia, Myanmar, Nepal and Thailand" <sup>[2]</sup>, their aim is to
                                increase the population of tigers in each site by at least 50%. They aim to do this by focusing on
                                the two major threats to the extinction of their species, poaching and habitat loss <sup>[2]</sup>.
                                The Indian government launched Project Tiger in 1973 <sup>[3]</sup>. They declared several areas of
                                high biodiversity value as national parks, tigers' natural habitat, in order to eliminate human
                                interferences such as poaching and settlement and encourage ecosystems to restore their balance
                                <sup>[3]</sup>.
                                Zoos Victoria have a Captive Breeding Program for tigers. Tigers are also involved in their 'Don't
                                Palm Us Off' campaign <sup>[4]</sup>. Palm oils are a major contributor to biodiversity loss, as the
                                collection of palm oils contributes to deforestation, destroying animals' (such as the Sumatran
                                tiger) natural habitat <sup>[4]</sup>. Their goal is to introduce a law in Australia that requires
                                products to clearly outline whether they contain palm oil, to let the public be aware of what they
                                buy. and hopefully reduce the number of these products being sold.
                            </p><p>&nbsp;</p>
                            <div class="ref">
                                <p><sup>[1]</sup> World Wildlife Fund. “Doubling wild tigers.” WWF. tigers.panda.org.
                                </p>
                                <p><sup>[2]</sup> Panthera. “Tigers Forever.” Panthera. panthera.org/tigers-forever.
                                </p>
                                <p><sup>[3]</sup> V. Khandelwal, "Tiger Conservation in India - Project Tiger", SSRN Electronic
                                    Journal, 2005. Available: 10.2139/ssrn.773505.
                                </p>
                                <p><sup>[4]</sup> Zoos Victoria. “Don't Palm Us Off.” Zoos Victoria. www.zoo.org.au/dont-palm-us-off/.
                                </p>
                                <p><sup>[4]</sup>
                                    O. Jennersten, WWF Sweden. [Online]. Available: https://www.worldwildlife.org/stories/wild-tigers-we-love-them-anddon-t-want-to-lose-them
                                </p></div>
                        </div>
                        <footer>
                        </footer>
                    </div>
                </div>
            </div>
        )
    }
}
