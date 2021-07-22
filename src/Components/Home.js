import {  Container, Paper } from "@material-ui/core"
import React, { Component } from 'react';
import PrimarySearchAppBar from '../HomeList/Navbar';
import {  FormGroup, Label, Input, } from 'reactstrap';
import MediaControlCard from '../HomeList/Card1'

 class Home extends Component {
	//  componentDidMount {

	//  }
	render() {
		return (
			<Container>
				<Paper>
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