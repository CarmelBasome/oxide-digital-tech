import './industries.css'

function Industries() {
    return (
        <div className="div7">
            <h3 className="div7-h3A">Industries</h3>
            <p className="div7-p">We have expetise across multiple industries</p>
            <div className='container1'>
                <div className="div7-box">
                    <img className="div7-img" src="./app-svg/manufacturing.png" alt="" />
                    <p>Manufacturing</p>
                </div>
                <div className="div7-box">
                    <img className="div7-img" src="app-svg/retail.png" alt="" />
                    <p>Retail</p>
                </div>
                <div className="div7-box">
                    <img className="div7-img" src="app-svg/education.png" alt="" />
                    <p>Education</p>
                </div>
                <div className="div7-box">
                    <img className="div7-img" src="app-svg/realestate.png" alt="" />
                    <p>Real Estate</p>
                </div>   
            </div><br />

            <div className='container2'>
                <div className="div7-box">
                    <img className="div7-img" src="app-svg/construction.png" alt="" />
                    <p>Construction</p>
                </div>
                <div className="div7-box">
                    <img className="div7-img" src="app-svg/accounting.png" alt="" />
                    <p>Accounting</p>
                </div>
                <div className="div7-box">
                    <img className="div7-img" src="./app-svg/travel.png" alt="" />
                    <p>Traval and Tourism</p>
                </div>
                <div className="div7-box">
                    <img className="div7-img" src="./app-svg/hotel.png" alt="" />
                    <p>Hotel and Restaurents</p>
                </div>             
            </div>

            <div className="div7-h3B">Let's talk business</div>
            <p className="div7-p">
                Tell us what you need and will offer you the best range of services. 
                Also, <br />if you want to be a patener or sponsor, send us a message.
            </p>
            <p className="more">TALK TO OUR TEAM</p>
        </div>
    );
}
export default Industries;