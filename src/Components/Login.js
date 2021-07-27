import React, { Component } from 'react'
import { Button, Container, Grid, TextField } from '@material-ui/core'
import { Link } from "react-router-dom"
import './Login.css'
import loginImg from '../gambar/mylogin.svg'

class Login extends Component {
	state = {
		email: '',
		password: ''
	}

	CreatePage = () => {
		let userlogin = {
			grant_type: "password",
			client_id: 1,
			client_secret: "aO9t86YRx4d1rAx85uA6Zkksm8MdIYA2hiZqpcjL",
			username: this.state.email,
			password: this.state.password,
			scope: ""

		}
		this.fetchLogin(userlogin)
	};

	handleChangeField = (e) => {
		this.setState({ [e.target.name]: e.target.value })


	}
	fetchLogin = (userlogin) => {
		console.log(userlogin.username, userlogin.password)
		fetch('http://127.0.0.1:8000/oauth/token', {
			method: 'POST', // or 'PUT'
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(userlogin),
		})
			.then(response => response.json())
			.then(userlogin => {
				if (userlogin.error) {
					alert('email anda salah, mohon isi email dan password dengan benar')
				} else {
					window.location.href = '/home'
					console.log('Berhasil Hore')
				}
				//TO DO:mengecek data login user bila benar maka push ke halaman home dan bila salah muncul alert email atau password wrong
			})
			.catch((error) => {
				console.error('Error:', error)
			})
	};



	render() {
		const { email, password } = this.state
		return (
			<Container>
				<Grid container style={{ justifyContent: 'left' }}>
					<Grid xs="4">
						<h2>SkyBook</h2>
						<from className="form">
							<TextField type="email" fullWidth margin="dense" variant="outlined" size="small" value={email} onChange={this.handleChangeField} name="email" label="email" required />
							<TextField type="password" fullWidth margin="dense" variant="outlined" size="small" value={password} onChange={this.handleChangeField} name="password" label="passowrd" required />
							<Button onClick={() => this.CreatePage()} fullWidth variant="contained" color="primary">Login</Button>
							<p>Belum punya akun?<Link to="/registrasi">Sign Up</Link></p>
						</from>
						<div className="imgLogin">
							<img src={loginImg} alt="login" />
						</div>
					</Grid>
				</Grid>
			</Container>
		)
	}
}
export default Login