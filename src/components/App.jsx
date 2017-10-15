import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Search from './Search';
import User from './User';

/*
This function is used to render the user route. Since it needs a 
parameter for a URL, it needs to be in a function
*/
const renderUser = (props) => {
    return (<User username={props.match.params.username} />)
}

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div >
                    <header className="main-header"></header>
                    <main className="main-content">
                        <Route exact={true} path="/" render={() => <Search />} />
                        <Route path="/user/:username" render={renderUser} />
                    </main>
                </div>
            </BrowserRouter>
        );
    }
};

export default App;
