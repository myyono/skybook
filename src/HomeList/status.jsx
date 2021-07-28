import React, { Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './status.css'
import MenuAppBar from "./AccountCirle"
import mira from '../gambar/Ellipse_bar2.png'
// import Image from '../HomeList/Image'

const Example = (props) => {
	return (
		<Fragment>
			<MenuAppBar />
			<div className="kotak">
				<input type="input" class="form-control" id="floatingPassword" placeholder="What’s on you mind, Paul?" />
			</div>
			<div className="card">
				<img src={mira} alt="" />
				<h4>Miranda</h4>
				<h5>June 21, 12:45 pm</h5>
				<p>Having fun while cooking and eating variety of foods with @Sarah</p>
			</div>
		</Fragment>
	)
}

export default Example