import { Button, Container, Grid, TextField } from "@material-ui/core"
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Registrasi extends Component {
	state = {
		email :'',
		password : '',
	}
	handleChangeField =(e) =>{
		this.setState({[e.target.name]: e.target.value})
	}
	render() {
		//distuctering state
		const {email, password} = this.state
		return (
			<Container>
				<Grid container style={{justifyContent:'center'}}>
         <Grid xs="4">
					 <h2>Halaman Register</h2>
					 <form onSubmit={this.handleSubmit}>
            <TextField type="email"  fullWidth margin="dense" variant="outlined" size="small" value={email} onChange={this.handleChangeField} name="email" label="Email" required />
						<TextField type="password"  fullWidth margin="dense" variant="outlined" size="small" value={password} onChange={this.handleChangeField} name="password" label="Password" required />
						<Button type="submit"  fullWidth variant="contained" color="secondary">Register</Button>
					 </form>
					 <p>Sudah punya akun? <Link to="/login">Login</Link></p>
				 </Grid>
				</Grid>
			</Container>
		);
	}
}

export default Registrasi;
