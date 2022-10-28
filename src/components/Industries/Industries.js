    import { useState } from 'react';
import './industries.css';
import { industriesData } from '../../data';

function Industries() {
    const [boxes, setBoxes] = useState(industriesData);
    return <>
    <section className="industries-section">
      <h3 className="indust-title">Industries</h3>
      <p className="indust-p">We have expetise across multiple industries</p>
      
      <container className='container'>
        {boxes.map((boxe)=>{
            const {id, title2, img2} = boxe;
            return (
                <div key={id} className="ind-float-box">
                    <img className="indust-img" src={img2} alt={title2} />
                    <p>{title2}</p>
                </div>
            );
        })}
      </container>
    </section>
    </>
}
export default Industries;