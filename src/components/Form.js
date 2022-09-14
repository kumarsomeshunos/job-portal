import React from "react";

const Form = () => {
  return (
    <div>
      <form
  action="/Careers/Home/SaveNewApplication"
  encType="multipart/form-data"
  id="ApplicationForm"
  method="post"
  name="ApplicationForm"
>
  {" "}
  <div className="header" style={{ marginBottom: 10 }}>
    <div>
      <div className="row">
        <div className="col-sm-3">
        </div>
        <div className="col-sm-9">
          <h2
            style={{
              color: "#fff",
              margin: 5,
              fontSize: 50,
              fontFamily: "Century-Oldstyle-Bold-BT"
            }}
            className="text-center text-uppercase"
          >
            Application Form{" "}
          </h2>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="card card-default">
      <div className="card-header">
        <h4 className="card-title">
          <a>
            <b>1. Application Information</b>
            <span className="pull-right">
              Fields with <sapn style={{ color: "red" }}>*</sapn> are mandatory
            </span>
          </a>
        </h4>
        <p align="right">
          In case of any technical difficulties in accessing and/or submitting
          the application please write to us at{" "}
          <a href="mailto:softwaresupport@manipal.edu">
            softwaresupport@manipal.edu
          </a>{" "}
        </p>
      </div>
      <div className="collapse show">
        <div className="card-body">
          <hr />
          <div className="row">
            <div className="col-md-2 col-lg-2">
              <div className="form-group">
                <label className="control-label">
                  <sapn style={{ color: "red" }}>*</sapn> Faculty{" "}
                </label>
                <select
                  className="form-control"
                  id="DDLPreferredLocation1"
                  name="DDLPreferredLocation1"
                  required="required"
                >
                  <option value="">Select</option>
                  <option value="Delhi NCR(Noida)"> Faculty of Arts </option>
                  <option value="Greater Noida"> Faculty of Design </option>
                  <option value="Gurgaon"> Faculty of Engineering </option>
                  <option value="Gwalior"> Faculty of Science </option>
                  <option value="Jaipur"> Faculty of Management & Commerce </option>
                  <option value="Kolkata"> Faculty of Law </option>
                </select>
              </div>
            </div>
            <div className="col-md-2 col-lg-2">
              <div className="form-group">
                <label className="control-label">
                  <sapn style={{ color: "red" }}>*</sapn>School
                </label>
                <select
                  className="form-control"
                  id="DDLRoletype"
                  name="DDLRoletype"
                  required="required"
                >
                  <option value="">Select</option>
                  <option value="Teaching & Research">
                    Teaching &amp; Research
                  </option>
                  <option value="Teaching only">Teaching only</option>
                  <option value="Research only">Research only</option>
                </select>
              </div>
            </div>
            <div className="col-md-2 col-lg-2">
              <div className="form-group">
                <label className="control-label">
                  <sapn style={{ color: "red" }}>*</sapn> Department
                </label>
                <select
                  className="form-control"
                  id="DDLPosition"
                  name="DDLPosition"
                  required="required"
                >
                  <option value="">Select</option>
                </select>
              </div>
            </div>
            <div className="col-md-2 col-lg-2">
              <div className="form-group">
                <label className="control-label">
                  <sapn style={{ color: "red" }}>*</sapn> Position{" "}
                </label>
                <select
                  className="form-control"
                  id="DDLSpecialization"
                  name="DDLSpecialization"
                  required="required"
                >
                  <option value="">Select Domain</option>
                  <option value="Acting"> Acting </option>
                  <option value="Actuarial Science"> Actuarial Science </option>
                  <option value="Aeronautical Engg"> Aeronautical Engg </option>
                  <option value="Aerospace Engineering">
                    {" "}
                    Aerospace Engineering{" "}
                  </option>
                  <option value="Agriculture"> Agriculture </option>
                  <option value="Animal Science"> Animal Science </option>
                  <option value="Animation"> Animation </option>
                  <option value="Anthropology"> Anthropology </option>
                  <option value="Architecture"> Architecture </option>
                  <option value="Artificial Intelligence">
                    {" "}
                    Artificial Intelligence{" "}
                  </option>
                  <option value="Automobile Engg."> Automobile Engg. </option>
                  <option value="Avionics"> Avionics </option>
                  <option value="Biochemistry"> Biochemistry </option>
                  <option value="Bioinformatics"> Bioinformatics </option>
                  <option value="Biomedical Engg."> Biomedical Engg. </option>
                  <option value="Biotechnology"> Biotechnology </option>
                  <option value="Chemistry"> Chemistry </option>
                  <option value="Click Chemistry  Research & Studies">
                    {" "}
                    Click Chemistry Research &amp; Studies{" "}
                  </option>
                  <option value="Clinical Psychology">
                    {" "}
                    Clinical Psychology{" "}
                  </option>
                  <option value="Commerce"> Commerce </option>
                  <option value="Communication"> Communication </option>
                  <option value="Computational Chemistry">
                    {" "}
                    Computational Chemistry{" "}
                  </option>
                  <option value="Computational Chemistry In Molecule Interaction">
                    {" "}
                    Computational Chemistry In Molecule Interaction{" "}
                  </option>
                  <option value="Computational Physics">
                    {" "}
                    Computational Physics{" "}
                  </option>
                  <option value="Computational Sceience">
                    {" "}
                    Computational Sceience{" "}
                  </option>
                  <option value="Computer Science/ It">
                    {" "}
                    Computer Science/ It{" "}
                  </option>
                  <option value="Construction & Real Estate Management">
                    {" "}
                    Construction &amp; Real Estate Management{" "}
                  </option>
                  <option value="Cyber Security"> Cyber Security </option>
                  <option value="Data Science"> Data Science </option>
                  <option value="Defence & Strategic Studies">
                    {" "}
                    Defence &amp; Strategic Studies{" "}
                  </option>
                  <option value="Design"> Design </option>
                  <option value="Earth Science"> Earth Science </option>
                  <option value="Economics"> Economics </option>
                  <option value="Education"> Education </option>
                  <option value="Engineering - Biomedical">
                    {" "}
                    Engineering - Biomedical{" "}
                  </option>
                  <option value="Engineering - Civil">
                    {" "}
                    Engineering - Civil{" "}
                  </option>
                  <option value="Engineering - Cse/it">
                    {" "}
                    Engineering - Cse/it{" "}
                  </option>
                  <option value="Engineering - Ece"> Engineering - Ece </option>
                  <option value="Engineering - Eee"> Engineering - Eee </option>
                  <option value="Engineering - Mae"> Engineering - Mae </option>
                  <option value="English Literature">
                    {" "}
                    English Literature{" "}
                  </option>
                  <option value="Environmental Science">
                    {" "}
                    Environmental Science{" "}
                  </option>
                  <option value="Fashion"> Fashion </option>
                  <option value="Film & Tv Production">
                    {" "}
                    Film &amp; Tv Production{" "}
                  </option>
                  <option value="Fine Arts"> Fine Arts </option>
                  <option value="Food Science And Technology">
                    {" "}
                    Food Science And Technology{" "}
                  </option>
                  <option value="Foreign Language - Chinese">
                    {" "}
                    Foreign Language - Chinese{" "}
                  </option>
                  <option value="Foreign Language - French">
                    {" "}
                    Foreign Language - French{" "}
                  </option>
                  <option value="Foreign Language - German">
                    {" "}
                    Foreign Language - German{" "}
                  </option>
                  <option value="Foreign Language - Japnese">
                    {" "}
                    Foreign Language - Japnese{" "}
                  </option>
                  <option value="Foreign Language - Spanish">
                    {" "}
                    Foreign Language - Spanish{" "}
                  </option>
                  <option value="Forensic Sciences"> Forensic Sciences </option>
                  <option value="Forestry & Wildlife Sciences">
                    {" "}
                    Forestry &amp; Wildlife Sciences{" "}
                  </option>
                  <option value="Geo Informatics & Remote Sensing">
                    {" "}
                    Geo Informatics &amp; Remote Sensing{" "}
                  </option>
                  <option value="Geography"> Geography </option>
                  <option value="Geology"> Geology </option>
                  <option value="Health & Allied Science">
                    {" "}
                    Health &amp; Allied Science{" "}
                  </option>
                  <option value="Hindi"> Hindi </option>
                  <option value="History"> History </option>
                  <option value="Horticulture"> Horticulture </option>
                  <option value="Hospital Administration">
                    {" "}
                    Hospital Administration{" "}
                  </option>
                  <option value="Hospital Management & Administration">
                    {" "}
                    Hospital Management &amp; Administration{" "}
                  </option>
                  <option value="Hospitality"> Hospitality </option>
                  <option value="Hotel Management"> Hotel Management </option>
                  <option value="Human Genetics"> Human Genetics </option>
                  <option value="Industrial Heavy Machinery">
                    {" "}
                    Industrial Heavy Machinery{" "}
                  </option>
                  <option value="Information Technology">
                    {" "}
                    Information Technology{" "}
                  </option>
                  <option value="Interior Design"> Interior Design </option>
                  <option value="International Studies">
                    {" "}
                    International Studies{" "}
                  </option>
                  <option value="Journalism"> Journalism </option>
                  <option value="Language"> Language </option>
                  <option value="Law"> Law </option>
                  <option value="Liberal Arts"> Liberal Arts </option>
                  <option value="Management - Entrepreneurship">
                    {" "}
                    Management - Entrepreneurship{" "}
                  </option>
                  <option value="Management - Finance">
                    {" "}
                    Management - Finance{" "}
                  </option>
                  <option value="Management - International Business">
                    {" "}
                    Management - International Business{" "}
                  </option>
                  <option value="Management - Logistic &supply Chain">
                    {" "}
                    Management - Logistic &amp;supply Chain{" "}
                  </option>
                  <option value="Management - Marketing">
                    {" "}
                    Management - Marketing{" "}
                  </option>
                  <option value="Management - Ob / Hrm">
                    {" "}
                    Management - Ob / Hrm{" "}
                  </option>
                  <option value="Management - Operations">
                    {" "}
                    Management - Operations{" "}
                  </option>
                  <option value="Management - Qt"> Management - Qt </option>
                  <option value="Management - Strategic">
                    {" "}
                    Management - Strategic{" "}
                  </option>
                  <option value="Management-it"> Management-it </option>
                  <option value="Marine Chemistry"> Marine Chemistry </option>
                  <option value="Materials & Devices">
                    {" "}
                    Materials &amp; Devices{" "}
                  </option>
                  <option value="Maths"> Maths </option>
                  <option value="Medical & Allied Sciences">
                    {" "}
                    Medical &amp; Allied Sciences{" "}
                  </option>
                  <option value="Meteorology / Atmospheric Science">
                    {" "}
                    Meteorology / Atmospheric Science{" "}
                  </option>
                  <option value="Microbial  Technology">
                    {" "}
                    Microbial Technology{" "}
                  </option>
                  <option value="Microbial Science"> Microbial Science </option>
                  <option value="Microbiology"> Microbiology </option>
                  <option value="Molecular Biology"> Molecular Biology </option>
                  <option value="Molecular Medicine & Stem Cell Research And Cancer Biology">
                    {" "}
                    Molecular Medicine &amp; Stem Cell Research And Cancer
                    Biology{" "}
                  </option>
                  <option value="Molecular Nanomedicine">
                    {" "}
                    Molecular Nanomedicine{" "}
                  </option>
                  <option value="Nanobioinformatics">
                    {" "}
                    Nanobioinformatics{" "}
                  </option>
                  <option value="Nanobiotechnology"> Nanobiotechnology </option>
                  <option value="Nanomedicine"> Nanomedicine </option>
                  <option value="Nanotechnology"> Nanotechnology </option>
                  <option value="Natural Resources & Sustainable Development">
                    {" "}
                    Natural Resources &amp; Sustainable Development{" "}
                  </option>
                  <option value="Neuropsychology & Neurosciences">
                    {" "}
                    Neuropsychology &amp; Neurosciences{" "}
                  </option>
                  <option value="Ngo Management/ Development Studies">
                    {" "}
                    Ngo Management/ Development Studies{" "}
                  </option>
                  <option value="Nuclear Science & Technology">
                    {" "}
                    Nuclear Science &amp; Technology{" "}
                  </option>
                  <option value="Ocean Technology"> Ocean Technology </option>
                  <option value="Oceanography"> Oceanography </option>
                  <option value="Others"> Others </option>
                  <option value="Performing Arts"> Performing Arts </option>
                  <option value="Pharmaceutical Sciences">
                    {" "}
                    Pharmaceutical Sciences{" "}
                  </option>
                  <option value="Pharmacy"> Pharmacy </option>
                  <option value="Physical Education">
                    {" "}
                    Physical Education{" "}
                  </option>
                  <option value="Physics"> Physics </option>
                  <option value="Physiology"> Physiology </option>
                  <option value="Physiology And Allied Sciences">
                    {" "}
                    Physiology And Allied Sciences{" "}
                  </option>
                  <option value="Physiotherapy"> Physiotherapy </option>
                  <option value="Plant Science"> Plant Science </option>
                  <option value="Political Science"> Political Science </option>
                  <option value="Post Harvest Technology & Cold Chain Management">
                    {" "}
                    Post Harvest Technology &amp; Cold Chain Management{" "}
                  </option>
                  <option value="Projects"> Projects </option>
                  <option value="Psychology & Behavioural Science">
                    {" "}
                    Psychology &amp; Behavioural Science{" "}
                  </option>
                  <option value="Public Health"> Public Health </option>
                  <option value="Public Policy"> Public Policy </option>
                  <option value="Public Relations"> Public Relations </option>
                  <option value="Real Estate And Urban Infrastructure">
                    {" "}
                    Real Estate And Urban Infrastructure{" "}
                  </option>
                  <option value="Sanskrit Studies"> Sanskrit Studies </option>
                  <option value="Social Science"> Social Science </option>
                  <option value="Social Work"> Social Work </option>
                  <option value="Solar & Alternate Energy">
                    {" "}
                    Solar &amp; Alternate Energy{" "}
                  </option>
                  <option value="Space Sciences"> Space Sciences </option>
                  <option value="Special Education"> Special Education </option>
                  <option value="Statistics"> Statistics </option>
                  <option value="Statistics"> Statistics </option>
                  <option value="Travel & Tourism">
                    {" "}
                    Travel &amp; Tourism{" "}
                  </option>
                  <option value="Veterinary"> Veterinary </option>
                  <option value="Virology & Immunology">
                    {" "}
                    Virology &amp; Immunology{" "}
                  </option>
                  <option value="Yoga"> Yoga </option>
                  <option value="Zoology"> Zoology </option>
                </select>
              </div>
            </div>
            <div className="col-md-2 col-lg-2">
              <div className="form-group">
                <label className="control-label">
                  <sapn style={{ color: "red" }}>*</sapn> Nature Of Job
                </label>
                <div className="input-group">
                  <div className="btn-group radioBtn">
                    <a
                      className="btn btn-primary btn-sm active"
                      data-toggle="rblNatureOfJob"
                      data-title="Full-Time"
                    >
                      Full-Time
                    </a>
                    <a
                      className="btn btn-primary btn-sm notActive"
                      data-toggle="rblNatureOfJob"
                      data-title="Part-Time"
                    >
                      Part-Time
                    </a>
                  </div>
                  <input
                    type="hidden"
                    name="rblNatureOfJob"
                    id="rblNatureOfJob"
                    defaultValue="Full-Time"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="card card-default">
      <div className="card-header">
        <h4 className="card-title">
          <a>
            <b>2. Personal Information</b>
          </a>
        </h4>
      </div>
      <div className="collapse show">
        <div className="card-body">
          <hr />
          <div className="row">
            <div className="col-md-2 col-lg-2">
              <div className="form-group">
                <label className="control-label">
                  <sapn style={{ color: "red" }}>*</sapn> First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="TxtFName"
                  name="TxtFName"
                  required="required"
                />
              </div>
            </div>
            <div className="col-md-2 col-lg-2">
              <div className="form-group">
                <label className="control-label">
                  <sapn style={{ color: "red" }}>*</sapn> Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="TxtLName"
                  name="TxtLName"
                  required="required"
                />
              </div>
            </div>
            <div className="col-md-2 col-lg-2">
              <div className="form-group">
                <label className="control-label">
                  <sapn style={{ color: "red" }}>*</sapn> Date Of Birth
                </label>
                <input
                  className="form-control xyz"
                  autoComplete="off"
                  type="text"
                  id="TxtDOB"
                  name="TxtDOB"
                  required="required"
                />
              </div>
            </div>
            <div className="col-md-2 col-lg-2">
              <div className="form-group">
                <label className="control-label">
                  <sapn style={{ color: "red" }}>*</sapn> Gender
                </label>
                <div className="input-group">
                  <div className="btn-group radioBtn">
                    <a
                      className="btn btn-primary btn-sm active"
                      data-toggle="rblGender"
                      data-title="Male"
                    >
                      Male
                    </a>
                    <a
                      className="btn btn-primary btn-sm notActive"
                      data-toggle="rblGender"
                      data-title="Female"
                    >
                      Female
                    </a>
                  </div>
                  <input
                    type="hidden"
                    name="rblGender"
                    id="rblGender"
                    defaultValue="Male"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-2 col-lg-2">
              <div className="form-group">
                <label className="control-label">
                  <sapn style={{ color: "red" }}>*</sapn>Mobile
                </label>
                <div className="row">
                  <div className="col-md-3">
                    <a
                      className="btn  dropdown-toggle  btn-primary  "
                      onclick="showFlaglist(1);"
                    >
                      <input
                        type="hidden"
                        id="TxtCMCode"
                        name="TxtCMCode"
                        defaultValue={+91}
                      />
                      <span id="CMCode" name="CMCode" className="codespan">
                        +91
                      </span>
                    </a>
                    <ul className="dropdown-menu C_list" id="TxtCMCodeli">
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 93);"
                        >
                          AFGHANISTAN (+93)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 355);"
                        >
                          ALBANIA (+355)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 213);"
                        >
                          ALGERIA (+213)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 684);"
                        >
                          AMERICAN SAMOA (+684)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 376);"
                        >
                          ANDORRA (+376)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 244);"
                        >
                          ANGOLA (+244)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 264);"
                        >
                          ANGUILLA (+264)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 672);"
                        >
                          ANTARCTICA (+672)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 268);"
                        >
                          ANTIGUA AND BARBUDA (+268)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 54);"
                        >
                          ARGENTINA (+54)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 374);"
                        >
                          ARMENIA (+374)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 297);"
                        >
                          ARUBA (+297)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 61);"
                        >
                          AUSTRALIA (+61)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 43);"
                        >
                          AUSTRIA (+43)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 994);"
                        >
                          AZERBAIJAN (+994)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 242);"
                        >
                          BAHAMAS (+242)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 973);"
                        >
                          BAHRAIN (+973)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 880);"
                        >
                          BANGLADESH (+880)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 246);"
                        >
                          BARBADOS (+246)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 375);"
                        >
                          BELARUS (+375)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 32);"
                        >
                          BELGIUM (+32)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 501);"
                        >
                          BELIZE (+501)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 229);"
                        >
                          BENIN (+229)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 441);"
                        >
                          BERMUDA (+441)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 975);"
                        >
                          BHUTAN (+975)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 591);"
                        >
                          BOLIVIA, PLURINATIONAL STATE OF (+591)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 387);"
                        >
                          BOSNIA AND HERZEGOVINA (+387)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 267);"
                        >
                          BOTSWANA (+267)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 55);"
                        >
                          BRAZIL (+55)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 673);"
                        >
                          BRUNEI DARUSSALAM (+673)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 359);"
                        >
                          BULGARIA (+359)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 226);"
                        >
                          BURKINA FASO (+226)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 257);"
                        >
                          BURUNDI (+257)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 855);"
                        >
                          CAMBODIA (+855)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 237);"
                        >
                          CAMEROON (+237)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 1);"
                        >
                          CANADA (+1)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 238);"
                        >
                          CAPE VERDE (+238)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 345);"
                        >
                          CAYMAN ISLANDS (+345)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 236);"
                        >
                          CENTRAL AFRICAN REPUBLIC (+236)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 235);"
                        >
                          CHAD (+235)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 56);"
                        >
                          CHILE (+56)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 86);"
                        >
                          CHINA (+86)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 618);"
                        >
                          CHRISTMAS ISLAND (+618)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 61);"
                        >
                          COCOS (KEELING) ISLANDS (+61)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 57);"
                        >
                          COLOMBIA (+57)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 269);"
                        >
                          COMOROS (+269)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 242);"
                        >
                          CONGO (+242)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 243);"
                        >
                          CONGO, THE DEMOCRATIC REPUBLIC OF THE (+243)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 682);"
                        >
                          COOK ISLANDS (+682)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 506);"
                        >
                          COSTA RICA (+506)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 225);"
                        >
                          CÔTE D'IVOIRE (+225)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 385);"
                        >
                          CROATIA (+385)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 53);"
                        >
                          CUBA (+53)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 357);"
                        >
                          CYPRUS (+357)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 420);"
                        >
                          CZECH REPUBLIC (+420)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 45);"
                        >
                          DENMARK (+45)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 253);"
                        >
                          DJIBOUTI (+253)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 767);"
                        >
                          DOMINICA (+767)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 809);"
                        >
                          DOMINICAN REPUBLIC (+809)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 670);"
                        >
                          East Timor (+670)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 593);"
                        >
                          ECUADOR (+593)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 20);"
                        >
                          EGYPT (+20)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 503);"
                        >
                          EL SALVADOR (+503)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 240);"
                        >
                          EQUATORIAL GUINEA (+240)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 291);"
                        >
                          ERITREA (+291)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 372);"
                        >
                          ESTONIA (+372)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 251);"
                        >
                          ETHIOPIA (+251)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 500);"
                        >
                          FALKLAND ISLANDS (MALVINAS) (+500)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 298);"
                        >
                          FAROE ISLANDS (+298)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 679);"
                        >
                          FIJI (+679)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 358);"
                        >
                          FINLAND (+358)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 33);"
                        >
                          FRANCE (+33)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 594);"
                        >
                          FRENCH GUIANA (+594)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 689);"
                        >
                          FRENCH POLYNESIA (+689)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 241);"
                        >
                          GABON (+241)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 220);"
                        >
                          GAMBIA (+220)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 995);"
                        >
                          GEORGIA (+995)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 49);"
                        >
                          GERMANY (+49)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 233);"
                        >
                          GHANA (+233)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 350);"
                        >
                          GIBRALTAR (+350)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 30);"
                        >
                          GREECE (+30)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 299);"
                        >
                          GREENLAND (+299)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 473);"
                        >
                          GRENADA (+473)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 590);"
                        >
                          GUADELOUPE (+590)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 671);"
                        >
                          GUAM (+671)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 502);"
                        >
                          GUATEMALA (+502)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 224);"
                        >
                          GUINEA (+224)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 245);"
                        >
                          GUINEA-BISSAU (+245)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 592);"
                        >
                          GUYANA (+592)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 509);"
                        >
                          HAITI (+509)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 379);"
                        >
                          HOLY SEE (VATICAN CITY STATE) (+379)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 504);"
                        >
                          HONDURAS (+504)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 852);"
                        >
                          HONG KONG (+852)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 36);"
                        >
                          HUNGARY (+36)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 354);"
                        >
                          ICELAND (+354)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 91);"
                        >
                          INDIA (+91)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 62);"
                        >
                          INDONESIA (+62)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 98);"
                        >
                          IRAN, ISLAMIC REPUBLIC OF (+98)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 964);"
                        >
                          IRAQ (+964)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 353);"
                        >
                          IRELAND (+353)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 972);"
                        >
                          ISRAEL (+972)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 39);"
                        >
                          ITALY (+39)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 876);"
                        >
                          JAMAICA (+876)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 81);"
                        >
                          JAPAN (+81)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 962);"
                        >
                          JORDAN (+962)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 7);"
                        >
                          KAZAKHSTAN (+7)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 254);"
                        >
                          KENYA (+254)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 686);"
                        >
                          KIRIBATI (+686)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 850);"
                        >
                          KOREA, DEMOCRATIC PEOPLE'S REPUBLIC OF (+850)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 82);"
                        >
                          KOREA, REPUBLIC OF (+82)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 965);"
                        >
                          KUWAIT (+965)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 996);"
                        >
                          KYRGYZSTAN (+996)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 856);"
                        >
                          LAO PEOPLE'S DEMOCRATIC REPUBLIC (+856)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 371);"
                        >
                          LATVIA (+371)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 961);"
                        >
                          LEBANON (+961)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 266);"
                        >
                          LESOTHO (+266)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 231);"
                        >
                          LIBERIA (+231)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 218);"
                        >
                          LIBYA (+218)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 423);"
                        >
                          LIECHTENSTEIN (+423)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 370);"
                        >
                          LITHUANIA (+370)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 352);"
                        >
                          LUXEMBOURG (+352)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 853);"
                        >
                          MACAO (+853)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 389);"
                        >
                          MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF (+389)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 261);"
                        >
                          MADAGASCAR (+261)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 265);"
                        >
                          MALAWI (+265)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 60);"
                        >
                          MALAYSIA (+60)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 960);"
                        >
                          MALDIVES (+960)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 223);"
                        >
                          MALI (+223)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 356);"
                        >
                          MALTA (+356)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 692);"
                        >
                          MARSHALL ISLANDS (+692)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 596);"
                        >
                          MARTINIQUE (+596)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 222);"
                        >
                          MAURITANIA (+222)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 230);"
                        >
                          MAURITIUS (+230)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 269);"
                        >
                          MAYOTTE (+269)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 52);"
                        >
                          MEXICO (+52)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 691);"
                        >
                          MICRONESIA, FEDERATED STATES OF (+691)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 373);"
                        >
                          MOLDOVA, REPUBLIC OF (+373)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 377);"
                        >
                          MONACO (+377)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 976);"
                        >
                          MONGOLIA (+976)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 664);"
                        >
                          MONTSERRAT (+664)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 212);"
                        >
                          MOROCCO (+212)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 258);"
                        >
                          MOZAMBIQUE (+258)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 95);"
                        >
                          MYANMAR (+95)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 264);"
                        >
                          NAMIBIA (+264)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 674);"
                        >
                          NAURU (+674)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 977);"
                        >
                          NEPAL (+977)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 31);"
                        >
                          NETHERLANDS (+31)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 599);"
                        >
                          Netherlands Antilles (+599)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 687);"
                        >
                          NEW CALEDONIA (+687)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 64);"
                        >
                          NEW ZEALAND (+64)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 505);"
                        >
                          NICARAGUA (+505)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 227);"
                        >
                          NIGER (+227)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 234);"
                        >
                          NIGERIA (+234)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 683);"
                        >
                          NIUE (+683)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 672);"
                        >
                          NORFOLK ISLAND (+672)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 670);"
                        >
                          NORTHERN MARIANA ISLANDS (+670)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 47);"
                        >
                          NORWAY (+47)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 968);"
                        >
                          OMAN (+968)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 92);"
                        >
                          PAKISTAN (+92)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 680);"
                        >
                          PALAU (+680)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 970);"
                        >
                          PALESTINIAN TERRITORY, OCCUPIED (+970)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 507);"
                        >
                          PANAMA (+507)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 675);"
                        >
                          PAPUA NEW GUINEA (+675)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 595);"
                        >
                          PARAGUAY (+595)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 51);"
                        >
                          PERU (+51)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 63);"
                        >
                          PHILIPPINES (+63)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 48);"
                        >
                          POLAND (+48)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 351);"
                        >
                          PORTUGAL (+351)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 939);"
                        >
                          PUERTO RICO (+939)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 974);"
                        >
                          QATAR (+974)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 262);"
                        >
                          RÉUNION (+262)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 40);"
                        >
                          ROMANIA (+40)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 7);"
                        >
                          RUSSIAN FEDERATION (+7)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 250);"
                        >
                          RWANDA (+250)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 290);"
                        >
                          SAINT HELENA, ASCENSION AND TRISTAN DA CUNHA (+290)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 869);"
                        >
                          SAINT KITTS AND NEVIS (+869)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 758);"
                        >
                          SAINT LUCIA (+758)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 508);"
                        >
                          SAINT PIERRE AND MIQUELON (+508)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 784);"
                        >
                          SAINT VINCENT AND THE GRENADINES (+784)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 378);"
                        >
                          SAN MARINO (+378)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 239);"
                        >
                          SAO TOME AND PRINCIPE (+239)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 966);"
                        >
                          SAUDI ARABIA (+966)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 221);"
                        >
                          SENEGAL (+221)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 248);"
                        >
                          SEYCHELLES (+248)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 232);"
                        >
                          SIERRA LEONE (+232)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 65);"
                        >
                          SINGAPORE (+65)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 421);"
                        >
                          SLOVAKIA (+421)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 386);"
                        >
                          SLOVENIA (+386)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 677);"
                        >
                          SOLOMON ISLANDS (+677)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 252);"
                        >
                          SOMALIA (+252)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 27);"
                        >
                          SOUTH AFRICA (+27)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 34);"
                        >
                          SPAIN (+34)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 94);"
                        >
                          SRI LANKA (+94)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 249);"
                        >
                          SUDAN (+249)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 597);"
                        >
                          SURINAME (+597)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 268);"
                        >
                          SWAZILAND (+268)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 46);"
                        >
                          SWEDEN (+46)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 41);"
                        >
                          SWITZERLAND (+41)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 963);"
                        >
                          SYRIAN ARAB REPUBLIC (+963)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 886);"
                        >
                          TAIWAN, PROVINCE OF CHINA (+886)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 992);"
                        >
                          TAJIKISTAN (+992)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 255);"
                        >
                          TANZANIA, UNITED REPUBLIC OF (+255)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 66);"
                        >
                          THAILAND (+66)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 228);"
                        >
                          TOGO (+228)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 690);"
                        >
                          TOKELAU (+690)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 676);"
                        >
                          TONGA (+676)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 868);"
                        >
                          TRINIDAD AND TOBAGO (+868)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 216);"
                        >
                          TUNISIA (+216)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 90);"
                        >
                          TURKEY (+90)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 993);"
                        >
                          TURKMENISTAN (+993)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 649);"
                        >
                          TURKS AND CAICOS ISLANDS (+649)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 688);"
                        >
                          TUVALU (+688)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 256);"
                        >
                          UGANDA (+256)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 380);"
                        >
                          UKRAINE (+380)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 971);"
                        >
                          UNITED ARAB EMIRATES (+971)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 44);"
                        >
                          UNITED KINGDOM (+44)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 1);"
                        >
                          UNITED STATES (+1)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 598);"
                        >
                          URUGUAY (+598)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 998);"
                        >
                          UZBEKISTAN (+998)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 678);"
                        >
                          VANUATU (+678)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 58);"
                        >
                          VENEZUELA, BOLIVARIAN REPUBLIC OF (+58)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 84);"
                        >
                          VIET NAM (+84)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 284);"
                        >
                          VIRGIN ISLANDS, BRITISH (+284)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 340);"
                        >
                          VIRGIN ISLANDS, U.S. (+340)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 681);"
                        >
                          WALLIS AND FUTUNA (+681)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 967);"
                        >
                          YEMEN (+967)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 381);"
                        >
                          Yugoslavia (+381)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 260);"
                        >
                          ZAMBIA (+260)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          onclick="fnMobileCodeReplace( + 263);"
                        >
                          ZIMBABWE (+263)
                        </a>{" "}
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-9">
                    <input
                      type="text"
                      className="form-control numericOnly"
                      id="TxtCMobile"
                      name="TxtCMobile"
                      required="required"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-lg-2">
              <div className="form-group">
                <label className="control-label">
                  <sapn style={{ color: "red" }}>*</sapn>Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="TxtCEmail"
                  name="TxtCEmail"
                  required="required"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <h5>Current Residence</h5>
            </div>
            <div className="col-md-6 col-lg-6">
              <h5>Native place</h5>
            </div>
            <div className="col-md-2 col-lg-2">
              <div className="form-group">
                <label className="control-label">
                  <sapn style={{ color: "red" }}>*</sapn> Country
                </label>
                <select
                  className="form-control"
                  id="DDLCCountry"
                  name="DDLCCountry"
                  required="required"
                >
                  <option value="">Select Country</option>
                  <option value="India" selected="">
                    {" "}
                    India{" "}
                  </option>
                  <option value="Abkhazia"> Abkhazia </option>
                  <option value="Afghanistan"> Afghanistan </option>
                  <option value="Akrotiri and Dhekelia">
                    {" "}
                    Akrotiri and Dhekelia{" "}
                  </option>
                  <option value="Aland"> Aland </option>
                  <option value="Albania"> Albania </option>
                  <option value="Algeria"> Algeria </option>
                  <option value="American Samoa"> American Samoa </option>
                  <option value="Andorra"> Andorra </option>
                  <option value="Angola"> Angola </option>
                  <option value="Anguilla"> Anguilla </option>
                  <option value="Antigua and Barbuda">
                    {" "}
                    Antigua and Barbuda{" "}
                  </option>
                  <option value="Argentina"> Argentina </option>
                  <option value="Armenia"> Armenia </option>
                  <option value="Aruba"> Aruba </option>
                  <option value="Ascension Island"> Ascension Island </option>
                  <option value="Australia"> Australia </option>
                  <option value="Austria"> Austria </option>
                  <option value="Azerbaijan"> Azerbaijan </option>
                  <option value="Bahamas"> Bahamas </option>
                  <option value="Bahrain"> Bahrain </option>
                  <option value="Bangladesh"> Bangladesh </option>
                  <option value="Barbados"> Barbados </option>
                  <option value="Belarus"> Belarus </option>
                  <option value="Belgium"> Belgium </option>
                  <option value="Belize"> Belize </option>
                  <option value="Benin"> Benin </option>
                  <option value="Bermuda"> Bermuda </option>
                  <option value="Bhutan"> Bhutan </option>
                  <option value="Bolivia"> Bolivia </option>
                  <option value="Bosnia and Herzegovina">
                    {" "}
                    Bosnia and Herzegovina{" "}
                  </option>
                  <option value="Botswana"> Botswana </option>
                  <option value="Brazil"> Brazil </option>
                  <option value="Brunei"> Brunei </option>
                  <option value="Bulgaria"> Bulgaria </option>
                  <option value="Burkina Faso"> Burkina Faso </option>
                  <option value="Burundi"> Burundi </option>
                  <option value="Cambodia"> Cambodia </option>
                  <option value="Cameroon"> Cameroon </option>
                  <option value="Canada"> Canada </option>
                  <option value="Cape Verde"> Cape Verde </option>
                  <option value="Cayman Islands"> Cayman Islands </option>
                  <option value="Central African Republic">
                    {" "}
                    Central African Republic{" "}
                  </option>
                  <option value="Chad"> Chad </option>
                  <option value="Chile"> Chile </option>
                  <option value="China"> China </option>
                  <option value="Christmas Island"> Christmas Island </option>
                  <option value="Cocos (Keeling) Islands">
                    {" "}
                    Cocos (Keeling) Islands{" "}
                  </option>
                  <option value="Colombia"> Colombia </option>
                  <option value="Comoros"> Comoros </option>
                  <option value="Congo"> Congo </option>
                  <option value="Cook Islands"> Cook Islands </option>
                  <option value="Costa Rica"> Costa Rica </option>
                  <option value="Côte d'Ivoire"> Côte d'Ivoire </option>
                  <option value="Croatia"> Croatia </option>
                  <option value="Cuba"> Cuba </option>
                  <option value="Cyprus"> Cyprus </option>
                  <option value="Czech Republic"> Czech Republic </option>
                  <option value="Denmark"> Denmark </option>
                  <option value="Djibouti"> Djibouti </option>
                  <option value="Dominica"> Dominica </option>
                  <option value="Dominican Republic">
                    {" "}
                    Dominican Republic{" "}
                  </option>
                  <option value="Ecuador"> Ecuador </option>
                  <option value="Egypt"> Egypt </option>
                  <option value="El Salvador"> El Salvador </option>
                  <option value="Equatorial Guinea"> Equatorial Guinea </option>
                  <option value="Eritrea"> Eritrea </option>
                  <option value="Estonia"> Estonia </option>
                  <option value="Ethiopia"> Ethiopia </option>
                  <option value="Falkland Islands"> Falkland Islands </option>
                  <option value="Faroe Islands"> Faroe Islands </option>
                  <option value="Fiji"> Fiji </option>
                  <option value="Finland"> Finland </option>
                  <option value="France"> France </option>
                  <option value="French Polynesia"> French Polynesia </option>
                  <option value="Gabon"> Gabon </option>
                  <option value="Gambia"> Gambia </option>
                  <option value="Georgia"> Georgia </option>
                  <option value="Germany"> Germany </option>
                  <option value="Ghana"> Ghana </option>
                  <option value="Gibraltar"> Gibraltar </option>
                  <option value="Greece"> Greece </option>
                  <option value="Greenland"> Greenland </option>
                  <option value="Grenada"> Grenada </option>
                  <option value="Guam"> Guam </option>
                  <option value="Guatemala"> Guatemala </option>
                  <option value="Guernsey"> Guernsey </option>
                  <option value="Guinea"> Guinea </option>
                  <option value="Guinea-Bissau"> Guinea-Bissau </option>
                  <option value="Guyana"> Guyana </option>
                  <option value="Haiti"> Haiti </option>
                  <option value="Honduras"> Honduras </option>
                  <option value="Hong Kong"> Hong Kong </option>
                  <option value="Hungary"> Hungary </option>
                  <option value="Iceland"> Iceland </option>
                  <option value="Indonesia"> Indonesia </option>
                  <option value="Iran"> Iran </option>
                  <option value="Iraq"> Iraq </option>
                  <option value="Ireland"> Ireland </option>
                  <option value="Isle of Man"> Isle of Man </option>
                  <option value="Israel"> Israel </option>
                  <option value="Italy"> Italy </option>
                  <option value="Jamaica"> Jamaica </option>
                  <option value="Japan"> Japan </option>
                  <option value="Jersey"> Jersey </option>
                  <option value="Jordan"> Jordan </option>
                  <option value="Kazakhstan"> Kazakhstan </option>
                  <option value="Kenya"> Kenya </option>
                  <option value="Kiribati"> Kiribati </option>
                  <option value="Korea"> Korea </option>
                  <option value="Kosovo"> Kosovo </option>
                  <option value="Kuwait"> Kuwait </option>
                  <option value="Kyrgyzstan"> Kyrgyzstan </option>
                  <option value="Laos"> Laos </option>
                  <option value="Latvia"> Latvia </option>
                  <option value="Lebanon"> Lebanon </option>
                  <option value="Lesotho"> Lesotho </option>
                  <option value="Liberia"> Liberia </option>
                  <option value="Libya"> Libya </option>
                  <option value="Liechtenstein"> Liechtenstein </option>
                  <option value="Lithuania"> Lithuania </option>
                  <option value="Luxembourg"> Luxembourg </option>
                  <option value="Macao"> Macao </option>
                  <option value="Macedonia"> Macedonia </option>
                  <option value="Madagascar"> Madagascar </option>
                  <option value="Malawi"> Malawi </option>
                  <option value="Malaysia"> Malaysia </option>
                  <option value="Maldives"> Maldives </option>
                  <option value="Mali"> Mali </option>
                  <option value="Malta"> Malta </option>
                  <option value="Marshall Islands"> Marshall Islands </option>
                  <option value="Mauritania"> Mauritania </option>
                  <option value="Mauritius"> Mauritius </option>
                  <option value="Mayotte"> Mayotte </option>
                  <option value="Mexico"> Mexico </option>
                  <option value="Micronesia"> Micronesia </option>
                  <option value="Moldova"> Moldova </option>
                  <option value="Monaco"> Monaco </option>
                  <option value="Mongolia"> Mongolia </option>
                  <option value="Montenegro"> Montenegro </option>
                  <option value="Montserrat"> Montserrat </option>
                  <option value="Morocco"> Morocco </option>
                  <option value="Mozambique"> Mozambique </option>
                  <option value="Myanmar"> Myanmar </option>
                  <option value="Nagorno-Karabakh"> Nagorno-Karabakh </option>
                  <option value="Namibia"> Namibia </option>
                  <option value="Nauru"> Nauru </option>
                  <option value="Nepal"> Nepal </option>
                  <option value="Netherlands"> Netherlands </option>
                  <option value="Netherlands Antilles">
                    {" "}
                    Netherlands Antilles{" "}
                  </option>
                  <option value="New Caledonia"> New Caledonia </option>
                  <option value="New Zealand"> New Zealand </option>
                  <option value="Nicaragua"> Nicaragua </option>
                  <option value="Niger"> Niger </option>
                  <option value="Nigeria"> Nigeria </option>
                  <option value="Niue"> Niue </option>
                  <option value="Norfolk Island"> Norfolk Island </option>
                  <option value="Northern Cyprus"> Northern Cyprus </option>
                  <option value="Northern Mariana Islands">
                    {" "}
                    Northern Mariana Islands{" "}
                  </option>
                  <option value="Norway"> Norway </option>
                  <option value="Oman"> Oman </option>
                  <option value="Pakistan"> Pakistan </option>
                  <option value="Palau"> Palau </option>
                  <option value="Palestine"> Palestine </option>
                  <option value="Panama"> Panama </option>
                  <option value="Papua New Guinea"> Papua New Guinea </option>
                  <option value="Paraguay"> Paraguay </option>
                  <option value="Peru"> Peru </option>
                  <option value="Philippines"> Philippines </option>
                  <option value="Pitcairn Islands"> Pitcairn Islands </option>
                  <option value="Poland"> Poland </option>
                  <option value="Portugal"> Portugal </option>
                  <option value="Pridnestrovie"> Pridnestrovie </option>
                  <option value="Puerto Rico"> Puerto Rico </option>
                  <option value="Qatar"> Qatar </option>
                  <option value="Romania"> Romania </option>
                  <option value="Russia"> Russia </option>
                  <option value="Rwanda"> Rwanda </option>
                  <option value="Saint Helena"> Saint Helena </option>
                  <option value="Saint Kitts and Nevis">
                    {" "}
                    Saint Kitts and Nevis{" "}
                  </option>
                  <option value="Saint Lucia"> Saint Lucia </option>
                  <option value="Saint Pierre and Miquelon">
                    {" "}
                    Saint Pierre and Miquelon{" "}
                  </option>
                  <option value="Saint Vincent and the Grenadines">
                    {" "}
                    Saint Vincent and the Grenadines{" "}
                  </option>
                  <option value="Samoa"> Samoa </option>
                  <option value="San Marino"> San Marino </option>
                  <option value="São Tomé and Príncipe">
                    {" "}
                    São Tomé and Príncipe{" "}
                  </option>
                  <option value="Saudi Arabia"> Saudi Arabia </option>
                  <option value="Senegal"> Senegal </option>
                  <option value="Serbia"> Serbia </option>
                  <option value="Seychelles"> Seychelles </option>
                  <option value="Sierra Leone"> Sierra Leone </option>
                  <option value="Singapore"> Singapore </option>
                  <option value="Slovakia"> Slovakia </option>
                  <option value="Slovenia"> Slovenia </option>
                  <option value="Solomon Islands"> Solomon Islands </option>
                  <option value="Somalia"> Somalia </option>
                  <option value="Somaliland"> Somaliland </option>
                  <option value="South Africa"> South Africa </option>
                  <option value="South Ossetia"> South Ossetia </option>
                  <option value="Spain"> Spain </option>
                  <option value="Sri Lanka"> Sri Lanka </option>
                  <option value="Sudan"> Sudan </option>
                  <option value="Suriname"> Suriname </option>
                  <option value="Svalbard"> Svalbard </option>
                  <option value="Swaziland"> Swaziland </option>
                  <option value="Sweden"> Sweden </option>
                  <option value="Switzerland"> Switzerland </option>
                  <option value="Syria"> Syria </option>
                  <option value="Tajikistan"> Tajikistan </option>
                  <option value="Tanzania"> Tanzania </option>
                  <option value="Thailand"> Thailand </option>
                  <option value="Timor-Leste"> Timor-Leste </option>
                  <option value="Togo"> Togo </option>
                  <option value="Tokelau"> Tokelau </option>
                  <option value="Tonga"> Tonga </option>
                  <option value="Trinidad and Tobago">
                    {" "}
                    Trinidad and Tobago{" "}
                  </option>
                  <option value="Tristan da Cunha"> Tristan da Cunha </option>
                  <option value="Tunisia"> Tunisia </option>
                  <option value="Turkey"> Turkey </option>
                  <option value="Turkmenistan"> Turkmenistan </option>
                  <option value="Turks and Caicos Islands">
                    {" "}
                    Turks and Caicos Islands{" "}
                  </option>
                  <option value="Tuvalu"> Tuvalu </option>
                  <option value="Uganda"> Uganda </option>
                  <option value="Ukraine"> Ukraine </option>
                  <option value="United Arab Emirates">
                    {" "}
                    United Arab Emirates{" "}
                  </option>
                  <option value="United Kingdom"> United Kingdom </option>
                  <option value="United States"> United States </option>
                  <option value="Uruguay"> Uruguay </option>
                  <option value="Uzbekistan"> Uzbekistan </option>
                  <option value="Vanuatu"> Vanuatu </option>
                  <option value="Vatican City"> Vatican City </option>
                  <option value="Venezuela"> Venezuela </option>
                  <option value="Vietnam"> Vietnam </option>
                  <option value="Virgin Islands, British">
                    {" "}
                    Virgin Islands, British{" "}
                  </option>
                  <option value="Virgin Islands, United States">
                    {" "}
                    Virgin Islands, United States{" "}
                  </option>
                  <option value="Wallis and Futuna"> Wallis and Futuna </option>
                  <option value="Western Sahara"> Western Sahara </option>
                  <option value="Yemen"> Yemen </option>
                  <option value="Zambia"> Zambia </option>
                  <option value="Zimbabwe"> Zimbabwe </option>
                  <option value="South Korea"> South Korea </option>
                  <option value="Taiwan"> Taiwan </option>
                  <option value="Macau"> Macau </option>
                </select>
              </div>
            </div>
            <div className="col-md-2 col-lg-2">
              <div className="form-group">
                <label className="control-label">
                  <sapn style={{ color: "red" }}>*</sapn> State
                </label>
                <select
                  className="form-control"
                  id="DDLCState"
                  name="DDLCState"
                >
                  <option value="">Select State</option>
                  <option value="Andaman and Nicobar Islands">
                    {" "}
                    Andaman and Nicobar Islands{" "}
                  </option>
                  <option value="Andra Pradesh"> Andra Pradesh </option>
                  <option value="Arunachal Pradesh"> Arunachal Pradesh </option>
                  <option value="Assam"> Assam </option>
                  <option value="Bihar"> Bihar </option>
                  <option value="Chandigarh"> Chandigarh </option>
                  <option value="Chhattisgarh"> Chhattisgarh </option>
                  <option value="Dadra and Nagar Haveli">
                    {" "}
                    Dadra and Nagar Haveli{" "}
                  </option>
                  <option value="Daman and Diu"> Daman and Diu </option>
                  <option value="Goa"> Goa </option>
                  <option value="Gujarat"> Gujarat </option>
                  <option value="Haryana"> Haryana </option>
                  <option value="Himachal Pradesh"> Himachal Pradesh </option>
                  <option value="Jammu & Kashmir"> Jammu &amp; Kashmir </option>
                  <option value="Jharkhand"> Jharkhand </option>
                  <option value="Karnataka"> Karnataka </option>
                  <option value="Kerala"> Kerala </option>
                  <option value="Lakshadweep"> Lakshadweep </option>
                  <option value="Madhya Pradesh"> Madhya Pradesh </option>
                  <option value="Maharastra"> Maharastra </option>
                  <option value="Manipur"> Manipur </option>
                  <option value="Mauritious"> Mauritious </option>
                  <option value="Meghalaya"> Meghalaya </option>
                  <option value="Mizoram"> Mizoram </option>
                  <option value="Nagaland"> Nagaland </option>
                  <option value="New Delhi"> New Delhi </option>
                  <option value="Orissa"> Orissa </option>
                  <option value="Pondicherry"> Pondicherry </option>
                  <option value="Punjab"> Punjab </option>
                  <option value="Rajasthan"> Rajasthan </option>
                  <option value="Sikkim"> Sikkim </option>
                  <option value="Tamil Nadu"> Tamil Nadu </option>
                  <option value="Tripura"> Tripura </option>
                  <option value="Uttar Pradesh"> Uttar Pradesh </option>
                  <option value="Uttarakhand"> Uttarakhand </option>
                  <option value="Uttranchal"> Uttranchal </option>
                  <option value="West Bangal"> West Bangal </option>
                </select>
                <input
                  type="text"
                  className="form-control"
                  id="TxtCState"
                  name="TxtCState"
                  style={{ display: "none" }}
                />
              </div>
            </div>
            <div className="col-md-2 col-lg-2">
              <div className="form-group">
                <label className="control-label">
                  <sapn style={{ color: "red" }}>*</sapn> City
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="TxtCCity"
                  name="TxtCCity"
                  required="required"
                />
              </div>
            </div>
            <div className="col-md-2 col-lg-2">
              <div className="form-group">
                <label className="control-label">
                  <sapn style={{ color: "red" }}>*</sapn> Country
                </label>
                <select
                  className="form-control"
                  id="DDLDOBCountry"
                  name="DDLDOBCountry"
                  required="required"
                >
                  <option value="">Select Country</option>
                  <option value="India" selected="">
                    {" "}
                    India{" "}
                  </option>
                  <option value="Abkhazia"> Abkhazia </option>
                  <option value="Afghanistan"> Afghanistan </option>
                  <option value="Akrotiri and Dhekelia">
                    {" "}
                    Akrotiri and Dhekelia{" "}
                  </option>
                  <option value="Aland"> Aland </option>
                  <option value="Albania"> Albania </option>
                  <option value="Algeria"> Algeria </option>
                  <option value="American Samoa"> American Samoa </option>
                  <option value="Andorra"> Andorra </option>
                  <option value="Angola"> Angola </option>
                  <option value="Anguilla"> Anguilla </option>
                  <option value="Antigua and Barbuda">
                    {" "}
                    Antigua and Barbuda{" "}
                  </option>
                  <option value="Argentina"> Argentina </option>
                  <option value="Armenia"> Armenia </option>
                  <option value="Aruba"> Aruba </option>
                  <option value="Ascension Island"> Ascension Island </option>
                  <option value="Australia"> Australia </option>
                  <option value="Austria"> Austria </option>
                  <option value="Azerbaijan"> Azerbaijan </option>
                  <option value="Bahamas"> Bahamas </option>
                  <option value="Bahrain"> Bahrain </option>
                  <option value="Bangladesh"> Bangladesh </option>
                  <option value="Barbados"> Barbados </option>
                  <option value="Belarus"> Belarus </option>
                  <option value="Belgium"> Belgium </option>
                  <option value="Belize"> Belize </option>
                  <option value="Benin"> Benin </option>
                  <option value="Bermuda"> Bermuda </option>
                  <option value="Bhutan"> Bhutan </option>
                  <option value="Bolivia"> Bolivia </option>
                  <option value="Bosnia and Herzegovina">
                    {" "}
                    Bosnia and Herzegovina{" "}
                  </option>
                  <option value="Botswana"> Botswana </option>
                  <option value="Brazil"> Brazil </option>
                  <option value="Brunei"> Brunei </option>
                  <option value="Bulgaria"> Bulgaria </option>
                  <option value="Burkina Faso"> Burkina Faso </option>
                  <option value="Burundi"> Burundi </option>
                  <option value="Cambodia"> Cambodia </option>
                  <option value="Cameroon"> Cameroon </option>
                  <option value="Canada"> Canada </option>
                  <option value="Cape Verde"> Cape Verde </option>
                  <option value="Cayman Islands"> Cayman Islands </option>
                  <option value="Central African Republic">
                    {" "}
                    Central African Republic{" "}
                  </option>
                  <option value="Chad"> Chad </option>
                  <option value="Chile"> Chile </option>
                  <option value="China"> China </option>
                  <option value="Christmas Island"> Christmas Island </option>
                  <option value="Cocos (Keeling) Islands">
                    {" "}
                    Cocos (Keeling) Islands{" "}
                  </option>
                  <option value="Colombia"> Colombia </option>
                  <option value="Comoros"> Comoros </option>
                  <option value="Congo"> Congo </option>
                  <option value="Cook Islands"> Cook Islands </option>
                  <option value="Costa Rica"> Costa Rica </option>
                  <option value="Côte d'Ivoire"> Côte d'Ivoire </option>
                  <option value="Croatia"> Croatia </option>
                  <option value="Cuba"> Cuba </option>
                  <option value="Cyprus"> Cyprus </option>
                  <option value="Czech Republic"> Czech Republic </option>
                  <option value="Denmark"> Denmark </option>
                  <option value="Djibouti"> Djibouti </option>
                  <option value="Dominica"> Dominica </option>
                  <option value="Dominican Republic">
                    {" "}
                    Dominican Republic{" "}
                  </option>
                  <option value="Ecuador"> Ecuador </option>
                  <option value="Egypt"> Egypt </option>
                  <option value="El Salvador"> El Salvador </option>
                  <option value="Equatorial Guinea"> Equatorial Guinea </option>
                  <option value="Eritrea"> Eritrea </option>
                  <option value="Estonia"> Estonia </option>
                  <option value="Ethiopia"> Ethiopia </option>
                  <option value="Falkland Islands"> Falkland Islands </option>
                  <option value="Faroe Islands"> Faroe Islands </option>
                  <option value="Fiji"> Fiji </option>
                  <option value="Finland"> Finland </option>
                  <option value="France"> France </option>
                  <option value="French Polynesia"> French Polynesia </option>
                  <option value="Gabon"> Gabon </option>
                  <option value="Gambia"> Gambia </option>
                  <option value="Georgia"> Georgia </option>
                  <option value="Germany"> Germany </option>
                  <option value="Ghana"> Ghana </option>
                  <option value="Gibraltar"> Gibraltar </option>
                  <option value="Greece"> Greece </option>
                  <option value="Greenland"> Greenland </option>
                  <option value="Grenada"> Grenada </option>
                  <option value="Guam"> Guam </option>
                  <option value="Guatemala"> Guatemala </option>
                  <option value="Guernsey"> Guernsey </option>
                  <option value="Guinea"> Guinea </option>
                  <option value="Guinea-Bissau"> Guinea-Bissau </option>
                  <option value="Guyana"> Guyana </option>
                  <option value="Haiti"> Haiti </option>
                  <option value="Honduras"> Honduras </option>
                  <option value="Hong Kong"> Hong Kong </option>
                  <option value="Hungary"> Hungary </option>
                  <option value="Iceland"> Iceland </option>
                  <option value="Indonesia"> Indonesia </option>
                  <option value="Iran"> Iran </option>
                  <option value="Iraq"> Iraq </option>
                  <option value="Ireland"> Ireland </option>
                  <option value="Isle of Man"> Isle of Man </option>
                  <option value="Israel"> Israel </option>
                  <option value="Italy"> Italy </option>
                  <option value="Jamaica"> Jamaica </option>
                  <option value="Japan"> Japan </option>
                  <option value="Jersey"> Jersey </option>
                  <option value="Jordan"> Jordan </option>
                  <option value="Kazakhstan"> Kazakhstan </option>
                  <option value="Kenya"> Kenya </option>
                  <option value="Kiribati"> Kiribati </option>
                  <option value="Korea"> Korea </option>
                  <option value="Kosovo"> Kosovo </option>
                  <option value="Kuwait"> Kuwait </option>
                  <option value="Kyrgyzstan"> Kyrgyzstan </option>
                  <option value="Laos"> Laos </option>
                  <option value="Latvia"> Latvia </option>
                  <option value="Lebanon"> Lebanon </option>
                  <option value="Lesotho"> Lesotho </option>
                  <option value="Liberia"> Liberia </option>
                  <option value="Libya"> Libya </option>
                  <option value="Liechtenstein"> Liechtenstein </option>
                  <option value="Lithuania"> Lithuania </option>
                  <option value="Luxembourg"> Luxembourg </option>
                  <option value="Macao"> Macao </option>
                  <option value="Macedonia"> Macedonia </option>
                  <option value="Madagascar"> Madagascar </option>
                  <option value="Malawi"> Malawi </option>
                  <option value="Malaysia"> Malaysia </option>
                  <option value="Maldives"> Maldives </option>
                  <option value="Mali"> Mali </option>
                  <option value="Malta"> Malta </option>
                  <option value="Marshall Islands"> Marshall Islands </option>
                  <option value="Mauritania"> Mauritania </option>
                  <option value="Mauritius"> Mauritius </option>
                  <option value="Mayotte"> Mayotte </option>
                  <option value="Mexico"> Mexico </option>
                  <option value="Micronesia"> Micronesia </option>
                  <option value="Moldova"> Moldova </option>
                  <option value="Monaco"> Monaco </option>
                  <option value="Mongolia"> Mongolia </option>
                  <option value="Montenegro"> Montenegro </option>
                  <option value="Montserrat"> Montserrat </option>
                  <option value="Morocco"> Morocco </option>
                  <option value="Mozambique"> Mozambique </option>
                  <option value="Myanmar"> Myanmar </option>
                  <option value="Nagorno-Karabakh"> Nagorno-Karabakh </option>
                  <option value="Namibia"> Namibia </option>
                  <option value="Nauru"> Nauru </option>
                  <option value="Nepal"> Nepal </option>
                  <option value="Netherlands"> Netherlands </option>
                  <option value="Netherlands Antilles">
                    {" "}
                    Netherlands Antilles{" "}
                  </option>
                  <option value="New Caledonia"> New Caledonia </option>
                  <option value="New Zealand"> New Zealand </option>
                  <option value="Nicaragua"> Nicaragua </option>
                  <option value="Niger"> Niger </option>
                  <option value="Nigeria"> Nigeria </option>
                  <option value="Niue"> Niue </option>
                  <option value="Norfolk Island"> Norfolk Island </option>
                  <option value="Northern Cyprus"> Northern Cyprus </option>
                  <option value="Northern Mariana Islands">
                    {" "}
                    Northern Mariana Islands{" "}
                  </option>
                  <option value="Norway"> Norway </option>
                  <option value="Oman"> Oman </option>
                  <option value="Pakistan"> Pakistan </option>
                  <option value="Palau"> Palau </option>
                  <option value="Palestine"> Palestine </option>
                  <option value="Panama"> Panama </option>
                  <option value="Papua New Guinea"> Papua New Guinea </option>
                  <option value="Paraguay"> Paraguay </option>
                  <option value="Peru"> Peru </option>
                  <option value="Philippines"> Philippines </option>
                  <option value="Pitcairn Islands"> Pitcairn Islands </option>
                  <option value="Poland"> Poland </option>
                  <option value="Portugal"> Portugal </option>
                  <option value="Pridnestrovie"> Pridnestrovie </option>
                  <option value="Puerto Rico"> Puerto Rico </option>
                  <option value="Qatar"> Qatar </option>
                  <option value="Romania"> Romania </option>
                  <option value="Russia"> Russia </option>
                  <option value="Rwanda"> Rwanda </option>
                  <option value="Saint Helena"> Saint Helena </option>
                  <option value="Saint Kitts and Nevis">
                    {" "}
                    Saint Kitts and Nevis{" "}
                  </option>
                  <option value="Saint Lucia"> Saint Lucia </option>
                  <option value="Saint Pierre and Miquelon">
                    {" "}
                    Saint Pierre and Miquelon{" "}
                  </option>
                  <option value="Saint Vincent and the Grenadines">
                    {" "}
                    Saint Vincent and the Grenadines{" "}
                  </option>
                  <option value="Samoa"> Samoa </option>
                  <option value="San Marino"> San Marino </option>
                  <option value="São Tomé and Príncipe">
                    {" "}
                    São Tomé and Príncipe{" "}
                  </option>
                  <option value="Saudi Arabia"> Saudi Arabia </option>
                  <option value="Senegal"> Senegal </option>
                  <option value="Serbia"> Serbia </option>
                  <option value="Seychelles"> Seychelles </option>
                  <option value="Sierra Leone"> Sierra Leone </option>
                  <option value="Singapore"> Singapore </option>
                  <option value="Slovakia"> Slovakia </option>
                  <option value="Slovenia"> Slovenia </option>
                  <option value="Solomon Islands"> Solomon Islands </option>
                  <option value="Somalia"> Somalia </option>
                  <option value="Somaliland"> Somaliland </option>
                  <option value="South Africa"> South Africa </option>
                  <option value="South Ossetia"> South Ossetia </option>
                  <option value="Spain"> Spain </option>
                  <option value="Sri Lanka"> Sri Lanka </option>
                  <option value="Sudan"> Sudan </option>
                  <option value="Suriname"> Suriname </option>
                  <option value="Svalbard"> Svalbard </option>
                  <option value="Swaziland"> Swaziland </option>
                  <option value="Sweden"> Sweden </option>
                  <option value="Switzerland"> Switzerland </option>
                  <option value="Syria"> Syria </option>
                  <option value="Tajikistan"> Tajikistan </option>
                  <option value="Tanzania"> Tanzania </option>
                  <option value="Thailand"> Thailand </option>
                  <option value="Timor-Leste"> Timor-Leste </option>
                  <option value="Togo"> Togo </option>
                  <option value="Tokelau"> Tokelau </option>
                  <option value="Tonga"> Tonga </option>
                  <option value="Trinidad and Tobago">
                    {" "}
                    Trinidad and Tobago{" "}
                  </option>
                  <option value="Tristan da Cunha"> Tristan da Cunha </option>
                  <option value="Tunisia"> Tunisia </option>
                  <option value="Turkey"> Turkey </option>
                  <option value="Turkmenistan"> Turkmenistan </option>
                  <option value="Turks and Caicos Islands">
                    {" "}
                    Turks and Caicos Islands{" "}
                  </option>
                  <option value="Tuvalu"> Tuvalu </option>
                  <option value="Uganda"> Uganda </option>
                  <option value="Ukraine"> Ukraine </option>
                  <option value="United Arab Emirates">
                    {" "}
                    United Arab Emirates{" "}
                  </option>
                  <option value="United Kingdom"> United Kingdom </option>
                  <option value="United States"> United States </option>
                  <option value="Uruguay"> Uruguay </option>
                  <option value="Uzbekistan"> Uzbekistan </option>
                  <option value="Vanuatu"> Vanuatu </option>
                  <option value="Vatican City"> Vatican City </option>
                  <option value="Venezuela"> Venezuela </option>
                  <option value="Vietnam"> Vietnam </option>
                  <option value="Virgin Islands, British">
                    {" "}
                    Virgin Islands, British{" "}
                  </option>
                  <option value="Virgin Islands, United States">
                    {" "}
                    Virgin Islands, United States{" "}
                  </option>
                  <option value="Wallis and Futuna"> Wallis and Futuna </option>
                  <option value="Western Sahara"> Western Sahara </option>
                  <option value="Yemen"> Yemen </option>
                  <option value="Zambia"> Zambia </option>
                  <option value="Zimbabwe"> Zimbabwe </option>
                  <option value="South Korea"> South Korea </option>
                  <option value="Taiwan"> Taiwan </option>
                  <option value="Macau"> Macau </option>
                </select>
              </div>
            </div>
            <div className="col-md-2 col-lg-2">
              <div className="form-group">
                <label className="control-label">
                  <sapn style={{ color: "red" }}>*</sapn> State
                </label>
                <select
                  className="form-control"
                  id="DDLDOBState"
                  name="DDLDOBState"
                >
                  <option value="">Select State</option>
                  <option value="Andaman and Nicobar Islands">
                    {" "}
                    Andaman and Nicobar Islands{" "}
                  </option>
                  <option value="Andra Pradesh"> Andra Pradesh </option>
                  <option value="Arunachal Pradesh"> Arunachal Pradesh </option>
                  <option value="Assam"> Assam </option>
                  <option value="Bihar"> Bihar </option>
                  <option value="Chandigarh"> Chandigarh </option>
                  <option value="Chhattisgarh"> Chhattisgarh </option>
                  <option value="Dadra and Nagar Haveli">
                    {" "}
                    Dadra and Nagar Haveli{" "}
                  </option>
                  <option value="Daman and Diu"> Daman and Diu </option>
                  <option value="Goa"> Goa </option>
                  <option value="Gujarat"> Gujarat </option>
                  <option value="Haryana"> Haryana </option>
                  <option value="Himachal Pradesh"> Himachal Pradesh </option>
                  <option value="Jammu & Kashmir"> Jammu &amp; Kashmir </option>
                  <option value="Jharkhand"> Jharkhand </option>
                  <option value="Karnataka"> Karnataka </option>
                  <option value="Kerala"> Kerala </option>
                  <option value="Lakshadweep"> Lakshadweep </option>
                  <option value="Madhya Pradesh"> Madhya Pradesh </option>
                  <option value="Maharastra"> Maharastra </option>
                  <option value="Manipur"> Manipur </option>
                  <option value="Mauritious"> Mauritious </option>
                  <option value="Meghalaya"> Meghalaya </option>
                  <option value="Mizoram"> Mizoram </option>
                  <option value="Nagaland"> Nagaland </option>
                  <option value="New Delhi"> New Delhi </option>
                  <option value="Orissa"> Orissa </option>
                  <option value="Pondicherry"> Pondicherry </option>
                  <option value="Punjab"> Punjab </option>
                  <option value="Rajasthan"> Rajasthan </option>
                  <option value="Sikkim"> Sikkim </option>
                  <option value="Tamil Nadu"> Tamil Nadu </option>
                  <option value="Tripura"> Tripura </option>
                  <option value="Uttar Pradesh"> Uttar Pradesh </option>
                  <option value="Uttarakhand"> Uttarakhand </option>
                  <option value="Uttranchal"> Uttranchal </option>
                  <option value="West Bangal"> West Bangal </option>
                </select>
                <input
                  type="text"
                  className="form-control"
                  id="TxtDOBState"
                  name="TxtDOBState"
                  style={{ display: "none" }}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 col-lg-2">
              <div className="form-group">
                <label className="control-label">
                  <sapn style={{ color: "red" }}>*</sapn> Religion
                </label>
                <select
                  className="form-control"
                  id="DDLReligion"
                  name="DDLReligion"
                  required="required"
                >
                  <option value="">Select Religion</option>
                  <option value="Buddh"> Buddh </option>
                  <option value="Christian"> Christian </option>
                  <option value="Hindu"> Hindu </option>
                  <option value="Islam"> Islam </option>
                  <option value="Jain"> Jain </option>
                  <option value="Sikh"> Sikh </option>
                  <option value="Zoroastrian"> Zoroastrian </option>
                  <option value="Other"> Other </option>
                </select>
              </div>
            </div>
            <div className="col-md-4 col-lg-4">
              <div className="form-group">
                <label className="control-label">
                  <sapn style={{ color: "red" }}>*</sapn> Marital Status
                </label>
                <div className="input-group">
                  <div className="btn-group radioBtn">
                    <a
                      className="btn btn-primary btn-sm active"
                      data-toggle="rblMaritalStatus"
                      data-title="Single"
                    >
                      Single
                    </a>
                    <a
                      className="btn btn-primary btn-sm notActive"
                      data-toggle="rblMaritalStatus"
                      data-title="Engaged"
                    >
                      Engaged
                    </a>
                    <a
                      className="btn btn-primary btn-sm notActive"
                      data-toggle="rblMaritalStatus"
                      data-title="Married"
                    >
                      Married
                    </a>
                    <a
                      className="btn btn-primary btn-sm notActive"
                      data-toggle="rblMaritalStatus"
                      data-title="Divorced"
                    >
                      Divorced
                    </a>
                  </div>
                  <input
                    type="hidden"
                    name="rblMaritalStatus"
                    id="rblMaritalStatus"
                    defaultValue="Single"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-2 col-lg-2">
              <div className="form-group">
                <label className="control-label">Aadhar Card</label>
                <input
                  type="text"
                  className="form-control"
                  id="TxtAadharCard"
                  name="TxtAadharCard"
                />
              </div>
            </div>
            <div className="col-md-2 col-lg-2">
              <div className="form-group">
                <label className="control-label">Pan Card </label>
                <input
                  type="text"
                  className="form-control"
                  id="TxtPanCard"
                  name="TxtPanCard"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="card card-default">
      <div className="card-header">
        <h4 className="card-title">
          <a>
            <b>3. Academic / Professional Qualification</b>
          </a>
        </h4>
      </div>
      <div className="collapse show">
        <div className="card-body">
          <hr />
          <div className="row">
            <div className="col-lg-12">
              <input
                type="hidden"
                id="GradutionCount"
                name="GradutionCount"
                defaultValue={0}
              />
              <input
                type="hidden"
                id="PostGradutionCount"
                name="PostGradutionCount"
                defaultValue={0}
              />
              <input
                type="hidden"
                id="MPhilCount"
                name="MPhilCount"
                defaultValue={0}
              />
              <input
                type="hidden"
                id="PHDCount"
                name="PHDCount"
                defaultValue={0}
              />
              <input
                type="hidden"
                id="PostDoctoralCount"
                name="PostDoctoralCount"
                defaultValue={0}
              />
              <div id="TwelthRow">
                <div className="row">
                  <div className="col-md-2 col-lg-2">
                    <b>
                      {" "}
                      Higher Secondary /<br /> Class 12th
                    </b>
                  </div>
                  <div className="col-md-10 col-lg-10">
                    <div className="row">
                      <div className="col-md-2 col-lg-2">
                        <div className="form-group">
                          <label className="control-label">
                            Country<sapn style={{ color: "red" }}>*</sapn>
                          </label>
                          <select
                            className="form-control"
                            id="DDLICountry0"
                            name="DDLICountry0"
                            required="required"
                          >
                            <option value="">Select Country</option>
                            <option value="India" selected="">
                              {" "}
                              India{" "}
                            </option>
                            <option value="Abkhazia"> Abkhazia </option>
                            <option value="Afghanistan"> Afghanistan </option>
                            <option value="Akrotiri and Dhekelia">
                              {" "}
                              Akrotiri and Dhekelia{" "}
                            </option>
                            <option value="Aland"> Aland </option>
                            <option value="Albania"> Albania </option>
                            <option value="Algeria"> Algeria </option>
                            <option value="American Samoa">
                              {" "}
                              American Samoa{" "}
                            </option>
                            <option value="Andorra"> Andorra </option>
                            <option value="Angola"> Angola </option>
                            <option value="Anguilla"> Anguilla </option>
                            <option value="Antigua and Barbuda">
                              {" "}
                              Antigua and Barbuda{" "}
                            </option>
                            <option value="Argentina"> Argentina </option>
                            <option value="Armenia"> Armenia </option>
                            <option value="Aruba"> Aruba </option>
                            <option value="Ascension Island">
                              {" "}
                              Ascension Island{" "}
                            </option>
                            <option value="Australia"> Australia </option>
                            <option value="Austria"> Austria </option>
                            <option value="Azerbaijan"> Azerbaijan </option>
                            <option value="Bahamas"> Bahamas </option>
                            <option value="Bahrain"> Bahrain </option>
                            <option value="Bangladesh"> Bangladesh </option>
                            <option value="Barbados"> Barbados </option>
                            <option value="Belarus"> Belarus </option>
                            <option value="Belgium"> Belgium </option>
                            <option value="Belize"> Belize </option>
                            <option value="Benin"> Benin </option>
                            <option value="Bermuda"> Bermuda </option>
                            <option value="Bhutan"> Bhutan </option>
                            <option value="Bolivia"> Bolivia </option>
                            <option value="Bosnia and Herzegovina">
                              {" "}
                              Bosnia and Herzegovina{" "}
                            </option>
                            <option value="Botswana"> Botswana </option>
                            <option value="Brazil"> Brazil </option>
                            <option value="Brunei"> Brunei </option>
                            <option value="Bulgaria"> Bulgaria </option>
                            <option value="Burkina Faso"> Burkina Faso </option>
                            <option value="Burundi"> Burundi </option>
                            <option value="Cambodia"> Cambodia </option>
                            <option value="Cameroon"> Cameroon </option>
                            <option value="Canada"> Canada </option>
                            <option value="Cape Verde"> Cape Verde </option>
                            <option value="Cayman Islands">
                              {" "}
                              Cayman Islands{" "}
                            </option>
                            <option value="Central African Republic">
                              {" "}
                              Central African Republic{" "}
                            </option>
                            <option value="Chad"> Chad </option>
                            <option value="Chile"> Chile </option>
                            <option value="China"> China </option>
                            <option value="Christmas Island">
                              {" "}
                              Christmas Island{" "}
                            </option>
                            <option value="Cocos (Keeling) Islands">
                              {" "}
                              Cocos (Keeling) Islands{" "}
                            </option>
                            <option value="Colombia"> Colombia </option>
                            <option value="Comoros"> Comoros </option>
                            <option value="Congo"> Congo </option>
                            <option value="Cook Islands"> Cook Islands </option>
                            <option value="Costa Rica"> Costa Rica </option>
                            <option value="Côte d'Ivoire">
                              {" "}
                              Côte d'Ivoire{" "}
                            </option>
                            <option value="Croatia"> Croatia </option>
                            <option value="Cuba"> Cuba </option>
                            <option value="Cyprus"> Cyprus </option>
                            <option value="Czech Republic">
                              {" "}
                              Czech Republic{" "}
                            </option>
                            <option value="Denmark"> Denmark </option>
                            <option value="Djibouti"> Djibouti </option>
                            <option value="Dominica"> Dominica </option>
                            <option value="Dominican Republic">
                              {" "}
                              Dominican Republic{" "}
                            </option>
                            <option value="Ecuador"> Ecuador </option>
                            <option value="Egypt"> Egypt </option>
                            <option value="El Salvador"> El Salvador </option>
                            <option value="Equatorial Guinea">
                              {" "}
                              Equatorial Guinea{" "}
                            </option>
                            <option value="Eritrea"> Eritrea </option>
                            <option value="Estonia"> Estonia </option>
                            <option value="Ethiopia"> Ethiopia </option>
                            <option value="Falkland Islands">
                              {" "}
                              Falkland Islands{" "}
                            </option>
                            <option value="Faroe Islands">
                              {" "}
                              Faroe Islands{" "}
                            </option>
                            <option value="Fiji"> Fiji </option>
                            <option value="Finland"> Finland </option>
                            <option value="France"> France </option>
                            <option value="French Polynesia">
                              {" "}
                              French Polynesia{" "}
                            </option>
                            <option value="Gabon"> Gabon </option>
                            <option value="Gambia"> Gambia </option>
                            <option value="Georgia"> Georgia </option>
                            <option value="Germany"> Germany </option>
                            <option value="Ghana"> Ghana </option>
                            <option value="Gibraltar"> Gibraltar </option>
                            <option value="Greece"> Greece </option>
                            <option value="Greenland"> Greenland </option>
                            <option value="Grenada"> Grenada </option>
                            <option value="Guam"> Guam </option>
                            <option value="Guatemala"> Guatemala </option>
                            <option value="Guernsey"> Guernsey </option>
                            <option value="Guinea"> Guinea </option>
                            <option value="Guinea-Bissau">
                              {" "}
                              Guinea-Bissau{" "}
                            </option>
                            <option value="Guyana"> Guyana </option>
                            <option value="Haiti"> Haiti </option>
                            <option value="Honduras"> Honduras </option>
                            <option value="Hong Kong"> Hong Kong </option>
                            <option value="Hungary"> Hungary </option>
                            <option value="Iceland"> Iceland </option>
                            <option value="Indonesia"> Indonesia </option>
                            <option value="Iran"> Iran </option>
                            <option value="Iraq"> Iraq </option>
                            <option value="Ireland"> Ireland </option>
                            <option value="Isle of Man"> Isle of Man </option>
                            <option value="Israel"> Israel </option>
                            <option value="Italy"> Italy </option>
                            <option value="Jamaica"> Jamaica </option>
                            <option value="Japan"> Japan </option>
                            <option value="Jersey"> Jersey </option>
                            <option value="Jordan"> Jordan </option>
                            <option value="Kazakhstan"> Kazakhstan </option>
                            <option value="Kenya"> Kenya </option>
                            <option value="Kiribati"> Kiribati </option>
                            <option value="Korea"> Korea </option>
                            <option value="Kosovo"> Kosovo </option>
                            <option value="Kuwait"> Kuwait </option>
                            <option value="Kyrgyzstan"> Kyrgyzstan </option>
                            <option value="Laos"> Laos </option>
                            <option value="Latvia"> Latvia </option>
                            <option value="Lebanon"> Lebanon </option>
                            <option value="Lesotho"> Lesotho </option>
                            <option value="Liberia"> Liberia </option>
                            <option value="Libya"> Libya </option>
                            <option value="Liechtenstein">
                              {" "}
                              Liechtenstein{" "}
                            </option>
                            <option value="Lithuania"> Lithuania </option>
                            <option value="Luxembourg"> Luxembourg </option>
                            <option value="Macao"> Macao </option>
                            <option value="Macedonia"> Macedonia </option>
                            <option value="Madagascar"> Madagascar </option>
                            <option value="Malawi"> Malawi </option>
                            <option value="Malaysia"> Malaysia </option>
                            <option value="Maldives"> Maldives </option>
                            <option value="Mali"> Mali </option>
                            <option value="Malta"> Malta </option>
                            <option value="Marshall Islands">
                              {" "}
                              Marshall Islands{" "}
                            </option>
                            <option value="Mauritania"> Mauritania </option>
                            <option value="Mauritius"> Mauritius </option>
                            <option value="Mayotte"> Mayotte </option>
                            <option value="Mexico"> Mexico </option>
                            <option value="Micronesia"> Micronesia </option>
                            <option value="Moldova"> Moldova </option>
                            <option value="Monaco"> Monaco </option>
                            <option value="Mongolia"> Mongolia </option>
                            <option value="Montenegro"> Montenegro </option>
                            <option value="Montserrat"> Montserrat </option>
                            <option value="Morocco"> Morocco </option>
                            <option value="Mozambique"> Mozambique </option>
                            <option value="Myanmar"> Myanmar </option>
                            <option value="Nagorno-Karabakh">
                              {" "}
                              Nagorno-Karabakh{" "}
                            </option>
                            <option value="Namibia"> Namibia </option>
                            <option value="Nauru"> Nauru </option>
                            <option value="Nepal"> Nepal </option>
                            <option value="Netherlands"> Netherlands </option>
                            <option value="Netherlands Antilles">
                              {" "}
                              Netherlands Antilles{" "}
                            </option>
                            <option value="New Caledonia">
                              {" "}
                              New Caledonia{" "}
                            </option>
                            <option value="New Zealand"> New Zealand </option>
                            <option value="Nicaragua"> Nicaragua </option>
                            <option value="Niger"> Niger </option>
                            <option value="Nigeria"> Nigeria </option>
                            <option value="Niue"> Niue </option>
                            <option value="Norfolk Island">
                              {" "}
                              Norfolk Island{" "}
                            </option>
                            <option value="Northern Cyprus">
                              {" "}
                              Northern Cyprus{" "}
                            </option>
                            <option value="Northern Mariana Islands">
                              {" "}
                              Northern Mariana Islands{" "}
                            </option>
                            <option value="Norway"> Norway </option>
                            <option value="Oman"> Oman </option>
                            <option value="Pakistan"> Pakistan </option>
                            <option value="Palau"> Palau </option>
                            <option value="Palestine"> Palestine </option>
                            <option value="Panama"> Panama </option>
                            <option value="Papua New Guinea">
                              {" "}
                              Papua New Guinea{" "}
                            </option>
                            <option value="Paraguay"> Paraguay </option>
                            <option value="Peru"> Peru </option>
                            <option value="Philippines"> Philippines </option>
                            <option value="Pitcairn Islands">
                              {" "}
                              Pitcairn Islands{" "}
                            </option>
                            <option value="Poland"> Poland </option>
                            <option value="Portugal"> Portugal </option>
                            <option value="Pridnestrovie">
                              {" "}
                              Pridnestrovie{" "}
                            </option>
                            <option value="Puerto Rico"> Puerto Rico </option>
                            <option value="Qatar"> Qatar </option>
                            <option value="Romania"> Romania </option>
                            <option value="Russia"> Russia </option>
                            <option value="Rwanda"> Rwanda </option>
                            <option value="Saint Helena"> Saint Helena </option>
                            <option value="Saint Kitts and Nevis">
                              {" "}
                              Saint Kitts and Nevis{" "}
                            </option>
                            <option value="Saint Lucia"> Saint Lucia </option>
                            <option value="Saint Pierre and Miquelon">
                              {" "}
                              Saint Pierre and Miquelon{" "}
                            </option>
                            <option value="Saint Vincent and the Grenadines">
                              {" "}
                              Saint Vincent and the Grenadines{" "}
                            </option>
                            <option value="Samoa"> Samoa </option>
                            <option value="San Marino"> San Marino </option>
                            <option value="São Tomé and Príncipe">
                              {" "}
                              São Tomé and Príncipe{" "}
                            </option>
                            <option value="Saudi Arabia"> Saudi Arabia </option>
                            <option value="Senegal"> Senegal </option>
                            <option value="Serbia"> Serbia </option>
                            <option value="Seychelles"> Seychelles </option>
                            <option value="Sierra Leone"> Sierra Leone </option>
                            <option value="Singapore"> Singapore </option>
                            <option value="Slovakia"> Slovakia </option>
                            <option value="Slovenia"> Slovenia </option>
                            <option value="Solomon Islands">
                              {" "}
                              Solomon Islands{" "}
                            </option>
                            <option value="Somalia"> Somalia </option>
                            <option value="Somaliland"> Somaliland </option>
                            <option value="South Africa"> South Africa </option>
                            <option value="South Ossetia">
                              {" "}
                              South Ossetia{" "}
                            </option>
                            <option value="Spain"> Spain </option>
                            <option value="Sri Lanka"> Sri Lanka </option>
                            <option value="Sudan"> Sudan </option>
                            <option value="Suriname"> Suriname </option>
                            <option value="Svalbard"> Svalbard </option>
                            <option value="Swaziland"> Swaziland </option>
                            <option value="Sweden"> Sweden </option>
                            <option value="Switzerland"> Switzerland </option>
                            <option value="Syria"> Syria </option>
                            <option value="Tajikistan"> Tajikistan </option>
                            <option value="Tanzania"> Tanzania </option>
                            <option value="Thailand"> Thailand </option>
                            <option value="Timor-Leste"> Timor-Leste </option>
                            <option value="Togo"> Togo </option>
                            <option value="Tokelau"> Tokelau </option>
                            <option value="Tonga"> Tonga </option>
                            <option value="Trinidad and Tobago">
                              {" "}
                              Trinidad and Tobago{" "}
                            </option>
                            <option value="Tristan da Cunha">
                              {" "}
                              Tristan da Cunha{" "}
                            </option>
                            <option value="Tunisia"> Tunisia </option>
                            <option value="Turkey"> Turkey </option>
                            <option value="Turkmenistan"> Turkmenistan </option>
                            <option value="Turks and Caicos Islands">
                              {" "}
                              Turks and Caicos Islands{" "}
                            </option>
                            <option value="Tuvalu"> Tuvalu </option>
                            <option value="Uganda"> Uganda </option>
                            <option value="Ukraine"> Ukraine </option>
                            <option value="United Arab Emirates">
                              {" "}
                              United Arab Emirates{" "}
                            </option>
                            <option value="United Kingdom">
                              {" "}
                              United Kingdom{" "}
                            </option>
                            <option value="United States">
                              {" "}
                              United States{" "}
                            </option>
                            <option value="Uruguay"> Uruguay </option>
                            <option value="Uzbekistan"> Uzbekistan </option>
                            <option value="Vanuatu"> Vanuatu </option>
                            <option value="Vatican City"> Vatican City </option>
                            <option value="Venezuela"> Venezuela </option>
                            <option value="Vietnam"> Vietnam </option>
                            <option value="Virgin Islands, British">
                              {" "}
                              Virgin Islands, British{" "}
                            </option>
                            <option value="Virgin Islands, United States">
                              {" "}
                              Virgin Islands, United States{" "}
                            </option>
                            <option value="Wallis and Futuna">
                              {" "}
                              Wallis and Futuna{" "}
                            </option>
                            <option value="Western Sahara">
                              {" "}
                              Western Sahara{" "}
                            </option>
                            <option value="Yemen"> Yemen </option>
                            <option value="Zambia"> Zambia </option>
                            <option value="Zimbabwe"> Zimbabwe </option>
                            <option value="South Korea"> South Korea </option>
                            <option value="Taiwan"> Taiwan </option>
                            <option value="Macau"> Macau </option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-2 col-lg-2">
                        <div className="form-group">
                          <label className="control-label">
                            Education Mode
                            <sapn style={{ color: "red" }}>*</sapn>
                          </label>
                          <select
                            className="form-control"
                            id="DDLIEduMode0"
                            name="DDLIEduMode0"
                            required="required"
                          >
                            <option selected="selected" value="">
                              Select
                            </option>
                            <option value="Regular">Regular</option>
                            <option value="Part-Time">Part-Time</option>
                            <option value="Distance Learning / Online">
                              Distance Learning / Online
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-2 col-lg-2">
                        <div className="form-group">
                          <label className="control-label">
                            School<sapn style={{ color: "red" }}>*</sapn>{" "}
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="TxtIInst0"
                            name="TxtIInst0"
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-md-2 col-lg-2">
                        <div className="form-group">
                          <label className="control-label">
                            Board<sapn style={{ color: "red" }}>*</sapn>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="TxtIBoard0"
                            name="TxtIBoard0"
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-md-2 col-lg-2">
                        <div className="form-group">
                          <label className="control-label">
                            Passing Year<sapn style={{ color: "red" }}>*</sapn>
                          </label>
                          <input
                            type="number"
                            min={1901}
                            max={2030}
                            className="form-control"
                            id="TxtIYear0"
                            name="TxtIYear0"
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-md-2 col-lg-2">
                        <div className="form-group">
                          <label className="control-label">
                            Division<sapn style={{ color: "red" }}>*</sapn>{" "}
                          </label>
                          <select
                            className="form-control"
                            id="TxtIdivision0"
                            name="TxtIdivision0"
                            required="required"
                          >
                            <option value="">Select Division</option>
                            <option value="First"> First </option>
                            <option value="Second"> Second </option>
                            <option value="Third"> Third </option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-2 col-lg-2">
                        <div className="form-group">
                          <label className="control-label">
                            % aggregate marks
                            <sapn style={{ color: "red" }}>*</sapn>
                          </label>
                          <input
                            type="number"
                            min={20.0}
                            max="99.99"
                            className="form-control"
                            id="TxtImarks0"
                            name="TxtImarks0"
                            required="required"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="GraduationRow">
                <div className="row">
                  <div className="col-md-2 col-lg-2">
                    <div className="row">
                      <div className="form-group">
                        <label className="control-label">Graduate</label>
                        <label
                          className="control-label"
                          style={{
                            width: "100% !important",
                            display: "block",
                            height: 34
                          }}
                        >
                          &nbsp;
                        </label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group">
                        <label className="control-label">
                          Course Name<sapn style={{ color: "red" }}>*</sapn>
                        </label>
                        <label className="control-label">
                          <input
                            type="text"
                            className="form-control"
                            id="TxtGName0"
                            name="TxtGName0"
                            required="required"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-10 col-lg-10">
                    <div className="row">
                      <div className="col-md-2 col-lg-2">
                        <div className="form-group">
                          <label className="control-label">
                            Country<sapn style={{ color: "red" }}>*</sapn>
                          </label>
                          <select
                            className="form-control Country"
                            id="DDLGCountry0"
                            name="DDLGCountry0"
                            required="required"
                          >
                            <option value="">Select Country</option>
                            <option value="India" selected="">
                              {" "}
                              India{" "}
                            </option>
                            <option value="Abkhazia"> Abkhazia </option>
                            <option value="Afghanistan"> Afghanistan </option>
                            <option value="Akrotiri and Dhekelia">
                              {" "}
                              Akrotiri and Dhekelia{" "}
                            </option>
                            <option value="Aland"> Aland </option>
                            <option value="Albania"> Albania </option>
                            <option value="Algeria"> Algeria </option>
                            <option value="American Samoa">
                              {" "}
                              American Samoa{" "}
                            </option>
                            <option value="Andorra"> Andorra </option>
                            <option value="Angola"> Angola </option>
                            <option value="Anguilla"> Anguilla </option>
                            <option value="Antigua and Barbuda">
                              {" "}
                              Antigua and Barbuda{" "}
                            </option>
                            <option value="Argentina"> Argentina </option>
                            <option value="Armenia"> Armenia </option>
                            <option value="Aruba"> Aruba </option>
                            <option value="Ascension Island">
                              {" "}
                              Ascension Island{" "}
                            </option>
                            <option value="Australia"> Australia </option>
                            <option value="Austria"> Austria </option>
                            <option value="Azerbaijan"> Azerbaijan </option>
                            <option value="Bahamas"> Bahamas </option>
                            <option value="Bahrain"> Bahrain </option>
                            <option value="Bangladesh"> Bangladesh </option>
                            <option value="Barbados"> Barbados </option>
                            <option value="Belarus"> Belarus </option>
                            <option value="Belgium"> Belgium </option>
                            <option value="Belize"> Belize </option>
                            <option value="Benin"> Benin </option>
                            <option value="Bermuda"> Bermuda </option>
                            <option value="Bhutan"> Bhutan </option>
                            <option value="Bolivia"> Bolivia </option>
                            <option value="Bosnia and Herzegovina">
                              {" "}
                              Bosnia and Herzegovina{" "}
                            </option>
                            <option value="Botswana"> Botswana </option>
                            <option value="Brazil"> Brazil </option>
                            <option value="Brunei"> Brunei </option>
                            <option value="Bulgaria"> Bulgaria </option>
                            <option value="Burkina Faso"> Burkina Faso </option>
                            <option value="Burundi"> Burundi </option>
                            <option value="Cambodia"> Cambodia </option>
                            <option value="Cameroon"> Cameroon </option>
                            <option value="Canada"> Canada </option>
                            <option value="Cape Verde"> Cape Verde </option>
                            <option value="Cayman Islands">
                              {" "}
                              Cayman Islands{" "}
                            </option>
                            <option value="Central African Republic">
                              {" "}
                              Central African Republic{" "}
                            </option>
                            <option value="Chad"> Chad </option>
                            <option value="Chile"> Chile </option>
                            <option value="China"> China </option>
                            <option value="Christmas Island">
                              {" "}
                              Christmas Island{" "}
                            </option>
                            <option value="Cocos (Keeling) Islands">
                              {" "}
                              Cocos (Keeling) Islands{" "}
                            </option>
                            <option value="Colombia"> Colombia </option>
                            <option value="Comoros"> Comoros </option>
                            <option value="Congo"> Congo </option>
                            <option value="Cook Islands"> Cook Islands </option>
                            <option value="Costa Rica"> Costa Rica </option>
                            <option value="Côte d'Ivoire">
                              {" "}
                              Côte d'Ivoire{" "}
                            </option>
                            <option value="Croatia"> Croatia </option>
                            <option value="Cuba"> Cuba </option>
                            <option value="Cyprus"> Cyprus </option>
                            <option value="Czech Republic">
                              {" "}
                              Czech Republic{" "}
                            </option>
                            <option value="Denmark"> Denmark </option>
                            <option value="Djibouti"> Djibouti </option>
                            <option value="Dominica"> Dominica </option>
                            <option value="Dominican Republic">
                              {" "}
                              Dominican Republic{" "}
                            </option>
                            <option value="Ecuador"> Ecuador </option>
                            <option value="Egypt"> Egypt </option>
                            <option value="El Salvador"> El Salvador </option>
                            <option value="Equatorial Guinea">
                              {" "}
                              Equatorial Guinea{" "}
                            </option>
                            <option value="Eritrea"> Eritrea </option>
                            <option value="Estonia"> Estonia </option>
                            <option value="Ethiopia"> Ethiopia </option>
                            <option value="Falkland Islands">
                              {" "}
                              Falkland Islands{" "}
                            </option>
                            <option value="Faroe Islands">
                              {" "}
                              Faroe Islands{" "}
                            </option>
                            <option value="Fiji"> Fiji </option>
                            <option value="Finland"> Finland </option>
                            <option value="France"> France </option>
                            <option value="French Polynesia">
                              {" "}
                              French Polynesia{" "}
                            </option>
                            <option value="Gabon"> Gabon </option>
                            <option value="Gambia"> Gambia </option>
                            <option value="Georgia"> Georgia </option>
                            <option value="Germany"> Germany </option>
                            <option value="Ghana"> Ghana </option>
                            <option value="Gibraltar"> Gibraltar </option>
                            <option value="Greece"> Greece </option>
                            <option value="Greenland"> Greenland </option>
                            <option value="Grenada"> Grenada </option>
                            <option value="Guam"> Guam </option>
                            <option value="Guatemala"> Guatemala </option>
                            <option value="Guernsey"> Guernsey </option>
                            <option value="Guinea"> Guinea </option>
                            <option value="Guinea-Bissau">
                              {" "}
                              Guinea-Bissau{" "}
                            </option>
                            <option value="Guyana"> Guyana </option>
                            <option value="Haiti"> Haiti </option>
                            <option value="Honduras"> Honduras </option>
                            <option value="Hong Kong"> Hong Kong </option>
                            <option value="Hungary"> Hungary </option>
                            <option value="Iceland"> Iceland </option>
                            <option value="Indonesia"> Indonesia </option>
                            <option value="Iran"> Iran </option>
                            <option value="Iraq"> Iraq </option>
                            <option value="Ireland"> Ireland </option>
                            <option value="Isle of Man"> Isle of Man </option>
                            <option value="Israel"> Israel </option>
                            <option value="Italy"> Italy </option>
                            <option value="Jamaica"> Jamaica </option>
                            <option value="Japan"> Japan </option>
                            <option value="Jersey"> Jersey </option>
                            <option value="Jordan"> Jordan </option>
                            <option value="Kazakhstan"> Kazakhstan </option>
                            <option value="Kenya"> Kenya </option>
                            <option value="Kiribati"> Kiribati </option>
                            <option value="Korea"> Korea </option>
                            <option value="Kosovo"> Kosovo </option>
                            <option value="Kuwait"> Kuwait </option>
                            <option value="Kyrgyzstan"> Kyrgyzstan </option>
                            <option value="Laos"> Laos </option>
                            <option value="Latvia"> Latvia </option>
                            <option value="Lebanon"> Lebanon </option>
                            <option value="Lesotho"> Lesotho </option>
                            <option value="Liberia"> Liberia </option>
                            <option value="Libya"> Libya </option>
                            <option value="Liechtenstein">
                              {" "}
                              Liechtenstein{" "}
                            </option>
                            <option value="Lithuania"> Lithuania </option>
                            <option value="Luxembourg"> Luxembourg </option>
                            <option value="Macao"> Macao </option>
                            <option value="Macedonia"> Macedonia </option>
                            <option value="Madagascar"> Madagascar </option>
                            <option value="Malawi"> Malawi </option>
                            <option value="Malaysia"> Malaysia </option>
                            <option value="Maldives"> Maldives </option>
                            <option value="Mali"> Mali </option>
                            <option value="Malta"> Malta </option>
                            <option value="Marshall Islands">
                              {" "}
                              Marshall Islands{" "}
                            </option>
                            <option value="Mauritania"> Mauritania </option>
                            <option value="Mauritius"> Mauritius </option>
                            <option value="Mayotte"> Mayotte </option>
                            <option value="Mexico"> Mexico </option>
                            <option value="Micronesia"> Micronesia </option>
                            <option value="Moldova"> Moldova </option>
                            <option value="Monaco"> Monaco </option>
                            <option value="Mongolia"> Mongolia </option>
                            <option value="Montenegro"> Montenegro </option>
                            <option value="Montserrat"> Montserrat </option>
                            <option value="Morocco"> Morocco </option>
                            <option value="Mozambique"> Mozambique </option>
                            <option value="Myanmar"> Myanmar </option>
                            <option value="Nagorno-Karabakh">
                              {" "}
                              Nagorno-Karabakh{" "}
                            </option>
                            <option value="Namibia"> Namibia </option>
                            <option value="Nauru"> Nauru </option>
                            <option value="Nepal"> Nepal </option>
                            <option value="Netherlands"> Netherlands </option>
                            <option value="Netherlands Antilles">
                              {" "}
                              Netherlands Antilles{" "}
                            </option>
                            <option value="New Caledonia">
                              {" "}
                              New Caledonia{" "}
                            </option>
                            <option value="New Zealand"> New Zealand </option>
                            <option value="Nicaragua"> Nicaragua </option>
                            <option value="Niger"> Niger </option>
                            <option value="Nigeria"> Nigeria </option>
                            <option value="Niue"> Niue </option>
                            <option value="Norfolk Island">
                              {" "}
                              Norfolk Island{" "}
                            </option>
                            <option value="Northern Cyprus">
                              {" "}
                              Northern Cyprus{" "}
                            </option>
                            <option value="Northern Mariana Islands">
                              {" "}
                              Northern Mariana Islands{" "}
                            </option>
                            <option value="Norway"> Norway </option>
                            <option value="Oman"> Oman </option>
                            <option value="Pakistan"> Pakistan </option>
                            <option value="Palau"> Palau </option>
                            <option value="Palestine"> Palestine </option>
                            <option value="Panama"> Panama </option>
                            <option value="Papua New Guinea">
                              {" "}
                              Papua New Guinea{" "}
                            </option>
                            <option value="Paraguay"> Paraguay </option>
                            <option value="Peru"> Peru </option>
                            <option value="Philippines"> Philippines </option>
                            <option value="Pitcairn Islands">
                              {" "}
                              Pitcairn Islands{" "}
                            </option>
                            <option value="Poland"> Poland </option>
                            <option value="Portugal"> Portugal </option>
                            <option value="Pridnestrovie">
                              {" "}
                              Pridnestrovie{" "}
                            </option>
                            <option value="Puerto Rico"> Puerto Rico </option>
                            <option value="Qatar"> Qatar </option>
                            <option value="Romania"> Romania </option>
                            <option value="Russia"> Russia </option>
                            <option value="Rwanda"> Rwanda </option>
                            <option value="Saint Helena"> Saint Helena </option>
                            <option value="Saint Kitts and Nevis">
                              {" "}
                              Saint Kitts and Nevis{" "}
                            </option>
                            <option value="Saint Lucia"> Saint Lucia </option>
                            <option value="Saint Pierre and Miquelon">
                              {" "}
                              Saint Pierre and Miquelon{" "}
                            </option>
                            <option value="Saint Vincent and the Grenadines">
                              {" "}
                              Saint Vincent and the Grenadines{" "}
                            </option>
                            <option value="Samoa"> Samoa </option>
                            <option value="San Marino"> San Marino </option>
                            <option value="São Tomé and Príncipe">
                              {" "}
                              São Tomé and Príncipe{" "}
                            </option>
                            <option value="Saudi Arabia"> Saudi Arabia </option>
                            <option value="Senegal"> Senegal </option>
                            <option value="Serbia"> Serbia </option>
                            <option value="Seychelles"> Seychelles </option>
                            <option value="Sierra Leone"> Sierra Leone </option>
                            <option value="Singapore"> Singapore </option>
                            <option value="Slovakia"> Slovakia </option>
                            <option value="Slovenia"> Slovenia </option>
                            <option value="Solomon Islands">
                              {" "}
                              Solomon Islands{" "}
                            </option>
                            <option value="Somalia"> Somalia </option>
                            <option value="Somaliland"> Somaliland </option>
                            <option value="South Africa"> South Africa </option>
                            <option value="South Ossetia">
                              {" "}
                              South Ossetia{" "}
                            </option>
                            <option value="Spain"> Spain </option>
                            <option value="Sri Lanka"> Sri Lanka </option>
                            <option value="Sudan"> Sudan </option>
                            <option value="Suriname"> Suriname </option>
                            <option value="Svalbard"> Svalbard </option>
                            <option value="Swaziland"> Swaziland </option>
                            <option value="Sweden"> Sweden </option>
                            <option value="Switzerland"> Switzerland </option>
                            <option value="Syria"> Syria </option>
                            <option value="Tajikistan"> Tajikistan </option>
                            <option value="Tanzania"> Tanzania </option>
                            <option value="Thailand"> Thailand </option>
                            <option value="Timor-Leste"> Timor-Leste </option>
                            <option value="Togo"> Togo </option>
                            <option value="Tokelau"> Tokelau </option>
                            <option value="Tonga"> Tonga </option>
                            <option value="Trinidad and Tobago">
                              {" "}
                              Trinidad and Tobago{" "}
                            </option>
                            <option value="Tristan da Cunha">
                              {" "}
                              Tristan da Cunha{" "}
                            </option>
                            <option value="Tunisia"> Tunisia </option>
                            <option value="Turkey"> Turkey </option>
                            <option value="Turkmenistan"> Turkmenistan </option>
                            <option value="Turks and Caicos Islands">
                              {" "}
                              Turks and Caicos Islands{" "}
                            </option>
                            <option value="Tuvalu"> Tuvalu </option>
                            <option value="Uganda"> Uganda </option>
                            <option value="Ukraine"> Ukraine </option>
                            <option value="United Arab Emirates">
                              {" "}
                              United Arab Emirates{" "}
                            </option>
                            <option value="United Kingdom">
                              {" "}
                              United Kingdom{" "}
                            </option>
                            <option value="United States">
                              {" "}
                              United States{" "}
                            </option>
                            <option value="Uruguay"> Uruguay </option>
                            <option value="Uzbekistan"> Uzbekistan </option>
                            <option value="Vanuatu"> Vanuatu </option>
                            <option value="Vatican City"> Vatican City </option>
                            <option value="Venezuela"> Venezuela </option>
                            <option value="Vietnam"> Vietnam </option>
                            <option value="Virgin Islands, British">
                              {" "}
                              Virgin Islands, British{" "}
                            </option>
                            <option value="Virgin Islands, United States">
                              {" "}
                              Virgin Islands, United States{" "}
                            </option>
                            <option value="Wallis and Futuna">
                              {" "}
                              Wallis and Futuna{" "}
                            </option>
                            <option value="Western Sahara">
                              {" "}
                              Western Sahara{" "}
                            </option>
                            <option value="Yemen"> Yemen </option>
                            <option value="Zambia"> Zambia </option>
                            <option value="Zimbabwe"> Zimbabwe </option>
                            <option value="South Korea"> South Korea </option>
                            <option value="Taiwan"> Taiwan </option>
                            <option value="Macau"> Macau </option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-2 col-lg-2">
                        <div className="form-group">
                          <label className="control-label">
                            Education Mode
                            <sapn style={{ color: "red" }}>*</sapn>
                          </label>
                          <select
                            className="form-control"
                            id="DDLGEduMode0"
                            name="DDLGEduMode0"
                            required="required"
                          >
                            <option selected="selected" value="">
                              Select
                            </option>
                            <option value="Regular">Regular</option>
                            <option value="Part-Time">Part-Time</option>
                            <option value="Distance Learning / Online">
                              Distance Learning / Online
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-2 col-lg-2">
                        <div className="form-group">
                          <label className="control-label">
                            University / Institute
                            <sapn style={{ color: "red" }}>*</sapn>
                            <a
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Please start typing and choose from drop down list, please type full name if not available in drop down"
                            >
                              ?
                            </a>
                          </label>
                          <input
                            type="text"
                            className="form-control University"
                            id="TxtGBoard0"
                            name="TxtGBoard0"
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-md-2 col-lg-2">
                        <div className="form-group">
                          <label className="control-label">College Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="TxtGInst0"
                            name="TxtGInst0"
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-md-2 col-lg-2">
                        <div className="form-group">
                          <label className="control-label">
                            Graduation Year
                            <sapn style={{ color: "red" }}>*</sapn>
                          </label>
                          <input
                            type="number"
                            min={1901}
                            max={2030}
                            className="form-control"
                            id="TxtGYear0"
                            name="TxtGYear0"
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-md-2 col-lg-2">
                        <div className="form-group">
                          <label className="control-label">
                            Area<sapn style={{ color: "red" }}>*</sapn>{" "}
                          </label>
                          <input
                            type="text"
                            className="form-control Specialization "
                            id="DDLGSpecialization0"
                            name="DDLGSpecialization0"
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-md-2 col-lg-2">
                        <div className="form-group">
                          <label className="control-label">
                            Division<sapn style={{ color: "red" }}>*</sapn>{" "}
                          </label>
                          <select
                            className="form-control"
                            id="TxtGdivision0"
                            name="TxtGdivision0"
                            required="required"
                          >
                            <option value="">Select Division</option>
                            <option value="First"> First </option>
                            <option value="Second"> Second </option>
                            <option value="Third"> Third </option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-2 col-lg-2">
                        <div className="form-group">
                          <label className="control-label">
                            % aggregate marks
                            <sapn style={{ color: "red" }}>*</sapn>
                          </label>
                          <input
                            type="number"
                            min={20.0}
                            max="99.99"
                            className="form-control"
                            id="TxtGmarks0"
                            name="TxtGmarks0"
                            required="required"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="row">
                  <div className="col-md-2 col-lg-2">
                    <div className="row">
                      <div className="form-group">
                        <a
                          id="btnMoreGradution"
                          className="btn btn-success btn-xs"
                        >
                          Add More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="PostGraduationRow">
                <div className="row">
                  <div className="col-md-2 col-lg-2">
                    <div className="row">
                      <div className="form-group">
                        <label className="control-label">Post Graduate</label>
                        <label
                          className="control-label"
                          style={{
                            width: "100% !important",
                            display: "block",
                            height: 34
                          }}
                        >
                          &nbsp;
                        </label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group">
                        <label className="control-label">
                          Course name<sapn style={{ color: "red" }}>*</sapn>
                        </label>
                        <label className="control-label">
                          <input
                            type="text"
                            className="form-control"
                            id="TxtPGName0"
                            name="TxtPGName0"
                            required="required"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-10 col-lg-10">
                    <div className="row">
                      <div className="col-md-2 col-lg-2">
                        <div className="form-group">
                          <label className="control-label">
                            Country <sapn style={{ color: "red" }}>*</sapn>
                          </label>
                          <select
                            className="form-control Country"
                            id="DDLPGCountry0"
                            name="DDLPGCountry0"
                            required="required"
                          >
                            <option value="">Select Country</option>
                            <option value="India" selected="">
                              {" "}
                              India{" "}
                            </option>
                            <option value="Abkhazia"> Abkhazia </option>
                            <option value="Afghanistan"> Afghanistan </option>
                            <option value="Akrotiri and Dhekelia">
                              {" "}
                              Akrotiri and Dhekelia{" "}
                            </option>
                            <option value="Aland"> Aland </option>
                            <option value="Albania"> Albania </option>
                            <option value="Algeria"> Algeria </option>
                            <option value="American Samoa">
                              {" "}
                              American Samoa{" "}
                            </option>
                            <option value="Andorra"> Andorra </option>
                            <option value="Angola"> Angola </option>
                            <option value="Anguilla"> Anguilla </option>
                            <option value="Antigua and Barbuda">
                              {" "}
                              Antigua and Barbuda{" "}
                            </option>
                            <option value="Argentina"> Argentina </option>
                            <option value="Armenia"> Armenia </option>
                            <option value="Aruba"> Aruba </option>
                            <option value="Ascension Island">
                              {" "}
                              Ascension Island{" "}
                            </option>
                            <option value="Australia"> Australia </option>
                            <option value="Austria"> Austria </option>
                            <option value="Azerbaijan"> Azerbaijan </option>
                            <option value="Bahamas"> Bahamas </option>
                            <option value="Bahrain"> Bahrain </option>
                            <option value="Bangladesh"> Bangladesh </option>
                            <option value="Barbados"> Barbados </option>
                            <option value="Belarus"> Belarus </option>
                            <option value="Belgium"> Belgium </option>
                            <option value="Belize"> Belize </option>
                            <option value="Benin"> Benin </option>
                            <option value="Bermuda"> Bermuda </option>
                            <option value="Bhutan"> Bhutan </option>
                            <option value="Bolivia"> Bolivia </option>
                            <option value="Bosnia and Herzegovina">
                              {" "}
                              Bosnia and Herzegovina{" "}
                            </option>
                            <option value="Botswana"> Botswana </option>
                            <option value="Brazil"> Brazil </option>
                            <option value="Brunei"> Brunei </option>
                            <option value="Bulgaria"> Bulgaria </option>
                            <option value="Burkina Faso"> Burkina Faso </option>
                            <option value="Burundi"> Burundi </option>
                            <option value="Cambodia"> Cambodia </option>
                            <option value="Cameroon"> Cameroon </option>
                            <option value="Canada"> Canada </option>
                            <option value="Cape Verde"> Cape Verde </option>
                            <option value="Cayman Islands">
                              {" "}
                              Cayman Islands{" "}
                            </option>
                            <option value="Central African Republic">
                              {" "}
                              Central African Republic{" "}
                            </option>
                            <option value="Chad"> Chad </option>
                            <option value="Chile"> Chile </option>
                            <option value="China"> China </option>
                            <option value="Christmas Island">
                              {" "}
                              Christmas Island{" "}
                            </option>
                            <option value="Cocos (Keeling) Islands">
                              {" "}
                              Cocos (Keeling) Islands{" "}
                            </option>
                            <option value="Colombia"> Colombia </option>
                            <option value="Comoros"> Comoros </option>
                            <option value="Congo"> Congo </option>
                            <option value="Cook Islands"> Cook Islands </option>
                            <option value="Costa Rica"> Costa Rica </option>
                            <option value="Côte d'Ivoire">
                              {" "}
                              Côte d'Ivoire{" "}
                            </option>
                            <option value="Croatia"> Croatia </option>
                            <option value="Cuba"> Cuba </option>
                            <option value="Cyprus"> Cyprus </option>
                            <option value="Czech Republic">
                              {" "}
                              Czech Republic{" "}
                            </option>
                            <option value="Denmark"> Denmark </option>
                            <option value="Djibouti"> Djibouti </option>
                            <option value="Dominica"> Dominica </option>
                            <option value="Dominican Republic">
                              {" "}
                              Dominican Republic{" "}
                            </option>
                            <option value="Ecuador"> Ecuador </option>
                            <option value="Egypt"> Egypt </option>
                            <option value="El Salvador"> El Salvador </option>
                            <option value="Equatorial Guinea">
                              {" "}
                              Equatorial Guinea{" "}
                            </option>
                            <option value="Eritrea"> Eritrea </option>
                            <option value="Estonia"> Estonia </option>
                            <option value="Ethiopia"> Ethiopia </option>
                            <option value="Falkland Islands">
                              {" "}
                              Falkland Islands{" "}
                            </option>
                            <option value="Faroe Islands">
                              {" "}
                              Faroe Islands{" "}
                            </option>
                            <option value="Fiji"> Fiji </option>
                            <option value="Finland"> Finland </option>
                            <option value="France"> France </option>
                            <option value="French Polynesia">
                              {" "}
                              French Polynesia{" "}
                            </option>
                            <option value="Gabon"> Gabon </option>
                            <option value="Gambia"> Gambia </option>
                            <option value="Georgia"> Georgia </option>
                            <option value="Germany"> Germany </option>
                            <option value="Ghana"> Ghana </option>
                            <option value="Gibraltar"> Gibraltar </option>
                            <option value="Greece"> Greece </option>
                            <option value="Greenland"> Greenland </option>
                            <option value="Grenada"> Grenada </option>
                            <option value="Guam"> Guam </option>
                            <option value="Guatemala"> Guatemala </option>
                            <option value="Guernsey"> Guernsey </option>
                            <option value="Guinea"> Guinea </option>
                            <option value="Guinea-Bissau">
                              {" "}
                              Guinea-Bissau{" "}
                            </option>
                            <option value="Guyana"> Guyana </option>
                            <option value="Haiti"> Haiti </option>
                            <option value="Honduras"> Honduras </option>
                            <option value="Hong Kong"> Hong Kong </option>
                            <option value="Hungary"> Hungary </option>
                            <option value="Iceland"> Iceland </option>
                            <option value="Indonesia"> Indonesia </option>
                            <option value="Iran"> Iran </option>
                            <option value="Iraq"> Iraq </option>
                            <option value="Ireland"> Ireland </option>
                            <option value="Isle of Man"> Isle of Man </option>
                            <option value="Israel"> Israel </option>
                            <option value="Italy"> Italy </option>
                            <option value="Jamaica"> Jamaica </option>
                            <option value="Japan"> Japan </option>
                            <option value="Jersey"> Jersey </option>
                            <option value="Jordan"> Jordan </option>
                            <option value="Kazakhstan"> Kazakhstan </option>
                            <option value="Kenya"> Kenya </option>
                            <option value="Kiribati"> Kiribati </option>
                            <option value="Korea"> Korea </option>
                            <option value="Kosovo"> Kosovo </option>
                            <option value="Kuwait"> Kuwait </option>
                            <option value="Kyrgyzstan"> Kyrgyzstan </option>
                            <option value="Laos"> Laos </option>
                            <option value="Latvia"> Latvia </option>
                            <option value="Lebanon"> Lebanon </option>
                            <option value="Lesotho"> Lesotho </option>
                            <option value="Liberia"> Liberia </option>
                            <option value="Libya"> Libya </option>
                            <option value="Liechtenstein">
                              {" "}
                              Liechtenstein{" "}
                            </option>
                            <option value="Lithuania"> Lithuania </option>
                            <option value="Luxembourg"> Luxembourg </option>
                            <option value="Macao"> Macao </option>
                            <option value="Macedonia"> Macedonia </option>
                            <option value="Madagascar"> Madagascar </option>
                            <option value="Malawi"> Malawi </option>
                            <option value="Malaysia"> Malaysia </option>
                            <option value="Maldives"> Maldives </option>
                            <option value="Mali"> Mali </option>
                            <option value="Malta"> Malta </option>
                            <option value="Marshall Islands">
                              {" "}
                              Marshall Islands{" "}
                            </option>
                            <option value="Mauritania"> Mauritania </option>
                            <option value="Mauritius"> Mauritius </option>
                            <option value="Mayotte"> Mayotte </option>
                            <option value="Mexico"> Mexico </option>
                            <option value="Micronesia"> Micronesia </option>
                            <option value="Moldova"> Moldova </option>
                            <option value="Monaco"> Monaco </option>
                            <option value="Mongolia"> Mongolia </option>
                            <option value="Montenegro"> Montenegro </option>
                            <option value="Montserrat"> Montserrat </option>
                            <option value="Morocco"> Morocco </option>
                            <option value="Mozambique"> Mozambique </option>
                            <option value="Myanmar"> Myanmar </option>
                            <option value="Nagorno-Karabakh">
                              {" "}
                              Nagorno-Karabakh{" "}
                            </option>
                            <option value="Namibia"> Namibia </option>
                            <option value="Nauru"> Nauru </option>
                            <option value="Nepal"> Nepal </option>
                            <option value="Netherlands"> Netherlands </option>
                            <option value="Netherlands Antilles">
                              {" "}
                              Netherlands Antilles{" "}
                            </option>
                            <option value="New Caledonia">
                              {" "}
                              New Caledonia{" "}
                            </option>
                            <option value="New Zealand"> New Zealand </option>
                            <option value="Nicaragua"> Nicaragua </option>
                            <option value="Niger"> Niger </option>
                            <option value="Nigeria"> Nigeria </option>
                            <option value="Niue"> Niue </option>
                            <option value="Norfolk Island">
                              {" "}
                              Norfolk Island{" "}
                            </option>
                            <option value="Northern Cyprus">
                              {" "}
                              Northern Cyprus{" "}
                            </option>
                            <option value="Northern Mariana Islands">
                              {" "}
                              Northern Mariana Islands{" "}
                            </option>
                            <option value="Norway"> Norway </option>
                            <option value="Oman"> Oman </option>
                            <option value="Pakistan"> Pakistan </option>
                            <option value="Palau"> Palau </option>
                            <option value="Palestine"> Palestine </option>
                            <option value="Panama"> Panama </option>
                            <option value="Papua New Guinea">
                              {" "}
                              Papua New Guinea{" "}
                            </option>
                            <option value="Paraguay"> Paraguay </option>
                            <option value="Peru"> Peru </option>
                            <option value="Philippines"> Philippines </option>
                            <option value="Pitcairn Islands">
                              {" "}
                              Pitcairn Islands{" "}
                            </option>
                            <option value="Poland"> Poland </option>
                            <option value="Portugal"> Portugal </option>
                            <option value="Pridnestrovie">
                              {" "}
                              Pridnestrovie{" "}
                            </option>
                            <option value="Puerto Rico"> Puerto Rico </option>
                            <option value="Qatar"> Qatar </option>
                            <option value="Romania"> Romania </option>
                            <option value="Russia"> Russia </option>
                            <option value="Rwanda"> Rwanda </option>
                            <option value="Saint Helena"> Saint Helena </option>
                            <option value="Saint Kitts and Nevis">
                              {" "}
                              Saint Kitts and Nevis{" "}
                            </option>
                            <option value="Saint Lucia"> Saint Lucia </option>
                            <option value="Saint Pierre and Miquelon">
                              {" "}
                              Saint Pierre and Miquelon{" "}
                            </option>
                            <option value="Saint Vincent and the Grenadines">
                              {" "}
                              Saint Vincent and the Grenadines{" "}
                            </option>
                            <option value="Samoa"> Samoa </option>
                            <option value="San Marino"> San Marino </option>
                            <option value="São Tomé and Príncipe">
                              {" "}
                              São Tomé and Príncipe{" "}
                            </option>
                            <option value="Saudi Arabia"> Saudi Arabia </option>
                            <option value="Senegal"> Senegal </option>
                            <option value="Serbia"> Serbia </option>
                            <option value="Seychelles"> Seychelles </option>
                            <option value="Sierra Leone"> Sierra Leone </option>
                            <option value="Singapore"> Singapore </option>
                            <option value="Slovakia"> Slovakia </option>
                            <option value="Slovenia"> Slovenia </option>
                            <option value="Solomon Islands">
                              {" "}
                              Solomon Islands{" "}
                            </option>
                            <option value="Somalia"> Somalia </option>
                            <option value="Somaliland"> Somaliland </option>
                            <option value="South Africa"> South Africa </option>
                            <option value="South Ossetia">
                              {" "}
                              South Ossetia{" "}
                            </option>
                            <option value="Spain"> Spain </option>
                            <option value="Sri Lanka"> Sri Lanka </option>
                            <option value="Sudan"> Sudan </option>
                            <option value="Suriname"> Suriname </option>
                            <option value="Svalbard"> Svalbard </option>
                            <option value="Swaziland"> Swaziland </option>
                            <option value="Sweden"> Sweden </option>
                            <option value="Switzerland"> Switzerland </option>
                            <option value="Syria"> Syria </option>
                            <option value="Tajikistan"> Tajikistan </option>
                            <option value="Tanzania"> Tanzania </option>
                            <option value="Thailand"> Thailand </option>
                            <option value="Timor-Leste"> Timor-Leste </option>
                            <option value="Togo"> Togo </option>
                            <option value="Tokelau"> Tokelau </option>
                            <option value="Tonga"> Tonga </option>
                            <option value="Trinidad and Tobago">
                              {" "}
                              Trinidad and Tobago{" "}
                            </option>
                            <option value="Tristan da Cunha">
                              {" "}
                              Tristan da Cunha{" "}
                            </option>
                            <option value="Tunisia"> Tunisia </option>
                            <option value="Turkey"> Turkey </option>
                            <option value="Turkmenistan"> Turkmenistan </option>
                            <option value="Turks and Caicos Islands">
                              {" "}
                              Turks and Caicos Islands{" "}
                            </option>
                            <option value="Tuvalu"> Tuvalu </option>
                            <option value="Uganda"> Uganda </option>
                            <option value="Ukraine"> Ukraine </option>
                            <option value="United Arab Emirates">
                              {" "}
                              United Arab Emirates{" "}
                            </option>
                            <option value="United Kingdom">
                              {" "}
                              United Kingdom{" "}
                            </option>
                            <option value="United States">
                              {" "}
                              United States{" "}
                            </option>
                            <option value="Uruguay"> Uruguay </option>
                            <option value="Uzbekistan"> Uzbekistan </option>
                            <option value="Vanuatu"> Vanuatu </option>
                            <option value="Vatican City"> Vatican City </option>
                            <option value="Venezuela"> Venezuela </option>
                            <option value="Vietnam"> Vietnam </option>
                            <option value="Virgin Islands, British">
                              {" "}
                              Virgin Islands, British{" "}
                            </option>
                            <option value="Virgin Islands, United States">
                              {" "}
                              Virgin Islands, United States{" "}
                            </option>
                            <option value="Wallis and Futuna">
                              {" "}
                              Wallis and Futuna{" "}
                            </option>
                            <option value="Western Sahara">
                              {" "}
                              Western Sahara{" "}
                            </option>
                            <option value="Yemen"> Yemen </option>
                            <option value="Zambia"> Zambia </option>
                            <option value="Zimbabwe"> Zimbabwe </option>
                            <option value="South Korea"> South Korea </option>
                            <option value="Taiwan"> Taiwan </option>
                            <option value="Macau"> Macau </option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-2 col-lg-2">
                        <div className="form-group">
                          <label className="control-label">
                            Education Mode{" "}
                            <sapn style={{ color: "red" }}>*</sapn>
                          </label>
                          <select
                            className="form-control"
                            id="DDLPGEduMode0"
                            name="DDLPGEduMode0"
                            required="required"
                          >
                            <option selected="selected" value="">
                              Select
                            </option>
                            <option value="Regular">Regular</option>
                            <option value="Part-Time">Part-Time</option>
                            <option value="Distance Learning / Online">
                              Distance Learning / Online
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-2 col-lg-2">
                        <div className="form-group">
                          <label className="control-label">
                            University / Institute
                            <sapn style={{ color: "red" }}>*</sapn>
                            <a
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Please start typing and choose from drop down list, please type full name if not available in drop down"
                            >
                              ?
                            </a>
                          </label>
                          <input
                            type="text"
                            className="form-control University"
                            id="TxtPGBoard0"
                            name="TxtPGBoard0"
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-md-2 col-lg-2">
                        <div className="form-group">
                          <label className="control-label">
                            College Name
                            <sapn style={{ color: "red" }}>*</sapn>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="TxtPGInst0"
                            name="TxtPGInst0"
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-md-2 col-lg-2">
                        <div className="form-group">
                          <label className="control-label">
                            Graduation Year{" "}
                            <sapn style={{ color: "red" }}>*</sapn>
                          </label>
                          <input
                            type="number"
                            min={1901}
                            max={2030}
                            className="form-control"
                            id="TxtPGYear0"
                            name="TxtPGYear0"
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-md-2 col-lg-2">
                        <div className="form-group">
                          <label className="control-label">
                            Area <sapn style={{ color: "red" }}>*</sapn>
                          </label>
                          <input
                            type="text"
                            className="form-control Specialization "
                            id="DDLPGSpecialization0"
                            name="DDLPGSpecialization0"
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-md-2 col-lg-2">
                        <div className="form-group">
                          <label className="control-label">
                            Division <sapn style={{ color: "red" }}>*</sapn>{" "}
                          </label>
                          <select
                            className="form-control"
                            id="TxtPGdivision0"
                            name="TxtPGdivision0"
                            required="required"
                          >
                            <option value="">Select Division</option>
                            <option value="First"> First </option>
                            <option value="Second"> Second </option>
                            <option value="Third"> Third </option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-2 col-lg-2">
                        <div className="form-group">
                          <label className="control-label">
                            % aggregate marks{" "}
                            <sapn style={{ color: "red" }}>*</sapn>
                          </label>
                          <input
                            type="number"
                            min={20.0}
                            max="99.99"
                            className="form-control"
                            id="TxtPGmarks0"
                            name="TxtPGmarks0"
                            required="required"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-2 col-lg-2">
                  <div className="row">
                    <div className="form-group">
                      <a
                        id="btnMorePostGradution"
                        className="btn btn-success btn-xs"
                      >
                        Add More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div id="MPhilRow">
                <div className="row">
                  <div className="col-md-2 col-lg-2">
                    <b>M Phil</b>
                  </div>
                  <div className="col-md-10 col-lg-10">
                    <div className="row">
                      <div className="col-md-2 col-lg-2">
                        <div className="form-group">
                          <label className="control-label">Country</label>
                          <select
                            className="form-control Country"
                            id="DDLMPCountry0"
                            name="DDLMPCountry0"
                          >
                            <option value="">Select Country</option>
                            <option value="India" selected="">
                              {" "}
                              India{" "}
                            </option>
                            <option value="Abkhazia"> Abkhazia </option>
                            <option value="Afghanistan"> Afghanistan </option>
                            <option value="Akrotiri and Dhekelia">
                              {" "}
                              Akrotiri and Dhekelia{" "}
                            </option>
                            <option value="Aland"> Aland </option>
                            <option value="Albania"> Albania </option>
                            <option value="Algeria"> Algeria </option>
                            <option value="American Samoa">
                              {" "}
                              American Samoa{" "}
                            </option>
                            <option value="Andorra"> Andorra </option>
                            <option value="Angola"> Angola </option>
                            <option value="Anguilla"> Anguilla </option>
                            <option value="Antigua and Barbuda">
                              {" "}
                              Antigua and Barbuda{" "}
                            </option>
                            <option value="Argentina"> Argentina </option>
                            <option value="Armenia"> Armenia </option>
                            <option value="Aruba"> Aruba </option>
                            <option value="Ascension Island">
                              {" "}
                              Ascension Island{" "}
                            </option>
                            <option value="Australia"> Australia </option>
                            <option value="Austria"> Austria </option>
                            <option value="Azerbaijan"> Azerbaijan </option>
                            <option value="Bahamas"> Bahamas </option>
                            <option value="Bahrain"> Bahrain </option>
                            <option value="Bangladesh"> Bangladesh </option>
                            <option value="Barbados"> Barbados </option>
                            <option value="Belarus"> Belarus </option>
                            <option value="Belgium"> Belgium </option>
                            <option value="Belize"> Belize </option>
                            <option value="Benin"> Benin </option>
                            <option value="Bermuda"> Bermuda </option>
                            <option value="Bhutan"> Bhutan </option>
                            <option value="Bolivia"> Bolivia </option>
                            <option value="Bosnia and Herzegovina">
                              {" "}
                              Bosnia and Herzegovina{" "}
                            </option>
                            <option value="Botswana"> Botswana </option>
                            <option value="Brazil"> Brazil </option>
                            <option value="Brunei"> Brunei </option>
                            <option value="Bulgaria"> Bulgaria </option>
                            <option value="Burkina Faso"> Burkina Faso </option>
                            <option value="Burundi"> Burundi </option>
                            <option value="Cambodia"> Cambodia </option>
                            <option value="Cameroon"> Cameroon </option>
                            <option value="Canada"> Canada </option>
                            <option value="Cape Verde"> Cape Verde </option>
                            <option value="Cayman Islands">
                              {" "}
                              Cayman Islands{" "}
                            </option>
                            <option value="Central African Republic">
                              {" "}
                              Central African Republic{" "}
                            </option>
                            <option value="Chad"> Chad </option>
                            <option value="Chile"> Chile </option>
                            <option value="China"> China </option>
                            <option value="Christmas Island">
                              {" "}
                              Christmas Island{" "}
                            </option>
                            <option value="Cocos (Keeling) Islands">
                              {" "}
                              Cocos (Keeling) Islands{" "}
                            </option>
                            <option value="Colombia"> Colombia </option>
                            <option value="Comoros"> Comoros </option>
                            <option value="Congo"> Congo </option>
                            <option value="Cook Islands"> Cook Islands </option>
                            <option value="Costa Rica"> Costa Rica </option>
                            <option value="Côte d'Ivoire">
                              {" "}
                              Côte d'Ivoire{" "}
                            </option>
                            <option value="Croatia"> Croatia </option>
                            <option value="Cuba"> Cuba </option>
                            <option value="Cyprus"> Cyprus </option>
                            <option value="Czech Republic">
                              {" "}
                              Czech Republic{" "}
                            </option>
                            <option value="Denmark"> Denmark </option>
                            <option value="Djibouti"> Djibouti </option>
                            <option value="Dominica"> Dominica </option>
                            <option value="Dominican Republic">
                              {" "}
                              Dominican Republic{" "}
                            </option>
                            <option value="Ecuador"> Ecuador </option>
                            <option value="Egypt"> Egypt </option>
                            <option value="El Salvador"> El Salvador </option>
                            <option value="Equatorial Guinea">
                              {" "}
                              Equatorial Guinea{" "}
                            </option>
                            <option value="Eritrea"> Eritrea </option>
                            <option value="Estonia"> Estonia </option>
                            <option value="Ethiopia"> Ethiopia </option>
                            <option value="Falkland Islands">
                              {" "}
                              Falkland Islands{" "}
                            </option>
                            <option value="Faroe Islands">
                              {" "}
                              Faroe Islands{" "}
                            </option>
                            <option value="Fiji"> Fiji </option>
                            <option value="Finland"> Finland </option>
                            <option value="France"> France </option>
                            <option value="French Polynesia">
                              {" "}
                              French Polynesia{" "}
                            </option>
                            <option value="Gabon"> Gabon </option>
                            <option value="Gambia"> Gambia </option>
                            <option value="Georgia"> Georgia </option>
                            <option value="Germany"> Germany </option>
                            <option value="Ghana"> Ghana </option>
                            <option value="Gibraltar"> Gibraltar </option>
                            <option value="Greece"> Greece </option>
                            <option value="Greenland"> Greenland </option>
                            <option value="Grenada"> Grenada </option>
                            <option value="Guam"> Guam </option>
                            <option value="Guatemala"> Guatemala </option>
                            <option value="Guernsey"> Guernsey </option>
                            <option value="Guinea"> Guinea </option>
                            <option value="Guinea-Bissau">
                              {" "}
                              Guinea-Bissau{" "}
                            </option>
                            <option value="Guyana"> Guyana </option>
                            <option value="Haiti"> Haiti </option>
                            <option value="Honduras"> Honduras </option>
                            <option value="Hong Kong"> Hong Kong </option>
                            <option value="Hungary"> Hungary </option>
                            <option value="Iceland"> Iceland </option>
                            <option value="Indonesia"> Indonesia </option>
                            <option value="Iran"> Iran </option>
                            <option value="Iraq"> Iraq </option>
                            <option value="Ireland"> Ireland </option>
                            <option value="Isle of Man"> Isle of Man </option>
                            <option value="Israel"> Israel </option>
                            <option value="Italy"> Italy </option>
                            <option value="Jamaica"> Jamaica </option>
                            <option value="Japan"> Japan </option>
                            <option value="Jersey"> Jersey </option>
                            <option value="Jordan"> Jordan </option>
                            <option value="Kazakhstan"> Kazakhstan </option>
                            <option value="Kenya"> Kenya </option>
                            <option value="Kiribati"> Kiribati </option>
                            <option value="Korea"> Korea </option>
                            <option value="Kosovo"> Kosovo </option>
                            <option value="Kuwait"> Kuwait </option>
                            <option value="Kyrgyzstan"> Kyrgyzstan </option>
                            <option value="Laos"> Laos </option>
                            <option value="Latvia"> Latvia </option>
                            <option value="Lebanon"> Lebanon </option>
                            <option value="Lesotho"> Lesotho </option>
                            <option value="Liberia"> Liberia </option>
                            <option value="Libya"> Libya </option>
                            <option value="Liechtenstein">
                              {" "}
                              Liechtenstein{" "}
                            </option>
                            <option value="Lithuania"> Lithuania </option>
                            <option value="Luxembourg"> Luxembourg </option>
                            <option value="Macao"> Macao </option>
                            <option value="Macedonia"> Macedonia </option>
                            <option value="Madagascar"> Madagascar </option>
                            <option value="Malawi"> Malawi </option>
                            <option value="Malaysia"> Malaysia </option>
                            <option value="Maldives"> Maldives </option>
                            <option value="Mali"> Mali </option>
                            <option value="Malta"> Malta </option>
                            <option value="Marshall Islands">
                              {" "}
                              Marshall Islands{" "}
                            </option>
                            <option value="Mauritania"> Mauritania </option>
                            <option value="Mauritius"> Mauritius </option>
                            <option value="Mayotte"> Mayotte </option>
                            <option value="Mexico"> Mexico </option>
                            <option value="Micronesia"> Micronesia </option>
                            <option value="Moldova"> Moldova </option>
                            <option value="Monaco"> Monaco </option>
                            <option value="Mongolia"> Mongolia </option>
                            <option value="Montenegro"> Montenegro </option>
                            <option value="Montserrat"> Montserrat </option>
                            <option value="Morocco"> Morocco </option>
                            <option value="Mozambique"> Mozambique </option>
                            <option value="Myanmar"> Myanmar </option>
                            <option value="Nagorno-Karabakh">
                              {" "}
                              Nagorno-Karabakh{" "}
                            </option>
                            <option value="Namibia"> Namibia </option>
                            <option value="Nauru"> Nauru </option>
                            <option value="Nepal"> Nepal </option>
                            <option value="Netherlands"> Netherlands </option>
                            <option value="Netherlands Antilles">
                              {" "}
                              Netherlands Antilles{" "}
                            </option>
                            <option value="New Caledonia">
                              {" "}
                              New Caledonia{" "}
                            </option>
                            <option value="New Zealand"> New Zealand </option>
                            <option value="Nicaragua"> Nicaragua </option>
                            <option value="Niger"> Niger </option>
                            <option value="Nigeria"> Nigeria </option>
                            <option value="Niue"> Niue </option>
                            <option value="Norfolk Island">
                              {" "}
                              Norfolk Island{" "}
                            </option>
                            <option value="Northern Cyprus">
                              {" "}
                              Northern Cyprus{" "}
                            </option>
                            <option value="Northern Mariana Islands">
                              {" "}
                              Northern Mariana Islands{" "}
                            </option>
                            <option value="Norway"> Norway </option>
                            <option value="Oman"> Oman </option>
                            <option value="Pakistan"> Pakistan </option>
                            <option value="Palau"> Palau </option>
                            <option value="Palestine"> Palestine </option>
                            <option value="Panama"> Panama </option>
                            <option value="Papua New Guinea">
                              {" "}
                              Papua New Guinea{" "}
                            </option>
                            <option value="Paraguay"> Paraguay </option>
                            <option value="Peru"> Peru </option>
                            <option value="Philippines"> Philippines </option>
                            <option value="Pitcairn Islands">
                              {" "}
                              Pitcairn Islands{" "}
                            </option>
                            <option value="Poland"> Poland </option>
                            <option value="Portugal"> Portugal </option>
                            <option value="Pridnestrovie">
                              {" "}
                              Pridnestrovie{" "}
                            </option>
                            <option value="Puerto Rico"> Puerto Rico </option>
                            <option value="Qatar"> Qatar </option>
                            <option value="Romania"> Romania </option>
                            <option value="Russia"> Russia </option>
                            <option value="Rwanda"> Rwanda </option>
                            <option value="Saint Helena"> Saint Helena </option>
                            <option value="Saint Kitts and Nevis">
                              {" "}
                              Saint Kitts and Nevis{" "}
                            </option>
                            <option value="Saint Lucia"> Saint Lucia </option>
                            <option value="Saint Pierre and Miquelon">
                              {" "}
                              Saint Pierre and Miquelon{" "}
                            </option>
                            <option value="Saint Vincent and the Grenadines">
                              {" "}
                              Saint Vincent and the Grenadines{" "}
                            </option>
                            <option value="Samoa"> Samoa </option>
                            <option value="San Marino"> San Marino </option>
                            <option value="São Tomé and Príncipe">
                              {" "}
                              São Tomé and Príncipe{" "}
                            </option>
                            <option value="Saudi Arabia"> Saudi Arabia </option>
                            <option value="Senegal"> Senegal </option>
                            <option value="Serbia"> Serbia </option>
                            <option value="Seychelles"> Seychelles </option>
                            <option value="Sierra Leone"> Sierra Leone </option>
                            <option value="Singapore"> Singapore </option>
                            <option value="Slovakia"> Slovakia </option>
                            <option value="Slovenia"> Slovenia </option>
                            <option value="Solomon Islands">
                              {" "}
                              Solomon Islands{" "}
                            </option>
                            <option value="Somalia"> Somalia </option>
                            <option value="Somaliland"> Somaliland </option>
                            <option value="South Africa"> South Africa </option>
                            <option value="South Ossetia">
                              {" "}
                              South Ossetia{" "}
                            </option>
                            <option value="Spain"> Spain </option>
                            <option value="Sri Lanka"> Sri Lanka </option>
                            <option value="Sudan"> Sudan </option>
                            <option value="Suriname"> Suriname </option>
                            <option value="Svalbard"> Svalbard </option>
                            <option value="Swaziland"> Swaziland </option>
                            <option value="Sweden"> Sweden </option>
                            <option value="Switzerland"> Switzerland </option>
                            <option value="Syria"> Syria </option>
                            <option value="Tajikistan"> Tajikistan </option>
                            <option value="Tanzania"> Tanzania </option>
                            <option value="Thailand"> Thailand </option>
                            <option value="Timor-Leste"> Timor-Leste </option>
                            <option value="Togo"> Togo </option>
                            <option value="Tokelau"> Tokelau </option>
                            <option value="Tonga"> Tonga </option>
                            <option value="Trinidad and Tobago">
                              {" "}
                              Trinidad and Tobago{" "}
                            </option>
                            <option value="Tristan da Cunha">
                              {" "}
                              Tristan da Cunha{" "}
                            </option>
                            <option value="Tunisia"> Tunisia </option>
                            <option value="Turkey"> Turkey </option>
                            <option value="Turkmenistan"> Turkmenistan </option>
                            <option value="Turks and Caicos Islands">
                              {" "}
                              Turks and Caicos Islands{" "}
                            </option>
                            <option value="Tuvalu"> Tuvalu </option>
                            <option value="Uganda"> Uganda </option>
                            <option value="Ukraine"> Ukraine </option>
                            <option value="United Arab Emirates">
                              {" "}
                              United Arab Emirates{" "}
                            </option>
                            <option value="United Kingdom">
                              {" "}
                              United Kingdom{" "}
                            </option>
                            <option value="United States">
                              {" "}
                              United States{" "}
                            </option>
                            <option value="Uruguay"> Uruguay </option>
                            <option value="Uzbekistan"> Uzbekistan </option>
                            <option value="Vanuatu"> Vanuatu </option>
                            <option value="Vatican City"> Vatican City </option>
                            <option value="Venezuela"> Venezuela </option>
                            <option value="Vietnam"> Vietnam </option>
                            <option value="Virgin Islands, British">
                              {" "}
                              Virgin Islands, British{" "}
                            </option>
                            <option value="Virgin Islands, United States">
                              {" "}
                              Virgin Islands, United States{" "}
                            </option>
                            <option value="Wallis and Futuna">
                              {" "}
                              Wallis and Futuna{" "}
                            </option>
                            <option value="Western Sahara">
                              {" "}
                              Western Sahara{" "}
                            </option>
                            <option value="Yemen"> Yemen </option>
                            <option value="Zambia"> Zambia </option>
                            <option value="Zimbabwe"> Zimbabwe </option>
                            <option value="South Korea"> South Korea </option>
                            <option value="Taiwan"> Taiwan </option>
                            <option value="Macau"> Macau </option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-2 col-lg-2">
                        <div className="form-group">
                          <label className="control-label">
                            Education Mode
                          </label>
                          <select
                            className="form-control"
                            id="DDLMPEduMode0"
                            name="DDLMPEduMode0"
                          >
                            <option selected="selected" value="">
                              Select
                            </option>
                            <option value="Regular">Regular</option>
                            <option value="Part-Time">Part-Time</option>
                            <option value="Distance Learning / Online">
                              Distance Learning / Online
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-2 col-lg-2">
                        <div className="form-group">
                          <label className="control-label">
                            University / Institute{" "}
                            <a
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Please start typing and choose from drop down list, please type full name if not available in drop down"
                            >
                              ?
                            </a>
                          </label>
                          <input
                            type="text"
                            className="form-control University"
                            id="TxtMPBoard0"
                            name="TxtMPBoard0"
                          />
                        </div>
                      </div>
                      <div className="col-md-2 col-lg-2">
                        <div className="form-group">
                          <label className="control-label">College Name </label>
                          <input
                            type="text"
                            className="form-control"
                            id="TxtMPInst0"
                            name="TxtMPInst0"
                          />
                        </div>
                      </div>
                      <div className="col-md-2 col-lg-2">
                        <div className="form-group">
                          <label className="control-label">
                            Graduation Year
                          </label>
                          <input
                            type="number"
                            min={1901}
                            max={2030}
                            className="form-control"
                            id="TxtMPYear0"
                            name="TxtMPYear0"
                          />
                        </div>
                      </div>
                      <div className="col-md-2 col-lg-2">
                        <div className="form-group">
                          <label className="control-label">Area </label>
                          <input
                            type="text"
                            className="form-control Specialization "
                            id="DDLMPSpecialization0"
                            name="DDLMPSpecialization0"
                          />
                        </div>
                      </div>
                      <div className="col-md-2 col-lg-2">
                        <div className="form-group">
                          <label className="control-label">Division </label>
                          <select
                            className="form-control"
                            id="TxtMPdivision0"
                            name="TxtMPdivision0"
                          >
                            <option value="">Select Division</option>
                            <option value="First"> First </option>
                            <option value="Second"> Second </option>
                            <option value="Third"> Third </option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-2 col-lg-2">
                        <div className="form-group">
                          <label className="control-label">
                            % aggregate marks
                          </label>
                          <input
                            type="number"
                            min={20.0}
                            max="99.99"
                            className="form-control"
                            id="TxtMPmarks0"
                            name="TxtMPmarks0"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-2 col-lg-2">
                  <div className="row">
                    <div className="form-group">
                      <a id="btnMoreMPhil" className="btn btn-success btn-xs">
                        Add More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div id="PHDRow">
                <div className="row">
                  <div className="col-md-2 col-lg-2">
                    <b> Ph.D </b>
                  </div>
                  <div className="col-md-10 col-lg-10">
                    <div className="row">
                      <div className="col-md-2 col-lg-2">
                        <div className="form-group">
                          <label className="control-label">Status</label>
                          <select
                            className="form-control"
                            id="DDLPHDStatus0"
                            name="DDLPHDStatus0"
                          >
                            <option selected="selected" value="">
                              Select
                            </option>
                            <option value="Pursuing">Pursuing</option>
                            <option value="Awarded">Awarded</option>
                            <option value="Thesis Submited">
                              Thesis Submited
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-2 col-lg-2">
                        <div className="form-group">
                          <label className="control-label">Country</label>
                          <select
                            className="form-control Country"
                            id="DDLPHDCountry0"
                            name="DDLPHDCountry0"
                          >
                            <option value="">Select Country</option>
                            <option value="India"> India </option>
                            <option value="Abkhazia"> Abkhazia </option>
                            <option value="Afghanistan"> Afghanistan </option>
                            <option value="Akrotiri and Dhekelia">
                              {" "}
                              Akrotiri and Dhekelia{" "}
                            </option>
                            <option value="Aland"> Aland </option>
                            <option value="Albania"> Albania </option>
                            <option value="Algeria"> Algeria </option>
                            <option value="American Samoa">
                              {" "}
                              American Samoa{" "}
                            </option>
                            <option value="Andorra"> Andorra </option>
                            <option value="Angola"> Angola </option>
                            <option value="Anguilla"> Anguilla </option>
                            <option value="Antigua and Barbuda">
                              {" "}
                              Antigua and Barbuda{" "}
                            </option>
                            <option value="Argentina"> Argentina </option>
                            <option value="Armenia"> Armenia </option>
                            <option value="Aruba"> Aruba </option>
                            <option value="Ascension Island">
                              {" "}
                              Ascension Island{" "}
                            </option>
                            <option value="Australia"> Australia </option>
                            <option value="Austria"> Austria </option>
                            <option value="Azerbaijan"> Azerbaijan </option>
                            <option value="Bahamas"> Bahamas </option>
                            <option value="Bahrain"> Bahrain </option>
                            <option value="Bangladesh"> Bangladesh </option>
                            <option value="Barbados"> Barbados </option>
                            <option value="Belarus"> Belarus </option>
                            <option value="Belgium"> Belgium </option>
                            <option value="Belize"> Belize </option>
                            <option value="Benin"> Benin </option>
                            <option value="Bermuda"> Bermuda </option>
                            <option value="Bhutan"> Bhutan </option>
                            <option value="Bolivia"> Bolivia </option>
                            <option value="Bosnia and Herzegovina">
                              {" "}
                              Bosnia and Herzegovina{" "}
                            </option>
                            <option value="Botswana"> Botswana </option>
                            <option value="Brazil"> Brazil </option>
                            <option value="Brunei"> Brunei </option>
                            <option value="Bulgaria"> Bulgaria </option>
                            <option value="Burkina Faso"> Burkina Faso </option>
                            <option value="Burundi"> Burundi </option>
                            <option value="Cambodia"> Cambodia </option>
                            <option value="Cameroon"> Cameroon </option>
                            <option value="Canada"> Canada </option>
                            <option value="Cape Verde"> Cape Verde </option>
                            <option value="Cayman Islands">
                              {" "}
                              Cayman Islands{" "}
                            </option>
                            <option value="Central African Republic">
                              {" "}
                              Central African Republic{" "}
                            </option>
                            <option value="Chad"> Chad </option>
                            <option value="Chile"> Chile </option>
                            <option value="China"> China </option>
                            <option value="Christmas Island">
                              {" "}
                              Christmas Island{" "}
                            </option>
                            <option value="Cocos (Keeling) Islands">
                              {" "}
                              Cocos (Keeling) Islands{" "}
                            </option>
                            <option value="Colombia"> Colombia </option>
                            <option value="Comoros"> Comoros </option>
                            <option value="Congo"> Congo </option>
                            <option value="Cook Islands"> Cook Islands </option>
                            <option value="Costa Rica"> Costa Rica </option>
                            <option value="Côte d'Ivoire">
                              {" "}
                              Côte d'Ivoire{" "}
                            </option>
                            <option value="Croatia"> Croatia </option>
                            <option value="Cuba"> Cuba </option>
                            <option value="Cyprus"> Cyprus </option>
                            <option value="Czech Republic">
                              {" "}
                              Czech Republic{" "}
                            </option>
                            <option value="Denmark"> Denmark </option>
                            <option value="Djibouti"> Djibouti </option>
                            <option value="Dominica"> Dominica </option>
                            <option value="Dominican Republic">
                              {" "}
                              Dominican Republic{" "}
                            </option>
                            <option value="Ecuador"> Ecuador </option>
                            <option value="Egypt"> Egypt </option>
                            <option value="El Salvador"> El Salvador </option>
                            <option value="Equatorial Guinea">
                              {" "}
                              Equatorial Guinea{" "}
                            </option>
                            <option value="Eritrea"> Eritrea </option>
                            <option value="Estonia"> Estonia </option>
                            <option value="Ethiopia"> Ethiopia </option>
                            <option value="Falkland Islands">
                              {" "}
                              Falkland Islands{" "}
                            </option>
                            <option value="Faroe Islands">
                              {" "}
                              Faroe Islands{" "}
                            </option>
                            <option value="Fiji"> Fiji </option>
                            <option value="Finland"> Finland </option>
                            <option value="France"> France </option>
                            <option value="French Polynesia">
                              {" "}
                              French Polynesia{" "}
                            </option>
                            <option value="Gabon"> Gabon </option>
                            <option value="Gambia"> Gambia </option>
                            <option value="Georgia"> Georgia </option>
                            <option value="Germany"> Germany </option>
                            <option value="Ghana"> Ghana </option>
                            <option value="Gibraltar"> Gibraltar </option>
                            <option value="Greece"> Greece </option>
                            <option value="Greenland"> Greenland </option>
                            <option value="Grenada"> Grenada </option>
                            <option value="Guam"> Guam </option>
                            <option value="Guatemala"> Guatemala </option>
                            <option value="Guernsey"> Guernsey </option>
                            <option value="Guinea"> Guinea </option>
                            <option value="Guinea-Bissau">
                              {" "}
                              Guinea-Bissau{" "}
                            </option>
                            <option value="Guyana"> Guyana </option>
                            <option value="Haiti"> Haiti </option>
                            <option value="Honduras"> Honduras </option>
                            <option value="Hong Kong"> Hong Kong </option>
                            <option value="Hungary"> Hungary </option>
                            <option value="Iceland"> Iceland </option>
                            <option value="Indonesia"> Indonesia </option>
                            <option value="Iran"> Iran </option>
                            <option value="Iraq"> Iraq </option>
                            <option value="Ireland"> Ireland </option>
                            <option value="Isle of Man"> Isle of Man </option>
                            <option value="Israel"> Israel </option>
                            <option value="Italy"> Italy </option>
                            <option value="Jamaica"> Jamaica </option>
                            <option value="Japan"> Japan </option>
                            <option value="Jersey"> Jersey </option>
                            <option value="Jordan"> Jordan </option>
                            <option value="Kazakhstan"> Kazakhstan </option>
                            <option value="Kenya"> Kenya </option>
                            <option value="Kiribati"> Kiribati </option>
                            <option value="Korea"> Korea </option>
                            <option value="Kosovo"> Kosovo </option>
                            <option value="Kuwait"> Kuwait </option>
                            <option value="Kyrgyzstan"> Kyrgyzstan </option>
                            <option value="Laos"> Laos </option>
                            <option value="Latvia"> Latvia </option>
                            <option value="Lebanon"> Lebanon </option>
                            <option value="Lesotho"> Lesotho </option>
                            <option value="Liberia"> Liberia </option>
                            <option value="Libya"> Libya </option>
                            <option value="Liechtenstein">
                              {" "}
                              Liechtenstein{" "}
                            </option>
                            <option value="Lithuania"> Lithuania </option>
                            <option value="Luxembourg"> Luxembourg </option>
                            <option value="Macao"> Macao </option>
                            <option value="Macedonia"> Macedonia </option>
                            <option value="Madagascar"> Madagascar </option>
                            <option value="Malawi"> Malawi </option>
                            <option value="Malaysia"> Malaysia </option>
                            <option value="Maldives"> Maldives </option>
                            <option value="Mali"> Mali </option>
                            <option value="Malta"> Malta </option>
                            <option value="Marshall Islands">
                              {" "}
                              Marshall Islands{" "}
                            </option>
                            <option value="Mauritania"> Mauritania </option>
                            <option value="Mauritius"> Mauritius </option>
                            <option value="Mayotte"> Mayotte </option>
                            <option value="Mexico"> Mexico </option>
                            <option value="Micronesia"> Micronesia </option>
                            <option value="Moldova"> Moldova </option>
                            <option value="Monaco"> Monaco </option>
                            <option value="Mongolia"> Mongolia </option>
                            <option value="Montenegro"> Montenegro </option>
                            <option value="Montserrat"> Montserrat </option>
                            <option value="Morocco"> Morocco </option>
                            <option value="Mozambique"> Mozambique </option>
                            <option value="Myanmar"> Myanmar </option>
                            <option value="Nagorno-Karabakh">
                              {" "}
                              Nagorno-Karabakh{" "}
                            </option>
                            <option value="Namibia"> Namibia </option>
                            <option value="Nauru"> Nauru </option>
                            <option value="Nepal"> Nepal </option>
                            <option value="Netherlands"> Netherlands </option>
                            <option value="Netherlands Antilles">
                              {" "}
                              Netherlands Antilles{" "}
                            </option>
                            <option value="New Caledonia">
                              {" "}
                              New Caledonia{" "}
                            </option>
                            <option value="New Zealand"> New Zealand </option>
                            <option value="Nicaragua"> Nicaragua </option>
                            <option value="Niger"> Niger </option>
                            <option value="Nigeria"> Nigeria </option>
                            <option value="Niue"> Niue </option>
                            <option value="Norfolk Island">
                              {" "}
                              Norfolk Island{" "}
                            </option>
                            <option value="Northern Cyprus">
                              {" "}
                              Northern Cyprus{" "}
                            </option>
                            <option value="Northern Mariana Islands">
                              {" "}
                              Northern Mariana Islands{" "}
                            </option>
                            <option value="Norway"> Norway </option>
                            <option value="Oman"> Oman </option>
                            <option value="Pakistan"> Pakistan </option>
                            <option value="Palau"> Palau </option>
                            <option value="Palestine"> Palestine </option>
                            <option value="Panama"> Panama </option>
                            <option value="Papua New Guinea">
                              {" "}
                              Papua New Guinea{" "}
                            </option>
                            <option value="Paraguay"> Paraguay </option>
                            <option value="Peru"> Peru </option>
                            <option value="Philippines"> Philippines </option>
                            <option value="Pitcairn Islands">
                              {" "}
                              Pitcairn Islands{" "}
                            </option>
                            <option value="Poland"> Poland </option>
                            <option value="Portugal"> Portugal </option>
                            <option value="Pridnestrovie">
                              {" "}
                              Pridnestrovie{" "}
                            </option>
                            <option value="Puerto Rico"> Puerto Rico </option>
                            <option value="Qatar"> Qatar </option>
                            <option value="Romania"> Romania </option>
                            <option value="Russia"> Russia </option>
                            <option value="Rwanda"> Rwanda </option>
                            <option value="Saint Helena"> Saint Helena </option>
                            <option value="Saint Kitts and Nevis">
                              {" "}
                              Saint Kitts and Nevis{" "}
                            </option>
                            <option value="Saint Lucia"> Saint Lucia </option>
                            <option value="Saint Pierre and Miquelon">
                              {" "}
                              Saint Pierre and Miquelon{" "}
                            </option>
                            <option value="Saint Vincent and the Grenadines">
                              {" "}
                              Saint Vincent and the Grenadines{" "}
                            </option>
                            <option value="Samoa"> Samoa </option>
                            <option value="San Marino"> San Marino </option>
                            <option value="São Tomé and Príncipe">
                              {" "}
                              São Tomé and Príncipe{" "}
                            </option>
                            <option value="Saudi Arabia"> Saudi Arabia </option>
                            <option value="Senegal"> Senegal </option>
                            <option value="Serbia"> Serbia </option>
                            <option value="Seychelles"> Seychelles </option>
                            <option value="Sierra Leone"> Sierra Leone </option>
                            <option value="Singapore"> Singapore </option>
                            <option value="Slovakia"> Slovakia </option>
                            <option value="Slovenia"> Slovenia </option>
                            <option value="Solomon Islands">
                              {" "}
                              Solomon Islands{" "}
                            </option>
                            <option value="Somalia"> Somalia </option>
                            <option value="Somaliland"> Somaliland </option>
                            <option value="South Africa"> South Africa </option>
                            <option value="South Ossetia">
                              {" "}
                              South Ossetia{" "}
                            </option>
                            <option value="Spain"> Spain </option>
                            <option value="Sri Lanka"> Sri Lanka </option>
                            <option value="Sudan"> Sudan </option>
                            <option value="Suriname"> Suriname </option>
                            <option value="Svalbard"> Svalbard </option>
                            <option value="Swaziland"> Swaziland </option>
                            <option value="Sweden"> Sweden </option>
                            <option value="Switzerland"> Switzerland </option>
                            <option value="Syria"> Syria </option>
                            <option value="Tajikistan"> Tajikistan </option>
                            <option value="Tanzania"> Tanzania </option>
                            <option value="Thailand"> Thailand </option>
                            <option value="Timor-Leste"> Timor-Leste </option>
                            <option value="Togo"> Togo </option>
                            <option value="Tokelau"> Tokelau </option>
                            <option value="Tonga"> Tonga </option>
                            <option value="Trinidad and Tobago">
                              {" "}
                              Trinidad and Tobago{" "}
                            </option>
                            <option value="Tristan da Cunha">
                              {" "}
                              Tristan da Cunha{" "}
                            </option>
                            <option value="Tunisia"> Tunisia </option>
                            <option value="Turkey"> Turkey </option>
                            <option value="Turkmenistan"> Turkmenistan </option>
                            <option value="Turks and Caicos Islands">
                              {" "}
                              Turks and Caicos Islands{" "}
                            </option>
                            <option value="Tuvalu"> Tuvalu </option>
                            <option value="Uganda"> Uganda </option>
                            <option value="Ukraine"> Ukraine </option>
                            <option value="United Arab Emirates">
                              {" "}
                              United Arab Emirates{" "}
                            </option>
                            <option value="United Kingdom">
                              {" "}
                              United Kingdom{" "}
                            </option>
                            <option value="United States">
                              {" "}
                              United States{" "}
                            </option>
                            <option value="Uruguay"> Uruguay </option>
                            <option value="Uzbekistan"> Uzbekistan </option>
                            <option value="Vanuatu"> Vanuatu </option>
                            <option value="Vatican City"> Vatican City </option>
                            <option value="Venezuela"> Venezuela </option>
                            <option value="Vietnam"> Vietnam </option>
                            <option value="Virgin Islands, British">
                              {" "}
                              Virgin Islands, British{" "}
                            </option>
                            <option value="Virgin Islands, United States">
                              {" "}
                              Virgin Islands, United States{" "}
                            </option>
                            <option value="Wallis and Futuna">
                              {" "}
                              Wallis and Futuna{" "}
                            </option>
                            <option value="Western Sahara">
                              {" "}
                              Western Sahara{" "}
                            </option>
                            <option value="Yemen"> Yemen </option>
                            <option value="Zambia"> Zambia </option>
                            <option value="Zimbabwe"> Zimbabwe </option>
                            <option value="South Korea"> South Korea </option>
                            <option value="Taiwan"> Taiwan </option>
                            <option value="Macau"> Macau </option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-2 col-lg-2">
                        <div className="form-group">
                          <label className="control-label">
                            Education Mode
                          </label>
                          <select
                            className="form-control"
                            id="DDLPHDEduMode0"
                            name="DDLPHDEduMode0"
                          >
                            <option selected="selected" value="">
                              Select
                            </option>
                            <option value="Regular">Regular</option>
                            <option value="Part-Time">Part-Time</option>
                            <option value="Distance Learning / Online">
                              Distance Learning / Online
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-2 col-lg-2">
                        <div className="form-group">
                          <label className="control-label">
                            University / Institute{" "}
                            <a
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Please start typing and choose from drop down list, please type full name if not available in drop down"
                            >
                              ?
                            </a>
                          </label>
                          <input
                            type="text"
                            className="form-control University"
                            id="TxtPHDBoard0"
                            name="TxtPHDBoard0"
                          />
                        </div>
                      </div>
                      <div className="col-md-2 col-lg-2">
                        <div className="form-group">
                          <label className="control-label">College Name </label>
                          <input
                            type="text"
                            className="form-control"
                            id="TxtPHDInst0"
                            name="TxtPHDInst0"
                          />
                        </div>
                      </div>
                      <div className="col-md-2 col-lg-2">
                        <div className="form-group">
                          <label className="control-label">
                            Completion Year
                          </label>
                          <input
                            type="number"
                            min={1901}
                            max={2030}
                            className="form-control"
                            id="TxtPHDYear0"
                            name="TxtPHDYear0"
                          />
                        </div>
                      </div>
                      <div className="col-md-2 col-lg-2">
                        <div className="form-group">
                          <label className="control-label">Area </label>
                          <input
                            type="text"
                            className="form-control Specialization "
                            id="DDLPHDSpecialization0"
                            name="DDLPHDSpecialization0"
                          />
                        </div>
                      </div>
                      <div className="col-md-4 col-lg-4">
                        <div className="form-group">
                          <label className="control-label">
                            If pursuing,teaching experience during PhD
                          </label>
                          <div className="input-group">
                            <div className="btn-group radioBtn">
                              <a
                                className="btn btn-primary btn-sm notActive"
                                data-toggle="TeachingDuringPhd0"
                                data-title="Y"
                              >
                                Yes
                              </a>
                              <a
                                className="btn btn-primary btn-sm active"
                                data-toggle="TeachingDuringPhd0"
                                data-title="N"
                              >
                                No
                              </a>
                            </div>
                            <input
                              type="hidden"
                              name="TeachingDuringPhd0"
                              id="TeachingDuringPhd0"
                              defaultValue="N"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-lg-4">
                        <div className="form-group">
                          <label className="control-label">
                            Anticipated Completion Year
                          </label>
                          <input
                            type="number"
                            min={1901}
                            max={2030}
                            className="form-control"
                            id="TxtPHDAnticipatedCompletionYear0"
                            name="TxtPHDAnticipatedCompletionYear0"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-2 col-lg-2">
                  <div className="row">
                    <div className="form-group">
                      <a id="btnMorePHD" className="btn btn-success btn-xs">
                        Add More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div id="PostDoctoralRow">
                <div className="row">
                  <div className="col-md-2 col-lg-2">
                    <div className="row">
                      <div className="form-group">
                        <label className="control-label">Post Doctoral</label>
                        <label
                          className="control-label"
                          style={{
                            width: "100% !important",
                            display: "block",
                            height: 34
                          }}
                        >
                          &nbsp;
                        </label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group">
                        <label className="control-label">Course name</label>
                        <label className="control-label">
                          <input
                            type="text"
                            className="form-control"
                            id="TxtPDName0"
                            name="TxtPDName0"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-10 col-lg-10">
                    <div className="row">
                      <div className="col-md-2 col-lg-2">
                        <div className="form-group">
                          <label className="control-label">Country </label>
                          <select
                            className="form-control Country"
                            id="DDLPDCountry0"
                            name="DDLPDCountry0"
                          >
                            <option value="">Select Country</option>
                            <option value="India" selected="">
                              {" "}
                              India{" "}
                            </option>
                            <option value="Abkhazia"> Abkhazia </option>
                            <option value="Afghanistan"> Afghanistan </option>
                            <option value="Akrotiri and Dhekelia">
                              {" "}
                              Akrotiri and Dhekelia{" "}
                            </option>
                            <option value="Aland"> Aland </option>
                            <option value="Albania"> Albania </option>
                            <option value="Algeria"> Algeria </option>
                            <option value="American Samoa">
                              {" "}
                              American Samoa{" "}
                            </option>
                            <option value="Andorra"> Andorra </option>
                            <option value="Angola"> Angola </option>
                            <option value="Anguilla"> Anguilla </option>
                            <option value="Antigua and Barbuda">
                              {" "}
                              Antigua and Barbuda{" "}
                            </option>
                            <option value="Argentina"> Argentina </option>
                            <option value="Armenia"> Armenia </option>
                            <option value="Aruba"> Aruba </option>
                            <option value="Ascension Island">
                              {" "}
                              Ascension Island{" "}
                            </option>
                            <option value="Australia"> Australia </option>
                            <option value="Austria"> Austria </option>
                            <option value="Azerbaijan"> Azerbaijan </option>
                            <option value="Bahamas"> Bahamas </option>
                            <option value="Bahrain"> Bahrain </option>
                            <option value="Bangladesh"> Bangladesh </option>
                            <option value="Barbados"> Barbados </option>
                            <option value="Belarus"> Belarus </option>
                            <option value="Belgium"> Belgium </option>
                            <option value="Belize"> Belize </option>
                            <option value="Benin"> Benin </option>
                            <option value="Bermuda"> Bermuda </option>
                            <option value="Bhutan"> Bhutan </option>
                            <option value="Bolivia"> Bolivia </option>
                            <option value="Bosnia and Herzegovina">
                              {" "}
                              Bosnia and Herzegovina{" "}
                            </option>
                            <option value="Botswana"> Botswana </option>
                            <option value="Brazil"> Brazil </option>
                            <option value="Brunei"> Brunei </option>
                            <option value="Bulgaria"> Bulgaria </option>
                            <option value="Burkina Faso"> Burkina Faso </option>
                            <option value="Burundi"> Burundi </option>
                            <option value="Cambodia"> Cambodia </option>
                            <option value="Cameroon"> Cameroon </option>
                            <option value="Canada"> Canada </option>
                            <option value="Cape Verde"> Cape Verde </option>
                            <option value="Cayman Islands">
                              {" "}
                              Cayman Islands{" "}
                            </option>
                            <option value="Central African Republic">
                              {" "}
                              Central African Republic{" "}
                            </option>
                            <option value="Chad"> Chad </option>
                            <option value="Chile"> Chile </option>
                            <option value="China"> China </option>
                            <option value="Christmas Island">
                              {" "}
                              Christmas Island{" "}
                            </option>
                            <option value="Cocos (Keeling) Islands">
                              {" "}
                              Cocos (Keeling) Islands{" "}
                            </option>
                            <option value="Colombia"> Colombia </option>
                            <option value="Comoros"> Comoros </option>
                            <option value="Congo"> Congo </option>
                            <option value="Cook Islands"> Cook Islands </option>
                            <option value="Costa Rica"> Costa Rica </option>
                            <option value="Côte d'Ivoire">
                              {" "}
                              Côte d'Ivoire{" "}
                            </option>
                            <option value="Croatia"> Croatia </option>
                            <option value="Cuba"> Cuba </option>
                            <option value="Cyprus"> Cyprus </option>
                            <option value="Czech Republic">
                              {" "}
                              Czech Republic{" "}
                            </option>
                            <option value="Denmark"> Denmark </option>
                            <option value="Djibouti"> Djibouti </option>
                            <option value="Dominica"> Dominica </option>
                            <option value="Dominican Republic">
                              {" "}
                              Dominican Republic{" "}
                            </option>
                            <option value="Ecuador"> Ecuador </option>
                            <option value="Egypt"> Egypt </option>
                            <option value="El Salvador"> El Salvador </option>
                            <option value="Equatorial Guinea">
                              {" "}
                              Equatorial Guinea{" "}
                            </option>
                            <option value="Eritrea"> Eritrea </option>
                            <option value="Estonia"> Estonia </option>
                            <option value="Ethiopia"> Ethiopia </option>
                            <option value="Falkland Islands">
                              {" "}
                              Falkland Islands{" "}
                            </option>
                            <option value="Faroe Islands">
                              {" "}
                              Faroe Islands{" "}
                            </option>
                            <option value="Fiji"> Fiji </option>
                            <option value="Finland"> Finland </option>
                            <option value="France"> France </option>
                            <option value="French Polynesia">
                              {" "}
                              French Polynesia{" "}
                            </option>
                            <option value="Gabon"> Gabon </option>
                            <option value="Gambia"> Gambia </option>
                            <option value="Georgia"> Georgia </option>
                            <option value="Germany"> Germany </option>
                            <option value="Ghana"> Ghana </option>
                            <option value="Gibraltar"> Gibraltar </option>
                            <option value="Greece"> Greece </option>
                            <option value="Greenland"> Greenland </option>
                            <option value="Grenada"> Grenada </option>
                            <option value="Guam"> Guam </option>
                            <option value="Guatemala"> Guatemala </option>
                            <option value="Guernsey"> Guernsey </option>
                            <option value="Guinea"> Guinea </option>
                            <option value="Guinea-Bissau">
                              {" "}
                              Guinea-Bissau{" "}
                            </option>
                            <option value="Guyana"> Guyana </option>
                            <option value="Haiti"> Haiti </option>
                            <option value="Honduras"> Honduras </option>
                            <option value="Hong Kong"> Hong Kong </option>
                            <option value="Hungary"> Hungary </option>
                            <option value="Iceland"> Iceland </option>
                            <option value="Indonesia"> Indonesia </option>
                            <option value="Iran"> Iran </option>
                            <option value="Iraq"> Iraq </option>
                            <option value="Ireland"> Ireland </option>
                            <option value="Isle of Man"> Isle of Man </option>
                            <option value="Israel"> Israel </option>
                            <option value="Italy"> Italy </option>
                            <option value="Jamaica"> Jamaica </option>
                            <option value="Japan"> Japan </option>
                            <option value="Jersey"> Jersey </option>
                            <option value="Jordan"> Jordan </option>
                            <option value="Kazakhstan"> Kazakhstan </option>
                            <option value="Kenya"> Kenya </option>
                            <option value="Kiribati"> Kiribati </option>
                            <option value="Korea"> Korea </option>
                            <option value="Kosovo"> Kosovo </option>
                            <option value="Kuwait"> Kuwait </option>
                            <option value="Kyrgyzstan"> Kyrgyzstan </option>
                            <option value="Laos"> Laos </option>
                            <option value="Latvia"> Latvia </option>
                            <option value="Lebanon"> Lebanon </option>
                            <option value="Lesotho"> Lesotho </option>
                            <option value="Liberia"> Liberia </option>
                            <option value="Libya"> Libya </option>
                            <option value="Liechtenstein">
                              {" "}
                              Liechtenstein{" "}
                            </option>
                            <option value="Lithuania"> Lithuania </option>
                            <option value="Luxembourg"> Luxembourg </option>
                            <option value="Macao"> Macao </option>
                            <option value="Macedonia"> Macedonia </option>
                            <option value="Madagascar"> Madagascar </option>
                            <option value="Malawi"> Malawi </option>
                            <option value="Malaysia"> Malaysia </option>
                            <option value="Maldives"> Maldives </option>
                            <option value="Mali"> Mali </option>
                            <option value="Malta"> Malta </option>
                            <option value="Marshall Islands">
                              {" "}
                              Marshall Islands{" "}
                            </option>
                            <option value="Mauritania"> Mauritania </option>
                            <option value="Mauritius"> Mauritius </option>
                            <option value="Mayotte"> Mayotte </option>
                            <option value="Mexico"> Mexico </option>
                            <option value="Micronesia"> Micronesia </option>
                            <option value="Moldova"> Moldova </option>
                            <option value="Monaco"> Monaco </option>
                            <option value="Mongolia"> Mongolia </option>
                            <option value="Montenegro"> Montenegro </option>
                            <option value="Montserrat"> Montserrat </option>
                            <option value="Morocco"> Morocco </option>
                            <option value="Mozambique"> Mozambique </option>
                            <option value="Myanmar"> Myanmar </option>
                            <option value="Nagorno-Karabakh">
                              {" "}
                              Nagorno-Karabakh{" "}
                            </option>
                            <option value="Namibia"> Namibia </option>
                            <option value="Nauru"> Nauru </option>
                            <option value="Nepal"> Nepal </option>
                            <option value="Netherlands"> Netherlands </option>
                            <option value="Netherlands Antilles">
                              {" "}
                              Netherlands Antilles{" "}
                            </option>
                            <option value="New Caledonia">
                              {" "}
                              New Caledonia{" "}
                            </option>
                            <option value="New Zealand"> New Zealand </option>
                            <option value="Nicaragua"> Nicaragua </option>
                            <option value="Niger"> Niger </option>
                            <option value="Nigeria"> Nigeria </option>
                            <option value="Niue"> Niue </option>
                            <option value="Norfolk Island">
                              {" "}
                              Norfolk Island{" "}
                            </option>
                            <option value="Northern Cyprus">
                              {" "}
                              Northern Cyprus{" "}
                            </option>
                            <option value="Northern Mariana Islands">
                              {" "}
                              Northern Mariana Islands{" "}
                            </option>
                            <option value="Norway"> Norway </option>
                            <option value="Oman"> Oman </option>
                            <option value="Pakistan"> Pakistan </option>
                            <option value="Palau"> Palau </option>
                            <option value="Palestine"> Palestine </option>
                            <option value="Panama"> Panama </option>
                            <option value="Papua New Guinea">
                              {" "}
                              Papua New Guinea{" "}
                            </option>
                            <option value="Paraguay"> Paraguay </option>
                            <option value="Peru"> Peru </option>
                            <option value="Philippines"> Philippines </option>
                            <option value="Pitcairn Islands">
                              {" "}
                              Pitcairn Islands{" "}
                            </option>
                            <option value="Poland"> Poland </option>
                            <option value="Portugal"> Portugal </option>
                            <option value="Pridnestrovie">
                              {" "}
                              Pridnestrovie{" "}
                            </option>
                            <option value="Puerto Rico"> Puerto Rico </option>
                            <option value="Qatar"> Qatar </option>
                            <option value="Romania"> Romania </option>
                            <option value="Russia"> Russia </option>
                            <option value="Rwanda"> Rwanda </option>
                            <option value="Saint Helena"> Saint Helena </option>
                            <option value="Saint Kitts and Nevis">
                              {" "}
                              Saint Kitts and Nevis{" "}
                            </option>
                            <option value="Saint Lucia"> Saint Lucia </option>
                            <option value="Saint Pierre and Miquelon">
                              {" "}
                              Saint Pierre and Miquelon{" "}
                            </option>
                            <option value="Saint Vincent and the Grenadines">
                              {" "}
                              Saint Vincent and the Grenadines{" "}
                            </option>
                            <option value="Samoa"> Samoa </option>
                            <option value="San Marino"> San Marino </option>
                            <option value="São Tomé and Príncipe">
                              {" "}
                              São Tomé and Príncipe{" "}
                            </option>
                            <option value="Saudi Arabia"> Saudi Arabia </option>
                            <option value="Senegal"> Senegal </option>
                            <option value="Serbia"> Serbia </option>
                            <option value="Seychelles"> Seychelles </option>
                            <option value="Sierra Leone"> Sierra Leone </option>
                            <option value="Singapore"> Singapore </option>
                            <option value="Slovakia"> Slovakia </option>
                            <option value="Slovenia"> Slovenia </option>
                            <option value="Solomon Islands">
                              {" "}
                              Solomon Islands{" "}
                            </option>
                            <option value="Somalia"> Somalia </option>
                            <option value="Somaliland"> Somaliland </option>
                            <option value="South Africa"> South Africa </option>
                            <option value="South Ossetia">
                              {" "}
                              South Ossetia{" "}
                            </option>
                            <option value="Spain"> Spain </option>
                            <option value="Sri Lanka"> Sri Lanka </option>
                            <option value="Sudan"> Sudan </option>
                            <option value="Suriname"> Suriname </option>
                            <option value="Svalbard"> Svalbard </option>
                            <option value="Swaziland"> Swaziland </option>
                            <option value="Sweden"> Sweden </option>
                            <option value="Switzerland"> Switzerland </option>
                            <option value="Syria"> Syria </option>
                            <option value="Tajikistan"> Tajikistan </option>
                            <option value="Tanzania"> Tanzania </option>
                            <option value="Thailand"> Thailand </option>
                            <option value="Timor-Leste"> Timor-Leste </option>
                            <option value="Togo"> Togo </option>
                            <option value="Tokelau"> Tokelau </option>
                            <option value="Tonga"> Tonga </option>
                            <option value="Trinidad and Tobago">
                              {" "}
                              Trinidad and Tobago{" "}
                            </option>
                            <option value="Tristan da Cunha">
                              {" "}
                              Tristan da Cunha{" "}
                            </option>
                            <option value="Tunisia"> Tunisia </option>
                            <option value="Turkey"> Turkey </option>
                            <option value="Turkmenistan"> Turkmenistan </option>
                            <option value="Turks and Caicos Islands">
                              {" "}
                              Turks and Caicos Islands{" "}
                            </option>
                            <option value="Tuvalu"> Tuvalu </option>
                            <option value="Uganda"> Uganda </option>
                            <option value="Ukraine"> Ukraine </option>
                            <option value="United Arab Emirates">
                              {" "}
                              United Arab Emirates{" "}
                            </option>
                            <option value="United Kingdom">
                              {" "}
                              United Kingdom{" "}
                            </option>
                            <option value="United States">
                              {" "}
                              United States{" "}
                            </option>
                            <option value="Uruguay"> Uruguay </option>
                            <option value="Uzbekistan"> Uzbekistan </option>
                            <option value="Vanuatu"> Vanuatu </option>
                            <option value="Vatican City"> Vatican City </option>
                            <option value="Venezuela"> Venezuela </option>
                            <option value="Vietnam"> Vietnam </option>
                            <option value="Virgin Islands, British">
                              {" "}
                              Virgin Islands, British{" "}
                            </option>
                            <option value="Virgin Islands, United States">
                              {" "}
                              Virgin Islands, United States{" "}
                            </option>
                            <option value="Wallis and Futuna">
                              {" "}
                              Wallis and Futuna{" "}
                            </option>
                            <option value="Western Sahara">
                              {" "}
                              Western Sahara{" "}
                            </option>
                            <option value="Yemen"> Yemen </option>
                            <option value="Zambia"> Zambia </option>
                            <option value="Zimbabwe"> Zimbabwe </option>
                            <option value="South Korea"> South Korea </option>
                            <option value="Taiwan"> Taiwan </option>
                            <option value="Macau"> Macau </option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-2 col-lg-2">
                        <div className="form-group">
                          <label className="control-label">
                            Education Mode{" "}
                          </label>
                          <select
                            className="form-control"
                            id="DDLPDEduMode0"
                            name="DDLPDEduMode0"
                          >
                            <option selected="selected" value="">
                              Select
                            </option>
                            <option value="Regular">Regular</option>
                            <option value="Part-Time">Part-Time</option>
                            <option value="Distance Learning / Online">
                              Distance Learning / Online
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-2 col-lg-2">
                        <div className="form-group">
                          <label className="control-label">
                            University / Institute
                            <a
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Please start typing and choose from drop down list, please type full name if not available in drop down"
                            >
                              ?
                            </a>
                          </label>
                          <input
                            type="text"
                            className="form-control University"
                            id="TxtPDBoard0"
                            name="TxtPDBoard0"
                          />
                        </div>
                      </div>
                      <div className="col-md-2 col-lg-2">
                        <div className="form-group">
                          <label className="control-label">College Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="TxtPDInst0"
                            name="TxtPDInst0"
                          />
                        </div>
                      </div>
                      <div className="col-md-2 col-lg-2">
                        <div className="form-group">
                          <label className="control-label"> Year </label>
                          <input
                            type="number"
                            min={1901}
                            max={2030}
                            className="form-control"
                            id="TxtPDYear0"
                            name="TxtPDYear0"
                          />
                        </div>
                      </div>
                      <div className="col-md-2 col-lg-2">
                        <div className="form-group">
                          <label className="control-label">Area </label>
                          <input
                            type="text"
                            className="form-control Specialization "
                            id="DDLPDSpecialization0"
                            name="DDLPDSpecialization0"
                          />
                        </div>
                      </div>
                      <div className="col-md-2 col-lg-2">
                        <div className="form-group">
                          <label className="control-label">Division</label>
                          <select
                            className="form-control"
                            id="TxtPDdivision0"
                            name="TxtPDdivision0"
                          >
                            <option value="">Select Division</option>
                            <option value="First"> First </option>
                            <option value="Second"> Second </option>
                            <option value="Third"> Third </option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-2 col-lg-2">
                        <div className="form-group">
                          <label className="control-label">
                            % aggregate marks{" "}
                          </label>
                          <input
                            type="number"
                            min={20.0}
                            max="99.99"
                            className="form-control"
                            id="TxtPDmarks0"
                            name="TxtPDmarks0"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-2 col-lg-2">
                  <div className="row">
                    <div className="form-group">
                      <a
                        id="btnMorePostDoctoral"
                        className="btn btn-success btn-xs"
                      >
                        Add More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="card card-default">
      <div className="card-header">
        <h4 className="card-title">
          <a>
            <b> 4. Qualified in:</b>
          </a>
        </h4>
      </div>
      <div className="collapse show">
        <div className="card-body">
          <hr />
          <div className="row">
            <div className="col-md-2 col-lg-2">
              <div className="form-group">
                <label className="control-label">GATE</label>
                <div className="input-group">
                  <div id="rblGATE" className="btn-group radioBtn">
                    <a
                      className="btn btn-primary btn-sm notActive"
                      data-toggle="GATE"
                      data-title="Y"
                    >
                      Yes
                    </a>
                    <a
                      className="btn btn-primary btn-sm active"
                      data-toggle="GATE"
                      data-title="N"
                    >
                      No
                    </a>
                  </div>
                  <input type="hidden" name="GATE" id="GATE" defaultValue="N" />
                </div>
              </div>
            </div>
            <div className="col-md-2 col-lg-2">
              <div className="form-group">
                <label className="control-label">Year:</label>
                <input
                  className="form-control"
                  type="number"
                  min={1901}
                  max={2030}
                  id="GATEYear"
                  name="GATEYear"
                />
              </div>
            </div>
            <div className="col-md-2 col-lg-2">
              <div className="form-group">
                <label className="control-label">UGC Net</label>
                <div className="input-group">
                  <div id="rblUGCNET" className="btn-group radioBtn">
                    <a
                      className="btn btn-primary btn-sm notActive"
                      data-toggle="UGCNET"
                      data-title="Y"
                    >
                      Yes
                    </a>
                    <a
                      className="btn btn-primary btn-sm active"
                      data-toggle="UGCNET"
                      data-title="N"
                    >
                      No
                    </a>
                  </div>
                  <input
                    type="hidden"
                    name="UGCNET"
                    id="UGCNET"
                    defaultValue="N"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-2 col-lg-2">
              <div className="form-group">
                <label className="control-label">Year:</label>
                <input
                  className="form-control"
                  type="number"
                  min={1901}
                  max={2030}
                  id="UGCNETYear"
                  name="UGCNETYear"
                />
              </div>
            </div>
            <div className="col-md-2 col-lg-2">
              <div className="form-group">
                <label className="control-label">UGC JRF</label>
                <div className="input-group">
                  <div id="rblUGCJRF" className="btn-group radioBtn">
                    <a
                      className="btn btn-primary btn-sm notActive"
                      data-toggle="UGCJRF"
                      data-title="Y"
                    >
                      Yes
                    </a>
                    <a
                      className="btn btn-primary btn-sm active"
                      data-toggle="UGCJRF"
                      data-title="N"
                    >
                      No
                    </a>
                  </div>
                  <input
                    type="hidden"
                    name="UGCJRF"
                    id="UGCJRF"
                    defaultValue="N"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-2 col-lg-2">
              <div className="form-group">
                <label className="control-label">Year:</label>
                <input
                  className="form-control"
                  type="number"
                  min={1901}
                  max={2030}
                  id="UGCJRFYear"
                  name="UGCJRFYear"
                />
              </div>
            </div>
            <div className="col-md-2 col-lg-2">
              <div className="form-group">
                <label className="control-label">URC CSIR </label>
                <div className="input-group">
                  <div id="rblURCCSIR" className="btn-group radioBtn">
                    <a
                      className="btn btn-primary btn-sm notActive"
                      data-toggle="URCCSIR"
                      data-title="Y"
                    >
                      Yes
                    </a>
                    <a
                      className="btn btn-primary btn-sm active"
                      data-toggle="URCCSIR"
                      data-title="N"
                    >
                      No
                    </a>
                  </div>
                  <input
                    type="hidden"
                    name="URCCSIR"
                    id="URCCSIR"
                    defaultValue="N"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-2 col-lg-2">
              <div className="form-group">
                <label className="control-label">Year:</label>
                <input
                  className="form-control"
                  type="number"
                  min={1901}
                  max={2030}
                  id="URCCSIRYear"
                  name="URCCSIRYear"
                />
              </div>
            </div>
            <div className="col-md-2 col-lg-2">
              <div className="form-group">
                <label className="control-label">ICMR </label>
                <div className="input-group">
                  <div id="rblICMR" className="btn-group radioBtn">
                    <a
                      className="btn btn-primary btn-sm notActive"
                      data-toggle="ICMR"
                      data-title="Y"
                    >
                      Yes
                    </a>
                    <a
                      className="btn btn-primary btn-sm active"
                      data-toggle="ICMR"
                      data-title="N"
                    >
                      No
                    </a>
                  </div>
                  <input type="hidden" name="ICMR" id="ICMR" defaultValue="N" />
                </div>
              </div>
            </div>
            <div className="col-md-2 col-lg-2">
              <div className="form-group">
                <label className="control-label">Year:</label>
                <input
                  className="form-control"
                  type="number"
                  min={1901}
                  max={2030}
                  id="ICMRYear"
                  name="ICMRYear"
                />
              </div>
            </div>
            <div className="col-md-2 col-lg-2">
              <div className="form-group">
                <label className="control-label">ICAR</label>
                <div className="input-group">
                  <div id="rblICAR" className="btn-group radioBtn">
                    <a
                      className="btn btn-primary btn-sm notActive"
                      data-toggle="ICAR"
                      data-title="Y"
                    >
                      Yes
                    </a>
                    <a
                      className="btn btn-primary btn-sm active"
                      data-toggle="ICAR"
                      data-title="N"
                    >
                      No
                    </a>
                  </div>
                  <input type="hidden" name="ICAR" id="ICAR" defaultValue="N" />
                </div>
              </div>
            </div>
            <div className="col-md-2 col-lg-2">
              <div className="form-group">
                <label className="control-label">Year:</label>
                <input
                  className="form-control"
                  type="number"
                  min={1901}
                  max={2030}
                  id="ICARYear"
                  name="ICARYear"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="card card-default">
      <div className="card-header">
        <h4 className="card-title">
          <a>
            <b>
              5. Experience <small>(Start from present job)</small>{" "}
            </b>
          </a>
        </h4>
      </div>
      <div className="collapse show">
        <div className="card-body">
          <hr />
          <div className="row">
            <input
              type="hidden"
              id="AcademicExperinceCount"
              name="AcademicExperinceCount"
            />
            <input
              type="hidden"
              id="NonAcademicExperinceCount"
              name="NonAcademicExperinceCount"
            />
            <h4 className="col-lg-9 col-md-9">Academic</h4>
            <label className="control-label ">Total Years</label>
            <label className="control-label ">
              <input
                type="text"
                className="form-control"
                id="TxtAYears"
                name="TxtAYears"
              />
            </label>
            <div className="table-responsive" id="no-more-tables">
              <table className="table table-primary ">
                <thead>
                  <tr>
                    <th>Nature of Job</th>
                    <th>Country</th>
                    <th>University</th>
                    <th>College</th>
                    <th>Position</th>
                    <th>Academic Domain</th>
                    <th>Date From</th>
                    <th>Date To</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody id="AcademicExperinceBody" />
                <tfoot>
                  <tr>
                    <td data-title="Nature of Job">
                      <label className="control-label">
                        <select
                          className="form-control"
                          id="DDLExpANOJ"
                          name="DDLExpANOJ"
                        >
                          <option selected="selected" value="">
                            Select
                          </option>
                          <option value="Regular">Regular</option>
                          <option value="Part-Time">Part-Time</option>
                        </select>
                      </label>
                    </td>
                    <td data-title="Country">
                      <select
                        className="form-control Country"
                        id="DDLExpACountry"
                        name="DDLExpACountry"
                      >
                        <option value="">Select Country</option>
                        <option value="India"> India </option>
                        <option value="Abkhazia"> Abkhazia </option>
                        <option value="Afghanistan"> Afghanistan </option>
                        <option value="Akrotiri and Dhekelia">
                          {" "}
                          Akrotiri and Dhekelia{" "}
                        </option>
                        <option value="Aland"> Aland </option>
                        <option value="Albania"> Albania </option>
                        <option value="Algeria"> Algeria </option>
                        <option value="American Samoa"> American Samoa </option>
                        <option value="Andorra"> Andorra </option>
                        <option value="Angola"> Angola </option>
                        <option value="Anguilla"> Anguilla </option>
                        <option value="Antigua and Barbuda">
                          {" "}
                          Antigua and Barbuda{" "}
                        </option>
                        <option value="Argentina"> Argentina </option>
                        <option value="Armenia"> Armenia </option>
                        <option value="Aruba"> Aruba </option>
                        <option value="Ascension Island">
                          {" "}
                          Ascension Island{" "}
                        </option>
                        <option value="Australia"> Australia </option>
                        <option value="Austria"> Austria </option>
                        <option value="Azerbaijan"> Azerbaijan </option>
                        <option value="Bahamas"> Bahamas </option>
                        <option value="Bahrain"> Bahrain </option>
                        <option value="Bangladesh"> Bangladesh </option>
                        <option value="Barbados"> Barbados </option>
                        <option value="Belarus"> Belarus </option>
                        <option value="Belgium"> Belgium </option>
                        <option value="Belize"> Belize </option>
                        <option value="Benin"> Benin </option>
                        <option value="Bermuda"> Bermuda </option>
                        <option value="Bhutan"> Bhutan </option>
                        <option value="Bolivia"> Bolivia </option>
                        <option value="Bosnia and Herzegovina">
                          {" "}
                          Bosnia and Herzegovina{" "}
                        </option>
                        <option value="Botswana"> Botswana </option>
                        <option value="Brazil"> Brazil </option>
                        <option value="Brunei"> Brunei </option>
                        <option value="Bulgaria"> Bulgaria </option>
                        <option value="Burkina Faso"> Burkina Faso </option>
                        <option value="Burundi"> Burundi </option>
                        <option value="Cambodia"> Cambodia </option>
                        <option value="Cameroon"> Cameroon </option>
                        <option value="Canada"> Canada </option>
                        <option value="Cape Verde"> Cape Verde </option>
                        <option value="Cayman Islands"> Cayman Islands </option>
                        <option value="Central African Republic">
                          {" "}
                          Central African Republic{" "}
                        </option>
                        <option value="Chad"> Chad </option>
                        <option value="Chile"> Chile </option>
                        <option value="China"> China </option>
                        <option value="Christmas Island">
                          {" "}
                          Christmas Island{" "}
                        </option>
                        <option value="Cocos (Keeling) Islands">
                          {" "}
                          Cocos (Keeling) Islands{" "}
                        </option>
                        <option value="Colombia"> Colombia </option>
                        <option value="Comoros"> Comoros </option>
                        <option value="Congo"> Congo </option>
                        <option value="Cook Islands"> Cook Islands </option>
                        <option value="Costa Rica"> Costa Rica </option>
                        <option value="Côte d'Ivoire"> Côte d'Ivoire </option>
                        <option value="Croatia"> Croatia </option>
                        <option value="Cuba"> Cuba </option>
                        <option value="Cyprus"> Cyprus </option>
                        <option value="Czech Republic"> Czech Republic </option>
                        <option value="Denmark"> Denmark </option>
                        <option value="Djibouti"> Djibouti </option>
                        <option value="Dominica"> Dominica </option>
                        <option value="Dominican Republic">
                          {" "}
                          Dominican Republic{" "}
                        </option>
                        <option value="Ecuador"> Ecuador </option>
                        <option value="Egypt"> Egypt </option>
                        <option value="El Salvador"> El Salvador </option>
                        <option value="Equatorial Guinea">
                          {" "}
                          Equatorial Guinea{" "}
                        </option>
                        <option value="Eritrea"> Eritrea </option>
                        <option value="Estonia"> Estonia </option>
                        <option value="Ethiopia"> Ethiopia </option>
                        <option value="Falkland Islands">
                          {" "}
                          Falkland Islands{" "}
                        </option>
                        <option value="Faroe Islands"> Faroe Islands </option>
                        <option value="Fiji"> Fiji </option>
                        <option value="Finland"> Finland </option>
                        <option value="France"> France </option>
                        <option value="French Polynesia">
                          {" "}
                          French Polynesia{" "}
                        </option>
                        <option value="Gabon"> Gabon </option>
                        <option value="Gambia"> Gambia </option>
                        <option value="Georgia"> Georgia </option>
                        <option value="Germany"> Germany </option>
                        <option value="Ghana"> Ghana </option>
                        <option value="Gibraltar"> Gibraltar </option>
                        <option value="Greece"> Greece </option>
                        <option value="Greenland"> Greenland </option>
                        <option value="Grenada"> Grenada </option>
                        <option value="Guam"> Guam </option>
                        <option value="Guatemala"> Guatemala </option>
                        <option value="Guernsey"> Guernsey </option>
                        <option value="Guinea"> Guinea </option>
                        <option value="Guinea-Bissau"> Guinea-Bissau </option>
                        <option value="Guyana"> Guyana </option>
                        <option value="Haiti"> Haiti </option>
                        <option value="Honduras"> Honduras </option>
                        <option value="Hong Kong"> Hong Kong </option>
                        <option value="Hungary"> Hungary </option>
                        <option value="Iceland"> Iceland </option>
                        <option value="Indonesia"> Indonesia </option>
                        <option value="Iran"> Iran </option>
                        <option value="Iraq"> Iraq </option>
                        <option value="Ireland"> Ireland </option>
                        <option value="Isle of Man"> Isle of Man </option>
                        <option value="Israel"> Israel </option>
                        <option value="Italy"> Italy </option>
                        <option value="Jamaica"> Jamaica </option>
                        <option value="Japan"> Japan </option>
                        <option value="Jersey"> Jersey </option>
                        <option value="Jordan"> Jordan </option>
                        <option value="Kazakhstan"> Kazakhstan </option>
                        <option value="Kenya"> Kenya </option>
                        <option value="Kiribati"> Kiribati </option>
                        <option value="Korea"> Korea </option>
                        <option value="Kosovo"> Kosovo </option>
                        <option value="Kuwait"> Kuwait </option>
                        <option value="Kyrgyzstan"> Kyrgyzstan </option>
                        <option value="Laos"> Laos </option>
                        <option value="Latvia"> Latvia </option>
                        <option value="Lebanon"> Lebanon </option>
                        <option value="Lesotho"> Lesotho </option>
                        <option value="Liberia"> Liberia </option>
                        <option value="Libya"> Libya </option>
                        <option value="Liechtenstein"> Liechtenstein </option>
                        <option value="Lithuania"> Lithuania </option>
                        <option value="Luxembourg"> Luxembourg </option>
                        <option value="Macao"> Macao </option>
                        <option value="Macedonia"> Macedonia </option>
                        <option value="Madagascar"> Madagascar </option>
                        <option value="Malawi"> Malawi </option>
                        <option value="Malaysia"> Malaysia </option>
                        <option value="Maldives"> Maldives </option>
                        <option value="Mali"> Mali </option>
                        <option value="Malta"> Malta </option>
                        <option value="Marshall Islands">
                          {" "}
                          Marshall Islands{" "}
                        </option>
                        <option value="Mauritania"> Mauritania </option>
                        <option value="Mauritius"> Mauritius </option>
                        <option value="Mayotte"> Mayotte </option>
                        <option value="Mexico"> Mexico </option>
                        <option value="Micronesia"> Micronesia </option>
                        <option value="Moldova"> Moldova </option>
                        <option value="Monaco"> Monaco </option>
                        <option value="Mongolia"> Mongolia </option>
                        <option value="Montenegro"> Montenegro </option>
                        <option value="Montserrat"> Montserrat </option>
                        <option value="Morocco"> Morocco </option>
                        <option value="Mozambique"> Mozambique </option>
                        <option value="Myanmar"> Myanmar </option>
                        <option value="Nagorno-Karabakh">
                          {" "}
                          Nagorno-Karabakh{" "}
                        </option>
                        <option value="Namibia"> Namibia </option>
                        <option value="Nauru"> Nauru </option>
                        <option value="Nepal"> Nepal </option>
                        <option value="Netherlands"> Netherlands </option>
                        <option value="Netherlands Antilles">
                          {" "}
                          Netherlands Antilles{" "}
                        </option>
                        <option value="New Caledonia"> New Caledonia </option>
                        <option value="New Zealand"> New Zealand </option>
                        <option value="Nicaragua"> Nicaragua </option>
                        <option value="Niger"> Niger </option>
                        <option value="Nigeria"> Nigeria </option>
                        <option value="Niue"> Niue </option>
                        <option value="Norfolk Island"> Norfolk Island </option>
                        <option value="Northern Cyprus">
                          {" "}
                          Northern Cyprus{" "}
                        </option>
                        <option value="Northern Mariana Islands">
                          {" "}
                          Northern Mariana Islands{" "}
                        </option>
                        <option value="Norway"> Norway </option>
                        <option value="Oman"> Oman </option>
                        <option value="Pakistan"> Pakistan </option>
                        <option value="Palau"> Palau </option>
                        <option value="Palestine"> Palestine </option>
                        <option value="Panama"> Panama </option>
                        <option value="Papua New Guinea">
                          {" "}
                          Papua New Guinea{" "}
                        </option>
                        <option value="Paraguay"> Paraguay </option>
                        <option value="Peru"> Peru </option>
                        <option value="Philippines"> Philippines </option>
                        <option value="Pitcairn Islands">
                          {" "}
                          Pitcairn Islands{" "}
                        </option>
                        <option value="Poland"> Poland </option>
                        <option value="Portugal"> Portugal </option>
                        <option value="Pridnestrovie"> Pridnestrovie </option>
                        <option value="Puerto Rico"> Puerto Rico </option>
                        <option value="Qatar"> Qatar </option>
                        <option value="Romania"> Romania </option>
                        <option value="Russia"> Russia </option>
                        <option value="Rwanda"> Rwanda </option>
                        <option value="Saint Helena"> Saint Helena </option>
                        <option value="Saint Kitts and Nevis">
                          {" "}
                          Saint Kitts and Nevis{" "}
                        </option>
                        <option value="Saint Lucia"> Saint Lucia </option>
                        <option value="Saint Pierre and Miquelon">
                          {" "}
                          Saint Pierre and Miquelon{" "}
                        </option>
                        <option value="Saint Vincent and the Grenadines">
                          {" "}
                          Saint Vincent and the Grenadines{" "}
                        </option>
                        <option value="Samoa"> Samoa </option>
                        <option value="San Marino"> San Marino </option>
                        <option value="São Tomé and Príncipe">
                          {" "}
                          São Tomé and Príncipe{" "}
                        </option>
                        <option value="Saudi Arabia"> Saudi Arabia </option>
                        <option value="Senegal"> Senegal </option>
                        <option value="Serbia"> Serbia </option>
                        <option value="Seychelles"> Seychelles </option>
                        <option value="Sierra Leone"> Sierra Leone </option>
                        <option value="Singapore"> Singapore </option>
                        <option value="Slovakia"> Slovakia </option>
                        <option value="Slovenia"> Slovenia </option>
                        <option value="Solomon Islands">
                          {" "}
                          Solomon Islands{" "}
                        </option>
                        <option value="Somalia"> Somalia </option>
                        <option value="Somaliland"> Somaliland </option>
                        <option value="South Africa"> South Africa </option>
                        <option value="South Ossetia"> South Ossetia </option>
                        <option value="Spain"> Spain </option>
                        <option value="Sri Lanka"> Sri Lanka </option>
                        <option value="Sudan"> Sudan </option>
                        <option value="Suriname"> Suriname </option>
                        <option value="Svalbard"> Svalbard </option>
                        <option value="Swaziland"> Swaziland </option>
                        <option value="Sweden"> Sweden </option>
                        <option value="Switzerland"> Switzerland </option>
                        <option value="Syria"> Syria </option>
                        <option value="Tajikistan"> Tajikistan </option>
                        <option value="Tanzania"> Tanzania </option>
                        <option value="Thailand"> Thailand </option>
                        <option value="Timor-Leste"> Timor-Leste </option>
                        <option value="Togo"> Togo </option>
                        <option value="Tokelau"> Tokelau </option>
                        <option value="Tonga"> Tonga </option>
                        <option value="Trinidad and Tobago">
                          {" "}
                          Trinidad and Tobago{" "}
                        </option>
                        <option value="Tristan da Cunha">
                          {" "}
                          Tristan da Cunha{" "}
                        </option>
                        <option value="Tunisia"> Tunisia </option>
                        <option value="Turkey"> Turkey </option>
                        <option value="Turkmenistan"> Turkmenistan </option>
                        <option value="Turks and Caicos Islands">
                          {" "}
                          Turks and Caicos Islands{" "}
                        </option>
                        <option value="Tuvalu"> Tuvalu </option>
                        <option value="Uganda"> Uganda </option>
                        <option value="Ukraine"> Ukraine </option>
                        <option value="United Arab Emirates">
                          {" "}
                          United Arab Emirates{" "}
                        </option>
                        <option value="United Kingdom"> United Kingdom </option>
                        <option value="United States"> United States </option>
                        <option value="Uruguay"> Uruguay </option>
                        <option value="Uzbekistan"> Uzbekistan </option>
                        <option value="Vanuatu"> Vanuatu </option>
                        <option value="Vatican City"> Vatican City </option>
                        <option value="Venezuela"> Venezuela </option>
                        <option value="Vietnam"> Vietnam </option>
                        <option value="Virgin Islands, British">
                          {" "}
                          Virgin Islands, British{" "}
                        </option>
                        <option value="Virgin Islands, United States">
                          {" "}
                          Virgin Islands, United States{" "}
                        </option>
                        <option value="Wallis and Futuna">
                          {" "}
                          Wallis and Futuna{" "}
                        </option>
                        <option value="Western Sahara"> Western Sahara </option>
                        <option value="Yemen"> Yemen </option>
                        <option value="Zambia"> Zambia </option>
                        <option value="Zimbabwe"> Zimbabwe </option>
                        <option value="South Korea"> South Korea </option>
                        <option value="Taiwan"> Taiwan </option>
                        <option value="Macau"> Macau </option>
                      </select>
                    </td>
                    <td data-title="University">
                      <label className="control-label">
                        <input
                          type="text"
                          className="form-control University"
                          id="TxtExpABoard"
                          name="TxtExpABoard"
                        />
                      </label>
                    </td>
                    <td data-title="College">
                      <label className="control-label">
                        <input
                          type="text"
                          className="form-control"
                          id="ExpAColl"
                          name="ExpAColl"
                        />
                      </label>
                    </td>
                    <td data-title="Position">
                      <label className="control-label">
                        <select
                          className="form-control Country"
                          id="ExpADeg"
                          name="ExpADeg"
                        >
                          <option value="">Select</option>
                          <option value="Professor">Professor</option>
                          <option value="Associate Professor">
                            Associate Professor
                          </option>
                          <option value="Assistant Professor">
                            Assistant Professor
                          </option>
                          <option value="Research Assistant">
                            Research Assistant{" "}
                          </option>
                        </select>
                      </label>
                    </td>
                    <td data-title="Academic Domain">
                      <input
                        type="text"
                        className="form-control Specialization "
                        id="DDLExpASpecialization"
                        name="DDLExpASpecialization"
                      />
                    </td>
                    <td data-title="Date From">
                      <label className="control-label">
                        <input
                          type="text"
                          className="form-control xyz"
                          autoComplete="off"
                          id="ExpAFrom"
                          name="ExpAFrom"
                        />
                      </label>
                    </td>
                    <td data-title="Date To">
                      <label className="control-label">
                        <input
                          type="text"
                          className="form-control xyz"
                          autoComplete="off"
                          id="ExpATo"
                          name="ExpATo"
                        />
                      </label>
                    </td>
                    <td>
                      <label className="control-label">
                        <input
                          type="button"
                          className="btn btn-success"
                          defaultValue="Add"
                          id="BtnAddAExperiance"
                        />
                      </label>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <h4 className="col-lg-9 col-md-9">Non-Academic</h4>
            <label className="control-label">Total Years</label>
            <label className="control-label">
              <input
                type="text"
                className="form-control"
                id="TxtNAYears"
                name="TxtNAYears"
              />
            </label>
            <div className="table-responsive" id="no-more-tables">
              <table className="table table-primary ">
                <thead>
                  <tr>
                    <th>Nature of Job</th>
                    <th>Country</th>
                    <th>Organization</th>
                    <th>Designation</th>
                    <th>Department</th>
                    <th>Date From</th>
                    <th>Date To</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody id="NonAcademicExperinceBody" />
                <tfoot>
                  <tr>
                    <td data-title="Nature of Job">
                      <label className="control-label">
                        <select
                          className="form-control"
                          id="DDLExpNANOJ"
                          name="DDLExpNANOJ"
                        >
                          <option selected="selected" value="">
                            Select
                          </option>
                          <option value="Regular">Regular</option>
                          <option value="Part-Time">Part-Time</option>
                        </select>
                      </label>
                    </td>
                    <td data-title="Country">
                      <select
                        className="form-control"
                        id="DDLExpNACountry"
                        name="DDLExpNACountry"
                      >
                        <option value="">Select Country</option>
                        <option value="India"> India </option>
                        <option value="Abkhazia"> Abkhazia </option>
                        <option value="Afghanistan"> Afghanistan </option>
                        <option value="Akrotiri and Dhekelia">
                          {" "}
                          Akrotiri and Dhekelia{" "}
                        </option>
                        <option value="Aland"> Aland </option>
                        <option value="Albania"> Albania </option>
                        <option value="Algeria"> Algeria </option>
                        <option value="American Samoa"> American Samoa </option>
                        <option value="Andorra"> Andorra </option>
                        <option value="Angola"> Angola </option>
                        <option value="Anguilla"> Anguilla </option>
                        <option value="Antigua and Barbuda">
                          {" "}
                          Antigua and Barbuda{" "}
                        </option>
                        <option value="Argentina"> Argentina </option>
                        <option value="Armenia"> Armenia </option>
                        <option value="Aruba"> Aruba </option>
                        <option value="Ascension Island">
                          {" "}
                          Ascension Island{" "}
                        </option>
                        <option value="Australia"> Australia </option>
                        <option value="Austria"> Austria </option>
                        <option value="Azerbaijan"> Azerbaijan </option>
                        <option value="Bahamas"> Bahamas </option>
                        <option value="Bahrain"> Bahrain </option>
                        <option value="Bangladesh"> Bangladesh </option>
                        <option value="Barbados"> Barbados </option>
                        <option value="Belarus"> Belarus </option>
                        <option value="Belgium"> Belgium </option>
                        <option value="Belize"> Belize </option>
                        <option value="Benin"> Benin </option>
                        <option value="Bermuda"> Bermuda </option>
                        <option value="Bhutan"> Bhutan </option>
                        <option value="Bolivia"> Bolivia </option>
                        <option value="Bosnia and Herzegovina">
                          {" "}
                          Bosnia and Herzegovina{" "}
                        </option>
                        <option value="Botswana"> Botswana </option>
                        <option value="Brazil"> Brazil </option>
                        <option value="Brunei"> Brunei </option>
                        <option value="Bulgaria"> Bulgaria </option>
                        <option value="Burkina Faso"> Burkina Faso </option>
                        <option value="Burundi"> Burundi </option>
                        <option value="Cambodia"> Cambodia </option>
                        <option value="Cameroon"> Cameroon </option>
                        <option value="Canada"> Canada </option>
                        <option value="Cape Verde"> Cape Verde </option>
                        <option value="Cayman Islands"> Cayman Islands </option>
                        <option value="Central African Republic">
                          {" "}
                          Central African Republic{" "}
                        </option>
                        <option value="Chad"> Chad </option>
                        <option value="Chile"> Chile </option>
                        <option value="China"> China </option>
                        <option value="Christmas Island">
                          {" "}
                          Christmas Island{" "}
                        </option>
                        <option value="Cocos (Keeling) Islands">
                          {" "}
                          Cocos (Keeling) Islands{" "}
                        </option>
                        <option value="Colombia"> Colombia </option>
                        <option value="Comoros"> Comoros </option>
                        <option value="Congo"> Congo </option>
                        <option value="Cook Islands"> Cook Islands </option>
                        <option value="Costa Rica"> Costa Rica </option>
                        <option value="Côte d'Ivoire"> Côte d'Ivoire </option>
                        <option value="Croatia"> Croatia </option>
                        <option value="Cuba"> Cuba </option>
                        <option value="Cyprus"> Cyprus </option>
                        <option value="Czech Republic"> Czech Republic </option>
                        <option value="Denmark"> Denmark </option>
                        <option value="Djibouti"> Djibouti </option>
                        <option value="Dominica"> Dominica </option>
                        <option value="Dominican Republic">
                          {" "}
                          Dominican Republic{" "}
                        </option>
                        <option value="Ecuador"> Ecuador </option>
                        <option value="Egypt"> Egypt </option>
                        <option value="El Salvador"> El Salvador </option>
                        <option value="Equatorial Guinea">
                          {" "}
                          Equatorial Guinea{" "}
                        </option>
                        <option value="Eritrea"> Eritrea </option>
                        <option value="Estonia"> Estonia </option>
                        <option value="Ethiopia"> Ethiopia </option>
                        <option value="Falkland Islands">
                          {" "}
                          Falkland Islands{" "}
                        </option>
                        <option value="Faroe Islands"> Faroe Islands </option>
                        <option value="Fiji"> Fiji </option>
                        <option value="Finland"> Finland </option>
                        <option value="France"> France </option>
                        <option value="French Polynesia">
                          {" "}
                          French Polynesia{" "}
                        </option>
                        <option value="Gabon"> Gabon </option>
                        <option value="Gambia"> Gambia </option>
                        <option value="Georgia"> Georgia </option>
                        <option value="Germany"> Germany </option>
                        <option value="Ghana"> Ghana </option>
                        <option value="Gibraltar"> Gibraltar </option>
                        <option value="Greece"> Greece </option>
                        <option value="Greenland"> Greenland </option>
                        <option value="Grenada"> Grenada </option>
                        <option value="Guam"> Guam </option>
                        <option value="Guatemala"> Guatemala </option>
                        <option value="Guernsey"> Guernsey </option>
                        <option value="Guinea"> Guinea </option>
                        <option value="Guinea-Bissau"> Guinea-Bissau </option>
                        <option value="Guyana"> Guyana </option>
                        <option value="Haiti"> Haiti </option>
                        <option value="Honduras"> Honduras </option>
                        <option value="Hong Kong"> Hong Kong </option>
                        <option value="Hungary"> Hungary </option>
                        <option value="Iceland"> Iceland </option>
                        <option value="Indonesia"> Indonesia </option>
                        <option value="Iran"> Iran </option>
                        <option value="Iraq"> Iraq </option>
                        <option value="Ireland"> Ireland </option>
                        <option value="Isle of Man"> Isle of Man </option>
                        <option value="Israel"> Israel </option>
                        <option value="Italy"> Italy </option>
                        <option value="Jamaica"> Jamaica </option>
                        <option value="Japan"> Japan </option>
                        <option value="Jersey"> Jersey </option>
                        <option value="Jordan"> Jordan </option>
                        <option value="Kazakhstan"> Kazakhstan </option>
                        <option value="Kenya"> Kenya </option>
                        <option value="Kiribati"> Kiribati </option>
                        <option value="Korea"> Korea </option>
                        <option value="Kosovo"> Kosovo </option>
                        <option value="Kuwait"> Kuwait </option>
                        <option value="Kyrgyzstan"> Kyrgyzstan </option>
                        <option value="Laos"> Laos </option>
                        <option value="Latvia"> Latvia </option>
                        <option value="Lebanon"> Lebanon </option>
                        <option value="Lesotho"> Lesotho </option>
                        <option value="Liberia"> Liberia </option>
                        <option value="Libya"> Libya </option>
                        <option value="Liechtenstein"> Liechtenstein </option>
                        <option value="Lithuania"> Lithuania </option>
                        <option value="Luxembourg"> Luxembourg </option>
                        <option value="Macao"> Macao </option>
                        <option value="Macedonia"> Macedonia </option>
                        <option value="Madagascar"> Madagascar </option>
                        <option value="Malawi"> Malawi </option>
                        <option value="Malaysia"> Malaysia </option>
                        <option value="Maldives"> Maldives </option>
                        <option value="Mali"> Mali </option>
                        <option value="Malta"> Malta </option>
                        <option value="Marshall Islands">
                          {" "}
                          Marshall Islands{" "}
                        </option>
                        <option value="Mauritania"> Mauritania </option>
                        <option value="Mauritius"> Mauritius </option>
                        <option value="Mayotte"> Mayotte </option>
                        <option value="Mexico"> Mexico </option>
                        <option value="Micronesia"> Micronesia </option>
                        <option value="Moldova"> Moldova </option>
                        <option value="Monaco"> Monaco </option>
                        <option value="Mongolia"> Mongolia </option>
                        <option value="Montenegro"> Montenegro </option>
                        <option value="Montserrat"> Montserrat </option>
                        <option value="Morocco"> Morocco </option>
                        <option value="Mozambique"> Mozambique </option>
                        <option value="Myanmar"> Myanmar </option>
                        <option value="Nagorno-Karabakh">
                          {" "}
                          Nagorno-Karabakh{" "}
                        </option>
                        <option value="Namibia"> Namibia </option>
                        <option value="Nauru"> Nauru </option>
                        <option value="Nepal"> Nepal </option>
                        <option value="Netherlands"> Netherlands </option>
                        <option value="Netherlands Antilles">
                          {" "}
                          Netherlands Antilles{" "}
                        </option>
                        <option value="New Caledonia"> New Caledonia </option>
                        <option value="New Zealand"> New Zealand </option>
                        <option value="Nicaragua"> Nicaragua </option>
                        <option value="Niger"> Niger </option>
                        <option value="Nigeria"> Nigeria </option>
                        <option value="Niue"> Niue </option>
                        <option value="Norfolk Island"> Norfolk Island </option>
                        <option value="Northern Cyprus">
                          {" "}
                          Northern Cyprus{" "}
                        </option>
                        <option value="Northern Mariana Islands">
                          {" "}
                          Northern Mariana Islands{" "}
                        </option>
                        <option value="Norway"> Norway </option>
                        <option value="Oman"> Oman </option>
                        <option value="Pakistan"> Pakistan </option>
                        <option value="Palau"> Palau </option>
                        <option value="Palestine"> Palestine </option>
                        <option value="Panama"> Panama </option>
                        <option value="Papua New Guinea">
                          {" "}
                          Papua New Guinea{" "}
                        </option>
                        <option value="Paraguay"> Paraguay </option>
                        <option value="Peru"> Peru </option>
                        <option value="Philippines"> Philippines </option>
                        <option value="Pitcairn Islands">
                          {" "}
                          Pitcairn Islands{" "}
                        </option>
                        <option value="Poland"> Poland </option>
                        <option value="Portugal"> Portugal </option>
                        <option value="Pridnestrovie"> Pridnestrovie </option>
                        <option value="Puerto Rico"> Puerto Rico </option>
                        <option value="Qatar"> Qatar </option>
                        <option value="Romania"> Romania </option>
                        <option value="Russia"> Russia </option>
                        <option value="Rwanda"> Rwanda </option>
                        <option value="Saint Helena"> Saint Helena </option>
                        <option value="Saint Kitts and Nevis">
                          {" "}
                          Saint Kitts and Nevis{" "}
                        </option>
                        <option value="Saint Lucia"> Saint Lucia </option>
                        <option value="Saint Pierre and Miquelon">
                          {" "}
                          Saint Pierre and Miquelon{" "}
                        </option>
                        <option value="Saint Vincent and the Grenadines">
                          {" "}
                          Saint Vincent and the Grenadines{" "}
                        </option>
                        <option value="Samoa"> Samoa </option>
                        <option value="San Marino"> San Marino </option>
                        <option value="São Tomé and Príncipe">
                          {" "}
                          São Tomé and Príncipe{" "}
                        </option>
                        <option value="Saudi Arabia"> Saudi Arabia </option>
                        <option value="Senegal"> Senegal </option>
                        <option value="Serbia"> Serbia </option>
                        <option value="Seychelles"> Seychelles </option>
                        <option value="Sierra Leone"> Sierra Leone </option>
                        <option value="Singapore"> Singapore </option>
                        <option value="Slovakia"> Slovakia </option>
                        <option value="Slovenia"> Slovenia </option>
                        <option value="Solomon Islands">
                          {" "}
                          Solomon Islands{" "}
                        </option>
                        <option value="Somalia"> Somalia </option>
                        <option value="Somaliland"> Somaliland </option>
                        <option value="South Africa"> South Africa </option>
                        <option value="South Ossetia"> South Ossetia </option>
                        <option value="Spain"> Spain </option>
                        <option value="Sri Lanka"> Sri Lanka </option>
                        <option value="Sudan"> Sudan </option>
                        <option value="Suriname"> Suriname </option>
                        <option value="Svalbard"> Svalbard </option>
                        <option value="Swaziland"> Swaziland </option>
                        <option value="Sweden"> Sweden </option>
                        <option value="Switzerland"> Switzerland </option>
                        <option value="Syria"> Syria </option>
                        <option value="Tajikistan"> Tajikistan </option>
                        <option value="Tanzania"> Tanzania </option>
                        <option value="Thailand"> Thailand </option>
                        <option value="Timor-Leste"> Timor-Leste </option>
                        <option value="Togo"> Togo </option>
                        <option value="Tokelau"> Tokelau </option>
                        <option value="Tonga"> Tonga </option>
                        <option value="Trinidad and Tobago">
                          {" "}
                          Trinidad and Tobago{" "}
                        </option>
                        <option value="Tristan da Cunha">
                          {" "}
                          Tristan da Cunha{" "}
                        </option>
                        <option value="Tunisia"> Tunisia </option>
                        <option value="Turkey"> Turkey </option>
                        <option value="Turkmenistan"> Turkmenistan </option>
                        <option value="Turks and Caicos Islands">
                          {" "}
                          Turks and Caicos Islands{" "}
                        </option>
                        <option value="Tuvalu"> Tuvalu </option>
                        <option value="Uganda"> Uganda </option>
                        <option value="Ukraine"> Ukraine </option>
                        <option value="United Arab Emirates">
                          {" "}
                          United Arab Emirates{" "}
                        </option>
                        <option value="United Kingdom"> United Kingdom </option>
                        <option value="United States"> United States </option>
                        <option value="Uruguay"> Uruguay </option>
                        <option value="Uzbekistan"> Uzbekistan </option>
                        <option value="Vanuatu"> Vanuatu </option>
                        <option value="Vatican City"> Vatican City </option>
                        <option value="Venezuela"> Venezuela </option>
                        <option value="Vietnam"> Vietnam </option>
                        <option value="Virgin Islands, British">
                          {" "}
                          Virgin Islands, British{" "}
                        </option>
                        <option value="Virgin Islands, United States">
                          {" "}
                          Virgin Islands, United States{" "}
                        </option>
                        <option value="Wallis and Futuna">
                          {" "}
                          Wallis and Futuna{" "}
                        </option>
                        <option value="Western Sahara"> Western Sahara </option>
                        <option value="Yemen"> Yemen </option>
                        <option value="Zambia"> Zambia </option>
                        <option value="Zimbabwe"> Zimbabwe </option>
                        <option value="South Korea"> South Korea </option>
                        <option value="Taiwan"> Taiwan </option>
                        <option value="Macau"> Macau </option>
                      </select>
                    </td>
                    <td data-title="Organization">
                      <label className="control-label">
                        <input
                          type="text"
                          className="form-control"
                          id="ExpNAOrga"
                          name="ExpNAOrga"
                        />
                      </label>
                    </td>
                    <td data-title="Designation">
                      <label className="control-label">
                        <input
                          type="text"
                          className="form-control"
                          id="ExpNADeg"
                          name="ExpNADeg"
                        />
                      </label>
                    </td>
                    <td data-title="Department">
                      <input
                        type="text"
                        className="form-control Specialization "
                        id="DDLExpNASpecialization"
                        name="DDLExpNASpecialization"
                      />
                    </td>
                    <td data-title="Date From">
                      <label className="control-label">
                        <input
                          type="text"
                          className="form-control xyz"
                          autoComplete="off"
                          id="ExpNAFrom"
                          name="ExpNAFrom"
                        />
                      </label>
                    </td>
                    <td data-title="Date To">
                      <label className="control-label">
                        <input
                          type="text"
                          className="form-control xyz"
                          autoComplete="off"
                          id="ExpNATo"
                          name="ExpNATo"
                        />
                      </label>
                    </td>
                    <td>
                      <label className="control-label">
                        <input
                          type="button"
                          className="btn btn-success"
                          defaultValue="Add"
                          id="BtnAddNAExperiance"
                        />
                      </label>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="card card-default">
      <div className="card-header">
        <h4 className="card-title">
          <a>
            <b>6. Fellowships achieved</b>
          </a>
        </h4>
      </div>
      <div className="collapse show">
        <div className="card-body">
          <div className="row">
            <div className="col-lg-12">
              <input
                type="hidden"
                id="FellowshipCount"
                name="FellowshipCount"
              />
              <div className="table-responsive" id="no-more-tables">
                <table className="table table-primary">
                  <thead>
                    <tr>
                      <th style={{ width: "30%" }}>Fellowship Detail</th>
                      <th style={{ width: "20%" }}>Year</th>
                      <th style={{ width: "20%" }}>Amount Per annum</th>
                      <th style={{ width: "20%" }}>Fellowship Status</th>
                      <th style={{ width: "10%" }}></th>
                    </tr>
                  </thead>
                  <tbody id="FellowshipBody" />
                  <tfoot>
                    <tr>
                      <td data-title="Detail">
                        <textarea
                          type="text"
                          className="form-control"
                          id="FellowshipDetail"
                          name="FellowshipDetail"
                          defaultValue={""}
                        />
                      </td>
                      <td data-title="Year">
                        <input
                          type="number"
                          min={1950}
                          max={2030}
                          className="form-control"
                          id="FellowshipYear"
                          name="FellowshipYear"
                        />
                      </td>
                      <td data-title="Amount Per annum">
                        <input
                          type="number"
                          min={0}
                          className="form-control"
                          id="FellowshipAmount"
                          name="FellowshipAmount"
                        />
                      </td>
                      <td data-title="Fellowship Status">
                        <select
                          className="form-control"
                          id="FellowshipStatus"
                          name="FellowshipStatus"
                        >
                          <option selected="selected" value="">
                            Select
                          </option>
                          <option value="Ongoing">Ongoing</option>
                          <option value="Completed">Completed</option>
                        </select>
                      </td>
                      <td>
                        <label className="control-label">
                          <input
                            type="button"
                            className="btn btn-success"
                            defaultValue="Add"
                            id="BtnAddFellowship"
                          />
                        </label>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="card card-default">
      <div className="card-header">
        <h4 className="card-title">
          <a>
            <b>7. Research Work :- </b>
          </a>
        </h4>
      </div>
      <div className="collapse show">
        <div className="card-body">
          <hr />
          <div className="row">
            <div className="col-md-12 col-lg-12">
              <div className="table-responsive">
                <table width="100%">
                  <tbody>
                    <tr>
                      <td> your orcid Id</td>
                      <td>
                        <label className="control-label">
                          <input
                            type="text"
                            id="sOCRID"
                            name="sOCRID"
                            className="form-control"
                          />
                        </label>
                      </td>
                      <td> h-Index as per SCOPUS :</td>
                      <td>
                        <label className="control-label">
                          <input
                            type="text"
                            id="nhIndex"
                            name="nhIndex"
                            className="form-control numericwithdecimal"
                          />
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td> h-Index as per Web of science :</td>
                      <td>
                        <label className="control-label">
                          <input
                            type="text"
                            id="nhIndexWebofScience"
                            name="nhIndexWebofScience"
                            className="form-control numericwithdecimal"
                          />
                        </label>
                      </td>
                      <td> Cumulative Impact Factor :</td>
                      <td>
                        <label className="control-label">
                          <input
                            type="text"
                            id="CumulativeImpactFactor"
                            name="CumulativeImpactFactor"
                            className="form-control numericwithdecimal"
                          />
                        </label>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="row">
            <div className="col-md-2 col-lg-2">
              <b> No of Publications</b>
              <input
                type="hidden"
                id="PublicationDestinations"
                name="PublicationDestinations"
                defaultValue={9}
              />
              <input
                type="hidden"
                id="PublicationHeads"
                name="PublicationHeads"
                defaultValue={6}
              />
            </div>
            <div className="col-md-10 col-lg-10">
              <table className="table table-primary">
                <thead>
                  <tr>
                    <th style={{ width: "20%" }}></th>
                    <th>Total</th>
                    <th>As per UGC Care List</th>
                    <th>SCI</th>
                    <th>Web of Science</th>
                    <th>Google Scholar</th>
                    <th>Scopus</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Research Papers Published (Total)</td>
                    <td>
                      <label className="control-label">
                        <input
                          type="number"
                          min={"00"}
                          max={"9999"}
                          id="Nop_1_2"
                          name="Nop_1_2"
                          className="form-control numericOnly"
                        />
                      </label>
                    </td>
                    <td>
                      <label className="control-label">
                        <input
                          type="number"
                          min={"00"}
                          max={"9999"}
                          id="Nop_1_7"
                          name="Nop_1_7"
                          className="form-control numericOnly"
                        />
                      </label>
                    </td>
                    <td>
                      <label className="control-label">
                        <input
                          type="number"
                          min={"00"}
                          max={"9999"}
                          id="Nop_1_3"
                          name="Nop_1_3"
                          className="form-control numericOnly"
                        />
                      </label>
                    </td>
                    <td>
                      <label className="control-label">
                        <input
                          type="number"
                          min={"00"}
                          max={"9999"}
                          id="Nop_1_8"
                          name="Nop_1_8"
                          className="form-control numericOnly"
                        />
                      </label>
                    </td>
                    <td>
                      <label className="control-label">
                        <input
                          type="number"
                          min={"00"}
                          max={"9999"}
                          id="Nop_1_9"
                          name="Nop_1_9"
                          className="form-control numericOnly"
                        />
                      </label>
                    </td>
                    <td>
                      <label className="control-label">
                        <input
                          type="number"
                          min={"00"}
                          max={"9999"}
                          id="Nop_1_1"
                          name="Nop_1_1"
                          className="form-control numericOnly"
                        />
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td>Research Papers Published in last three years</td>
                    <td>
                      <label className="control-label">
                        <input
                          type="number"
                          min={"00"}
                          max={"9999"}
                          id="Nop_6_2"
                          name="Nop_6_2"
                          className="form-control numericOnly"
                        />
                      </label>
                    </td>
                    <td>
                      <label className="control-label">
                        <input
                          type="number"
                          min={"00"}
                          max={"9999"}
                          id="Nop_6_7"
                          name="Nop_6_7"
                          className="form-control numericOnly"
                        />
                      </label>
                    </td>
                    <td>
                      <label className="control-label">
                        <input
                          type="number"
                          min={"00"}
                          max={"9999"}
                          id="Nop_6_3"
                          name="Nop_6_3"
                          className="form-control numericOnly"
                        />
                      </label>
                    </td>
                    <td>
                      <label className="control-label">
                        <input
                          type="number"
                          min={"00"}
                          max={"9999"}
                          id="Nop_6_8"
                          name="Nop_6_8"
                          className="form-control numericOnly"
                        />
                      </label>
                    </td>
                    <td>
                      <label className="control-label">
                        <input
                          type="number"
                          min={"00"}
                          max={"9999"}
                          id="Nop_6_9"
                          name="Nop_6_9"
                          className="form-control numericOnly"
                        />
                      </label>
                    </td>
                    <td>
                      <label className="control-label">
                        <input
                          type="number"
                          min={"00"}
                          max={"9999"}
                          id="Nop_6_1"
                          name="Nop_6_1"
                          className="form-control numericOnly"
                        />
                      </label>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-lg-12">
              <h5> Number of citations (in last three years)</h5>
            </div>
            <div className="col-md-10 col-lg-10 col-md-offset-2 col-lg-offset-2">
              <input
                type="text"
                id="Numberofcitations"
                style={{ width: "150px !important" }}
                name="Numberofcitations"
                className="form-control numericwithdecimal"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-lg-12">
              <h5> No. of Funded Projects (in last three years) </h5>
            </div>
            <div className="col-md-10 col-lg-10 col-md-offset-2 col-lg-offset-2">
              <div className="table-responsive">
                <table className="table table-primary">
                  <thead>
                    <tr>
                      <th style={{ width: "20%" }}></th>
                      <th>No. Of Projects</th>
                      <th>for Amount (in INR)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Completed</td>
                      <td>
                        <label className="control-label">
                          <input
                            type="text"
                            id="FundedProjectCompleted"
                            name="FundedProjectCompleted"
                            className="form-control numericOnly"
                          />
                        </label>
                      </td>
                      <td>
                        <label className="control-label">
                          <input
                            type="text"
                            id="FundedProjectCompletedAmount"
                            name="FundedProjectCompletedAmount"
                            className="form-control numericwithdecimal"
                          />
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>Ongoing</td>
                      <td>
                        <label className="control-label">
                          <input
                            type="text"
                            id="FundedProjectOnGoing"
                            name="FundedProjectOnGoing"
                            className="form-control numericOnly"
                          />
                        </label>
                      </td>
                      <td>
                        <label className="control-label">
                          <input
                            type="text"
                            id="FundedProjectOnGoingAmount"
                            name="FundedProjectOnGoingAmount"
                            className="form-control numericwithdecimal"
                          />
                        </label>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row" style={{ display: "none" }}>
            <div className="col-md-12 col-lg-12">
              <h5> No. of Patents </h5>
            </div>
            <div className="col-md-10 col-lg-10 col-md-offset-2 col-lg-offset-2">
              <div className="table-responsive">
                <table className="table table-primary">
                  <thead>
                    <tr>
                      <th style={{ width: "20%" }}></th>
                      <th>Filed</th>
                      <th>Granted</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Patents</td>
                      <td>
                        <label className="control-label">
                          <input
                            type="text"
                            id="PatentApplied"
                            name="PatentApplied"
                            className="form-control numericOnly"
                          />
                        </label>
                      </td>
                      <td>
                        <label className="control-label">
                          <input
                            type="text"
                            id="PatentGranted"
                            name="PatentGranted"
                            className="form-control numericOnly"
                          />
                        </label>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-lg-12">
              <h5>
                {" "}
                No. of conferences, seminars, workshops, training programmes (in
                last three years){" "}
              </h5>
            </div>
            <div className="col-md-10 col-lg-10 col-md-offset-2 col-lg-offset-2">
              <div className="table-responsive">
                <table className="table table-primary">
                  <thead>
                    <tr>
                      <th style={{ width: "20%" }}></th>
                      <th>Total (no.)</th>
                      <th>National (no.)</th>
                      <th>International (no.)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Presented at</td>
                      <td>
                        <label className="control-label">
                          <input
                            type="text"
                            id="conferencesPresentedT"
                            name="conferencesPresentedT"
                            className="form-control numericOnly"
                          />
                        </label>
                      </td>
                      <td>
                        <label className="control-label">
                          <input
                            type="text"
                            id="conferencesPresentedN"
                            name="conferencesPresentedN"
                            className="form-control numericOnly"
                          />
                        </label>
                      </td>
                      <td>
                        <label className="control-label">
                          <input
                            type="text"
                            id="conferencesPresentedI"
                            name="conferencesPresentedI"
                            className="form-control numericOnly"
                          />
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>Attended</td>
                      <td>
                        <label className="control-label">
                          <input
                            type="text"
                            id="conferencesAttendedT"
                            name="conferencesAttendedT"
                            className="form-control numericOnly"
                          />
                        </label>
                      </td>
                      <td>
                        <label className="control-label">
                          <input
                            type="text"
                            id="conferencesAttendedN"
                            name="conferencesAttendedN"
                            className="form-control numericOnly"
                          />
                        </label>
                      </td>
                      <td>
                        <label className="control-label">
                          <input
                            type="text"
                            id="conferencesAttendedI"
                            name="conferencesAttendedI"
                            className="form-control numericOnly"
                          />
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>Organized</td>
                      <td>
                        <label className="control-label">
                          <input
                            type="text"
                            id="conferencesOrganizedT"
                            name="conferencesOrganizedT"
                            className="form-control numericOnly"
                          />
                        </label>
                      </td>
                      <td>
                        <label className="control-label">
                          <input
                            type="text"
                            id="conferencesOrganizedN"
                            name="conferencesOrganizedN"
                            className="form-control numericOnly"
                          />
                        </label>
                      </td>
                      <td>
                        <label className="control-label">
                          <input
                            type="text"
                            id="conferencesOrganizedI"
                            name="conferencesOrganizedI"
                            className="form-control numericOnly"
                          />
                        </label>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-lg-12">
              <h5> Research Guidance (in last three years) </h5>
            </div>
            <div className="col-md-10 col-lg-10 col-md-offset-2 col-lg-offset-2">
              <div className="table-responsive">
                <table className="table table-primary">
                  <thead>
                    <tr>
                      <th style={{ width: "20%" }}></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Successfully completed</td>
                      <td>
                        <div className="table-responsive">
                          <table className="table table-primary">
                            <thead>
                              <tr>
                                <th style={{ width: "20%" }}></th>
                                <th>M Phil. Equivalent (No.)</th>
                                <th>PhD Equivalent (No.)</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Independent</td>
                                <td>
                                  <label className="control-label">
                                    <input
                                      type="text"
                                      id="RGSCMPI"
                                      name="RGSCMPI"
                                      className="form-control numericOnly"
                                    />
                                  </label>
                                </td>
                                <td>
                                  <label className="control-label">
                                    <input
                                      type="text"
                                      id="RGSCPHDI"
                                      name="RGSCPHDI"
                                      className="form-control numericOnly"
                                    />
                                  </label>
                                </td>
                              </tr>
                              <tr>
                                <td>As Co-supervisor</td>
                                <td>
                                  <label className="control-label">
                                    <input
                                      type="text"
                                      id="RGSCMPCS"
                                      name="RGSCMPCS"
                                      className="form-control numericOnly"
                                    />
                                  </label>
                                </td>
                                <td>
                                  <label className="control-label">
                                    <input
                                      type="text"
                                      id="RGSCPHDCS"
                                      name="RGSCPHDCS"
                                      className="form-control numericOnly"
                                    />
                                  </label>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Under Supervision</td>
                      <td>
                        <div className="table-responsive">
                          <table className="table table-primary">
                            <thead>
                              <tr>
                                <th style={{ width: "20%" }}></th>
                                <th>M Phil. Equivalent (No.)</th>
                                <th>PhD Equivalent (No.)</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Independent</td>
                                <td>
                                  <label className="control-label">
                                    <input
                                      type="text"
                                      id="RGUSMPI"
                                      name="RGUSMPI"
                                      className="form-control numericOnly"
                                    />
                                  </label>
                                </td>
                                <td>
                                  <label className="control-label">
                                    <input
                                      type="text"
                                      id="RGUSPHDI"
                                      name="RGUSPHDI"
                                      className="form-control numericOnly"
                                    />
                                  </label>
                                </td>
                              </tr>
                              <tr>
                                <td>As Co-supervisor</td>
                                <td>
                                  <label className="control-label">
                                    <input
                                      type="text"
                                      id="RGUSMPCS"
                                      name="RGUSMPCS"
                                      className="form-control numericOnly"
                                    />
                                  </label>
                                </td>
                                <td>
                                  <label className="control-label">
                                    <input
                                      type="text"
                                      id="RGUSPHDCS"
                                      name="RGUSPHDCS"
                                      className="form-control numericOnly"
                                    />
                                  </label>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="card card-default">
      <div className="card-header">
        <h4 className="card-title">
          <a>
            <b>
              8. Books Authored/co-authored/ edited/co-edited (in last three
              years)
            </b>
          </a>
        </h4>
      </div>
      <div className="collapse show">
        <div className="card-body">
          <div className="row">
            <div className="col-lg-12">
              <input type="hidden" id="BooksCount" name="BooksCount" />
              <div className="table-responsive" id="no-more-tables">
                <table className="table table-primary">
                  <thead>
                    <tr>
                      <th style={{ width: "50%" }}>Detail</th>
                      <th style={{ width: "20%" }}>ISBN Number</th>
                      <th style={{ width: "20%" }}>Written As</th>
                      <th style={{ width: "10%" }}></th>
                    </tr>
                  </thead>
                  <tbody id="BooksBody" />
                  <tfoot>
                    <tr>
                      <td data-title="Detail">
                        <textarea
                          type="text"
                          className="form-control"
                          id="BooksDetail"
                          name="BooksDetail"
                          defaultValue={""}
                        />
                      </td>
                      <td data-title="Year">
                        <input
                          type="number"
                          className="form-control"
                          id="BooksISBNNo"
                          name="BooksISBNNo"
                        />
                      </td>
                      <td data-title="Written As">
                        <select
                          className="form-control"
                          id="BooksWrittenAs"
                          name="BooksWrittenAs"
                        >
                          <option selected="selected" value="">
                            Select
                          </option>
                          <option value="Principal Writer">
                            Principal Writer
                          </option>
                          <option value="Co Writer">Co Writer</option>
                        </select>
                      </td>
                      <td>
                        <label className="control-label">
                          <input
                            type="button"
                            className="btn btn-success"
                            defaultValue="Add"
                            id="BtnAddBooks"
                          />
                        </label>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="card card-default">
      <div className="card-header">
        <h4 className="card-title">
          <a>
            <b>9. Patent Details (in last three years)</b>
          </a>
        </h4>
      </div>
      <div className="collapse show">
        <div className="card-body">
          <hr />
          <div className="row">
            <div className="col-lg-12">
              <input type="hidden" id="PatentCount" name="PatentCount" />
              <div className="table-responsive" id="no-more-tables">
                <table className="table table-primary">
                  <thead>
                    <tr>
                      <th style={{ width: "50%" }}>Patent Detail</th>
                      <th style={{ width: "20%" }}>Year</th>
                      <th style={{ width: "20%" }}>Patent Status</th>
                      <th style={{ width: "10%" }}></th>
                    </tr>
                  </thead>
                  <tbody id="PatentBody" />
                  <tfoot>
                    <tr>
                      <td data-title="Detail">
                        <textarea
                          type="text"
                          className="form-control"
                          id="PatentDetail"
                          name="PatentDetail"
                          defaultValue={""}
                        />
                      </td>
                      <td data-title="Year">
                        <input
                          type="number"
                          min={1950}
                          max={2030}
                          className="form-control"
                          id="PatentYear"
                          name="PatentYear"
                        />
                      </td>
                      <td data-title="Patent Status">
                        <select
                          className="form-control"
                          id="PatentStatus"
                          name="PatentStatus"
                        >
                          <option selected="selected" value="">
                            Select
                          </option>
                          <option value="filed">filed</option>
                          <option value="Granted">Granted</option>
                        </select>
                      </td>
                      <td>
                        <label className="control-label">
                          <input
                            type="button"
                            className="btn btn-success"
                            defaultValue="Add"
                            id="BtnAddPatent"
                          />
                        </label>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="card card-default">
      <div className="card-header">
        <h4 className="card-title">
          <a>
            <b>10. Consultancy (in last three years):- </b>
          </a>
        </h4>
      </div>
      <div className="row">
        <div className="col-md-10 col-lg-10 col-md-offset-2 col-lg-offset-2">
          <div className="table-responsive">
            <table className="table table-primary">
              <thead>
                <tr>
                  <th style={{ width: "20%" }}></th>
                  <th>No. of Assignments</th>
                  <th>for Amount (in INR)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Completed</td>
                  <td>
                    <label className="control-label">
                      <input
                        type="text"
                        id="ConsultancyCompleted"
                        name="ConsultancyCompleted"
                        className="form-control numericOnly"
                      />
                    </label>
                  </td>
                  <td>
                    <label className="control-label">
                      <input
                        type="text"
                        id="ConsultancyCompletedAmount"
                        name="ConsultancyCompletedAmount"
                        className="form-control numericwithdecimal"
                      />
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>Ongoing</td>
                  <td>
                    <label className="control-label">
                      <input
                        type="text"
                        id="ConsultancyOnGoing"
                        name="ConsultancyOnGoing"
                        className="form-control numericOnly"
                      />
                    </label>
                  </td>
                  <td>
                    <label className="control-label">
                      <input
                        type="text"
                        id="ConsultancyOnGoingAmount"
                        name="ConsultancyOnGoingAmount"
                        className="form-control numericwithdecimal"
                      />
                    </label>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div className="card card-default">
      <div className="card-header">
        <h4 className="card-title">
          <a>
            <b>11. Peer Recognition / Awards </b>
          </a>
        </h4>
      </div>
      <div className="collapse show">
        <div className="card-body">
          <hr />
          <div className="row">
            <div className="col-lg-12">
              <input type="hidden" id="AwardCount" name="AwardCount" />
              <div className="table-responsive" id="no-more-tables">
                <table className="table table-primary">
                  <thead>
                    <tr>
                      <th>Awards / Honors</th>
                      <th>Agency</th>
                      <th>Year</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody id="AwardsBody" />
                  <tfoot>
                    <tr>
                      <td data-title="Awards / Honors">
                        <label className="control-label">
                          <input
                            type="text"
                            className="form-control"
                            id="AwardsName"
                            name="AwardsName"
                          />
                        </label>
                      </td>
                      <td data-title="Agency">
                        <label className="control-label">
                          <input
                            type="text"
                            className="form-control"
                            id="AwardsAgency"
                            name="AwardsAgency"
                          />
                        </label>
                      </td>
                      <td data-title="Year">
                        <label className="control-label">
                          <input
                            type="number"
                            min={1950}
                            max={2030}
                            className="form-control"
                            id="AwardsYear"
                            name="AwardsYear"
                          />
                        </label>
                      </td>
                      <td>
                        <label className="control-label">
                          <input
                            type="button"
                            className="btn btn-success"
                            defaultValue="Add"
                            id="BtnAddAward"
                          />
                        </label>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="card card-default">
      <div className="card-header">
        <h4 className="card-title">
          <a>
            <b>12. Other information</b>
          </a>
        </h4>
      </div>
      <div className="collapse show">
        <div className="card-body">
          <hr />
          <div className="row">
            <div className="col-md-4 col-lg-4">
              <div className="form-group">
                <label className="control-label">
                  Present / Last Drawn salary (monthly in INR){" "}
                </label>
                <input
                  type="text"
                  className="form-control numericwithdecimal"
                  id="TxtPresentSalary"
                  name="TxtPresentSalary"
                />
              </div>
            </div>
            <div className="col-md-2 col-lg-2">
              <div className="form-group">
                <label className="control-label">
                  Notice period (in Days){" "}
                </label>
                <input
                  type="text"
                  className="form-control numericwithdecimal"
                  id="TxtNoticePeriod"
                  name="TxtNoticePeriod"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="collapse show">
        <div className="card-body">
          <hr />
          <div className="row">
            <div className="col-md-2 col-lg-2">
              <div className="form-group">
                <label className="control-label">
                  Do You Know anyone in manipal ?
                </label>
                <div className="input-group">
                  <div className="btn-group radioBtn">
                    <a
                      className="btn btn-primary btn-sm notActive"
                      data-toggle="AnyOneInmanipal"
                      data-title="Y"
                    >
                      Yes
                    </a>
                    <a
                      className="btn btn-primary btn-sm active"
                      data-toggle="AnyOneInmanipal"
                      data-title="N"
                    >
                      No
                    </a>
                  </div>
                  <input
                    type="hidden"
                    name="AnyOneInmanipal"
                    id="AnyOneInmanipal"
                    defaultValue="N"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-9 col-lg-9">
              <div className="form-group">
                <label className="control-label">If yes?</label>
                <input
                  type="hidden"
                  id="KnowInmanipalCount"
                  name="KnowInmanipalCount"
                />
                <div className="table-responsive">
                  <table className="table table-primary">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>Department</th>
                        <th>campus</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody id="KnowInmanipalBody" />
                    <tfoot>
                      <tr>
                        <td>
                          <label className="control-label">
                            <input
                              type="text"
                              className="form-control"
                              id="manipalName"
                              name="manipalName"
                            />
                          </label>
                        </td>
                        <td>
                          <label className="control-label">
                            <input
                              type="text"
                              className="form-control"
                              id="manipalDesignation"
                              name="manipalDesignation"
                            />
                          </label>
                        </td>
                        <td>
                          <label className="control-label">
                            <input
                              type="text"
                              className="form-control"
                              id="manipalDepartment"
                              name="manipalDepartment"
                            />
                          </label>
                        </td>
                        <td>
                          <select
                            className="form-control"
                            id="DDLmanipalCampus"
                            name="DDLmanipalCampus"
                          >
                            <option value="">Select</option>
                            <option value="Abu Dhabi"> Abu Dhabi </option>
                            <option value="Africa"> Africa </option>
                            <option value="Ahmedabad"> Ahmedabad </option>
                            <option value="Amsterdam"> Amsterdam </option>
                            <option value="Australia"> Australia </option>
                            <option value="Bangalore"> Bangalore </option>
                            <option value="Bhubaneswar"> Bhubaneswar </option>
                            <option value="Chandigarh"> Chandigarh </option>
                            <option value="Chennai"> Chennai </option>
                            <option value="Cochin"> Cochin </option>
                            <option value="Dubai"> Dubai </option>
                            <option value="France"> France </option>
                            <option value="Greater Noida">
                              {" "}
                              Greater Noida{" "}
                            </option>
                            <option value="Gurgaon (Manesar)">
                              {" "}
                              Gurgaon (Manesar){" "}
                            </option>
                            <option value="Gwalior"> Gwalior </option>
                            <option value="Hyderabad"> Hyderabad </option>
                            <option value="Indore"> Indore </option>
                            <option value="Jaipur"> Jaipur </option>
                            <option value="Kolkata"> Kolkata </option>
                            <option value="London"> London </option>
                            <option value="Lucknow"> Lucknow </option>
                            <option value="Mauritius"> Mauritius </option>
                            <option value="Mohali"> Mohali </option>
                            <option value="Mumbai"> Mumbai </option>
                            <option value="Noida"> Noida </option>
                            <option value="Patna"> Patna </option>
                            <option value="Pune"> Pune </option>
                            <option value="Raipur"> Raipur </option>
                            <option value="Ranchi"> Ranchi </option>
                            <option value="Romania"> Romania </option>
                            <option value="Singapore"> Singapore </option>
                            <option value="South Africa"> South Africa </option>
                            <option value="Tashkent"> Tashkent </option>
                            <option value="USA"> USA </option>
                          </select>
                        </td>
                        <td>
                          <label className="control-label">
                            <input
                              type="button"
                              className="btn btn-success"
                              defaultValue="Add"
                              id="BtnAddKnowInmanipal"
                            />
                          </label>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="card card-default">
      <div className="collapse show">
        <div className="card-body">
          <hr />
          <div className="row">
            <div className="col-md-2 col-lg-2">
              <div className="form-group">
                <label className="control-label">
                  Have you ever been interviewed in manipal earlier?
                </label>
                <div className="input-group">
                  <div className="btn-group radioBtn">
                    <a
                      className="btn btn-primary btn-sm notActive"
                      data-toggle="interviewedInmanipal"
                      data-title="Y"
                    >
                      Yes
                    </a>
                    <a
                      className="btn btn-primary btn-sm active"
                      data-toggle="interviewedInmanipal"
                      data-title="N"
                    >
                      No
                    </a>
                  </div>
                  <input
                    type="hidden"
                    name="interviewedInmanipal"
                    id="interviewedInmanipal"
                    defaultValue="N"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-2 col-lg-2">
              <div className="form-group">
                <label className="control-label">Campus</label>
                <select
                  className="form-control"
                  id="interviewedCampus"
                  name="interviewedCampus"
                >
                  <option value="">Select</option>
                  <option value="Abu Dhabi"> Abu Dhabi </option>
                  <option value="Africa"> Africa </option>
                  <option value="Ahmedabad"> Ahmedabad </option>
                  <option value="Amsterdam"> Amsterdam </option>
                  <option value="Australia"> Australia </option>
                  <option value="Bangalore"> Bangalore </option>
                  <option value="Bhubaneswar"> Bhubaneswar </option>
                  <option value="Chandigarh"> Chandigarh </option>
                  <option value="Chennai"> Chennai </option>
                  <option value="Cochin"> Cochin </option>
                  <option value="Dubai"> Dubai </option>
                  <option value="France"> France </option>
                  <option value="Greater Noida"> Greater Noida </option>
                  <option value="Gurgaon (Manesar)"> Gurgaon (Manesar) </option>
                  <option value="Gwalior"> Gwalior </option>
                  <option value="Hyderabad"> Hyderabad </option>
                  <option value="Indore"> Indore </option>
                  <option value="Jaipur"> Jaipur </option>
                  <option value="Kolkata"> Kolkata </option>
                  <option value="London"> London </option>
                  <option value="Lucknow"> Lucknow </option>
                  <option value="Mauritius"> Mauritius </option>
                  <option value="Mohali"> Mohali </option>
                  <option value="Mumbai"> Mumbai </option>
                  <option value="Noida"> Noida </option>
                  <option value="Patna"> Patna </option>
                  <option value="Pune"> Pune </option>
                  <option value="Raipur"> Raipur </option>
                  <option value="Ranchi"> Ranchi </option>
                  <option value="Romania"> Romania </option>
                  <option value="Singapore"> Singapore </option>
                  <option value="South Africa"> South Africa </option>
                  <option value="Tashkent"> Tashkent </option>
                  <option value="USA"> USA </option>
                </select>
              </div>
            </div>
            <div className="col-md-2 col-lg-2">
              <div className="form-group">
                <label className="control-label">Given offer to join</label>
                <div className="input-group">
                  <div className="btn-group radioBtn">
                    <a
                      className="btn btn-primary btn-sm notActive"
                      data-toggle="offeredInmanipal"
                      data-title="Y"
                    >
                      Yes
                    </a>
                    <a
                      className="btn btn-primary btn-sm active"
                      data-toggle="offeredInmanipal"
                      data-title="N"
                    >
                      No
                    </a>
                  </div>
                  <input
                    type="hidden"
                    name="offeredInmanipal"
                    id="offeredInmanipal"
                    defaultValue="N"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-2 col-lg-2">
              <div className="form-group">
                <label className="control-label">Joined</label>
                <div className="input-group">
                  <div className="btn-group radioBtn">
                    <a
                      className="btn btn-primary btn-sm notActive"
                      data-toggle="joinedInmanipal"
                      data-title="Y"
                    >
                      Yes
                    </a>
                    <a
                      className="btn btn-primary btn-sm active"
                      data-toggle="joinedInmanipal"
                      data-title="N"
                    >
                      No
                    </a>
                  </div>
                  <input
                    type="hidden"
                    name="joinedInmanipal"
                    id="joinedInmanipal"
                    defaultValue="N"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-2 col-lg-2">
              <div className="form-group">
                <label className="control-label">If Yes, From:</label>
                <input
                  type="text"
                  className="form-control  xyz"
                  autoComplete="off"
                  id="joinedInmanipalFrom"
                  name="joinedInmanipalFrom"
                />
              </div>
            </div>
            <div className="col-md-2 col-lg-2">
              <div className="form-group">
                <label className="control-label">To:</label>
                <input
                  type="text"
                  className="form-control  xyz"
                  autoComplete="off"
                  id="joinedInmanipalTo"
                  name="joinedInmanipalTo"
                />
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <div className="form-group">
                <label className="control-label">
                  Have you ever been punished during your service or convicted
                  by a court of law?
                </label>
                <div className="input-group">
                  <div className="btn-group radioBtn">
                    <a
                      className="btn btn-primary btn-sm notActive"
                      data-toggle="CaseOnYou"
                      data-title="Y"
                    >
                      Yes
                    </a>
                    <a
                      className="btn btn-primary btn-sm active"
                      data-toggle="CaseOnYou"
                      data-title="N"
                    >
                      No
                    </a>
                  </div>
                  <input
                    type="hidden"
                    name="CaseOnYou"
                    id="CaseOnYou"
                    defaultValue="N"
                  />
                </div>
                <br clear="all" />
                <div className="form-group">
                  <label className="control-label">If Yes,Please Explain</label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="CaseOnYoudetail"
                    name="CaseOnYoudetail"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="form-group">
                <label className="control-label">
                  Do you have any case pending against you in court of law?
                </label>
                <div className="input-group">
                  <div className="btn-group radioBtn">
                    <a
                      className="btn btn-primary btn-sm notActive"
                      data-toggle="PendingCaseOnYou"
                      data-title="Y"
                    >
                      Yes
                    </a>
                    <a
                      className="btn btn-primary btn-sm active"
                      data-toggle="PendingCaseOnYou"
                      data-title="N"
                    >
                      No
                    </a>
                  </div>
                  <input
                    type="hidden"
                    name="PendingCaseOnYou"
                    id="PendingCaseOnYou"
                    defaultValue="N"
                  />
                </div>
                <br clear="all" />
                <div className="form-group">
                  <label className="control-label">If Yes,Please Explain</label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="PendingCaseOnYoudetail"
                    name="PendingCaseOnYoudetail"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\n            .btn-file {\n                position: relative;\n                overflow: hidden;\n                background: #5d78e0;\n                color: #fff;\n                padding: 5px 15px;\n            }\n\n                .btn-file:hover {\n                    color: #fff;\n                }\n\n                .btn-file input[type=file] {\n                    position: absolute;\n                    top: 0;\n                    right: 0;\n                    min-width: 100%;\n                    min-height: 100%;\n                    font-size: 100px;\n                    text-align: right;\n                    filter: alpha(opacity=0);\n                    opacity: 0;\n                    outline: none;\n                    background: white;\n                    cursor: inherit;\n                    display: block;\n                }\n        "
      }}
    />
    <div className="card card-default">
      <div className="collapse show">
        <div className="card-body">
          <hr />
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <div className="form-group">
                <label className="control-label">
                  Upload Photo<sapn style={{ color: "red" }}>*</sapn> :
                </label>{" "}
                <br />
                <span className="btn btn-file-btn btn-file">
                  Browse Photo....{" "}
                  <input
                    type="file"
                    id="UPhoto"
                    name="UPhoto"
                    required="required"
                    onchange="return validateUPhoto(this.id);"
                  />
                </span>
                <br />
                (Please upload .jpg, .png, .jpeg format only upto 2mb.)
                <br />
                <img
                  id="previewPhoto"
                  src="#"
                  alt="your image"
                  style={{ display: "none" }}
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="form-group">
                <label className="control-label">Upload Resume :</label> <br />
                <span className="btn btn-file-btn btn-file">
                  Browse Resume....{" "}
                  <input
                    type="file"
                    id="Resume"
                    name="Resume"
                    onchange="return validateResume(this.id);"
                  />
                </span>
                <br />
                (Please upload .docx, .doc, .pdf format only upto 2mb.)
                <br />
                <a
                  id="previewResumeLink"
                  className="btn btn-sm btn-warning"
                  style={{ display: "none" }}
                  href="#"
                  target="_blank"
                >
                  {" "}
                  Click hear To View{" "}
                </a>
                <iframe
                  id="previewResume"
                  frameBorder={1}
                  scrolling="auto"
                  style={{ display: "none", minHeight: 300, minWidth: "99%" }}
                />
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-12 col-lg-12">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="Chkconfirm"
                  name="Chkconfirm"
                  required="required"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  I confirm that the information provided here are true to my
                  knowledge.
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="text-center">
      <input
        type="submit"
        className="btn btn-success"
        id="btnSubmit"
        defaultValue="Submit"
      />
    </div>
  </div>
  <div>&nbsp;</div>
</form>

    </div>
  );
};

export default Form;
