import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import Stats from './components/Stats';
import JobCardMain from './components/JobCardMain';
import WhyUs from './components/WhyUs';
import Footer from './components/Footer';
import Testimonial from './components/Testimonial';
import Form from './components/Form';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/dashboardnew/Dashboard';
import Openings from './components/Openings';
import JobDesc from './components/JobDesc';
import Faq from './components/FAQ';

import Recognition from './components/Recognition';
import ApplicationsDetails from './components/dashboard/ApplicationDetails';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route
            exact
            path='/'
            element={
              <div>
                <Carousel />
                <Stats />
                <Recognition />
                <JobCardMain />
                <WhyUs />
                <Testimonial />
              </div>
            }
          />
          <Route exact path='/apply' element={<Form />} />
          <Route exact path='/admin' element={<Login />} />
          <Route exact path='/openings' element={<Openings />} />
          <Route exact path='/admin/dashboard' element={<Dashboard />} />
          <Route
            path='/applicantdetails/:id'
            element={<ApplicationsDetails />}
          />
          <Route exact path='/opening' element={<JobDesc />} />
          <Route exact path='/faq' element={<Faq />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
