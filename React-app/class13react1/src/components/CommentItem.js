import React, { Component } from 'react';

class CommentItem extends Component {
    render() {
        return (
            <div className='Content'>
                <strong>{this.props.user} </strong>{this.props.comment}
            </div>
        )
    }
}
export default CommentItem;