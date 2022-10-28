import './job.css'

function Job() {
    return( 
          <section className="job-section">
              <div className='cented-elmnt'>
                 <h3 className="job-title">Job openings</h3>
                 <p className='job-p1'>Find out more about opportunities in our firm.</p>
                 <button className="more-btn">LEARN MORE</button>
              </div>
              <div className='float-section'>
                <div className="job-float-div">
                    <h3 className="job-flt-title">Oxide Developpers Community</h3>
                    <p className='div6-p2'>
                      Oxide intends to build a community of developers that share ideas 
                      and work on community-based platforms in order to solve certain problems in our society. 
                      The platform also helps junior developers enhancing their skills with the help of senior developers
                    </p>
                    <button className='job-start-link'>GET STARTED</button>
                </div>
                <img className='job-img' src="./app-svg/dev.svg" alt="dev-img" />
              </div> 
          </section>
        
    );
}
export default Job;