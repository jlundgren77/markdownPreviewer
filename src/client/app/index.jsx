import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import styles from './main.scss';
var marked = require('marked');


console.log(marked('I am using __markdown__.'));
class Start extends React.Component {
	constructor(props) {

		super(props);
		this.state = {
			value: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*'
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	markup(value) {
		var raw = marked(value, {sanitize: true});
		return {__html: raw};
	}
	render() {
		return (
			<div className="row">
					<div className="input col-md-4">
						
						
						
						<textarea rows="20" cols="55" type="text" value={this.state.value} onChange={this.handleChange}/>
						

					</div>

					<div className="output col-md-4 col-md-offset-4">
						
						<div dangerouslySetInnerHTML={this.markup(this.state.value)}></div>

					</div>
				</div>
			
		)
	}
	
}

var Counter = React.createClass({
	propTypes: {
		
	},
	
	getInitialState: function() {
		return {
			title: "This is a Github Markdown Editor",
			created: "Created by Jeff Lundgren"
		}
	},
	
	render: function() {
		return (
			<div className="footer container">
				<div className="row">
					<div className="col-md-4">
						<h1>{this.state.title}</h1>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4">
						<h3>{this.state.created}</h3>
					</div>
				</div>
			</div>	
		)
	}
});

class App extends React.Component {
	render () {
		return (
			<div className="container app">
				<Start />
				<Counter  />
			</div>
		    		

		);

	}
}

render(<App />, document.getElementById('app'));