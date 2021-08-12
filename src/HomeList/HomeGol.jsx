import React from 'react'
import GoogleLogin from "react-google-login"


const LogGoegle = () => {
	const ResponseGoegle = (response) => {
		let userhome = {
			grant_type: "password",
			client_id: 1,
			client_secret: "aO9t86YRx4d1rAx85uA6Zkksm8MdIYA2hiZqpcjL",
			username: response.profileObj.email,
			password: response.profileObj.googleId,
			scope: ""
		}
		console.log(response)
		console.log(response.profileObj)
		fetch('http://127.0.0.1:8000/oauth/token', {
			method: 'POST', // or 'PUT'
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(userhome),
		})
			.then(response => response.json())
			.then(nohome => {
				if (nohome.error) {
					alert('email anda salah, mohon isi email dan password dengan benar')
				} else {
					console.log("inihme", nohome)
					localStorage.setItem("inihome", nohome.access_token)
					window.location.href = '/home'
					console.log('Berhasil Hore')
				}
				//TO DO:mengecek data login user bila benar maka push ke halaman home dan bila salah muncul alert email atau password wrong
			})
			.catch((error) => {
				console.error('Error:', error)
			})
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

export default LogGoegle
