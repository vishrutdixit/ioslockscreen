import React, { Component } from 'react'
import Sound from 'react-sound'
import ArtworkContainer from './ArtworkContainer'

class Music extends Component {
	tracks = [
		{
			url: 'audio/city_of_stars.mp3',
			name: 'City of Stars',
			artist: 'Logic - The Incredible True Story'
		},
		{
			url: 'audio/one_dance.mp3',
			name: 'One Dance',
			artist: 'Drake ft Wizkid - Views'
		},
		{
			url: 'audio/no_future.mp3',
			name: 'No Future',
			artist: 'blink182 - California'
		},
		{
			url:'audio/hymn.mp3',
			name: 'Hymn for the Weekend',
			artist: 'Coldplay - A Head Full of Dreams'
		}
	]
	state = {
		currentTrack: 0,
		play: false,
		trigger: true,
	}
	togglePlay = () => {
		this.setState({play: !this.state.play})
	}
	next = () => {
		if(this.state.currentTrack == 3)
			this.setState({currentTrack: 0})
		else 
			this.setState({currentTrack: this.state.currentTrack+1})

		//trigger new album artwork
		this.setState({trigger:!this.state.trigger})
	}
	previous = () => {
		if(this.state.currentTrack == 0)
			this.setState({currentTrack: 3})
		else 
			this.setState({currentTrack: this.state.currentTrack-1})

		//trigger new album artwork
		this.setState({trigger:!this.state.trigger})
	}
	handleSongFinishedPlaying = () => {
		this.next();
	}
	render = () => {
		return (
			<div>
				<Sound
    			url={this.tracks[this.state.currentTrack].url}
    			playStatus={ this.state.play ? Sound.status.PLAYING : Sound.status.PAUSED }
    			onFinishedPlaying={this.handleSongFinishedPlaying}
    		/>
				<div id="progress-bar"> </div>
				<div id="track-info"> 
					<div className="track-name"> { this.tracks[this.state.currentTrack].name }</div>
					<div className="track-artist"> { this.tracks[this.state.currentTrack].artist } </div>
				</div>
				<div id="music-controls">
					<img  onClick= {this.previous} id="control-icon" height="30px"src='img/rewind.png'/>
					{ this.state.play ? 
					<img onClick={this.togglePlay} id="control-icon" height="30px"src='img/pause.png'/>
					:
					<img onClick={this.togglePlay} id="control-icon" height="30px"src='img/play.png'/>
					}
					<img onClick={this.next} id="control-icon" height="30px"src='img/forward.png'/>
				</div>

				<ArtworkContainer trigger={this.state.trigger}/>

			</div>
		)
	}
}

export default Music