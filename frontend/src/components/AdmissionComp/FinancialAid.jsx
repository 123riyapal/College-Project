import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Icon from '@mui/material/Icon';
import './FinancialAid.css';

const FinancialAid = () => {
  return (
    <section className="financial-aid">
      <h2>Financial <span className="highLight">Aid</span> </h2>
      <p>
        We offer scholarships, grants, and financial aid packages to assist qualified students.
      </p>
    </section>
  );
};

export default FinancialAid;
