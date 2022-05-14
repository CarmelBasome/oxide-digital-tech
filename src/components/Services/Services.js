import './services.css'

function Services() {
    return (
        <div className="div5">
            <h3 className="div5-h3">Services</h3>
            <p className="div5-p">
               Oxide provides services to small, medium and large companies. Moreover,
               we also develop and invest in viable digital technologies to meet
               marketplace needs and problems.
            </p>

            <div className="boxes-div1">
                <div className="float-box">
                    <img className='img-box' src="./app-svg/sd.svg" alt="" /><br />
                    <span className='h6'><b>Software development</b></span><br />
                    <span>We design and develop software, web and mobile applications</span>
                </div>
                <div className="float-box">
                    <img className='img-box' src="./app-svg/btc.svg" alt="" /><br />
                    <span className='h6'><b>Business technology consulting</b></span><br />
                    <span>We help you to bring your business up to date with emerging technologies.</span>
                </div>
                <div className="float-box">
                    <img className='img-box' src="./app-svg/uxi.svg" alt="" /><br />
                    <span className='h6'><b>UX & UI</b></span><br />
                    <span>
                        We first listen to your ideas and assist you in developing concepts. 
                        based on this, we then offer you professional design that meet your needs and expectations
                    </span>
                </div>
            </div> <br />

            <div className="boxes-div2">
                <div className="float-box">
                    <img className='img-box' src="./app-svg/de.svg" alt="" /><br />
                    <span className='h6'><b>Data Entry</b></span><br />
                    <span>
                        If you want to outsource your data entry operations we deliver that service for you. 
                        We have skilled typists with an eye for datail.
                    </span>
                </div>
                <div className="float-box">
                    <img className='img-box' src="./app-svg/ce.svg" alt="" /><br />
                    <span className='h6'><b>Conference and events</b></span><br />
                    <span>We offer exelent technical suport for meeting and events.</span>
                </div>
            </div>
        </div>
    );
}
export default Services;