import React from "react";
import "./Media.css";

class Media extends React.Component {
	
	constructor() {
		super()
		this.state = {
		  pictures: [],
		};
	}
		
    componentDidMount(){
        fetch("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=888ffbd789b69deba3437d82192932a7&tags=BoulderBikeTour%2C+bikerace&format=json&nojsoncallback=1")
        .then(response => response.json()) 
        .then(function(result){
            let picArray = result.photos.photo.map((pic) => {
                var srcPath = 'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'.jpg';
                return(
                    <img alt="racers" src={srcPath} className="flickr_image"></img>
                )
            })
            this.setState({pictures: picArray});
        }.bind(this))
    }

	render() {
    	return (
			<div>
                {this.state.pictures}
			</div>
		);
	}
}
export default Media;