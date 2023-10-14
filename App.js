import Navbar from './component/navbar.js';
import Footer from './component/footer.js';
import Home from './pages/home.js';
import AboutUs from './pages/about.js';
import Book from './pages/book.js';
import Portfolio from './pages/portfolio.js';
import Blog from './pages/blog.js';
import Contact from './pages/contact.js';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div>
      <Navbar/>
      <Router>
        <Routes>

        <Route path="/" element={ <Home /> }></Route>
        <Route path="/about" element={ <AboutUs /> }></Route>
        <Route path="/book" element={ <Book /> }></Route>
       <Route path="/portfolio" element={ <Portfolio /> }></Route>
        <Route path="/blog" element={ <Blog /> }></Route>
        <Route path="/contact" element={ <Contact /> }></Route>
        
        </Routes>
      </Router>
      <Footer/>
     
    </div>
  );
}

export default App;
