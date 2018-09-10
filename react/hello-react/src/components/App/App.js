import React, { Component } from 'react';
import Add from '../Add/Add';
import List from '../List/List';
import Item from '../Item/Item';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      comments:[{username:'中级开发',content:'React挺好的！！'},{username:'初级开发人员',content:'React蛮难的！'}]
    }
  }

  add =(comment)=>{
       let {comments}=this.state;
       comments.unshift(comment);
       this.setState(comments);
  }

  del =(index)=>{
      let {comments}=this.state;
      comments.splice(index,1);
      this.setState(comments);
  }

  render() {
    let {comments}=this.state;
    return (
        <div>
        <header className="site-header jumbotron">
          <div className="container">
          <div className="row">
          <div className="col-xs-12">
          <h1>请发表对React的评论</h1>
          </div>
          </div>
          </div>
          </header>
          <div className="container">
          <Add add={this.add}/>
          <List del={this.del} comments={comments}/>
          </div>
      </div>
    );
  }
}

export default App;
