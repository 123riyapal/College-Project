// Admission.js
import React from 'react';
import './AdmissionProcess.css';

function AdmissionProcess() {
  return (
    <section className="admissionprocess-page">
      {/* Header Section */}
      <header className="admissionprocess-header">
        <h1>Admission <span className="highLight">Process</span></h1>
        <div className="line"></div>
        <p>Start your journey with us! Find all the information you need to apply below.</p>
      </header>

      {/* Application Process Section */}
      <section className="application-process">
        <h2>Application <span className="highLight">Process</span></h2>
        <ol>
          <li>
            <strong>Step 1:</strong> Fill out the online application form on our website.
          </li>
          <li>
            <strong>Step 2:</strong> Submit required documents (see list below).
          </li>
          <li>
            <strong>Step 3:</strong> Pay the application fee.
          </li>
          <li>
            <strong>Step 4:</strong> Schedule an interview (for certain programs).
          </li>
          <li>
            <strong>Step 5:</strong> Await admission decision via email.
          </li>
        </ol>
      </section>

      {/* Eligibility Section */}
      <section className="eligibility">
        <h2>Eligibility <span className="highLight">Criteria</span></h2>
        <p>To apply, you must meet the following criteria:</p>
        <ul>
          <li>Minimum GPA of 3.0 for undergraduate programs or relevant experience for graduate programs.</li>
          <li>English proficiency for international students (TOEFL, IELTS scores accepted).</li>
          <li>Specific prerequisites based on the chosen program (check program details).</li>
        </ul>
      </section>

      {/* Required Documents Section */}
      <section className="required-documents">
        <h2>Required <span className="highLight">Documents</span></h2>
        <ul>
          <li>Completed application form.</li>
          <li>Official transcripts from previous institutions.</li>
          <li>Proof of identification (passport or national ID).</li>
          <li>Personal statement or essay (if required).</li>
          <li>Letters of recommendation (if applicable).</li>
          <li>Test scores (SAT, ACT, GRE, TOEFL, IELTS as per program requirements).</li>
        </ul>
      </section>

      {/* Important Dates Section */}
      <section className="important-dates">
        <h2>Important <span className='highLight'>Dates</span></h2>
        <div className="dates-grid">
          <div className="date-card">
            <h3>Application Opens</h3>
            <p>January 15, 2024</p>
          </div>
          <div className="date-card">
            <h3>Application Deadline</h3>
            <p>April 30, 2024</p>
          </div>
          <div className="date-card">
            <h3>Interview Scheduling</h3>
            <p>May 15 - June 15, 2024</p>
          </div>
          <div className="date-card">
            <h3>Decision Release</h3>
            <p>July 1, 2024</p>
          </div>
          <div className="date-card">
            <h3>Enrollment Deadline</h3>
            <p>August 1, 2024</p>
          </div>
        </div>
      </section>

    </section>
  );
}

export default AdmissionProcess;
