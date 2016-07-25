import React, { Component } from 'react'
import Statusbar from './Statusbar'
import Slidables from "./Slideables"
import { VelocityComponent } from 'velocity-react'
import Draggable from 'react-draggable'; 


class Screen extends Component {
	state = {
		deltaPosition: {x: 0}, 
		controlledPosition: {x: -233, y:0}
	}
	onStart() {
    //console.log('start')
  }
  onStop = (e, ui) => {
  	/*
  	console.log(ui.x >= -155)
  	if(ui.x < -155) {
  		for(let i = ui.x; i >= -233; i--){
  			//console.log(i)
  			this.setState({
  				controlledPosition: {x: i, y:0},
  				deltaPosition: {x:0}
  			})
  		}
  	}
  	else if(ui.x >= -155) {
  		console.log("yooo")
  		for(let i = ui.x; i <= 0; i++){
  			console.log(i)
  			this.setState({
  				controlledPosition: {x: i, y:0},
  				deltaPosition: {x:0}
  			})
  		}
  	}
  	*/
  }
  onDrag = (e, ui) => {
  	this.setState({
  		deltaPosition: {x:this.state.deltaPosition.x + ui.deltaX},
  		controlledPosition: {x: this.state.controlledPosition.x + ui.deltaX, y: 0}
  	})
  }
	render = () => {
		const dragHandlers = {onDrag: this.onDrag, onStart: this.onStart, onStop: this.onStop}
		let opacity = this.state.deltaPosition.x/233 - 0.2
		//console.log(opacity)
		if(opacity > 0.4) opacity = 0.4

		return (
			<div id="screen"> 
				<VelocityComponent animation={{opacity: opacity}} duration={0}>
				<div id="overlay"> </div>
				</VelocityComponent>
				<div>
					<Statusbar />
					<Draggable position={this.state.controlledPosition} axis="x" {...dragHandlers}>
						<div className="draggable">
						<Slidables />
						</div>
					</Draggable>
				</div>
			</div>
		)
	}
}

export default Screen