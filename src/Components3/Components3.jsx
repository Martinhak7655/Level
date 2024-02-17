import React from 'react'
import "./Components3.css"
import { ImHammer2 } from "react-icons/im";
import { ImAirplane } from "react-icons/im";
import { IoIosHelpBuoy } from "react-icons/io";


const Components3 = () => {
  return (
    <div>
        <div className='sub'>
             <div className='sub-div1'>
                <h1>We are hereto help you?</h1>
                <p>Subscribe to get our newsletters</p>
                <button className='sub-btn'>Subscribe Newsletters</button>
             </div>
            <div className='sub-flex'>
                <div className='sub-div2'>
                  <ImHammer2 style={{fontSize: "60px", color: "#EE5057"}}/>
                  <b className='sub-text'>Level HTML Template by Tooplate website</b>
                  <p style={{color: "gray"}}>You are allowed to download, edit and use this template for your business or client websites.</p>
                  <b className='sub-text'>Continue Reading...</b>
                </div>
                <div className='sub-div2'>
                <ImAirplane style={{fontSize: "60px", color: "#EE5057"}}/>
                  <b className='sub-text'>Original Website Template Producer</b>
                  <p style={{color: "gray"}}>YYou are NOT allowed to re-distribute the downloadable template ZIP file on any website</p>
                  <b className='sub-text'>Continue Reading...</b>
                </div>
                <div className='sub-div2'>
                  <IoIosHelpBuoy style={{fontSize: "60px", color: "#EE5057"}} />
                  <b className='sub-text'>Contact us if you have any question</b>
                  <p style={{color: "gray"}}>If you see this template being distributed on any other site, that is an illegal copy.</p>
                  <b className='sub-text'>Continue Reading...</b>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Components3