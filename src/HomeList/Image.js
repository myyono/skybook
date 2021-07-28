import React, { Component } from 'react'
import jusbuah from '../gambar/gambar1.jpg'

class Image extends Component {
	render() {
		return (
			<div>
				<img src={jusbuah} alt="" />
			</div>
		)
	}
}

export default Image