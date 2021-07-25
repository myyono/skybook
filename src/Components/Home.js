import {  Button, Container, Paper } from "@material-ui/core"
import React, { Component } from 'react';
import PrimarySearchAppBar from '../HomeList/Navbar';
import {  FormGroup, Label, Input, } from 'reactstrap';
import MediaControlCard from '../HomeList/Card1'

 class Home extends Component {
	  // componentDidMount() {
    //  fetchLogin.onAuthStateChanged((user) => {
    //    if(!user) {
		// 		 //jika tidaada ser yang login kita dorong ke halaman login
		// 		 this.props.history.push('/login')

		// 	 }
		//  })
	  // }
	render() {
		return (
			<Container>
				<Paper>
					<Button>LOGOUT</Button>
					 <PrimarySearchAppBar  /> 
				</Paper>
			  <FormGroup>
						<Label for="exampleText">Your Status</Label>
						<Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
				<br />
				<MediaControlCard />
			</Container>
		)
	}
}

export default Home