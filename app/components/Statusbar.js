import React, { Component } from 'react'

class Statusbar extends Component {
	render = () => (
		<div className="statusbar"> 
			<div> 
			<span className="connection-indicator"> T-Mobile </span> 
			<img id='wifi' src='img/wifi.png' height='12px'/> 
			<span className="battery-text"> 100% </span>
			<img id='battery' src='img/battery.png' height='15px'/> 
			</div>
		</div>
	)
}

export default Statusbar