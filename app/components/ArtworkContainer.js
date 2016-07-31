import React, { Component } from 'react'


class ArtworkContainer extends Component {
	state = {
		img0: "https://source.unsplash.com/random/201x201",
		img1: "https://source.unsplash.com/random/200x201",
		img2: "https://source.unsplash.com/random/201x200",
		img3: "https://source.unsplash.com/random/200x200"
	}
	render = () => {
		return (
			<div className="artwork-container"> 
			<div className="artwork card"> 
				<img className="album-cover" id={this.props.curr == 0 ? 'current-album-cover' : '' } src={this.state.img0} /> 
				<img className="album-cover" id={this.props.curr == 1 ? 'current-album-cover' : '' } src={this.state.img1} /> 
				<img className="album-cover" id={this.props.curr == 2 ? 'current-album-cover' : '' } src={this.state.img2} /> 
				<img className="album-cover" id={this.props.curr == 3 ? 'current-album-cover' : '' } src={this.state.img3} /> 
			</div>
			</div>
		)
	}
}

export default ArtworkContainer