import React, {Component} from 'react'
import ReactDom from 'react-dom'
import Screen from './Screen'
import $ from 'jquery'

class App extends Component {
	/*
	state = {
		dragging: false,
		pos: {x:50, y:0},
		rel: null,
		class: null
	}
	componentDidUpdate = (props, state) => {
    if (this.state.dragging && !state.dragging) {
      document.addEventListener('mousemove', this.handleDrag)
      document.addEventListener('mouseup', this.handleUp)
    } else if (!this.state.dragging && state.dragging) {
      document.removeEventListener('mousemove', this.handleDrag)
      document.removeEventListener('mouseup', this.handleUp)
    }
  }
	handleDown = (e) => {
		//console.log(e)
		if (e.button !== 0) return
		let pos = $(".drag-test").offset()
		this.setState({
			dragging:true,
			rel: {
        x: e.pageX - pos.left,
        y: e.pageY - pos.top
      },
      class:null
		})
		e.stopPropagation()
    e.preventDefault()
	}
	handleDrag = (e) => {
		if (!this.state.dragging) return
    this.setState({
      pos: {
        x: e.pageX - this.state.rel.x,
        y: 0
      }
    })

    e.stopPropagation()
    e.preventDefault()
	}
	handleUp = (e) => {
		//failed
		if(this.state.pos.x < 250){
			this.setState({
				dragging:false,
				pos: {
					x:0,
					y:0
				},
				class: 'pos0'
			})
		}
		else {
			this.setState({
				dragging:false,
				pos: {
					x:500,
					y:0
				},
				class: 'pos1'
			})
		}
		e.stopPropagation()
    e.preventDefault()
	}
	*/
	
  render= () => {
    return (
    		/*
	       <div className="drag-test"
	       		onMouseDown={this.handleDown}
            style={{'top': this.state.pos.y, 'left': this.state.pos.x}}
            id={this.state.class}>
						
        </div>
        */
        
        
        <div id="frame"> 
					<img height="600px" width="307.15" src="img/frame.png"/>  
					<Screen />
				</div>
				
    )
  }
}

export default App

/*


*/