import React, { Component } from 'react';
import './App.css';
import './font/iconfont.css';
import axios from 'axios';
import Swiper from 'swiper';
import {BrowserRouter as Router, Link, Route,NavLink} from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Banner from './components/Banner';
import Detail from './components/Detail';
import Films from './components/Films';
import Cinema from './components/Cinema';



class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			list:[],
			showFlag:false
			
		}
		this.changeFlag = this.changeFlag.bind(this)
		this.changeFlag1 = this.changeFlag1.bind(this)
	}
	changeFlag(){
		console.log("changeFlag");
		this.setState({
	      showFlag: !this.state.showFlag
	    })
	}
	changeFlag1(){
		console.log("changeFlag");
		this.setState({
	      showFlag: !this.state.showFlag
	    })
	}
  render() {
  		var pComp = <div className="serach-left"  >
					<ul onClick={this.changeFlag1}>
						<li>
							<Link to="/"><i>首页</i></Link>
							<i className="icon iconfont icon-zuoyouhuadongtubiao"></i>
						</li>
						<li>
							<Link to="/Films"><i>影片</i></Link>
							<i className="icon iconfont icon-zuoyouhuadongtubiao"></i>
						</li>
						<li>
							<Link to="/Cinema/0"><i>影院</i></Link>
							<i className="icon iconfont icon-zuoyouhuadongtubiao"></i>
						</li>
						<li>
							<i>商城</i>
							<i className="icon iconfont icon-zuoyouhuadongtubiao"></i>
						</li>
						<li>
							<i>我的</i>
							<i className="icon iconfont icon-zuoyouhuadongtubiao"></i>
						</li>
						<li>
							<i>卖座卡</i>
							<i className="icon iconfont icon-zuoyouhuadongtubiao"></i>
						</li>
					</ul>
				</div>
					 if(!this.state.showFlag) {
					      pComp = null;
					    }
    return (
      <Router>
      <div className="App">
				<div className="header" >
					<ul >
						<li onClick={this.changeFlag}>
							<span className="iconfont icon-menu" ></span>
							<span>卖座电影</span>
						</li>
						<li>
							<span>北京</span>
							<span className="iconfont icon-tubiao_xiajiantou"></span>
							<span className="iconfont icon-xiaoren"></span>
						</li>
					</ul>
				</div>
				<ReactCSSTransitionGroup
				  transitionName="xyz"
		          transitionEnterTimeout={500}
		          transitionLeaveTimeout={300}>
					{pComp}
				</ReactCSSTransitionGroup>
				
				<Route  exact path="/" component={Banner} />
				<Route  path="/films" component={Films} />
				<Route  path="/cinema/:fid" component={Cinema} />
				<Route path="/detail/:fid" component={Detail} />
				

      </div>
      </Router>
      
    );
  }
}

export default App;
