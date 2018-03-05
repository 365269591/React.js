import React,{ Component } from 'react';
import {BrowserRouter as Router, Link, Route,NavLink} from 'react-router-dom';
import Coming from './Coming';
import Now from './Now';
import '../css/films.css';
import Detail from './Detail';


const Films = ({ match }) =>(
			<div>
				<div className="films-T">
				<ul>
					<li><NavLink exact activeClassName="active" to={`${match.url}`}>正在热映</NavLink></li>
					<li><NavLink activeClassName="active" to={`${match.url}/coming`}>即将上映</NavLink></li>
				</ul>
				</div>
				<Route exact path={`${match.path}`} component={Now} />
				<Route path={`${match.path}/coming`} component={Coming} />
				<Route path="/detail/:fid" component={Detail} />
			</div>
		)
export default Films;
