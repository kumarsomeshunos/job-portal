import React, { useState } from 'react';
import { facultiesList, list } from './faculties (1)';
const PartOne = (props) => {
  const [faculty, setFaculty] = useState('');
  const [depts, setDepts] = useState('');

  return (
    <>
      <hr />
      <div className='col-md-3'>
        <label htmlFor='validationCustom04' className='form-label'>
          Job Type
        </label>
        <select
          className='form-select'
          id='validationCustom04'
          required=''
          value={props?.data?.faculty}
        >
          {console.log(faculty)}
          <option selected='' disabled='' value=''>
            Choose...
          </option>
          <option>Academic</option>
          <option>Non Academic</option>
          <option>Administrative</option>
        </select>
        <div className='invalid-feedback'>Please select a job type.</div>
      </div>
      <div className='col-md-3'>
        <label htmlFor='validationCustom04' className='form-label'>
          Faculty
        </label>
        <select
          className='form-select'
          id='validationCustom04'
          required=''
          value={props?.data?.school}
          onChange={(e) => setFaculty(e.target.value)}
        >
          <option selected='' disabled='' value=''>
            Choose...
          </option>

          {list.map((faculty) => {
            return <option>{faculty}</option>;
          })}
        </select>
        <div className='invalid-feedback'>Please select a valid faculty.</div>
      </div>
      <div className='col-md-3'>
        <label htmlFor='validationCustom04' className='form-label'>
          School
        </label>
        <select
          className='form-select'
          id='validationCustom04'
          required=''
          value={props?.data?.dept}
          onChange={(e) => setDepts(e.target.value)}
        >
          <option selected='' disabled='' value=''>
            Choose...
          </option>
          {faculty &&
            Object.keys(facultiesList[faculty]).map((dept) => {
              return <option>{dept}</option>;
            })}
        </select>
        <div className='invalid-feedback'>Please select a valid school.</div>
      </div>
      <div className='col-md-3'>
        <label htmlFor='validationCustom04' className='form-label'>
          Department
        </label>
        <select
          className='form-select'
          id='validationCustom04'
          required=''
          value={props?.data?.acaddom}
        >
          <option selected='' disabled='' value=''>
            Choose...
          </option>
          {depts &&
            facultiesList[faculty][depts].map((dept) => {
              return <option>{dept}</option>;
            })}
        </select>
        <div className='invalid-feedback'>Please select a valid state.</div>
      </div>
      <div className='col-md-3'>
        <label htmlFor='validationCustom04' className='form-label'>
          Nature of Job
        </label>
        <ul class='pagination pagination-lg'>
          <li class='page-item active' aria-current='page'>
            <span class='page-link' style={{ 'font-size': '0.5rem' }}>
              Full-Time
            </span>
          </li>
          <li class='page-item'>
            <a class='page-link' href='#' style={{ 'font-size': '0.5rem' }}>
              Part-Time
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default PartOne;
