import React from 'react'
import './Product2.css'

import Product3 from './Product3'

function Product2() {
    return (
        <div className='product2__main'>
            <div className='row'>

                <div className='col'>
                    <Product3
                        title='Redux Analogue Silver Dial Mens & Boys Watch RWS0364S'
                        image='https://m.media-amazon.com/images/I/41CaS32Mr7L._AC_SR160,160_.jpg'
                        price={399}
                        rating={3}
                    />

                </div>
                <div className='col'>
                    <Product3
                        title='Emartos Digital Mens Watch Multicolored Dial Multi Colored Strap'
                        image='https://m.media-amazon.com/images/I/51UtP-xsZ+L._AC_SR160,160_.jpg'
                        price={497}
                        rating={4}
                    />

                </div>


                <div className='col'>
                    <Product3
                        title='Fossil Gen 5E Womens Smartwatch with Silicone strap, Full Touch, AMOLED screen, Bluetooth calling, and Built-in GPS - FTW6066'
                        image='https://m.media-amazon.com/images/I/413HABuiU2L._AC_SR160,160_.jpg'
                        price={80230}
                        rating={4}
                    />

                </div>


            </div>
            <div className='row'>

                <div className='col'>
                    <Product3
                        title='Fossil Charter Hybrid Hr Stainless-Steel Smartwatch White Dial Womens Watchr'
                        image='https://m.media-amazon.com/images/I/41Golh0KsbL._AC_SR160,160_.jpg'
                        price={14899}
                        rating={4}
                    />

                </div>
                <div className='col'>
                    <Product3
                        title='Fossil Jacqueline Analog Blue Dial Womens Watch - ES4094'
                        image='https://m.media-amazon.com/images/I/41myfHRdX0L._AC_SR160,160_.jpg'
                        price={10950}
                        rating={4}
                    />

                </div>


            </div>



        </div>
    )
}

export default Product2;
