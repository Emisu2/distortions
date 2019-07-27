import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';


class FlippableCard extends Component {
  constructor() {
    super();
      this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
 
  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }
 
 render() {
    return (
	    <div className = 'dib'>
	      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal"> 
			<div key="front" onClick={this.handleClick} className = 'tc bg-white  br3 pa3 ma2 grow bw2 shadow-5 mw5 w5 h5'>
				<div>
				<img src = {this.props.username} alt = 'distortion'/>
				<p style={{fontWeight: 'bold'}} >{this.props.name}</p>
				</div>
	       	</div>
	        <div key="back" onClick={this.handleClick} className = 'tc bg-white  br3 pa3 ma2 grow bw2 shadow-5 mw5 w5 h5'>
	          	<div>
	          	<h1>{this.props.name}</h1>
				<p>{this.props.email}</p>
	       		</div>
	        </div>
	      </ReactCardFlip>
	     </div>
    )
  }
}

export default FlippableCard;