import React, { Component } from 'react';

class Add extends Component {

    addComment =()=>{
         let username=this.refs.username.value;
         let content=this.refs.content.value;
         if (!username||!content){
             alert("输入的评论必须完整！！");
             return;
         }
         let obj={username,content}
         this.props.add(obj);
         this.refs.username.value='';
         this.refs.content.value='';
    }

  render() {
    return (
          <div className="col-md-4">
          <form className="form-horizontal">
          <div className="form-group">
          <label>用户名</label>
          <input ref="username" type="text" className="form-control" placeholder="用户名"/>
          </div>
          <div className="form-group">
          <label>评论内容</label>
          <textarea ref="content" className="form-control" rows="6" placeholder="评论内容"></textarea>
          </div>
          <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
          <button onClick={this.addComment} type="button" className="btn btn-default pull-right">提交</button>
          </div>
          </div>
          </form>
          </div>
    );
  }
}

export default Add;
