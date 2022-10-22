import { useState } from 'react';
import './industries.css';
import { industriesData } from '../../data';

function Industries() {
    const [boxes, setBoxes] = useState(industriesData);
    return <>
    <section className="div7">
      <h3 className="indust-title">Industries</h3>
      <p className="div7-p">We have expetise across multiple industries</p>
      
      <container className='container'>
        {boxes.map((boxe)=>{
            const {id, title2, img2} = boxe;
            return (
                <div key={id} className="div7-box">
                    <img className="div7-img" src={img2} alt={title2} />
                    <p>{title2}</p>
                </div>
            );
        })}
      </container>
      <div className="div7-h3B">Let's talk business</div>
      <p className="div7-p">
       Tell us what you need and will offer you the best range of services. 
       Also, <br />if you want to be a patener or sponsor, send us a message.
       </p>
       <button className="more-btn">TALK TO OUR TEAM</button>
    </section>
    </>
}
export default Industries;