import React from 'react'
import "./Components2.css"

const Components2 = () => {
  return (
    <div>
        <div className='home'>
            <div className='home-div'>
                <div className='home-flex'>
                    <input type='text' placeholder='Type Your Destination...' />
                    <input type='date' placeholder='Check In' />
                    <input type='date' placeholder='Check Out' />
                </div>
                <div className='home-flex'>
                <select>
                        <option selected>Adult</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                    </select>
                    <select>
                        <option selected>Children</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                    </select>
                    <select>
                        <option selected>Room</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                    </select>
                    <button className='btn-home'>Check Availability</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Components2