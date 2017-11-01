var React = require('react'); 
var CreateReactClass = require('create-react-class');

module.exports = Item = CreateReactClass({
	playMedia( media, type ) {
		return function() {
			var hero = document.getElementById('hero');
			var heroVideo = hero.querySelectorAll('.hero__video')[0]; 
			var heroContent = hero.querySelectorAll('.hero__content')[0]; 
			var heroImage = hero.querySelectorAll('.hero__image')[0]; 
			
			heroVideo.classList.add('hidden');
			heroContent.classList.add('hidden');
			heroImage.classList.add('hidden');

			heroVideo.pause();

			switch (type){
				case 'video': 
					heroVideo.setAttribute('src', media); 
					heroVideo.classList.remove('hidden');
					break; 
				case 'image':
					heroImage.setAttribute('style', 'background-image: url(' + media +')');	
					heroImage.classList.remove('hidden');
					break;
			}

		}.bind(this); 
	}, 

	render(){
		return (
			<div className="grid-cell zoomIn">
				<a className="finalist" data-media={ this.props.details.media } onClick={ this.playMedia( this.props.details.media, this.props.details.type  ) }>
					<img className="finalist__thumb" src={ this.props.details.thumb }/>
					<p className="finalist__title">{ this.props.details.title }</p>
					<p className="finalist_name">{ this.props.details.agency }</p>
				</a>
			</div>
		)  
	}
});