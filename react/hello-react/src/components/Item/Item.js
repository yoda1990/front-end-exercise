import React, { Component } from 'react';

class Item extends Component {

    delComment =()=>{
        let {username}=this.props.comment;
        let {index}=this.props;
        if (window.confirm("您是否删除"+username+"的评论？")){
            this.props.del(index);
        }
    };

  render() {
    let {comment}=this.props;
    return (
        <li className="list-group-item">
            <div className="handle">
                <a href="javascript:;" onClick={this.delComment}>删除</a>
            </div>
            <p className="user"><span>{comment.username}</span><span> 说:</span></p>
            <p className="centence">{comment.content}</p>
        </li>
    );
  }
}

export default Item;
