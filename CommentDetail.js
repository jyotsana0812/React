import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

const CommentDetail = (props) =>{
    return(
        
        <div className = "ui container comments">
        <div className = "comment">
         <a href = "/" className = "avatar">
            <img alt = "avatar" src = {props.avatar}/>
         </a>
            <div className = "content">
                 <a href = "/" className = "author">
                {props.name}
                  </a>
                <div className = "metadata">
                   <span className = "date">{props.time}</span>
                </div>
                <div className = "text">{props.comment}
                </div>
            </div>
        </div>
    </div>
    );
}
export default CommentDetail;