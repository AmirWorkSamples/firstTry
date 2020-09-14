import React from 'react';
import './header.styles.scss';

const Header = (props) => {
    const renderedItems = props.header.items.map((item) => {
        return (
            <div key={item.order} className="header-item">
                {item.text}
            </div>
        );
    });
    return(
        <div className="header">
            <div className="logo">
                <img src={process.env.PUBLIC_URL + props.header.logo} alt="logo" />
            </div>
            <div className="header-items"> 
                {renderedItems}
            </div>
            <div className="header-sidenav">
                <i class="fa fa-bars"></i>
            </div>
        </div>
    );
};

export default Header;