import React from "react"
import logo from "../assets/images/logo-DH.png"
import {Link, Route, Switch } from 'react-router-dom'
import ContentWarapper from "./ContentWrapper"
import LastMovie from "./LastMovie"
import GenresInDb from "./GenresInDb"
import CardList from "./CardList"
import Chart from "./Chart"
import NotFound from "./NotFound"


function SideBar () {

    return (

		<>

		<ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">
			<a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
				<div className="sidebar-brand-icon">
					<img className="w-100" src= {logo} alt="Digital House" />
				</div>
			</a>

			<hr className="sidebar-divider my-0"/>

			<li className="nav-item active">
				<Link className="nav-link" to="/">
					<i className="fas fa-fw fa-tachometer-alt"></i>
					<span>Dashboard - DH movies</span></Link>
			</li>

			<hr className="sidebar-divider"/>

			<div className="sidebar-heading">Actions</div>

			<li className="nav-item">
				<Link className="nav-link collapsed" to="/last-movie">
					<i className="fas fa-fw fa-folder"></i>
					<span>Last Movie</span>
				</Link>
			</li>

			<li className="nav-item">
				<Link className="nav-link collapsed" to="/genres-list">
					<i className="fas fa-fw fa-folder"></i>
					<span>Genres List</span>
				</Link>
			</li>

			<li className="nav-item">
				<Link className="nav-link" to="/charts">
					<i className="fas fa-fw fa-chart-area"></i>
					<span>Charts</span>
				</Link>
			</li>

			<li className="nav-item">
				<Link className="nav-link" to="/table">
					<i className="fas fa-fw fa-table"></i>
					<span>Tables</span>
				</Link>
			</li>

			<hr className="sidebar-divider d-none d-md-block"/>
		</ul>

		<Switch>

			<Route exact={true} path="/"> <ContentWarapper /></Route>
			<Route  path="/last-movie"> <LastMovie /></Route>
			<Route  path="/genres-list"> <GenresInDb /> </Route>
			<Route  path="/charts"> <CardList /> </Route>
			<Route  path="/table"> <Chart /> </Route>
			{/* <Route  path="categories/:id"> <CategoryDetail /></Route> */}
			<Route path="*"> <NotFound /> </Route>

		</Switch>

	</>

		
    )
}

export default SideBar