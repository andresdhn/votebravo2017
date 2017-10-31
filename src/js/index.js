
// --------------------------------------------------------------
// Index
// --------------------------------------------------------------

var React = require('react'); 
var ReactDOM = require('react-dom');
var CreateReactClass = require('create-react-class');

var Finalist = CreateReactClass({
	render() {
		return(
			<div className="grid-cell">
				<a className="finalist" href="#">
					<img className="finalist__thumb" src={ this.props.details.thumb }/>
					<p className="finalist__title">{ this.props.details.title }</p>
					<p className="finalist_name">{ this.props.details.agency }</p>
				</a>
			</div>
		)
	}
}); 

var Finalists = CreateReactClass({ 
	getInitialState() {
		return{
			finalists: require('./finalists'),
			data: []
		}
	},

	componentWillMount: function(){
	    this.setState({ data: this.state.finalists })
	},

	filter(agency) {
		let finalists = this.state.finalists.filter(finalist => finalist.agency !== agency )
        this.setState({ data: finalists })
	},

	render() {
		return (
			<div className="grid grid--gutters grid--1-1 grid--1-2@xs grid--1-3@sm">
				{ this.state.data.map( finalist => <Finalist key={ finalist.id } id={ finalist.id } details={ finalist } />)} }
			</div>
		)
	}
}); 

ReactDOM.render(<Finalists />, document.getElementById('finalists-container')); 


