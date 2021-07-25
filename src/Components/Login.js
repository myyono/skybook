import React,{Component} from 'react';
import { Col, Container, Row, Form } from "react-bootstrap";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Button, TextField } from '@material-ui/core';
import './Login.css';
import { Link } from 'react-router-dom';
import log from '../gambar/mylogin.svg';

 class  Login extends  Component {
	 state = {
		 params : this.props.match.params.user,
		 logins : null,
		 email :'',
		password : '',
	 };

	//  handleChangeField =(e) =>{
	// 			this.setState({[e.target.name]: e.target.value})
	// 		}

	//  componentDidMount() {
	// 	 this.fetchLogin();
	//  }


	 handleSubmit = (e) => {
		 e.preventDefault();
		 console.log('cek');

		 let data = {
			name: "",
			email: "",
			password: "",
			password_confirmation: "",
		};
		fetch("http://127.0.0.1:8000/api/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
      },
    })
		.then((data) => data.json())
		.then((data) => console.log(data))
// const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZDlmNjQzYjU2NjgzNTIyNzY4MzBjMmQwMzc2OTAxNzA2ZjJiZTYxNTg2YjU0MmFkNjA4Y2JlOThjMTcwN2EwYzc3ZjJiNTE3MjFhYjRlNjgiLCJpYXQiOjE2MjcyMjQ4NDMuMjY1ODQ1LCJuYmYiOjE2MjcyMjQ4NDMuMjY1ODQ5LCJleHAiOjE2NTg3NjA4NDMuMjUxNzg5LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.TMr-eFcu4QhfCujSBPyQhj5WY3fTpzgdLCXDcKfAMTnPwEltrujo2tO__0Yak1t0vsPHO3bVy8fFL181kiuuvHLJd1TqX5-KJ8R3QubwAPc-bE_DF-DGp1V7j-x1VazdLn1UC_SCCKFbf2fPSro0aUtNSxqJiHg9gugs_vy7zY-8bFgmqRt0GI66eAWBPAQSRnaMkSe1ftK6fZvSQFWOYmKGcg_KOX7m1Vpp9mZx8nufJVTTSvSm120xzJbJCDfUK-fWNPJLdfJdlILauv3UpP-M7Vt1iz5pFKWIPpllu0u17E3cJhWWC0Wao_8qjtWPd_HTvo3LlNNxR5-BnTC0t0k3O_YZrfms6tiKqKf5cXJuKiOOFJMR5qH8SnnAlwVG2oifpk-ky7ez3ZCEA8sAvKBMCsILUPp6YFioaupLlDXTrDq6ERkTYSFOT4Is1vgyo5YwZuT_YxfvUpxHG89V2DR_2RltmaLQDj-kSlLditn-xzh8KfDCbu57S6HBMs8S8ZrTsHFEylDVsG8-K7R0qbFlkUfvj0lTi_PbUTEFKEggLg4mwjDGjC2sULbKHAjFn2Wn2UE72I9qE8Uen_mIpEan3I1rlVSHLM7ySUT4OgoRAkQqb4mwIps0dno9A0lvFkPcb-5R3Y1IhJqQLOP_bZ63JA1ashys0zWidItKlG0";
// 		fetch("http://127.0.0.1:8000/api/dashboard/home", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "application/json",
//         "X-Requested-With": "XMLHttpRequest",
//       },
//     }).then((data) => data.json())
// 		.then((data) => console.log(data))

	 }

	 fetchLogin = () => {
		fetch(`http://127.0.0.1:8000/oauth/token`)
		.then((data) => data.json())
		.then((json) => this.setState({logins : json}))
	};

	 render() {
	//	distuctering state
			const {email, password} = this.state
		return (
			<>
				<Container className= "mt-5">
					<h2>SkyBook</h2>
			    	<br />
					<h5 className="mt-5">Skybook membantu Anda terhubung dan berbagi
					 dengan orang-orang dalam kehidupan Anda.</h5>
					<Row>
						<Col lg={4} md={6} sn={20} className="text-center mt-30 p-3">
									<AccountCircleIcon className="icon-img" />
									<Form onSubmit={(e)=>this.handleSubmit(e)}>
										<Form.Group  controlId="formBasicEmail">
											<Form.Control type="email" placeholder="email" />
										</Form.Group>
										<Form.Group  controlId="formBasicPassword" className="mt-3">
											<Form.Control type="password" placeholder="Password" />
										</Form.Group> 
										<Button type="submit" fullWidth variant="contained"  color="primary" className="mt-3">Login</Button>
			        </Form>
							<p>Belum punya akun? <Link to="/registrasi">Sign up</Link></p>
						</Col>
						<Col lg={8} md={6} sn={12}>
						 <img src={log} alt="aku"/>
						</Col>
					</Row>
				</Container>
			</>
		)
  }

}


export default Login;