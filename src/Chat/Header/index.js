import React from 'react';
import FotoTiago from '../../assets/images/tiago.png';

const Header = props => (
    <button className="header justify-content-start">
        <img src={FotoTiago} className="foto-header" />
        <div className="text-contact">
            <span className="name-contact">{"Tiago Bispo"}</span>
        </div>
    </button>
);

export default Header;