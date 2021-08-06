import React, { Component } from 'react'
import './Home.css'
import { Link } from "react-router-dom"
import Card from '../HomeList/Card.jsx'
import { Input } from "reactstrap"
import skydu from '../gambar/ic/icons/skydu.jpg'
import notiff from '../gambar/ic/icons/icons.jpg'


class Home extends Component {
	state = {
		posts: [],
		input: '',
		image: '',


	}
	CreatePost = () => {
		let userPost = {
			image: this.state.image,
			caption: this.state.input



		}
		this.fetchPost(userPost)
	};


	handleChangeField = (e) => {
		this.setState({ [e.target.name]: e.target.value })

	}


	handleField = (f) => {
		this.setState({ image: f.target.files[0] })
	}




	fetchPost = (userPost) => {
		const formData = new FormData()
		formData.append("image", userPost.image)
		formData.append("caption", userPost.caption)

		let home = localStorage.getItem("inihome")
		console.log("sebelum kirim post", userPost.image)
		fetch('http://127.0.0.1:8000/api/dashboard/post', {
			method: 'POST', // or 'PUT'
			headers: {
				Authorization: `Bearer ${home}`,
				"X-Requested-With": "XMLHttpRequest",
			},
			body: formData,
		})
			.then(response => response.json())
			.then(userLogin => {
				window.location.reload()
			})

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
		const inputAttr = {
			type: 'input',
			placeholder: 'What’s on you mind, Paul?',
			required: true,
			name: "input",
		}
		return (
			<div className="container">
				<div className="appBar">
					<nav>
						<div class="logo">
							<h4>SkyBook</h4>
						</div>

						<ul>
							<a href=""><img style={{ position: 'absolute', top: 15, left: 400 }} src={skydu} /></a>
							<li><a href=""><img style={{ position: 'relative', top: 10 }} src={notiff} /></a></li>
						</ul>
						<div class="menu-toggle">
							<Input type="checkbox" />
							<span></span>
							<span></span>
							<span></span>
						</div>
					</nav>

					<input {...inputAttr} onChange={this.handleChangeField} style={{
						position: 'absolute',
						width: 622,
						height: 120,
						left: 409,
						top: 92,
						background: '#FFFFFF',
						border: ' 1.5 solid #F1F2F6',
						boxRadius: 'border-box',
						borderRadius: 8,
						textAlign: 'center'
					}}
					/>
					<input onChange={this.handleField} type="file" id="myfile" name="myfile" />

					<button onClick={() => this.CreatePost()} type="button" class="btn btn-primary" style={{ position: 'absolute', top: 150, left: 415 }}>Kirim</button>
					<button type="button" class="btn btn-outline-primary" className="mt-5"><Link to="/login">LOGOUT</Link></button>
					{this.state.posts.map((data) => {
						return <Card name={data.user.name} message={data.caption} images={data.image} />

					})
					}

				</div>
			</div>
		)
	}
}

export default Home