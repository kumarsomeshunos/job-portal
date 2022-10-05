import React from 'react';

const PartSix = () => {
  return (
    <>
      <hr />
      <div className='col-md-3'>
        <label htmlFor='validationCustom01' className='form-label'>
          First name
        </label>
        <input
          type='text'
          className='form-control'
          id='validationCustom01'
          required=''
        />
        <div className='valid-feedback'>Looks good!</div>
      </div>
      <div className='col-md-3'>
        <label htmlFor='validationCustom02' className='form-label'>
          Year
        </label>
        <input
          type='text'
          className='form-control'
          id='validationCustom02'
          required=''
        />
        <div className='valid-feedback'>Looks good!</div>
      </div>
      <div className='col-md-3'>
        <label htmlFor='validationCustom02' className='form-label'>
          Amount Per Annum
        </label>
        <input
          type='text'
          className='form-control'
          id='validationCustom02'
          required=''
        />
      </div>
      <div className='col-md-3'>
        <label htmlFor='validationCustom02' className='form-label'>
          Fellowship Status
        </label>
        <select className='form-select' id='validationCustom04' required=''>
          <option selected='' disabled='' value=''>
            Choose...
          </option>
        </select>
      </div>
    </>
  );
};

export default PartSix;
