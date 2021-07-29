import React from 'react'
import './Card2.css'
import mira from '../gambar/human/people/3.png'
import Image from "./Image"
const Card2 = () => {
	return (
		<div className="kotak">
			<img src={mira} className="mb-5" alt="mira" />
			<h1>MiraBella</h1>
			<h5>June 21, 12:45 pm</h5>
			<p>Having fun while cooking and eating variety of foods with @Sarah</p>
			<span className="buah">
				<Image />
			</span>
		</div>
	)
}

export default Card2
