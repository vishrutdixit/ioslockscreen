import React, { Component } from 'react'

class Lock extends Component {
	count = 0
	state = {
		filled: [false, false, false, false],
		row1: [false, false, false],
		row2: [false, false, false],
		row3: [false, false, false],
		row4: false
	}
	mouseUp = (id) => {
		this.toggleFill(id);
		this.setState({filled: this.state.filled.map((bool, index)=>{
			if(this.count == index)
				return !bool
			else
				return bool
		})})
		this.count++;
	}
	mouseDown(id) {
		this.toggleFill(id);
	}
	toggleFill(id) {
		if(id == 0) {
			this.setState({row4: !this.state.row4})
		}
		if(id <= 3) {
			this.setState({row1: this.state.row1.map((bool, index)=>{
				if(index+1 == id)
					return !bool
				else
					return bool
			})})
		}
		if(id <= 6) {
			this.setState({row2: this.state.row2.map((bool, index)=>{
				if(index+4 == id)
					return !bool
				else
					return bool
			})})
		}
		if(id <= 9) {
			this.setState({row3: this.state.row3.map((bool, index)=>{
				if(index+7 == id)
					return !bool
				else
					return bool
			})})
		}
	}
	render = () => (
		<div id="lock-indicator">
		<div className="password-text"> Enter Passcode </div>
			<div className="bubbles"> 
				{ this.state.filled.map((fill, index)=>{
					return(
					<svg className="lock-circle" key={index} height="10" width="10">
	  			<circle cx="5" cy="5" r="4" stroke="#3399ff" strokeWidth="1" fill={ fill ? "#3399ff" : "none" } />
					</svg>
					)
				})}
			</div> 
			<div className="numpad">
			<div>
				{this.state.row1.map((fill, index)=>{
					return (
					<svg key={index+1} onMouseDown={() => this.mouseDown(index+1)} onMouseUp={() => this.mouseUp(index+1)} className="lock-circle" height="50" width="50">
	  			<circle cx="25" cy="25" r="25" stroke="#3399ff" strokeWidth="1" fill={ fill ? "#3399ff" : "none" }  />
	  			<text x="50%" y="50%" textAnchor="middle" stroke="#fafafa" strokeWidth="1px" dy=".3em"> { index+1 } </text>
					</svg>
					)
				})}
			</div>
			<div>
				{this.state.row2.map((fill, index)=>{
					return (
					<svg key={index+4} onMouseDown={() => this.mouseDown(index+4)} onMouseUp={() => this.mouseUp(index+4)} className="lock-circle" height="50" width="50">
	  			<circle cx="25" cy="25" r="25" stroke="#3399ff" strokeWidth="1" fill={ fill ? "#3399ff" : "none" }  />
	  			<text x="50%" y="50%" textAnchor="middle" stroke="#fafafa" strokeWidth="1px" dy=".3em"> { index+4 } </text>
					</svg>
					)
				})}
			</div>
			<div>
				{this.state.row3.map((fill, index)=>{
					return (
					<svg key={index+7} onMouseDown={() => this.mouseDown(index+7)} onMouseUp={() => this.mouseUp(index+7)} className="lock-circle" height="50" width="50">
	  			<circle cx="25" cy="25" r="25" stroke="#3399ff" strokeWidth="1" fill={ fill ? "#3399ff" : "none" }  />
	  			<text x="50%" y="50%" textAnchor="middle" stroke="#fafafa" strokeWidth="1px" dy=".3em"> { index+7 } </text>
					</svg>
					)
				})}
			</div>
			<div>
				<svg key={0} onMouseDown={() => this.mouseDown(0)} onMouseUp={() => this.mouseUp(0)} className="lock-circle" height="50" width="50">
	  		<circle cx="25" cy="25" r="25" stroke="#3399ff" strokeWidth="1" fill={ this.state.row4 ? "#3399ff" : "none" }  />
	  		<text x="50%" y="50%" textAnchor="middle" stroke="#fafafa" strokeWidth="1px" dy=".3em"> 0 </text>
				</svg>
			</div>
			 
			</div>

		</div>
	)
}

export default Lock