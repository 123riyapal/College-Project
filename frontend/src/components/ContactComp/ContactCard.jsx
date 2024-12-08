import React from 'react';
import {  Email, LocationOn, LockClock, Phone } from '@mui/icons-material';
import "./card.css"
function ContactCard() {
  const card = [
    {
      logo: <LocationOn />,
      text: "Office Address",
      address: "25/B Milford, New York, USA"
    },
    {
      logo: <Phone />,
      text: "Office Address",
      address: "25/B Milford, New York, USA"
    },
    {
      logo: <Email />,
      text: "Office Address",
      address: "25/B Milford, New York, USA"
    },
    {
      logo: <LockClock />,
      text: "Office Address",
      address: "25/B Milford, New York, USA"
    }
  ];

  return (
    <div className='Card'>
      {card.map((item, index) => (
        <div key={index}>
        <div key={index} className="CardComp">
       <p className='logos'>   {item.logo} </p>
          <h3>{item.text}</h3>
          <p>{item.address}</p>
        </div>
            <div className="line"></div>
        </div>
        
      ))}
    </div>
  );
}

export default ContactCard;
