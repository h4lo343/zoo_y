import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from './paw.png'
import Comment from './Comment'
import {connect} from 'react-redux'



 class Post

 extends Component {
  
  postArea = React.createRef()

  state = {post:[]}

  sendPost = () => {
    const text = this.postArea.current.value
    const newPost = [...this.state.post,text]
    this.setState({post:newPost})
    

  }

  render() {
    return (
      <div>
          <div id="header">
                <h1>Post  </h1>
            <img src={logo} className="img-left"/>
			</div>
		<div className="container" id="top">
				<div className="nav">
					<ul>
            <li><Link to='/Home'>Home</Link></li>
						<li><Link to='/Profile'>Profile</Link></li>
						<li><Link to='/Moderator'>Moderator</Link></li>
            <li><Link to='/Database'>Database</Link></li>
            <li><Link to='/Post'>Post</Link></li>
            <li style={{float:'right'}}><Link to='/Login'>Login / Register</Link></li>
				  </ul>
				</div>
			<div className="main">
      {!this.props.userState.logged ?<div className='postLoginHint'>you have not logged in, please Log in first  <Link to='/Login'>Login</Link> </div>
      : <Comment></Comment>
      }
       
        
				 
         
       
			</div>
        <footer>
		</footer>
		</div>
      </div>
    )
  }
}

export default connect(
  state => ({
    userState:state.userState
  })
)(Post)