import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Blog, Contact, Licenses, Home, Team, Error, Services, Projects } from './pages';
import logo from './img/Home/Team/Logo.svg'
import Search from './img/Home/Team/Search.svg'
import Icons from './img/Home/Team/Icons.svg'
import './App.css'

function App() {
  return (
    <Router>
      <div>
        <header>
          <div class="container">
            <div class="cat">
              <img src={logo} alt="" />
              <ul class="header_ul">
                <Link className='header_li' to={'/'}>Home</Link>
                <Link className='header_li' to={'/blog'}>Blog</Link>
                <Link className='header_li' to={'/contact'}>Contact</Link>
                <Link className='header_li' to={'/team'}>Team</Link>
                <Link className='header_li' to={'/services'}>Services</Link>
                <Link className='header_li' to={'/projects'}>Projects</Link>
                <Link className='header_li' to={'/licenses'}>Licenses</Link>
                <img className='Search' src={Search} alt="" />
              </ul>
            </div>
          </div>
        </header>

      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/team' element={<Team />} />
        <Route path='/services' element={<Services />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/licenses' element={<Licenses />} />
        <Route path='*' element={<Error />} />
      </Routes>

      <div>
        <footer>
          <div class="container">
            <div class="cat">
              <ul style={{ marginLeft: '-40px' }}>
                <li>
                  <img src={logo} alt="" />
                </li>
                <li class="footer_li">
                  It is a long established fact that a reader <br />
                  will be distracted lookings.
                </li>
                <li class="footer_li">
                  <img src={Icons} alt="" />
                </li>
              </ul>
              <ul>
                <li style={{ padding: '20px', fontSize: '25px', color: '#292F36', fontFamily: 'DM Serif Display, serif' }}>Pages</li>
                <li class="footer_li">About Us</li>
                <li class="footer_li">Our Projects</li>
                <li class="footer_li">Our Team</li>
                <li class="footer_li">Contact Us</li>
                <li class="footer_li">Services</li>
              </ul>
              <ul>
                <li style={{ padding: '20px', fontSize: '25px', color: '#292F36', fontFamily: 'DM Serif Display, serif' }}>Services</li>
                <li class="footer_li">Kitchan</li>
                <li class="footer_li">Living Area</li>
                <li class="footer_li">Bathroom</li>
                <li class="footer_li">Dinning Hall</li>
                <li class="footer_li">Bedroom</li>
              </ul>
              <ul>
                <li style={{ padding: '20px', fontSize: '25px', color: '#292F36', fontFamily: 'DM Serif Display, serif' }}>Contact</li>
                <li class="footer_li">55 East Birchwood Ave. <br />
                  Brooklyn, New York 11201
                </li>
                <li class="footer_li">contact@interno.com</li>
                <li class="footer_li">(123) 456 - 7890</li>
              </ul>
            </div>
          </div>
        </footer>
      </div>

    </Router>
  );
}

export default App;
