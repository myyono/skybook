import React from 'react'
import GoogleLogin from "react-google-login"

//const logGol = () => {
const Log = () => {
	const ResponseGoegle = (response) => {
		console.log(response)
		console.log(response.profileObj)
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

export default Log
