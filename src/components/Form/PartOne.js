import React from "react";

const PartOne = () => {
  return (
    <>
      <hr />
      <div className="col-md-3">
        <label htmlFor="validationCustom04" className="form-label">
          Faculty
        </label>
        <select className="form-select" id="validationCustom04" required="">
          <option selected="" disabled="" value="">
            Choose...
          </option>
          <option>...</option>
        </select>
        <div className="invalid-feedback">Please select a valid state.</div>
      </div>
      <div className="col-md-3">
        <label htmlFor="validationCustom04" className="form-label">
          School
        </label>
        <select className="form-select" id="validationCustom04" required="">
          <option selected="" disabled="" value="">
            Choose...
          </option>
          <option>...</option>
        </select>
        <div className="invalid-feedback">Please select a valid state.</div>
      </div>
      <div className="col-md-3">
        <label htmlFor="validationCustom04" className="form-label">
          Department
        </label>
        <select className="form-select" id="validationCustom04" required="">
          <option selected="" disabled="" value="">
            Choose...
          </option>
          <option>...</option>
        </select>
        <div className="invalid-feedback">Please select a valid state.</div>
      </div>
      <div className="col-md-3">
        <label htmlFor="validationCustom04" className="form-label">
          Academic Domain
        </label>
        <select className="form-select" id="validationCustom04" required="">
          <option selected="" disabled="" value="">
            Choose...
          </option>
          <option>...</option>
        </select>
        <div className="invalid-feedback">Please select a valid state.</div>
      </div>
      <div className="col-md-3">
        <label htmlFor="validationCustom04" className="form-label">
          Nature of Job
        </label>
        <ul class="pagination pagination-lg">
          <li class="page-item active" aria-current="page">
            <span class="page-link" style={{ "font-size": "0.5rem" }}>
              Full-Time
            </span>
          </li>
          <li class="page-item">
            <a class="page-link" href="#" style={{ "font-size": "0.5rem" }}>
              Part-Time
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default PartOne;
