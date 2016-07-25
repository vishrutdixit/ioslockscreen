import React, { Component } from 'react'
import Statusbar from './Statusbar'
import Slidables from "./Slideables"
import { VelocityComponent } from 'velocity-react'
import Draggable from 'react-draggable'; 


class Screen extends Component {
	state = {
		deltaPosition: {x: 0}, 
		controlledPosition: {x: 0, y:0},
		translate: 0,
		duration: 0,
		useControl: false,
		showHome: false
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
  	if(ui.x < 75){
  		console.log(ui.x)
  		
  		this.setState({
  		deltaPosition: {x:0},
  		translate: 0,
  		duration: 500
  		})
  		
  	}

  	if(ui.x >= 75) {
  		this.setState({
  		deltaPosition: {x:200},
  		translate: 233,
  		duration: 500
  		})
  	}
  }
  onDrag = (e, ui) => {
  	//console.log(ui)
  	
  	//console.log(this.state.deltaPosition.x + ui.deltaX)

  	this.setState({
  		deltaPosition: {x:this.state.deltaPosition.x + ui.deltaX},
  		translate: this.state.deltaPosition.x + ui.deltaX
  		//controlledPosition: {x: this.state.controlledPosition.x + ui.deltaX, y: 0}
  	})
  }
	login = () => {
		this.setState({showHome: true})
	}
	render = () => {
		const dragHandlers = {onDrag: this.onDrag, onStart: this.onStart, onStop: this.onStop}
		let opacity = this.state.deltaPosition.x/233 - 0.4
		//console.log(opacity)
		//if(opacity > 0.4) opacity = 0.4

		return (
			this.state.showHome ? <div id="home"></div> 
			: 
			<div id="screen">
				<VelocityComponent animation={{opacity: opacity}} duration={this.state.duration}>
				<div id="overlay"> </div>
				</VelocityComponent>
				<div>
					<Statusbar />
					<VelocityComponent animation={{translateX: this.state.translate}} duration={0}>
					<Draggable controlledPosition={ this.state.useControl ?  this.state.controlledPosition : this.state.controlledPosition} {...dragHandlers} defaultPosition={{x: 0, y: 0}} axis="x">
						<div className="draggable">
						<Slidables login={this.login}/>
						</div>
					</Draggable>
					</VelocityComponent>
				</div>
			</div>
			
		)
	}
}

export default Screen