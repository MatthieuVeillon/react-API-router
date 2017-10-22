import React from 'react';
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

//import { browserHistory as history } from 'react-router';

/*
This component displays a form where the user can enter a GitHub username
When they submit the form either by pressing ENTER or clicking the button,
we will use react-router's history.push function to push a new URL to the history.

This will have as an effect to navigate to a new URL, which will display the User component
Why are we doing this instead of using a <Link>? The answer is straightforward, but make sure you understand!!!
*/
class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { user: '' }
    }


    handleInputChange = e => {
        // This needs to be filled in
    }

    render() {
        return (
            <div className="search-page">
                <h2>Enter a GitHub username</h2>
                <input className="search-page__input" type="text" onChange={this.handleInputChange} />
                <Link  to={'/user/' + this.state.user} className="fakeButton"> Search</Link>
            </div>
        );
    }
};

export default Search;
