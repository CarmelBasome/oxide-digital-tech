import './job.css'

function Job() {
    return( 
          <div className="div6">
              <h3 className="div6-hA">Job openings</h3>
              <p className='div6-p1'>Find out more about opportunities in our firm.</p>
              <p className="more">LEARN MORE</p> 
              <img className='div6-img' src="./app-svg/dev.svg" alt="" />       
              <div className="div6-div">
                  <h3 className="div6-hB">Oxide Developpers Community</h3>
                  <p className='div6-p2'>
                    Oxide intends to build a community of developers that share ideas 
                    and work on community-based platforms in order to solve certain problems in our society. 
                    The platform also helps junior developers enhancing their skills with the help of senior developers
                  </p>
                  <p className='div6-link'>GET STARTED</p>
              </div>              
          </div>
        
    );
}
export default Job;