import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.scss';

const MenuItem = ({ title, imageUrl, history, linkUrl, match }) => (

    <div
        className="menu-item"
        onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        {console.log(match.url)}
        <div
            className="background-image"
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
);

// wrapping withRouter around our component gives us acsecess to the history and math props
// assuming we've set up BrowserRouter in index.js and the Swith / Routes in
// App.js  
export default withRouter(MenuItem);