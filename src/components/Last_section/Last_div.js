import { AppBar } from '@mui/material';
import './Last_div.css'

function Last_div() {
    return (
        <section className="last-div">
            <container className="containers-section">
               <img className='logo-white' src="./app-svg/logo-white.png" alt="white logo" />
               <div className="float-block">
                <ul className='footer-ul'>
                    <h4 className="last-div-head">Services</h4>
                    <li>Software Development</li><br />
                    <li>Business Technology Consulting</li><br />
                    <li>UX & UI design</li><br />
                    <li>Data Entry</li><br />
                    <li>Conference and Event</li>
                </ul>
               </div>
               <div className="float-block">
                   <ul className='footer-ul'>
                     <h4 className="last-div-head">Products</h4>
                     <li>About</li><br />
                     <li>Contacts</li><br />
                     <li>Jobs</li><br />
                     <li>Developers Community</li><br />
                     <li>Privacy Policy</li><br />
                     <li>Site map</li>
                   </ul>
               </div>
               <div className="float-block">
                   <h4 className="last-div-head">Patners and Sponsors</h4>
                   <img className='uzza-svg' src="./app-svg/Uzza.png" alt="" />
               </div>
            </container>
            <AppBar className='downbar'>
              <div className='kookies'>
                <p>This website uses cookies to ensure you get the best experience on our website.<a href='#'>Learn more</a></p>
                <button className='kooky-btn'   >Got it</button>
              </div>
            </AppBar>
        </section>
    )
}
export default Last_div; 