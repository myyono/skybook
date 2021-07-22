import React, { Component } from 'react';
import axios from 'axios'
import qs from querystring;

const api = 'http://127.0.0.1:8000/oauth/token'

class ListComp extends Component {
	constructor(props) {
		super(props)

		this.state = {
       users : [],
			 response:'',
			 display: 'none'
		}
	}
  componentDidMount(){
		axios.get(api).then{res>>}
	}


	render() {
		return (
			<div>
				
			</div>
		);
	}
}

export default ListComp;
