import React, { Component } from 'react'
import ReactDom from 'react-dom'
import Lock from './Lock'
import ContentContainer from './ContentContainer'
import Slider from "./Slider"
import Statusbar from './Statusbar'
import $ from 'jquery'

class Lockscreen extends Component {
	state = {
		draggingX: false,
		draggingY: false,
		pos: {x:-233, y:0},
		rel: null,
		class: null,
		classY: null,
		lock: false,
		camera: false,
		loggedIn: false
	}
	componentDidUpdate = (props, state) => {
    if (this.state.draggingX && !state.draggingX || this.state.draggingY && !state.draggingY) {
      document.addEventListener('mousemove', this.handleDrag)
      document.addEventListener('mouseup', this.handleUp)
    } else if (!this.state.draggingX && state.draggingX || !this.state.draggingY && state.draggingY) {
      document.removeEventListener('mousemove', this.handleDrag)
      document.removeEventListener('mouseup', this.handleUp)
    }
  }
	handleDownX = (e) => {
		if (e.button !== 0) return
		let pos = $(".draggable-container").offset()
		this.setState({
			draggingX:true,
			rel: {
        x: e.pageX,
        y: 0
      },
      class:null
		})
		e.stopPropagation()
    e.preventDefault()
	}
	handleDownY = (e) => {
		if(e.button != 0) return
		this.setState({
			draggingY:true,
			rel: {
        y: e.pageY
      },
      classY:null
		})
		e.stopPropagation()
    e.preventDefault()
	}
	handleDrag = (e) => {
		if (!this.state.draggingX && !this.state.draggingY) return
		
		//dragging along x axis
		if(this.state.draggingX) {
			this.setState({
	      pos: {
	        x: this.state.lock ? 0 + (e.pageX - this.state.rel.x) : -233 + e.pageX - this.state.rel.x
	      }
	    })
		}

		//dragging along y axis
		if(this.state.draggingY) {
			//prevent moving downwards
			let move = e.pageY - this.state.rel.y > 0
			this.setState({
	      pos: {
	        y:  move ? 0 : e.pageY - this.state.rel.y
	      }
	    })
		}

    e.stopPropagation()
    e.preventDefault()
	}
	handleUp = (e) => {
		if(this.state.draggingX){
			//failed
			if(this.state.pos.x <= -170){
				this.setState({
					draggingX:false,
					pos: {
						x:-233
					},
					class: 'pos0',
					lock: false
				})
			}
			//success
			else {
				this.setState({
					draggingX:false,
					pos: {
						x:0
					},
					class: 'pos1',
					lock: true
				})
			}
		}

		else if(this.state.draggingY){
			//failed
			if(this.state.pos.y > -215){
				this.setState({
					draggingY: false,
					pos: {
						y: 0
					},
					classY: 'pos2',
					camera: false
				})
			}
			//success
			else {
				this.setState({
					draggingY: false,
					pos: {
						y: -414
					},
					classY: 'pos3',
					camera: true
				})
			}				
		}
			
		e.stopPropagation()
    e.preventDefault()
			
		
	}
	/* non-dragging related functions */
	login = () => {
		this.setState({loggedIn: true})
	}
	cancel = () => {
		this.setState({
			draggingX:false,
			pos: {
				x:-233
			},
			class: 'pos0',
			lock: false
		})
	}
	render = () => (
		<div style={{'top': this.state.pos.y }} id={this.state.classY} className="lockscreen">
		{ this.state.loggedIn ? <div id="home"> </div> : 
		<div> 
			<Statusbar />
			<div className="draggable-container"
					 onMouseDown={this.handleDownX}
	         style={{'left': this.state.pos.x}}
	         id={this.state.class}
					 >
				<div className="passwordscreen"> 
					<Lock reset={!this.state.lock} cancel={this.cancel} login={this.login}/>
				</div>
				<div className="_lockscreen">
					<ContentContainer />
					<Slider onDown={this.handleDownY} />
				</div>
			</div>
		</div>
		}
		</div>
	)

}

export default Lockscreen