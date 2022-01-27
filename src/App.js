import React from 'react';
import './App.css';

const data = [
  { id: 'snare', letter: 'Q', src: 'https://www.myinstants.com/media/sounds/snare.mp3' },
  { id: 'bass 1', letter: 'W', src: 'https://www.myinstants.com/media/sounds/bass-drum.mp3' },
  { id: 'bongo', letter: 'E', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },
  { id: 'tom tom', letter: 'A', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },
  { id: 'bass 3', letter: 'S', src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },
  { id: 'shotgun', letter: 'D', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },
  { id: 'high hat', letter: 'Z', src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },
  { id: 'drum hit', letter: 'X', src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3' },
  { id: 'laser', letter: 'C', src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'  },
]

class DrumPad extends React.Component {
  
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown)
  }
  
  componentWillUnmount(){
    document.removeEventListener('keydown', this.handleKeyDown)
  }
  
  handleKeyDown = e => {
    if(e.keyCode == this.props.letter.charCodeAt()){
      this.audio.play()
      this.audio.currentTime = 0
      this.props.handleDisplay(this.props.id)
    }
  } 
  
  handleClick = () =>{
    this.audio.play()
    this.audio.currentTime = 0
    this.props.handleDisplay(this.props.id)
  }
  
  render(){
    return(
      <div 
        className="drum-pad" 
        id={this.props.id}
        onClick = {this.handleClick}
        >
        <h1>{this.props.letter}</h1>
        <audio
          ref = {ref => this.audio = ref}
          className="clip"
          id={this.props.letter} 
          src={this.props.src} >
        </audio>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      display : ''
    }
  }
  
  handleDisplay = display => this.setState({ display })
  
  render(){
    return(
      <div id="drum-machine" >
        <div id="display">{this.state.display}</div>
        <div id="drum-pads">
          {data.map(d => (
            <DrumPad 
              id={d.id}
              letter={d.letter}
              src={d.src}
              handleDisplay ={this.handleDisplay}
             />
          ))}
        </div>
      </div>

    );
  }
}


export default App;
