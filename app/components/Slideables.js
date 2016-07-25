import React, { Component } from 'react'
import ContentContainer from './ContentContainer'
import ArtworkContainer from './ArtworkContainer'
import Slider from "./Slider"
//
import Lock from './Lock'
import { VelocityComponent } from 'velocity-react'

class Slideables extends Component {
	render = () => (
		<div> 
			<VelocityComponent>
				<div className="draggable-container">
					<div className="passwordscreen"> 
						<Lock login={this.props.login}/>
					</div>
					<div className="lockscreen">
						<ContentContainer />
						<ArtworkContainer />
						<Slider />
					</div>
				</div>
			</VelocityComponent>
			
		</div>
	)
}

export default Slideables