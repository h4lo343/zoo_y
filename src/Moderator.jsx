import React, { Component } from 'react'
import logo from './paw.png'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Comment  from './Comment'
import { CreateAddComment, deleteComment } from './redux/comment_action';

class Moderator extends Component {

  state = {
    isLogin: false
  }

  submitPassword = () => {
    
    if (this.password === "12345") {
      alert("you have logged in as a moderator")
      this.setState({isLogin:true})
      
    }
    else {
      alert("password wrong")
    }
  }
  
  inputPassword = (event) => {
    this.password = event.target.value
  
  }

  approve = (index) => {
    return () => {
      this.props.buffer[index].approved = true
      this.props.addComment(this.props.buffer[index])
      
    }

  }

  delete = (index) => {
    return () => {
      this.props.comment[index].approved = false
      this.props.deleteComment()
    }

  }
   
  render() {
    
  

    return (
      <div>
        <div id="header">
                <h1>Moderator</h1>
            <img src={logo} className="img-left"/>
			</div>
		<div className="container" id="top">
				<div className="nav">
					<ul>
              <li><Link to='/Home'>Home</Link></li>
							<li><Link to='/Profile'>Profile</Link></li>
							<li><Link to='/Post'>Post</Link></li>
							<li><Link to='/Moderator'>Moderator</Link></li>
							<li><Link to='/Database'>Database</Link></li>
							<li><Link to='/Zoos'>Zoos</Link></li>
							<li><Link to='/References'>References</Link></li>
							<li style={{ float: 'right' }}><Link to='/Login'>Login / Register</Link></li>
				  </ul>
				</div>
			<div className="main">
				{!this.state.isLogin? <div className='moderatorLog'><span><div>To access this page, you need moderator password </div></span>
        <input onChange = {this.inputPassword} type="password" placeholder="Moderator Password" className="validate"/>
        &nbsp;&nbsp;<button onClick = {this.submitPassword}>submit</button>
        </div>
        :
         
        this.props.buffer.map((comment,index) => {
          return <div key={index} className="moderatorApprove">
            <span>{comment.content}</span><span> sent by {comment.author.FirstName+" "+comment.author.LastName}</span>
             &nbsp;
             <button onClick={this.approve(index)}>approve</button>
             &nbsp;<button onClick={this.delete(index)}>delete</button>
          &nbsp;{comment.approved?<span className='approved'>Approved</span>:<span className='unapproved'>Unapproved</span>}
          </div>
        })
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
  state => ({comment:state.comment,
             buffer:state.buffer
  }),
  {
    addComment:CreateAddComment,
    deleteComment:deleteComment
  }
)(Moderator)