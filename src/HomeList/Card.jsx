import React from 'react'
import my from '../gambar/human/people/3.png'
import share from '../gambar/ic/icons/Share.png'
import comment from '../gambar/ic/icons/Comment.png'
import like from '../gambar/ic/icons/Like.png'
import './Card.css'

const Card = (props) => {
	return (
		<div className="card">
			<span className="img">
				<img src={my} alt="my" />
			</span>
			<h3>{props.name}</h3>
			<h5>{props.timeStamp}</h5>
			<p>{props.message}</p>
			<img src={"http://127.0.0.1:8000/storage/posts/" + props.images} />
			<img src={share} className="sharre" alt="sahre" />
			<img src={comment} className="com" alt="com" />
			<img src={like} className="lik" alt="lik" />
		</div>
	)
}

export default Card
