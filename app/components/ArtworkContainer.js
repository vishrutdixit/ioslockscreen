import React, { Component } from 'react'


class ArtworkContainer extends Component {
	state = {
		img: "https://source.unsplash.com/random/180x180",
		_img: "https://source.unsplash.com/random/179x179"
	}
	render = () => (
		<div className="artwork-container"> 
		<div className="artwork"> 
		<img src={this.props.trigger ? this.state.img : this.state._img }/>
		</div>
		</div>
	)
}

export default ArtworkContainer