import React from 'react';

const PartEight = () => {
  return (
    <>
      <hr />
      <div className='col-md-3'>
        <label htmlFor='validationCustom01' className='form-label'>
          Detail
        </label>
        <textarea
          type='text'
          className='form-control input-size'
          id='validationCustom01'
          required=''
        />
      </div>
      <div className='col-md-3'>
        <label htmlFor='validationCustom01' className='form-label'>
          ISBN Number
        </label>
        <input
          type='text'
          className='form-control'
          id='validationCustom01'
          required=''
        />
      </div>
      <div className='col-md-3'>
        <label htmlFor='validationCustom01' className='form-label'>
          Written As
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

export default PartEight;
