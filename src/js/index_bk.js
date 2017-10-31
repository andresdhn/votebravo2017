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

	componentDidMount: function(){
		this.setState({ data: this.state.finalists })
	},

	render() {
		return (
			<div>
				<div className="grid grid--gutters grid--1-1 grid--1-2@xs grid--1-3@sm">
					{ this.state.data.map( finalist => <Finalist key={ finalist.id } id={ finalist.id } details={ finalist } />) } 
				</div>
			</div>
		)
	}
}); 


