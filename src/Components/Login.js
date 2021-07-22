// import { Button, Grid, TextField, Container, Box } from "@material-ui/core"
// import { blueGrey } from "@material-ui/core/colors"
// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import log from '../gambar/mylogin.svg';
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import './Login.css';

// class Login extends Component {
// 	state = {
// 		email :'',
// 		password : ''
// 	}
// 	handleChangeField =(e) =>{
// 		this.setState({[e.target.name]: e.target.value})
// 	}
// 	render() {
// 		//distuctering state
// 		const {email, password} = this.state
// 		return (
// 		<Container>
// 			<Box bgcolor={blueGrey[200]} width="60%" height="40vh">
// 				<Grid container style={{justifyContent:'center'}}>
//          <Grid xs="4">
// 					 <img src={log} alt="icon"/>
// 					 <AccountCircleIcon />
// 					 <h2>Halaman Login</h2>
// 					 <form>
//             <TextField type="email"  fullWidth margin="dense" variant="outlined" size="small" value={email} onChange={this.handleChangeField} name="email" label="Email" required />
// 						<TextField type="password"  fullWidth margin="dense" variant="outlined" size="small" value={password} onChange={this.handleChangeField} name="password" label="Password" required />
// 						<Button type="submit"  fullWidth variant="contained" color="secondary">Login</Button>
// 					 </form>
// 					 <p>Belum punya akun? <Link to="/registrasi">Sign up</Link></p>
// 				 </Grid>
// 				</Grid>
// 			</Box>
// 			</Container>
// 		);
// 	}
// }

// export default Login;
import React  from 'react';
import { Col, Container, Row, Form } from "react-bootstrap";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Button } from '@material-ui/core';
import './Login.css';
import { Link } from 'react-router-dom';
import log from '../gambar/mylogin.svg'

 const  Login = () =>  {
		return (
			<>
				<Container className= "mt-5">
					<Row>
						<Col lg={4} md={6} sn={12} className="text-center mt-10 p-3">
							<AccountCircleIcon className="icon-img" />
							<Form>
								<Form.Group  controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter email" />
								</Form.Group>

								<Form.Group  controlId="formBasicPassword" className="mt-3">
								  <Form.Control type="password" placeholder="Password" />
								</Form.Group>
								<Button type="submit"  fullWidth variant="contained" color="primary" className="mt-3">Login</Button>
			        </Form>
							<p className="mt-2">Belum punya akun? <Link to="/registrasi">Sign up</Link></p>
						</Col>

						<Col lg={8} md={6} sn={12}>
						 <img src={log} alt="aku"/>
						</Col>
					</Row>
				</Container>
			</>
		)
}

export default Login;