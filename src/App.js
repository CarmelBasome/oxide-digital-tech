import logo from './logo.svg';
import './App.css';
import Nav from './components/NavBar/Nav';

//components
import Idea from './components/Idea/Idea';
import Wwwus from './components/work_with_us/Wwwus';
import Business from './components/Business/Business';
import Services from './components/Services/Services';
import Job from './components/Job/Job';
import Industries from './components/Industries/Industries'; 
import TalkBusiness from './components/TalkBusiness/talk-business';
import Last_div from './components/Last_section/Last_div';

function App() {
  return <div>
    <Nav />
    <Idea />
    <Wwwus />
    <Business />
    <Services />
    <Job />
    <Industries />
    <TalkBusiness />
    <Last_div />
  </div>
}
export default App;
