import React from 'react'
import my from '../gambar/human/people/2.png'
import share from '../gambar/ic/icons/Share.png'
import comment from '../gambar/ic/icons/Comment.png'
import like from '../gambar/ic/icons/Like.png'
import './Card.css'

const Card = () => {
	return (
		<div className="card">
			<span className="img">
				<img src={my} alt="my" />
			</span>
			<h3>Yono</h3>
			<h5>45 a mins ago</h5>
			<p>Being a father is sometimes my hardest but always my most rewarding job. Happy Father’s Day to all dads out there</p>
			<img src={share} className="sharre" alt="sahre" />
			<img src={comment} className="com" alt="com" />
			<img src={like} className="lik" alt="lik" />
		</div>
	)
}

export default Card
