import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Idea from './components/Idea';
import Wwwus from './components/Wwwus';
import Business from './components/Business';
import Services from './components/Services';
import Job from './components/Job';

import {  AppBar } from '@mui/material';
import Industries from './components/Industries'; 
import Last_div from './components/Last_div';

function App() {
  return <div>

    <AppBar>
      <Nav />
    </AppBar>
    <Idea />
    <Wwwus />
    <Business />
    <Services />
    <Job />
    <Industries />
    <Last_div />
  </div>
}
export default App;
