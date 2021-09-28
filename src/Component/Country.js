import React from 'react'
import './Country.css'

function Country() {
    return (
        <div>
        <div className='country__header'>
            <h2 >your country</h2>
        </div>
        <div className='country__header1'>
        <label>select your country</label>
            <input type='text'></input>
            
            <button>submit</button>

        </div>

        </div>

    )
}

export default Country