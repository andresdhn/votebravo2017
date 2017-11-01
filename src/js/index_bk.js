// --------------------------------------------------------------
// Finalists component
// --------------------------------------------------------------

var React = require('react'); 
var ReactDOM = require('react-dom');
var CreateReactClass = require('create-react-class');

var Item = CreateReactClass({
	playMedia( media ) {
		return function() {
			var hero = document.getElementById('hero')
			var heroVideo = hero.querySelectorAll('.hero__video')[0]; 
			var heroContent = hero.querySelectorAll('.hero__content')[0]; 
			heroVideo.setAttribute('src', media); 
			heroVideo.classList.remove('hidden');
			heroContent.classList.add('hidden');
		}.bind(this); 
	}, 

	render(){
		return (
			<div className="grid-cell">
				<a className="finalist" data-media={ this.props.details.media } onClick={ this.playMedia( this.props.details.media ) }>
					<img className="finalist__thumb" src={ this.props.details.thumb }/>
					<p className="finalist__title">{ this.props.details.title }</p>
					<p className="finalist_name">{ this.props.details.agency }</p>
				</a>
			</div>
		)  
	}
});

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

var Finalists = CreateReactClass({
	filterList(event) {
		return function() {
			var updatedList = this.state.initialItems;
			updatedList = updatedList.filter( item => event == item.agency );
			this.setState({ items: updatedList });	
		}.bind(this);
	},

	getInitialState(){
		return {
			initialItems: require('./data'),
			items: []
		}
	},

	componentWillMount(){
		this.getAll(); 
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


ReactDOM.render(<Finalists />, document.getElementById('finalists-container')); 			