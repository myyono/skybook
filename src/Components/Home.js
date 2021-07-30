import React, { Component } from 'react'
import './Home.css'
import ButtonAppBar from "../HomeList/AppBar"
import Card from '../HomeList/Card.jsx'
import User from '../HomeList/User'
import user1 from '../gambar/human/people/4.png'
import bibimay from '../gambar/human/people/5.png'

class Home extends Component {
	state = {
		posts: []

	}


	componentDidMount() {
		let home = localStorage.getItem("inihome")
		fetch("http://127.0.0.1:8000/api/dashboard/home", {
			headers: {
				Authorization: `Bearer ${home}`,
				"Content-Type": "application/json",
				"X-Requested-With": "XMLHttpRequest",
			},
		}).then((data) => data.json())
			.then((data) => {
				this.setState({ posts: data.success.posts })
			}
			)
	}


	render() {
		return (
			<div className="container">
				<div className="appBar">
					<ButtonAppBar />
					{this.state.posts.map((data) => {
						return <Card name={data.user.name} message={data.caption} />

					})
					}
					<div className="user">
						<img src={user1} alt="user1" />
						<span className="buku">
							<User />
						</span>

					</div>
					<div className="may">
						<img src={bibimay} alt="user2" />
						<span className="tari">
							<User />
						</span>
					</div>
				</div>
			</div>
		)
	}
}

export default Home