import React, { Component, Fragment } from 'react'
import Example from '../HomeList/status.jsx'
import './Home.css'
import my from '../gambar/Ellipse_bar.png'
import share from '../gambar/Share.png'
import comment from '../gambar/Comment.png'
import like from '../gambar/Like.png'

class Home extends Component {
	state = {

	}
	render() {
		return (
			<Fragment>
				<div>
					<Example />
				</div>
				<br />
				<br />
				<div className="chat">
					<img src={my} alt="" />
					<h3>Supri Yono</h3>
					<h5>45 mins ago</h5>
					<p>Being a father is sometimes my hardest but always my most rewarding job. Happy Father’s Day to all dads out there. </p>
					<div className="icon">
						<img src={share} alt="" />
						<icon>
							<img src={comment} alt="" />
						</icon>
						<h2>
							<img src={like} alt="" />
						</h2>
					</div>
				</div>
			</Fragment>
		)
	}
}

export default Home