import React, { Component } from 'react';
import { Button, Container, Grid,  TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';

 class Registrasi extends Component {
	 state = {
		 email : '',
		 password : ''
	 }
   handleChangeField = (e) => {
     this.setState({[e.target.name]: e.target.value})
	 }


	render() {
		//ini punya nilai email dan password
		const {email, password} = this.state 
		return (
			<Container>
				<Grid container style={{justifyContent:'center'}}>
         <Grid xs="4">
					 <h2>Halaman register</h2>
					 <from>
					     <TextField type="email" fullWidth margin="dense" variant="outlined" size="small" value={email} onChange={this.handleChangeField} name="email" label="email" required/>
							 <TextField type="password" fullWidth margin="dense" variant="outlined" size="small" value={password} onChange={this.handleChangeField} name="password" label="passowrd" required />
							 <Button  fullWidth variant="contained" color="primary">Register</Button>
					 </from>
					 <p>Sudah punya akun?<Link to="/login">Masuk</Link></p>
				 </Grid>
				</Grid>
			</Container>
		)
	}
}
export default Registrasi;