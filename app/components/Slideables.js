import React, { Component } from 'react'
import ContentContainer from './ContentContainer'
import ArtworkContainer from './ArtworkContainer'
import Slider from "./Slider"
//
import Lock from './Lock'

class Slideables extends Component {
	render = () => (
		<div className="draggable-container">
			<div className="passwordscreen"> 
				<Lock />
			</div>
			<div className="lockscreen">
				<ContentContainer />
				<ArtworkContainer />
				<Slider />
			</div>
		</div>
	)
}

export default Slideables