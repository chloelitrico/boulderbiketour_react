import React from "react";

class Flickr extends React.Component {

  componentDidMount(){
    fetch("https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=aea83ad6c5c5a6eb99f62e60502cc5f4&per_page=10&format=json&nojsoncallback=1")
    .then(function(response){
      console.log(response)
		  this.setState({flickr: response.data})
		})
  }
	render() {

    
    	return (
			<div>
				<h1>Flickr page!</h1>

			</div>
		);
	}
}
export default Flickr;