import logo from './logo.svg';
import './App.css';
import Nav from './components/NavBar/Nav';
import Idea from './components/Idea/Idea';
import Wwwus from './components/work_with_us/Wwwus';
import Business from './components/Business/Business';
import Services from './components/Services/Services';
import Job from './components/Job/Job';

import {  AppBar, Typography, Card, CardMedia } from '@mui/material';
import { Button } from '@mui/material';
import Industries from './components/Industries/Industries'; 
import Last_div from './components/Last_section/Last_div';

function App() {
  return <div>
    <AppBar>
      <Nav />
    </AppBar>
    <Idea />
    <AppBar color='default' className="footer">
    <div className='footerBackground'>
        This website uses cookies to unsure you get the best experience on your website. 
        <a href='#'>Learn more</a>
        <div className='footer-float'>
          <button className='footer-button'>Got it</button>
        </div>
      </div>
    </AppBar>
    <Wwwus />
    <Business />
    <Services />
    <Job />
    <Industries />
    <Last_div />
  </div>
}
export default App;
