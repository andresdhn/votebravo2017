var React = require('react'); 
var CreateReactClass = require('create-react-class');

module.exports = Item = CreateReactClass({
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