import { Routes, Route,Navigate} from 'react-router-dom'
import Database from './Database.jsx'
import Login from './Login.jsx'
import Moderator from './Moderator.jsx'
import Post from './Post.jsx'
import Profile from './Profile.jsx'
import Index from './Index.jsx'
import LifeStyle from './LifeStyle.jsx'
import Characteristics from './Characteristics.jsx'
import React, { Component } from 'react'
import Extinction from './Extinction.jsx'
import Zoos from './Zoos.jsx'
import References from './References.jsx'
import Welfare from './Welfare.jsx'
import Contributors from './Contributors.jsx'
import Awareness from './Awareness.jsx'
import BC from './BC.jsx'

export default class App extends Component {
  render() {
    return (
      <div>
        <Routes>
        <Route path='/Database' element = {<Database/>}/>
        <Route path='/Home' element = {<Index/>}/>
        <Route path='/Moderator' element = {<Moderator/>}/>
        <Route path='/Post' element = {<Post/>}/>
        <Route path='/Profile' element = {<Profile/>}/>
        <Route path='/Login' element = {<Login/>}/>
        <Route path='/LifeStyle' element = {<LifeStyle/>}/>
        <Route path='/Characteristics' element = {<Characteristics/>}/>
        <Route path='/Extinction' element = {<Extinction/>}/>
        <Route path='/' element = {<Navigate to="/Login"/>}/>
        <Route path='/Zoos' element = {<Zoos/>}/>
        <Route path='/References' element = {<References/>}/>
        <Route path='/Welfare' element = {<Welfare/>}/>
        <Route path='/Contributors' element = {<Contributors/>}/>
        <Route path='/Awareness' element = {<Awareness/>}/>
        <Route path='/BC' element = {<BC/>}/>
      </Routes>
      </div>
    )
  }
}
