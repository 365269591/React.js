import React,{ Component } from 'react';
import Swiper from 'swiper';
import axios from 'axios';
import '../css/banner.css';
import '../css/swiper.css';
import '../css/swiper.min.css';
import {Link,withRouter} from 'react-router-dom';


 class Banner extends Component{
	constructor(props){
		super(props);
		this.state = {
			list:[],
			lunbolist:[],
			page:0
		}
		this.btnajax = this.btnajax.bind(this)
		this.goto = this.goto.bind(this)
	}
	componentDidMount(){
		axios.get('/v4/api/billboard/home?__t=1516854302464')
		.then((response)=>{
			console.log(response);
			this.state.lunbolist = response.data.data.billboards
			this.setState({
				lunbolist:this.state.lunbolist
			})
			console.log(this.state.lunbolist)
			if(this.state.lunbolist){
				var mySwiper = new Swiper('.swiper-container', {
					autoplay: true,//可选选项，自动滑动
					loop : true,
				})
			}
		})
		.catch(function(error){
			console.log(error);
		});
		
		axios.get('/v4/api/film/now-playing?__t=1519626948209&page=1&count=5')
		.then((response)=>{
			console.log(response);
			this.state.list = response.data.data.films
			this.setState({
				list : this.state.list
			})
		})
		.catch(function(error){
			console.log(error);
		});
	}
	btnajax(){
		axios.get('/v4/api/film/now-playing?__t=1519626948209&page=${this.state.page+2}&count=5')
			  .then((response)=>{
			    console.log(response);
			    this.state.page= this.state.page+1
			    this.setState({
			    	page : this.state.page
			    })
			    this.state.list = this.state.list.concat(response.data.data.films)
			    this.setState({
			    	list : this.state.list
			    })
			    
			  })
			  .catch(function (error) {
			    console.log(error);
			  });
	}
	goto(fid){
		console.log(this);
		this.props.history.push("/detail/" + fid);
	}
	render(){
		var that = this;
		return(
			
			<div className="banner">
				<div className="swiper-container">
				  <div className="swiper-wrapper">
					{
						this.state.lunbolist.map(function(items,index){
							return(
								<div key={items.id} className="swiper-slide" ><li><img src={items.imageUrl} /></li></div>
							)
						})
					}
				  </div>
				</div>
				
				
				<div className="banner-f">
					<ul>
						{
							this.state.list.map(function(item,index){
								return(

										<li key={item.id} onClick={()=>that.goto(item.id)}>
										
											<div className="ul-img">
												<img src={item.cover.origin} />
											</div>
											<div className="ul-Box">
												<div className="ul-left">
													<div className="header-T">
														{item.name}
													</div>
													<div className="foot-T">
														<span>{item.cinemaCount}</span>
														<span>家影院上映</span>
														<span>{item.watchCount}</span>
														<span>购买</span>
													</div>
													
												</div>
												<div className="ul-right">
													{item.grade}
												</div>
												
											</div>
											
										</li>

								)
							})
						}
					</ul>
					<div className="btn_bottom">
						<p onClick={this.btnajax}>更多热映电影</p>
					</div>
				</div>
			</div>
		)
	}
}
export default withRouter(Banner);
