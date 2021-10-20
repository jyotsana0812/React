import React from 'react';

class SearchBar extends React.Component{
     state = {term:''};
     onFormSubmit = (event) =>{
        event.preventDefault();
        this.props.callMe(this.state.term);
    }
    
    render(){
        return(
            <div className = "ui segment">
                <form className = "ui form" onSubmit ={this.onFormSubmit}>
                    <div className = "field">
                    <label>Search image </label>
                    <input type = 'text'  value = {this.state.term} onChange = {(event)=> this.setState({term:event.target.value})}/>
                    </div>
                </form>
            </div>
        );
    }
}
export default SearchBar;