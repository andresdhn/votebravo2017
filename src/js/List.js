// --------------------------------------------------------------
// List component
// --------------------------------------------------------------

var React = require('react'); 
var CreateReactClass = require('create-react-class');
var Item = require('./Item'); 

var List = CreateReactClass({
	render(){
		return (
			<div className="grid grid--gutters grid--1-1 grid--1-2@xs grid--1-3@sm">
				{
					this.props.items.map(item => <Item key={ item.id } agency={ item.agency } details={ item } />)
				}
			</div>
		)  
	}
});

module.exports = List;