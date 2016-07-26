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
		useControl: true
	}
	onStart = () => {
    this.setState({duration: 0})
  }
  onStop = (e, ui) => {
  	if(ui.x < 75){
  		console.log(ui.x)
  		this.setState({
  		deltaPosition: {x:0},
  		translate: 0,
  		duration: 500,
  		}, () => {
        this.setState({controlledPosition: {x: 0, y: 0}})
        console.log('okok')
      })
  	}

  	if(ui.x >= 75) {
  		this.setState({
  		deltaPosition: {x:200},
  		translate: 233,
  		duration: 500
  		}, () => {
        this.setState({controlledPosition: {x: 0, y: 0}})
      })
  	}
  }
  onDrag = (e, ui) => {
  	this.setState({
  		deltaPosition: {x:this.state.deltaPosition.x + ui.deltaX},
  		translate: this.state.deltaPosition.x + ui.deltaX,
  	  controlledPosition: {x: this.state.controlledPosition.x + ui.deltaX, y: 0}
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
			this.state.showHome ? 
      <VelocityComponent runOnMount={true} animation={{opacity: 1}} duration={750}>
      <div id="home"></div> 
      </VelocityComponent>
			: 
			<div id="screen">
				<VelocityComponent animation={{opacity: opacity}} duration={0}>
				<div id="overlay"> </div>
				</VelocityComponent>
				<div>
					<Statusbar />
					<VelocityComponent animation={{translateX: this.state.translate}} duration={this.state.duration}>
					<Draggable controlledPosition={ this.state.useControl ?  this.state.controlledPosition : null } {...dragHandlers} defaultPosition={{x: 0, y: 0}} axis="x">
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