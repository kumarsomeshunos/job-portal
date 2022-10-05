import React from "react";
import './sort.css'

const Sort = () => {
  return (
    <div className="sortmain">
      <div className="suggestions">
        <div className="sugg">Teaching</div>
        <div className="sugg">Research</div>
        <div className="sugg">Part-Time</div>
        <div className="sugg">Full-Time</div>
        <div className="sugg">PhD</div>
        <div className="sugg">Teaching</div>
        <div className="sugg">Research</div>
        <div className="sugg">Part-Time</div>
        <div className="sugg">Full-Time</div>
      </div>
      <hr />
      <div className="realsort">
        <div class="col-md-2">
          <select class="form-select" id="validationCustom04" required>
            <option selected disabled value="">
            Faculty
            </option>
            <option>...</option>
          </select>
          <div class="invalid-feedback">Please select a valid state.</div>
        </div>
        <div class="col-md-2">
          <select class="form-select" id="validationCustom04" required>
            <option selected disabled value="">
            School
            </option>
            <option>...</option>
          </select>
          <div class="invalid-feedback">Please select a valid state.</div>
        </div>
        <div class="col-md-2">
          <select class="form-select" id="validationCustom04" required>
            <option selected disabled value="">
            Department
            </option>
            <option>...</option>
          </select>
          <div class="invalid-feedback">Please select a valid state.</div>
        </div>
        <div class="col-md-2">
          <select class="form-select" id="validationCustom04" required>
            <option selected disabled value="">
            Type
            </option>
            <option>...</option>
          </select>
          <div class="invalid-feedback">Please select a valid state.</div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Sort;
