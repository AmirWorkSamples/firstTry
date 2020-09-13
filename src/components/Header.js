import React from 'react';
import { connect } from 'react-redux';

import { headerItemClick } from '../actions';

const Header = (props) => {
    const renderedItems = props.items.map((item) => {
        return (
            <div key={item.order} className="header-item">
                {item.text}
            </div>
        );
    });
    return(
        <div className="header">
            <div className="title">
            </div>
            <div className="header-items"> 
                {renderedItems}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { items: state.headerItems };
};
export default connect(mapStateToProps, { headerItemClick })(Header);