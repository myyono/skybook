import React from 'react'
import GoogleLogin from "react-google-login"


const RegGoegle = () => {
	const ResponseGoegle = (response) => {
		let usergoogle = {
			email: response.profileObj.email,
			token: response.accessToken


		}
		console.log(response)
		console.log(response.profileObj)
		fetch('http://127.0.0.1:8000/api/register/google', {
			method: 'POST', // or 'PUT'
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(usergoogle),
		})
			.then(response => response.json())
			.then(norespone => {

				window.location.href = '/login'
			}
			)
	}
	return (
		<div>
			<GoogleLogin
				clientId="189901676536-gsefjrlhkhug3c1l5cgbg3ojdga6cjki.apps.googleusercontent.com"
				buttonText="Login"
				onSuccess={ResponseGoegle}
				onFailure={ResponseGoegle}
				cookiePolicy={'single_host_origin'} />
		</div>
	)
}
//}

export default RegGoegle
