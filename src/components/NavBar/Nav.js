import { Link, AppBar} from "@mui/material";
import "./nav.css"

function Nav() {
    return <>
      <AppBar>
        <main className="nav-center">
           <img className="logo" src="./logo.png" alt="Logo" />
           <section>
           <ul className="nav-list">
               <li>
                   <Link to='/'>Home</Link>
               </li>
               <li>
                   <Link to='/services' >Services</Link>
               </li>
               <li>
                  <Link to='/'>Job</Link>
               </li>
               <li>
                  <Link to='/'>About us</Link>
               </li>
               <li className="contact">
                  <Link to='/'>CONTACT US</Link>
               </li>
               <li>
                  <Link to='/'>EN</Link>
               </li>
               <li>
                  <Link to='/'>FR</Link>
               </li>
           </ul>
           </section>
        </main>
      </AppBar> 
    </>
}
export default Nav;