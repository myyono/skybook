// import { Button, Container, Grid, TextField } from "@material-ui/core"
// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// class Registrasi extends Component {
// 	state = {
// 		email :'',
// 		password : '',
// 	}
// 	handleChangeField =(e) =>{
// 		this.setState({[e.target.name]: e.target.value})
// 	}
// 	render() {
// 		//distuctering state
// 		const {email, password} = this.state
// 		return (
// 			<Container>
// 				<Grid container style={{justifyContent:'center'}}>
//          <Grid xs="4">
// 					 <h2>Halaman Register</h2>
// 					 <form onSubmit={this.handleSubmit}>
//             <TextField type="email"  fullWidth margin="dense" variant="outlined" size="small" value={email} onChange={this.handleChangeField} name="email" label="Email" required />
// 						<TextField type="password"  fullWidth margin="dense" variant="outlined" size="small" value={password} onChange={this.handleChangeField} name="password" label="Password" required />
// 						<Button type="submit"  fullWidth variant="contained" color="secondary">Register</Button>
// 					 </form>
// 					 <p>Sudah punya akun? <Link to="/login">Login</Link></p>
// 				 </Grid>
// 				</Grid>
// 			</Container>
// 		);
// 	}
// }

// export default Registrasi;
import React, { Component, Fragment} from 'react';
import {Row, Col, Form,} from "react-bootstrap";
import { Link } from 'react-router-dom';
import reg from '../gambar/register.svg';
import './Registrasi.css';
import { Button , Grid} from '@material-ui/core';


class Registrasi extends Component {
	state = {
		 		email :'',
		 		password : '',
		}
		
	// handleSubmit = (e) => { //arrow function 
  //     e.preventDefault(); //akan merilaud ketika submit from 
	// 		const {email, password} = this.state 
	// 		fetchLogin.createUserWithEmailAndPassword(email, password)
	// 		.then(res=>{
	// 			fetchLogin.currentUser.sendEmailVerifcation()
	// 			.then(()=>{
	// 				alert('Mohon verifikasi email anda');
	// 				this.props.history.push('/login');
	// 			})
	// 		})
	// 		.catch(err =>{
	// 			alert(err.mesage)
	// 		})
	// }
	render() {
		const {email, password} = this.state //distucring
		return (
			<Fragment>
				<Grid container style={{justifyContent:'center'}}>
					<Row>
						<Col lg={6} md={6} sn={12} className="text-center mt-10 p-2">
						 <div className="LoginBox p-5">
							 <img className="LoginImg" src={reg} alt="register" />
						  <Form onSubmit={this.handleSubmit}>
								<Form.Group>
									<Form.Control type="email" placeholder="Enter email" />
								</Form.Group>

								<Form.Group className="mt-3">
									<Form.Control type="password" placeholder="Password" />
								</Form.Group>

								<Button type="submit"  fullWidth variant="contained" color="primary" className="mt-3">Register</Button>
							</Form>
							<p className="mt-2"> Sudah punya akun? <Link to="/login">Login</Link></p>
						 </div>
						</Col>
					</Row>
				</Grid>
				
			</Fragment>
		);
	}
}

export default Registrasi;
