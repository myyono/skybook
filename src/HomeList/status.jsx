import React from 'react'
// import { Button, Form, FormGroup, Label, Input, } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import skydu from '../gambar/skydu.jpg'
import notyfication from '../gambar/icons.jpg'
import frofle from '../gambar/Ellipse_head.jpg'
import './status.css'
import SimpleBadge from "./notif"
import MenuAppBar from "./AccountCirle"

const Example = (props) => {
	return (
		<div class="container">
			{/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
				<a class="navbar-brand position-absolute" href="#"><img src={skydu} alt="" /></a>
				<div className="notyfication">
					<SimpleBadge />
				</div>
				<div className="frofile">
					<img src={frofle} alt="" />
				</div>
			</nav> */}
			<MenuAppBar />
			<div className="kotak">
				<input type="input" class="form-control" id="floatingPassword" placeholder="What’s on you mind, Paul?" />
			</div>

		</div>
	)
}

export default Example