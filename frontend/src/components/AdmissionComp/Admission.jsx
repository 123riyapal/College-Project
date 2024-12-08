import React from 'react';
import WhyChooseUs from './WhyChooseUs';
import AdmissionCriteria from './AdmissionCriteria';
import FinancialAid from './FinancialAid';
import Form from '../ContactComp/Form';
import Footer from '../MainContent/Footer';
import AdmissionHero from './AdmissionHero';
import Course from "../MainContent/Course"
import AdmissionProcess from './AdmissionProcess';
const Admission = () => {
  return (
    <div className="admission-page">
      <AdmissionHero/>
      <WhyChooseUs />
      <AdmissionCriteria />
      <Course/>
      <AdmissionProcess/>
      <FinancialAid />
      <Form />
      <Footer/>
    </div>
  );
};

export default Admission;
