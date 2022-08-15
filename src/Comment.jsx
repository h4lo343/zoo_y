import { Comment, Avatar, Form, Button, List, Input, Tooltip } from 'antd';
import moment from 'moment';
import React, { Component, useState, createElement}  from 'react'
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
import { CreateAddComment } from './redux/comment_action';
import {connect} from 'react-redux'
import { CreateAddBuffer } from './redux/buffer_action';


const Demo =  ( comment) => {
   
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState(null);

  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction('liked');
  };

  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction('disliked');
  };
 
  const actions = [
    <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{likes}</span>
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
        <span className="comment-action">{dislikes}</span>
      </span>
    </Tooltip>,
    <span key="comment-basic-reply-to">Reply to</span>,
  ];

  return (
    <Comment
      actions={actions}
      author={<a>{comment.author.FirstName+" "+comment.author.LastName}</a>}
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="anonymous" />}
      content={
        comment.content
      }
      datetime={
        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
          <span>{moment().fromNow()}</span>
        </Tooltip>
      }
    />
  );
};










const { TextArea } = Input;

const CommentList = ({ comments }) => {
  return ( 
   <>
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
    itemLayout="horizontal"
    renderItem={props => <Demo    {...props} />}
  /> 
  </>)
}; 

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        Add Comment
      </Button>
    </Form.Item>
  </>
);

  export default  connect (
    state => ({comment:state.comment,
      buffer:state.buffer,
      userState:state.userState}),
    {
      addComment:CreateAddComment,
      addBuffer:CreateAddBuffer
    }

  ) ((props) => {
 
  
  const [state, setState] = React.useState({
    comments: [],
    submitting: false,
    value: '',
    
  });
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState(null);
 

   

  const actions = [
    <Tooltip key="comment-basic-like" title="Like">
      <span onClick={ ()=>{setLikes(1);
        setDislikes(0);
        setAction('liked');}}>
        {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{likes}</span>
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={ ()=>{setLikes(0);
      setDislikes(1);
      setAction('disliked');}}>
        {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
        <span className="comment-action">{dislikes}</span>
      </span>
    </Tooltip>,
    <span key="comment-basic-reply-to">Reply to</span>,
  ];
  const handleSubmit = () => {
    if (!state.value) {
      return;
    }
    
    setState({
      ...state,
      submitting: true,
    });

    setTimeout(() => {
      setState({
        submitting: false,
        value: '',
        comments: [
          ...state.comments,
          {
            actions:actions,
            author: props.userState,
            avatar: 'https://joeschmoe.io/api/v1/random',
            content: <p>{state.value}</p>,
            datetime: moment().fromNow(),
            approved : false,
          },
        ],
      });
      const newComment = {
        actions:actions,
        author: props.userState,
        avatar: 'https://joeschmoe.io/api/v1/random',
        content: <p>{state.value}</p>,
        datetime: moment().fromNow(),
        approved : false,
       }
       props.addBuffer(newComment)
       console.log(props.buffer)
    
    }, 2000);
    

  };

  const handleChange = e => {
    setState({
      ...state,
      value: e.target.value,
    });
  };
  return (
    <>    
      <Comment        
        content={
          <Editor 
            onChange={handleChange}
            onSubmit={handleSubmit}
            submitting={state.submitting}
            value={state.value}
          />       
        }
      />
      {props.comment.length > 0 && <CommentList  comments={props.comment} />}
    </>
  );
})


