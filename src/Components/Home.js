import React, { Component } from 'react'
import './Home.css'
import ButtonAppBar from "../HomeList/AppBar"
import Card from '../HomeList/Card.jsx'
import Card2 from '../HomeList/Card2'

class Home extends Component {
	state = {
		posts: [
			{
				name: 'supriyono',
				timeStamp: '40 mins a go',
				message: 'Being a father is sometimes my hardest but always my most rewarding job. Happy Father’s Day to all dads out there.',
			}
		]



	}


	render() {
		return (
			<div className="container">
				<div className="appBar">
					<ButtonAppBar />
					<Card />
					<Card2 />
				</div>
			</div>
		)
	}
}

export default Home