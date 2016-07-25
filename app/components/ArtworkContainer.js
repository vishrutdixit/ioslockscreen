import React, { Component } from 'react'

class ArtworkContainer extends Component {
	state = {
		img: ""
	}
	componentWillMount = () => {
		//get call to axios
		//set as state
	}
	render = () => (
		<div className="artwork-container"> 
		<div className="artwork"> 
		<img src="https://source.unsplash.com/random/180x180"/>
		</div>
		</div>
	)
}

export default ArtworkContainer