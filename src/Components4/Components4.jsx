import React from 'react'
import "./Components4.css"

const Components4 = () => {
  return (
    <div>
        <div className='places'>
           <div className='places-flex'>
            <div className='places-flex2'>
                <div className="places-div">
                   <div className='places-img'></div>
                   <h2>Nunc in felis aliquet metus luctus iaculis</h2>
                   <p>Aliquam ac lacus volutpat, dictum risus at, scelerisque nulla. Nullam sollicitudin at augue venenatis eleifend. Nulla ligula ligula, egestas sit amet viverra id, iaculis sit amet ligula.</p>
                   <button className='places-btn'>Get More Info</button>
                </div>
                <div className="places-div">
                <div className='places-img2'></div>
                   <h2>Sed cursus dictum nunc quis molestie</h2>
                   <p>Pellentesque quis dui sit amet purus scelerisque eleifend sed ut eros. Morbi viverra blandit massa in varius. Sed nec ex eu ex tincidunt iaculis. Curabitur eget turpis gravida.</p>
                   <button className='places-btn'>View Detail</button>
                </div>
            </div>
            <div className='places-div2'>
                <div className='places-dd'>
                    <b style={{fontSize: "25px"}}>Recommended Places</b>
                    <p>Enamel pin cliche tilde, kitsch and VHS thundercats</p>
                </div>
                <div className='places-pp'>
                    <div className='places-pp-img'></div>
                    <h1 className='europe'>EUROPE</h1>
                </div>
                <div className='places-pp'>
                    <div className='places-pp-img2'></div>
                    <h1 className='europe'>ASIA</h1>
                </div>
                <div className='places-pp'>
                    <div className='places-pp-img3'></div>
                    <h1 className='europe'>AFRICA</h1>
                </div>
                <div className='places-pp'>
                    <div className='places-pp-img4'></div>
                    <h3 className='america' >SOUTH AMERICA</h3>
                </div>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Components4