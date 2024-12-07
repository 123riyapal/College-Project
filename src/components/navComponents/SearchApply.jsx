import React, { useState } from 'react';
import './searchApply.css';
import SearchIcon from '@mui/icons-material/Search';
import SearchPage from './SearchPage';

function SearchApply() {
  const [showSearchPage, setShowSearchPage] = useState(false);

  const handleSearchClick = () => {
    setShowSearchPage(true); // Open SearchPage
  };

  const handleClose = () => {
    setShowSearchPage(false); // Close SearchPage
  };

  return (
    <div className='applysearch'>
      <SearchIcon 
        onClick={handleSearchClick}
        className='search' 
        style={{ color: "white", fontSize: "30px" }}
      />
      <button className="apply">Apply</button>

      {/* Conditionally render SearchPage and pass handleClose as a prop */}
      {showSearchPage && <SearchPage onClose={handleClose} />}
    </div>
  );
}

export default SearchApply;
