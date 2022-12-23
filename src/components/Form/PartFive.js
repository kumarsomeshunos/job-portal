import React, { useState } from 'react';

const PartFive = () => {
  const [data, setData] = useState(['Hello']);
  const [data1, setData1] = useState(['Hello']);
  const addHello = (e) => {
    e.preventDefault();
    setData([...data, 'Hello']);
  };
  const addHello1 = (e) => {
    e.preventDefault();
    setData1([...data1, 'Hello']);
  };
  return (
    <>
      {data.map(() => {
        return (
          <>
            <p>
              <b>Academic</b>
            </p>
            <div className='col-md-3'>
              <label htmlFor='validationCustom04' className='form-label'>
                Country
              </label>
              <select
                className='form-select'
                id='validationCustom04'
                required=''
              >
                <option selected='' disabled='' value=''>
                  Choose...
                </option>
                <option>...</option>
              </select>
              <div className='invalid-feedback'>
                Please select a valid state.
              </div>
            </div>
            <div className='col-md-3'>
              <label htmlFor='validationCustom04' className='form-label'>
                Education Mode
              </label>
              <select
                className='form-select'
                id='validationCustom04'
                required=''
              >
                <option selected='' disabled='' value=''>
                  Choose...
                </option>
                <option>...</option>
              </select>
              <div className='invalid-feedback'>
                Please select a valid state.
              </div>
            </div>
            <div className='col-md-3'>
              <label htmlFor='validationCustom03' className='form-label'>
                University / Institute
              </label>
              <input
                type='text'
                className='form-control'
                id='validationCustom03'
                required=''
              />
              <div className='invalid-feedback'>Please provide your email.</div>
            </div>
            <div className='col-md-3'>
              <label htmlFor='validationCustom03' className='form-label'>
                College Name
              </label>
              <input
                type='text'
                className='form-control'
                id='validationCustom03'
                required=''
              />
              <div className='invalid-feedback'>Please provide your email.</div>
            </div>
            <div className='col-md-3'>
              <label htmlFor='validationCustom03' className='form-label'>
                Graduation Year
              </label>
              <input
                type='text'
                className='form-control'
                id='validationCustom03'
                required=''
              />
              <div className='invalid-feedback'>Please provide your email.</div>
            </div>
            <div className='col-md-3'>
              <label htmlFor='validationCustom03' className='form-label'>
                Course Name
              </label>
              <input
                type='text'
                className='form-control'
                id='validationCustom03'
                required=''
              />
              <div className='invalid-feedback'>Please provide your email.</div>
            </div>
            <div className='col-md-3'>
              <label htmlFor='validationCustom03' className='form-label'>
                Area
              </label>
              <input
                type='text'
                className='form-control'
                id='validationCustom03'
                required=''
              />
              <div className='invalid-feedback'>Please provide your email.</div>
            </div>
            <div className='col-md-3'>
              <label htmlFor='validationCustom04' className='form-label'>
                Division
              </label>
              <select
                className='form-select'
                id='validationCustom04'
                required=''
              >
                <option selected='' disabled='' value=''>
                  Choose...
                </option>
                <option>...</option>
              </select>
              <div className='invalid-feedback'>
                Please select a valid state.
              </div>
            </div>
            <div className='col-md-3'>
              <label htmlFor='validationCustom03' className='form-label'>
                % Aggregate Marks
              </label>
              <input
                type='text'
                className='form-control'
                id='validationCustom03'
                required=''
              />
              <br />
              <br />
              <div className='invalid-feedback'>Please provide your email.</div>
            </div>
            <br />
          </>
        );
      })}

      <div className='col-md-12'>
        <button className='btn btn-primary' type='button' onClick={addHello}>
          Add More
        </button>
      </div>

      <hr />

      {data1.map(() => {
        return (
          <>
            <p>
              <b>Non Academic</b>
            </p>
            <div className='col-md-3'>
              <label htmlFor='validationCustom04' className='form-label'>
                Country
              </label>
              <select
                className='form-select'
                id='validationCustom04'
                required=''
              >
                <option selected='' disabled='' value=''>
                  Choose...
                </option>
                <option>...</option>
              </select>
              <div className='invalid-feedback'>
                Please select a valid state.
              </div>
            </div>
            <div className='col-md-3'>
              <label htmlFor='validationCustom04' className='form-label'>
                Education Mode
              </label>
              <select
                className='form-select'
                id='validationCustom04'
                required=''
              >
                <option selected='' disabled='' value=''>
                  Choose...
                </option>
                <option>...</option>
              </select>
              <div className='invalid-feedback'>
                Please select a valid state.
              </div>
            </div>
            <div className='col-md-3'>
              <label htmlFor='validationCustom03' className='form-label'>
                University / Institute
              </label>
              <input
                type='text'
                className='form-control'
                id='validationCustom03'
                required=''
              />
              <div className='invalid-feedback'>Please provide your email.</div>
            </div>
            <div className='col-md-3'>
              <label htmlFor='validationCustom03' className='form-label'>
                College Name
              </label>
              <input
                type='text'
                className='form-control'
                id='validationCustom03'
                required=''
              />
              <div className='invalid-feedback'>Please provide your email.</div>
            </div>
            <div className='col-md-3'>
              <label htmlFor='validationCustom03' className='form-label'>
                Graduation Year
              </label>
              <input
                type='text'
                className='form-control'
                id='validationCustom03'
                required=''
              />
              <div className='invalid-feedback'>Please provide your email.</div>
            </div>
            <div className='col-md-3'>
              <label htmlFor='validationCustom03' className='form-label'>
                Course Name
              </label>
              <input
                type='text'
                className='form-control'
                id='validationCustom03'
                required=''
              />
              <div className='invalid-feedback'>Please provide your email.</div>
            </div>
            <div className='col-md-3'>
              <label htmlFor='validationCustom03' className='form-label'>
                Area
              </label>
              <input
                type='text'
                className='form-control'
                id='validationCustom03'
                required=''
              />
              <div className='invalid-feedback'>Please provide your email.</div>
            </div>
            <div className='col-md-3'>
              <label htmlFor='validationCustom04' className='form-label'>
                Division
              </label>
              <select
                className='form-select'
                id='validationCustom04'
                required=''
              >
                <option selected='' disabled='' value=''>
                  Choose...
                </option>
                <option>...</option>
              </select>
              <div className='invalid-feedback'>
                Please select a valid state.
              </div>
            </div>
            <div className='col-md-3'>
              <label htmlFor='validationCustom03' className='form-label'>
                % Aggregate Marks
              </label>
              <input
                type='text'
                className='form-control'
                id='validationCustom03'
                required=''
              />
              <br />
              <br />
              <div className='invalid-feedback'>Please provide your email.</div>
            </div>
            <br />
          </>
        );
      })}

      <div className='col-md-12'>
        <button className='btn btn-primary' type='button' onClick={addHello1}>
          Add More
        </button>
      </div>
    </>
  );
};

export default PartFive;
