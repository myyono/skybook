import React, { Component } from 'react'
import { Button, Container, Grid, TextField } from '@material-ui/core'
import { Link } from 'react-router-dom'

class Registrasi extends Component {
	state = {
		nama: '',
		email: '',
		password: '',

	}

	CreateUser = () => {
		let data = {
			name: this.state.nama,
			email: this.state.email,
			password: this.state.password,
			password_confirmation: this.state.password,
		}
		this.fetchRegister(data)
	}

	handleChangeField = (e) => {
		this.setState({ [e.target.name]: e.target.value })
	}


	fetchRegister = (data) => {
		console.log(data.name, data.email)
		fetch("http://127.0.0.1:8000/api/register", {
			method: "POST",//send request
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json",
				"X-Requested-With": "XMLHttpRequest",
			},
		})
			.then(response => response.json())
			.then(data => {
				if (data.success) {
					window.location.href = '/login'
					console.log('Berhasil Hore')
				} else {
					alert(' mohon cek ulang isi email dan password anda')
				}
				//TO DO:mengecek data login user bila benar maka push ke halaman home dan bila salah muncul alert email atau password wrong
			})
			.catch((error) => {
				console.error('Error:', error)
			})
	};

	handleChangeField = (e) => {
		this.setState({ [e.target.name]: e.target.value })
	}


	render() {
		//ini punya nilai email dan password
		const { email, password, nama } = this.state
		return (
			<Container>
				<Grid container style={{ justifyContent: 'center' }}>
					<Grid xs="4">
						<h2>Halaman register</h2>
						<form>
							<TextField type="nama" fullWidth margin="dense" variant="outlined" size="small" value={nama} onChange={this.handleChangeField} name="nama" label="nama" required />
							<TextField type="email" fullWidth margin="dense" variant="outlined" size="small" value={email} onChange={this.handleChangeField} name="email" label="email" required />
							<TextField type="password" fullWidth margin="dense" variant="outlined" size="small" value={password} onChange={this.handleChangeField} name="password" label="passowrd" required />
							<Button onClick={() => this.CreateUser()} fullWidth variant="contained" color="primary">Register</Button>
						</form>
						<p>Sudah punya akun?<Link to="/login">Masuk</Link></p>
					</Grid>
				</Grid>
			</Container>
		)
	}
}
export default Registrasi