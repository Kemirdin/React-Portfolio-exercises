import React, { Component } from 'react';
import './CommentList.css';
import CommentItem from './CommentItem';
class CommentList extends Component{
    render() {
        const comments = [
            { 'user': 'Nasir', 'comment': 'Great content' },
            { 'user': 'Jamshid', 'comment': 'Not good' },
            { 'user': 'Emre', 'comment': 'I do not know' }
        ];
        const commentsElement = comments.map((element, index) => 
            <CommentItem user={element.user} comment={element.comment} />
        
        )
           
        return (
            <div>
                {commentsElement}
            </div>
        );
    }
}
export default CommentList;