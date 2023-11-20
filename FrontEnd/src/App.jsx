import './App.css'
import facebookIcon from './assets/facebook.svg';
import xIcon from './assets/twitter.svg';
import link from './assets/linkedin.svg';
import youtube from './assets/youtube.svg';
import magnify from './assets/magnify.svg';
import header from './assets/header.jpg';
import plant2 from './assets/plant2.jpg';
import plant from './assets/plant.jpg';
import farm from './assets/farm.jpg';
import account from './assets/account.svg';
import cursor from './assets/button-cursor.svg';
import ukaid from './assets/ukaid.png';
import un from './assets/un.png';
import unhcr from './assets/unhcr.png';
import unicef from './assets/unicef.png';


function App() {

  return (
    <>
      <div className='taskbar'>
          <div className='taskbar-icons'>
            <img
              src={facebookIcon}
              alt="facebook icon"
              className="icon"
            />
            <img
              src={xIcon}
              alt="x icon"
              className="icon"
            />
            <img
            src={link}
            alt="linkedin icon"
            className="icon"
            />
            <img
            src={youtube}
            alt="youtube icon"
            className="icon"
            />
          </div>
          <div className='search'>
            <input className='searchbar'/>
            <img
            src={magnify}
            alt="maginify icon"
            className="icon magnify"
            />
            <h2>EN</h2>
          </div>
      </div>
      <div className='header'>
        <div className='navigation-bar'>
          <h2 className='company-logo'>COMPANY LOGO</h2>
          <ul className='nav-links'>
            <li>Home</li>
            <li>About the RPSP Platform</li>
            <li>Database</li>
            <li>Forum</li>
            <li>Documentation</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className='header-image'>
          <div className="image-container">
            <img
              src={header}
              alt="Header image"
              className="header-img"
            />
            <p className='header-text'>Text about the image</p>
          </div>
        </div>
      </div>
      <div className='locations'>
        <h4>Garissa</h4>
        <h4>Mandera</h4>
        <h4>Turkana</h4>
      </div>
      <div className='events'>
        <h3 className='events-header'>News and Events</h3>
        <div className='event-images'>
          <div className="image-container">
            <img
                src={plant2}
                alt="Event image 1"
                className="event-photo"
              />  
            <p className='header-text'>Text about the image</p>
          </div>
          <div className="image-container">
            <img
                src={plant}
                alt="Event image 2"
                className="event-photo"
              />
            <p className='header-text'>Text about the image</p>
          </div>
          <div className="image-container">
            <img
                src={farm}
                alt="Event image 3"
                className="event-photo"
              />
            <p className='header-text'>Text about the image</p>
          </div>
        </div>
      </div>
      <div className='lineContainer'>
        <div className="line"></div>
      </div>
      <div className='content'>
        <table>
          <tr>
            <th>Forums</th>
            <th>Topics</th>
            <th>Contributions</th>
          </tr>
          <tr>
            <td>Forum 1 - Conflict resolution</td>
            <td>2</td>
            <td>26</td>
          </tr>
          <tr>
            <td>Forum 2 - Climate Induced Migration</td>
            <td>8</td>
            <td>43</td>
          </tr>
          <tr>
            <td>Forum 3 - Climate Resilience Promotion</td>
            <td>12</td>
            <td>66</td>
          </tr>
          <tr>
            <td>Forum 4 - Knowledge Management Group</td>
            <td>5</td>
            <td>15</td>
          </tr>
        </table>
        <div className='comment-section'>
          <h2 className='hcomment'>Recent Comments</h2>
          <div className='comments'>
            <div className='comment'>
              <div className='main-comment'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                <img
                  src={account}
                  alt="partners logo"
                  className="icon"
                />
                <p>John Doe</p>
              </div>
              <p>1 day ago</p>
            </div>
            <div className='comment'>
              <div className='main-comment'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                <img
                  src={account}
                  alt="partners logo"
                  className="icon"
                />
                <p>Safia Mandera</p>
              </div>
              <p>2 day ago</p>
            </div>
            <div className='comment'>
              <div className='main-comment'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                <img
                  src={account}
                  alt="partners logo"
                  className="icon"
                />
                <p>Abdi Garissa</p>
              </div>
              <p>5 day ago</p>
            </div>
          </div>
        </div>
      </div>
      <div className='registar'>
        <h3>How to Register to the RPSP Platform</h3>
        <div className='steps'>
          <div className='step'>
            Step 01
          </div>
          <div className='step'>
            Step 02
          </div>
          <div className='step'>
            Step 03
          </div>
        </div>
        <img
          src={cursor}
          alt="steps icon"
          className="cursor-icon"
        />
      </div>
      <div className='footer'>
        <div className='partners'>
          <h4>OUR PARTNERS</h4>

          <div className='partner-icons'>
            <img
              src={unicef}
              alt="partners logo"
              className="partner-logo"
            />
            <img
              src={ukaid}
              alt="partners logo"
              className="partner-logo"
            />
            <img
              src={un}
              alt="partners logo"
              className="partner-logo"
            />
            <img
              src={unhcr}
              alt="partners logo"
              className="partner-logo"
            />
          </div> 
        </div>
        <div className='footer-links'>
          <h4>LINKS</h4>
          <ul>
            <li>Publications</li>
            <li>News & Stories</li>
            <li>Events</li>
            <li>RPSP Platform</li>
            <li>DRC Website</li>
          </ul>
        </div>
        <div className='footer-contact'>
          <h4>CONTACT US</h4>
          <div>
            <div>
              <p>Danish Refugee Team</p>
              <p>Lower Kabete Road</p>
            </div>
            <div>
              <p>Email: rsp@drc.ngo</p>
              <p>Tel: (254) 724-600-101</p>
            </div>
          </div>
        </div>
        <div className='newsletter'>
          <h4>NEWSLETTER</h4>
          <p><i>Sign up to recieve updeates from DRC RPSP Platform</i></p>
          <button>YOUR EMAIL ADDRESS</button>
          <p>By clicking you agree to recieve notifications from DRC</p>
        </div>
      </div>
    </>
  )
}

export default App
