import React, { Component } from 'react'
import Clock from './Clock'
import Music from './Music'

class ContentContainer extends Component {
	
	render = () => (
		<div className="content-container">
		<Clock />
		</div>
	)
}

export default ContentContainer
