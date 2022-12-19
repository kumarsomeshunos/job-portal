import React, { useState } from 'react';

const PartTwelve = () => {
  const [knowMpal, setKnowMpal] = useState(['Hello']);
  const [intBefore, setIntBefore] = useState(['Hello']);
  const addHello1 = (e) => {
    e.preventDefault();
    setKnowMpal([...knowMpal, 'Hello']);
  };
  const addHello2 = (e) => {
    e.preventDefault();
    setIntBefore([...intBefore, 'Hello']);
  };
  return (
    <>
      <hr />
      <div className='col-md-3'>
        <label htmlFor='validationCustom03' className='form-label'>
          <strong>
            Present / Last Drawn salary <br />
            (monthly in INR)
          </strong>
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
          <strong>
            Notice period <br /> (in Days)
          </strong>
        </label>
        <input
          type='text'
          className='form-control'
          id='validationCustom03'
          required=''
        />
        <div className='invalid-feedback'>Please provide your email.</div>
      </div>
      <br />
      <hr />
      <div className='col-md-3'>
        <label htmlFor='validationCustom04' className='form-label'>
          Do you know anyone in Manipal?
        </label>
        <ul class='pagination pagination-lg'>
          <li class='page-item active' aria-current='page'>
            <span class='page-link' style={{ 'font-size': '0.5rem' }}>
              Yes
            </span>
          </li>
          <li class='page-item'>
            <a class='page-link' href='#' style={{ 'font-size': '0.5rem' }}>
              No
            </a>
          </li>
        </ul>
      </div>
      <p>
        <b>If Yes?</b>
      </p>
      {knowMpal.map(() => {
        return (
          <>
            <div className='col-md-3'>
              <label htmlFor='validationCustom03' className='form-label'>
                Name
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
                Campus
              </label>
              <input
                type='text'
                className='form-control'
                id='validationCustom03'
                required=''
              />
              <div className='invalid-feedback'>Please provide your email.</div>
            </div>
          </>
        );
      })}
      <div className='col-md-12'>
        <button className='btn btn-primary' type='button' onClick={addHello1}>
          Add More
        </button>
      </div>
      <hr />
      <div className='col-md-3'>
        <label htmlFor='validationCustom04' className='form-label'>
          Have you been interviewed
          <br /> in Manipal earlier?
        </label>
        <ul class='pagination pagination-lg'>
          <li class='page-item active' aria-current='page'>
            <span class='page-link' style={{ 'font-size': '0.5rem' }}>
              Yes
            </span>
          </li>
          <li class='page-item'>
            <a class='page-link' href='#' style={{ 'font-size': '0.5rem' }}>
              No
            </a>
          </li>
        </ul>
      </div>
      <p>
        <b>If Yes?</b>
      </p>
      <br />
      {intBefore.map(() => {
        return (
          <>
            <div></div>
            <br />
            <div className='col-md-3'>
              <label htmlFor='validationCustom04' className='form-label'>
                Campus
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
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp;
            <div className='col-md-3'>
              <label htmlFor='validationCustom04' className='form-label'>
                Given Offer to Join
              </label>
              <ul class='pagination pagination-lg'>
                <li class='page-item active' aria-current='page'>
                  <span class='page-link' style={{ 'font-size': '0.5rem' }}>
                    Yes
                  </span>
                </li>
                <li class='page-item'>
                  <a
                    class='page-link'
                    href='#'
                    style={{ 'font-size': '0.5rem' }}
                  >
                    No
                  </a>
                </li>
              </ul>
            </div>
            <div className='col-md-3'>
              <label htmlFor='validationCustom04' className='form-label'>
                Joined
              </label>
              <ul class='pagination pagination-lg'>
                <li class='page-item active' aria-current='page'>
                  <span class='page-link' style={{ 'font-size': '0.5rem' }}>
                    Yes
                  </span>
                </li>
                <li class='page-item'>
                  <a
                    class='page-link'
                    href='#'
                    style={{ 'font-size': '0.5rem' }}
                  >
                    No
                  </a>
                </li>
              </ul>
            </div>
            <div className='col-md-3'>
              <label htmlFor='validationCustom03' className='form-label'>
                If Joined, Date From
              </label>
              <input
                type='date'
                className='form-control'
                id='validationCustom03'
                required=''
              />
              <div className='invalid-feedback'>Please provide your email.</div>
            </div>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp;
            <div className='col-md-3'>
              <label htmlFor='validationCustom03' className='form-label'>
                Date To
              </label>
              <input
                type='date'
                className='form-control'
                id='validationCustom03'
                required=''
              />
              <br />
              <div className='invalid-feedback'>Please provide your email.</div>
            </div>
            <br />
          </>
        );
      })}

      <div className='col-md-12'>
        <button className='btn btn-primary' type='button' onClick={addHello2}>
          Add More
        </button>
      </div>
      <hr />
    </>
  );
};

export default PartTwelve;
