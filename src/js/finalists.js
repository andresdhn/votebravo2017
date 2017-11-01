var React = require('react'); 
var CreateReactClass = require('create-react-class');
var List = require('./List'); 


module.exports = Finalists = CreateReactClass({
	getInitialState(){
		return {
			initialItems: require('./data'),
			items: []
		}
	},

	componentWillMount(){
		this.getAll(); 
	},

	filterList(event) {
		return function() {
			var updatedList = this.state.initialItems;
			updatedList = updatedList.filter( item => event == item.agency );
			this.setState({ items: updatedList });	
		}.bind(this);
	},

	getAll() {
		this.setState({ items: this.state.initialItems })
	}, 

	renderMenu(agency){
		return (
			<li key={ agency } className="nav__item">
				<a className="nav__link" onClick={ this.filterList( agency ) } >
					{ agency }
				</a>
			</li>		
		)
	},

	render(){
		var agencies = [...new Set(this.state.initialItems.map(item => item.agency))];
		
		return (
			<div>
				<ul className="nav nav--finalists margin--BX3">
					{ agencies.map( this.renderMenu ) }
				</ul>
				<List items={ this.state.items } filter={ this.filterList } />
			</div>
		);
	}
});
