import React,{ Component } from 'react';
import {BrowserRouter as Router, Link, Route,NavLink} from 'react-router-dom';
import axios from 'axios';
import "../css/now.css";


export default class Now extends Component{
	constructor(){
		super();
		this.state={
			movielist:[]
		}
		this.goto = this.goto.bind(this)
	}
	componentDidMount(){
		axios.get("/v4/api/film/now-playing?page=1&count=20")
		.then((res)=>{
			console.log(res);
			this.state.movielist = res.data.data.films
			this.setState({
				movielist:this.state.movielist
			})
		})
	}
	goto(fid){
		console.log(this);
		this.props.history.push("/detail/" + fid);
	}
	render(){
		var that = this;
		return(
			<div>
				<ul className="list">
					{
						this.state.movielist.map(function(items,index){
							return(
								<li key={items.id} onClick={()=>that.goto(items.id)}>
									<div className="listimg">
										<img src={items.cover.origin}/>
									</div>
									<div className="list-R">
										<div className="list-R1">
											<span>{items.name}</span>
											<div className="R"><span>{items.grade}</span>
											<i className="icon iconfont icon-zuoyouhuadongtubiao"></i></div>

										</div>
										<div className="list-R2">
											<span>{items.intro}</span>
										</div>
										<div className="list-R3">
											<span>{items.cinemaCount}</span><span>家影院上映</span>
											<span>{items.watchCount}</span><span>人购票</span>
										</div>
										

										
									</div>
								</li>
							)
						})
					}
				</ul>
			</div>
		)
	}
}
