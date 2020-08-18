import React from 'react';

class SearchBar extends React.Component {

    state = {term: 'O que procura?'} 

    onInputChange = (event) => {
        this.setState({term: event.target.value})
    }

    onSubmit = (event) => {
        event.preventDefault(); //impede que a pagina seja atualizada ao pressionar o botão    

        //TODO: Make sure we call callback from parent component
        this.props.onFormSubmit(this.state.term);
    }
    
    render(){
        return (
        <div className="search-bar ui segment">
            <form onSubmit = {this.onSubmit} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input 
                        type="text"
                        value={this.state.term}
                        onChange={this.onInputChange}
                        />
                </div>
            </form>
        </div>
        );
    }
};

export default SearchBar;