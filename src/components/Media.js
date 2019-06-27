import React from "react";
import { Jumbotron } from 'react-bootstrap';
import "./Media.css"

class Media extends React.Component {
    constructor() {
      super();
      this.state = {
        pictures: [],
        currentPage: 1,
        picturesPerPage: 40
      };
      this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        fetch("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=888ffbd789b69deba3437d82192932a7&tags=BoulderBikeTour%2C+bikerace&format=json&nojsoncallback=1")
        .then(response => response.json()) 
        .then(function(result){
            let picArray = result.photos.photo.map((pic) => {
                var srcPath = 'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'.jpg';
                return(
                    <div className="flickr_image" key={pic.id} style={{background:`url(${srcPath}) no-repeat center center`, backgroundSize: `cover`}}>
                    </div>
                )
            })
            this.setState({pictures: picArray});
            
        }.bind(this))
        
    }
  
    handleClick(event) {
      this.setState({
        currentPage: Number(event.target.id)
      });
    }
  
    render() {
      const { pictures, currentPage, picturesPerPage } = this.state;
  
      // Logic for displaying pictures
      const indexOfLastPicture = currentPage * picturesPerPage;
      const indexOfFirstPicture = indexOfLastPicture - picturesPerPage;
      const currentPictures = pictures.slice(indexOfFirstPicture, indexOfLastPicture);
  
      const renderPictures = currentPictures.map((picture, index) => {
        return <div className="image_container" key={index}>{picture}</div>;
      });
  
      // Logic for displaying page numbers
      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(pictures.length / picturesPerPage); i++) {
        pageNumbers.push(i);
      }
  
      const renderPageNumbers = pageNumbers.map(number => {
        return (
          <li
            key={number}
            id={number}
            onClick={this.handleClick}
          >
            {number}
          </li>
        );
      });
  
      return (
          <Jumbotron>
            <h1 id="media_title">Media</h1>
            <div className='album'>
                {renderPictures}
            
            <ul id="page-numbers">
            {renderPageNumbers}
            </ul>
            </div>
        </Jumbotron>
      );
    }
  }

export default Media;