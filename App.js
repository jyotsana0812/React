import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar.js';
import ImageList from './ImageList.js';

class App extends React.Component{
      state = {images:[]};

onSearchSubmit = async term =>{
                const response = await axios.get('https://api.unsplash.com/search/photos',{    
                    params:{query:term},
                    headers:{
                    Authorization: 'Client-ID eOAHSqg7pTy0UOhGa37aCMUIaAY0fBLTv74I6cyqYX8'
                    }
                });
        this.setState({images:response.data.results});
    }

    render(){
      return(
        <div className = "ui container" style = {{marginTop: '10px'}}>
        <SearchBar  callMe = {this.onSearchSubmit}/>
        <ImageList images = {this.state.images}/>
        </div>
        );
    }
}
export default App;