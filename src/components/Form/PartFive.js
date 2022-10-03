import React, { useState } from 'react';

const PartFive = () => {
  const [data, setData] = useState([]);
  const addHello = (e) => {
    e.preventDefault();
    setData([...data, 'Hello']);
  };
  return (
    <>
      <hr />
      <p>
        <b>Academic</b>
      </p>
      <div className='col-md-3'>
        <label htmlFor='validationCustom04' className='form-label'>
          Nature Of Job
        </label>
        <select className='form-select' id='validationCustom04' required=''>
          <option selected='' disabled='' value=''>
            Choose...
          </option>
          <option>...</option>
        </select>
        <div className='invalid-feedback'>Please select a valid state.</div>
      </div>
      <div className='col-md-3'>
        <label htmlFor='validationCustom04' className='form-label'>
          Country
        </label>
        <select className='form-select' id='validationCustom04' required=''>
          <option selected='' disabled='' value=''>
            Choose...
          </option>
          <option>...</option>
        </select>
        <div className='invalid-feedback'>Please select a valid state.</div>
      </div>

      <div className='col-md-3'>
        <label htmlFor='validationCustom03' className='form-label'>
          University
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
          College
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
          Position
        </label>
        <select className='form-select' id='validationCustom04' required=''>
          <option selected='' disabled='' value=''>
            Choose...
          </option>
          <option>...</option>
        </select>
        <div className='invalid-feedback'>Please select a valid state.</div>
      </div>

      <div className='col-md-3'>
        <label htmlFor='validationCustom03' className='form-label'>
          Academic Domain
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
          Date From
        </label>
        <input
          type='date'
          className='form-control'
          id='validationCustom03'
          required=''
        />
        <div className='invalid-feedback'>Please provide your email.</div>
      </div>
      <div className='col-md-3'>
        <label htmlFor='validationCustom04' className='form-label'>
          Date To
        </label>
        <select className='form-select' id='validationCustom04' required=''>
          <option selected='' disabled='' value=''>
            Choose...
          </option>
          <option>...</option>
        </select>
        <div className='invalid-feedback'>Please select a valid state.</div>
      </div>

      {data.map(() => {
        return (
          <>
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
            <br />
            <hr />
          </>
        );
      })}

      <div className='col-md-12'>
        <button className='btn btn-primary' type='button' onClick={addHello}>
          Add More
        </button>
      </div>

      <hr />
      <p>
        <b>Non Academic</b>
      </p>
      <div className='col-md-3'>
        <label htmlFor='validationCustom04' className='form-label'>
          Nature Of Job
        </label>
        <select className='form-select' id='validationCustom04' required=''>
          <option selected='' disabled='' value=''>
            Choose...
          </option>
          <option>...</option>
        </select>
        <div className='invalid-feedback'>Please select a valid state.</div>
      </div>
      <div className='col-md-3'>
        <label htmlFor='validationCustom04' className='form-label'>
          Country
        </label>
        <select className='form-select' id='validationCustom04' required=''>
          <option selected='' disabled='' value=''>
            Choose...
          </option>
          <option>...</option>
        </select>
        <div className='invalid-feedback'>Please select a valid state.</div>
      </div>

      <div className='col-md-3'>
        <label htmlFor='validationCustom03' className='form-label'>
          Organisation
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
          Designation
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
          Department
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
          Date From
        </label>
        <input
          type='date'
          className='form-control'
          id='validationCustom03'
          required=''
        />
        <div className='invalid-feedback'>Please provide your email.</div>
      </div>
      <div className='col-md-3'>
        <label htmlFor='validationCustom04' className='form-label'>
          Date To
        </label>
        <select className='form-select' id='validationCustom04' required=''>
          <option selected='' disabled='' value=''>
            Choose...
          </option>
          <option>...</option>
        </select>
        <div className='invalid-feedback'>Please select a valid state.</div>
      </div>

      {data.map(() => {
        return (
          <>
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
            <br />
            <hr />
          </>
        );
      })}

      <div className='col-md-12'>
        <button className='btn btn-primary' type='button' onClick={addHello}>
          Add More
        </button>
      </div>
    </>
  );
};

export default PartFive;
