import React, {Component} from 'react'

class Slider extends Component {
	render = () => (
		<div id="slider">  
		<div> > slide to unlock </div>
		<img onMouseDown={this.props.onDown} id="camera-icon" height="20px" src="../img/camera-icon.png" />
		</div>
	)
}

export default Slider