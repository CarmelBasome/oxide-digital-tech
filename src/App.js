import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Idea from './components/Idea';
import Wwwus from './components/Wwwus';
import Business from './components/Business';
import Services from './components/Services';
import Job from './components/Job';

import {  AppBar, Typography, Card, CardMedia } from '@mui/material';
import { Button } from '@mui/material';
import Industries from './components/Industries'; 
import Last_div from './components/Last_div';

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
