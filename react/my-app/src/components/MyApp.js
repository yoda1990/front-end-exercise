import React from 'react';
import ReactDom from 'react-dom';
import logo from './logo.svg';
import './App.css';

class MyApp extends React.Component{
    render(){
        return(
            <div className="App">
                <div className="App-header">
                     <img className="App-logo" src={logo} alt=""/>
                     <p>好好学习React</p>
                </div>
                <h2>React 学习示例</h2>
            </div>)
    }
}

export default MyApp;