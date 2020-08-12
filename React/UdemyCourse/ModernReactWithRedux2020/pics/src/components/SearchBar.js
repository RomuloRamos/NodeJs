import React from 'react';

class SearchBar extends React.Component {

    state = {term: ''};

    onInputChange(event) {
        this.setState({term: event.target.value});
        // console.log("onInputChange");
        // console.log(this.state.term);
    }
    onFormChange(event) {
        event.preventDefault(); //Impede que a pagina seja recarregada
        // console.log("onFormChange");
        // console.log(this.state.term);
        this.props.onSubmit(this.state.term);
    }


    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={(event) => {this.onFormChange(event)}}>
                    <div className="fild">
                        <label>Image Search</label>
                        <input
                        type="text"
                        value={this.state.term}
                        onChange={(event) => this.onInputChange(event)}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;