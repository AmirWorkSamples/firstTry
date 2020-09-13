import React from 'react';

import Header from './Header';

const App = () => {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <Header />
            </div>
            <div className="ui row">
                <div className="column eight wide">
                    Resume
                </div>
                <div className="column eight wide">
                    App
                </div>
            </div>
        </div>
    );
};

export default App;
