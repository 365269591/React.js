import React,{ Component } from 'react';
import axios from 'axios';
import '../css/details.css';

export default class Detail extends Component{
	constructor(props){
		super(props);
		this.state = {
			lists:[],
			imgurl:[],
			actors:[]

		}
		this.gotoo = this.gotoo.bind(this);
	}
	componentDidMount(){
		axios.get(`/v4/api/film/${this.props.match.params.fid}?__t=1519626152009`)
		.then((res)=>{
			console.log(res);
			this.setState({
				lists:res.data.data.film,
				actors:res.data.data.film.actors,
				imgurl:res.data.data.film.cover.origin
			})
			console.log(this.state.lists.cover.origin)
		})
	}
	gotoo(fid){
		console.log(this);
		this.props.history.push("/cinema/" + fid);
	}
	render(){
		return(
			<div>
				<div key={this.state.lists.name} className="detalimg" >
					<img src={this.state.imgurl}  />
				</div>
					<div className="filmimg">影片简介</div>
					<div className="filmdirector">
						<span>导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：</span>
						<span>{this.state.lists.director}</span>
					</div>
					<div className="filmTostar">
						<span>主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：</span>
						<span>
							{
								this.state.actors.map(function(items,index){
									return(
										items.name+"|"
									)
								})
							}
						</span>
					</div>
					<div className="filmlanguage">
						<span>地区语言:</span>
						<span>{this.state.lists.nation}</span>
						<span>(</span><span>{this.state.lists.language}</span><span>)</span>
					</div>
					<div className="filmstyle">
						<span>类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型：</span>
						<span>{this.state.lists.category}</span>
					</div>
					<div className="filmimg1">
						<span>上映日期:</span>
						<span>2016年上映</span>

					</div>
					<div className="filmimg2">
							{this.state.lists.synopsis}
					</div>
					
					<div className="filmimg4" onClick={()=>this.gotoo(this.props.match.params.fid)}>
						<button className="bbtn">立即购票</button>
					</div>
				
			</div>
		)
	}
}
