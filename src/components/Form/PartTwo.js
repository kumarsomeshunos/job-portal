import React from "react";

const PartTwo = () => {
  return (
    <>
      <hr />
      <div className="col-md-3">
        <label htmlFor="validationCustom01" className="form-label">
          First name
        </label>
        <input
          type="text"
          className="form-control"
          id="validationCustom01"
          required=""
        />
        <div className="valid-feedback">Looks good!</div>
      </div>
      <div className="col-md-3">
        <label htmlFor="validationCustom02" className="form-label">
          Last name
        </label>
        <input
          type="text"
          className="form-control"
          id="validationCustom02"
          required=""
        />
        <div className="valid-feedback">Looks good!</div>
      </div>
      <div className="col-md-3">
        <label htmlFor="validationCustom02" className="form-label">
          Date of Birth
        </label>
        <input
          type="text"
          className="form-control"
          id="validationCustom02"
          required=""
        />
        <div className="valid-feedback">Looks good!</div>
      </div>
      <div className="col-md-3">
        <label htmlFor="validationCustom04" className="form-label">
          Gender
        </label>
        <ul class="pagination pagination-lg">
          <li class="page-item active" aria-current="page">
            <span class="page-link" style={{ "font-size": "0.5rem" }}>
              Male
            </span>
          </li>
          <li class="page-item">
            <a class="page-link" href="#" style={{ "font-size": "0.5rem" }}>
              Female
            </a>
          </li>
        </ul>
      </div>
      <div className="col-md-3">
        <label htmlFor="validationCustomUsername" className="form-label">
          Mobile
        </label>
        <div className="input-group has-validation">
          <span className="input-group-text" id="inputGroupPrepend">
            +91
          </span>
          <input
            type="text"
            className="form-control"
            id="validationCustomUsername"
            aria-describedby="inputGroupPrepend"
            required=""
          />
          <div className="invalid-feedback">
            Please enter your phone number.
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <label htmlFor="validationCustom03" className="form-label">
          Email
        </label>
        <input
          type="text"
          className="form-control"
          id="validationCustom03"
          required=""
        />
        <div className="invalid-feedback">Please provide your email.</div>
      </div>
      <hr />
      <p>
        <b>Current Residence</b>
      </p>
      <div className="col-md-3">
        <label htmlFor="validationCustom04" className="form-label">
          Country
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
          State
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
        <label htmlFor="validationCustom03" className="form-label">
          City
        </label>
        <input
          type="text"
          className="form-control"
          id="validationCustom03"
          required=""
        />
        <div className="invalid-feedback">Please provide your email.</div>
      </div>
      <hr />
      <p>
        <b>Native Place</b>
      </p>
      <div className="col-md-3">
        <label htmlFor="validationCustom04" className="form-label">
          Country
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
          State
        </label>
        <select className="form-select" id="validationCustom04" required="">
          <option selected="" disabled="" value="">
            Choose...
          </option>
          <option>...</option>
        </select>
        <div className="invalid-feedback">Please select a valid state.</div>
      </div>
      <hr />
      <div className="col-md-3">
        <label htmlFor="validationCustom04" className="form-label">
          Religion
        </label>
        <select className="form-select" id="validationCustom04" required="">
          <option selected="" disabled="" value="">
            Choose...
          </option>
          <option>...</option>
        </select>
        <div className="invalid-feedback">Please select a valid state.</div>
      </div>
      <div className="col-md-4">
        <label htmlFor="validationCustom04" className="form-label">
          Marital Status
        </label>
        <ul class="pagination pagination-lg">
          <li class="page-item active" aria-current="page">
            <span class="page-link" style={{ "font-size": "0.5rem" }}>
              Single
            </span>
          </li>
          <li class="page-item">
            <a class="page-link" href="#" style={{ "font-size": "0.5rem" }}>
              Engaged
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#" style={{ "font-size": "0.5rem" }}>
              Married
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#" style={{ "font-size": "0.5rem" }}>
              Divorced
            </a>
          </li>
        </ul>
      </div>
      <div className="col-md-3">
        <label htmlFor="validationCustom03" className="form-label">
          Aadhaar Card
        </label>
        <input
          type="text"
          className="form-control"
          id="validationCustom03"
          required=""
        />
        <div className="invalid-feedback">Please provide your email.</div>
      </div>
      <div className="col-md-3">
        <label htmlFor="validationCustom03" className="form-label">
          PAN Card
        </label>
        <input
          type="text"
          className="form-control"
          id="validationCustom03"
          required=""
        />
        <div className="invalid-feedback">Please provide your email.</div>
      </div>
    </>
  );
};

export default PartTwo;
