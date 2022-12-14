import React, { useState } from 'react';
import PartOne from './PartOne';
import PartTwo from './PartTwo';
import PartThree from './PartThree';
import PartFour from './PartFour';
import PartFive from './PartFive';
import PartSeven from './PartSeven';
import PartTen from './PartTen';
import PartSix from './PartSix';
import PartEight from './PartEight';
import PartTwelve from './PartTwelve';

const FormMerger = (props) => {
  const [faculty, setFaculty] = useState('');
  return (
    <div className='container' style={{ 'margin-top': '3rem' }}>
      <form className='row g-3 needs-validation' noValidate=''>
        <h1>1. Application Information</h1>
        <PartOne data={props?.data} />
        <h1>2. Personal Information</h1>
        <PartTwo data={props?.data} />
        <h1>3. Academic / Professional Qualification</h1>
        <PartThree data={props?.data} />
        <h1>4. Qualified In</h1>
        <PartFour data={props?.data} />
        <h1>5. Experiences</h1>
        <PartFive data={props?.data} />
        <h1>6. Fellowships Achieved</h1>
        <PartSix />
        <h1>7. Research Work</h1>
        <PartSeven data={props?.data} />
        <h1>
          8. Books Authored/co-authored/ edited/co-edited
          <br />
          &nbsp; &nbsp; (in last three years)
        </h1>
        <PartEight data={props?.data} />
        <h1>9. Patent Details (in last three years) </h1>
        <PartTen data={props?.data} />
        <h1>12. Other Information </h1>
        <PartTwelve />
        <div className='col-12'>
          <div className='form-check'>
            <input
              className='form-check-input'
              type='checkbox'
              defaultValue=''
              id='invalidCheck'
              required=''
            />
            <label className='form-check-label' htmlFor='invalidCheck'>
              Agree to terms and conditions
            </label>
            <div className='invalid-feedback'>
              You must agree before submitting.
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormMerger;
