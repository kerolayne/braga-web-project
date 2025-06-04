// This file initializes the application, sets up routing, and renders the main components.

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';

const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    {/* Define your routes here */}
                    <Route path="/" exact>
                        <h1>Welcome to the Municipality of Braga</h1>
                    </Route>
                    {/* Add more routes as needed */}
                </Switch>
            </div>
        </Router>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));