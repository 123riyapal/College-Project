import React from 'react';
import './AdmissionCriteria.css';
import Icon from '@mui/material/Icon';
import { BadgeOutlined, Description, Grade, Insights } from '@mui/icons-material';

const AdmissionCriteria = () => {
  return (
    <section className="admission-criteria">
      <h2>Admission Criteria</h2>
      <p className="intro">Here are the key criteria for admission to our institution:</p>
      <ul>
        <li>
          <Grade className='icon'/>
          <span>Minimum 3.0 GPA in previous academic records</span>
        </li>
        <li>
          <Insights className='icon'/>
          <span>Standardized test scores (SAT, ACT, etc.)</span>
        </li>
        <li>
          <BadgeOutlined className='icon'/>
          <span>Letter of recommendation</span>
        </li>
        <li>
          <Description className='icon'/>
          <span>Personal statement</span>
        </li>
      </ul>
    </section>
  );
};

export default AdmissionCriteria;
