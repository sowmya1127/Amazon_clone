
import React from "react";
import "./Main.css";

import { Link } from 'react-router-dom'

function Main() {
  return (
    <div className="main">
      <div className="home__container">
        <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Samsung/SamsungM/M32/GW/Launch/D24426934_IN_WLME_SamsungGalaxy_M32_DesktopTallHero_1500x600_1._CB666822502_.jpg' alt="img1"></img>


        <div className="home__row">
          <div className="home__col">
            <div className='home__row1'>
              <p><strong>Up to 70% off | Electronics clearance store</strong></p>
            </div>
            <Link to='/Product2'>
              <img className='image' src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/Clearance/May21/V238940049_IN_PC_BAU_Edit_Creation_Laptops1x._SY304_CB667377205_.jpg' alt="img2"></img>
              <p>see more</p>
            </Link>


          </div>
          <div className="home__col ">
            <div className='home__row1'>

              <p><strong>Everyday essentials</strong></p>


            </div>
            <div className='columns'>
              <Link to='/Cleaning'>
                <div className='col'>
                  <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img18/HPC/GW/Desktop-Qc-1x_4._SY116_CB431329535_.jpg' alt="img3"></img>
                  <p>Cleaning essentials</p>
                </div>
              </Link>
              <Link to='/Immunity'>
                <div className='col'>
                  <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img18/HPC/GW/Desktop-Qc-1x_1._SY116_CB431329533_.jpg' alt="img4"></img>
                  <p>Immunity and HealthCare</p>
                </div>
              </Link>
            </div>
            <Link to='/Grooming'>
              <div className='col'>
                <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img18/HPC/GW/Desktop-Qc-1x_3._SY116_CB431329535_.jpg' alt="img5"></img>
                <p>Mens Gromming</p>
              </div>
            </Link>

            <p>see more</p>

          </div>
          <div className="home__col">
            <div className='home__row1'>
              <p><strong>Automotive essentials | Up to 60% off</strong></p>
            </div>
            <div className='columns'>
              <Link to='/Things'>
                <div className='col' >
                  <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg' alt="img6"></img>
                  <p>Cleaning accessories</p>
                </div>
              </Link>
              <Link to='/Tyre'>
                <div className='col'>
                  <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg' alt="img7"></img>
                  <p>Tyre and rim care</p>
                </div>
              </Link>
            </div>
            <div className='columns'>
              <Link to='/Helmates'>
                <div className='col'>
                  <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_186x116._SY116_CB405090404_.jpg' alt="img8"></img>
                  <p>Helmets</p>
                </div>
              </Link>
              <Link to='/Vaccum'>
                <div className='col'>
                  <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg' alt="img21"></img>
                  <p>Vaccum Cleaner</p>
                </div>
              </Link>
            </div>
            <p>see more</p>

          </div>
        </div>

        <div className="home__row">
          <div className="home__col">
            <div className='home__row1'>
              <p><strong>Top picks for your home</strong></p>
            </div>
            <div className='columns'>
              <Link to='/Ac'>
                <div className='col' >
                  <img src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg' alt="img9"></img>
                  <p>ACs</p>
                </div>
              </Link>
              <Link to='/Fridge'>
                <div className='col'>
                  <img src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg' alt="img10"></img>
                  <p>Refrigerators</p>
                </div>
              </Link>
            </div>
            <div className='columns'>
              <Link to='/Microwaves'>
                <div className='col'>
                  <img src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg' alt="img11"></img>
                  <p>MicroWaves</p>
                </div>
              </Link>
              <div className='col'>
                <img src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg' alt="img12"></img>
                <p>Washing Machines</p>
              </div>
            </div>
            <p>see more</p>
          </div>
          <div className="home__col ">
            <div className='home__row1'>
              <p ><strong>Shop by Category</strong></p>
            </div>
            <div className='columns'>
              <Link to='/Fresh'>
                <div className='col'>
                  <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Fresh._SY116_CB431401553_.jpg' alt="img13"></img>
                  <p>Fresh</p>
                </div>
              </Link>
              <Link to='/Product1'>
                <div className='col'>
                  <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Mobile._SY116_CB431401553_.jpg' alt="img13"></img>
                  <p>Mobiles</p>
                </div>
              </Link>
            </div>
            <div className='columns'>
              <Link to='/Fashion'>
                <div className='col'>
                  <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Fashion._SY116_CB431401553_.jpg' alt="img15"></img>
                  <p>Fashion</p>
                </div>
              </Link>
              <Link to='/Electronics'>
                <div className='col'>
                  <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Electronic._SY116_CB431401553_.jpg' alt="img16"></img>
                  <p>Electronics</p>
                </div>
              </Link>
              <p>see more</p>
            </div>

          </div>

          <div className="home__col">
            <div className='home__row1'>
              <p><strong>Revamp your home in style</strong></p>
            </div>
            <div className='columns'>
              <Link to='/Bedsheets'>
                <div className='col' >
                  <img src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_1_Low._SY116_CB670263840_.jpg' alt="img17"></img>
                  <p>Besheets,Curtains&more</p>
                </div>
              </Link>
              <Link to='/Decor'>
                <div className='col'>
                  <img src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_2_Low._SY116_CB670263840_.jpg' alt="img18"></img>
                  <p>Home Decoration</p>
                </div>
              </Link>
            </div>
            <div className='columns'>
              <Link to='/Storage'>
                <div className='col'>
                  <img src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_3_Low._SY116_CB670263840_.jpg' alt="img19"></img>
                  <p>Home storage</p>
                </div>
              </Link>
              <Link to='/Lights'>
                <div className='col'>
                  <img src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_4_Low._SY116_CB670263840_.jpg' alt="img20"></img>
                  <p>Lightning solutions</p>
                </div>
              </Link>
            </div>
            <p>see more</p>

          </div>


        </div>

      </div>
    </div>
  );
}

export default Main;