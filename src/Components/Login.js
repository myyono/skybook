import { Button, Grid, TextField, Container } from "@material-ui/core"
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import skydu from '../gambar/skydu.jpg';

class Login extends Component {
	state = {
		email :'',
		password : ''
	}
	handleChangeField =(e) =>{
		this.setState({[e.target.name]: e.target.value})
	}
	render() {
		//distuctering state
		const {email, password} = this.state
		return (
			<Container  style={{ backgroundColor:'green'}}>
				<Grid container style={{justifyContent:'center', direction :"row"}}>
         <Grid xs="4">
					 <img src={skydu} alt="icon"/>
					 <h2>Halaman Login</h2>
					 <form>
            <TextField type="email"  fullWidth margin="dense" variant="outlined" size="small" value={email} onChange={this.handleChangeField} name="email" label="Email" required />
						<TextField type="password"  fullWidth margin="dense" variant="outlined" size="small" value={password} onChange={this.handleChangeField} name="password" label="Password" required />
						<Button type="submit"  fullWidth variant="contained" color="secondary">Login</Button>
					 </form>
					 <p>Belum punya akun? <Link to="/registrasi">Sign up</Link></p>
				 </Grid>
				</Grid>
			</Container>
		);
	}
}

export default Login;
