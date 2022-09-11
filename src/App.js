import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import Stats from './components/Stats';
import JobCardMain from './components/JobCardMain';
import WhyUs from './components/WhyUs';
import Footer from './components/Footer';
import Testimonial from './components/Testimonial';

function App() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Stats />
      <JobCardMain />
      <WhyUs />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
