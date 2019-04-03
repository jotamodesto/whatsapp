import React from 'react';
import SearchIcon from '../../assets/icons/search.svg';

const Search = props => (
    <div className="box-search">
        <img src={SearchIcon} width="16" />
        <input className="box-search-filed" placeholder="Procurar uma conversa" />
    </div>
);

export default Search;