import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import './SearchPage.css';

function SearchPage({ onClose }) {
  return (
    <div className="search-page">
      <div className="search-container">
        <CloseIcon 
          className="close-icon" 
          onClick={onClose} 
          style={{width:"40px",
            height:"40px",
            
          }}
        />
        <input 
          type="text" 
          placeholder="Search Here..." 
          className="search-input" 
        />
      </div>
    </div>
  );
}

export default SearchPage;
