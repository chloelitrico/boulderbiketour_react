import React from "react";
import "./Media.css";
import { Pagination } from 'react-bootstrap';

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
                    <div className="flickr_image" style={{background:`url(${srcPath}) no-repeat center center`, backgroundSize: `cover`}}>
                    </div>
                )
            })
            this.setState({pictures: picArray});
        }.bind(this))
    }

    handlePageChange(pageNumber) {
        this.setState({activePage: pageNumber});
    }


	render() {
       
        const totalPictures=this.state.pictures.length;
    	return (
			<div>
                <h1 id="media_title">Media</h1>
                <div className="album">
                    {this.state.pictures}
                </div>

                <Pagination
                activePage={this.state.activePage}
                itemsCountPerPage={40}
                totalItemsCount={totalPictures}
                pageRangeDisplayed={5}
                onChange={this.handlePageChange.bind(this)}
                />

			</div>
		);
	}
}
export default Media;