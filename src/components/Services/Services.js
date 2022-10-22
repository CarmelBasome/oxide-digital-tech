import React, { useState } from "react";
import './services.css';
import { servicesData } from "../../data";

function Services() {
    const [containers, setContainers] = useState(servicesData);
    return <section className='div5'>
      <h3>Services</h3>
      <p className="service-p">
       Oxide provides services to small, medium and large companies. Moreover,
       we also develop and invest in viable digital technologies to meet
       marketplace needs and problems.
     </p>
     
     <div className='mainMargin'>
        {containers.map((container)=>{
          const {id, img, title, message} = container;
          return <container key={id}>
              <div className="float-box">
                 <img className='img-box' src={img} alt={title} /><br />
                 <span className='h6'><b>{title}</b></span><br />
                 <span>{message}</span>
              </div>
          </container>
        })}
      </div>
    </section>
}

export default Services;