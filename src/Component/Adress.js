import React from 'react'
import './Adress.css'

function Adress() {
  return (
    <div className="container">



      <div className="modal" id="myModal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">


            <div className="modal-header">
              <h4 className="modal-title">choose your location</h4>


            </div>


            <div className="modal-body">
              <p >Select a delivery location to see product availability and delivery options</p>
              <button type="button" className="btn btn-warning btn-block signin_button" disabled data-toggle="modal" data-target="#myModal">
                sign in to see your adress
              </button>
            </div>


            <div className="modal-footer">
              <p>or enter an Indian pincode</p>
              <input type='number'></input>
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Apply</button>
            </div>

          </div>
        </div>
      </div>

    </div>



  )
}

export default Adress