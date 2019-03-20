import React from 'react';
import IGSearchBar from '../../assets/ig_search_bar.png';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar-container">
        <div className="image-container">
          <img alt="instagram logo" src={IGSearchBar} className="logo-image" />
        </div>
        <div>
          <input type="text" placeholder="Search" />
        </div>
        <div className="social-wrapper">
          <div className="social">
            <i className="fa fa-compass" />
          </div>
          <div className="social">
            <i className="fa fa-heart" />
          </div>
          <div className="social">
            <i className="fa fa-user-circle" />
          </div>
        </div>
    </div>
  );
};

export default SearchBar;