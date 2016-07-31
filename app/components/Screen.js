import React, { Component } from 'react'
import Statusbar from './Statusbar'
import { VelocityComponent } from 'velocity-react'
import Lockscreen from './Lockscreen'
import ContentContainer from './ContentContainer'
import Slider from "./Slider"

class Screen extends Component {
	
	render = () => {
		return (
			<div id="screen">
        <div id="camera"> </div>
        <Lockscreen />
			</div>
		)
	}
}

export default Screen

