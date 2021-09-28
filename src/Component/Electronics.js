import './Electronics.css'

import Product3 from './Product3'

function Electronics() {
    return (
        <div className='electronics' >
            <div className='elc_main'>
                <div className='elc_stage1'>
                    <Product3
                        id='431'
                        image='https://images-eu.ssl-images-amazon.com/images/I/31N9z2rXiBL._AC_SX184_.jpg'
                        title='Infinity (JBL) Glide 120, in Ear Wireless Earphones'
                        price={1099.00}
                        ratings={4} />
                    <Product3
                        id='432'
                        image='https://images-eu.ssl-images-amazon.com/images/I/319Qcp4jrNL._AC_SX184_.jpg'
                        title='Infinity (JBL) Glide 120, in Ear Wireless Earphones '
                        price={1149}
                        rating={4} />
                    <Product3
                        id='433'
                        image='https://images-eu.ssl-images-amazon.com/images/I/41Y+eTvBY6L._AC_SX184_.jpg'
                        title='Saregama carvan Earphones'
                        price={749.00}
                        rating={4} />
                </div>
                <div className='elc_stage2'>
                    <Product3
                        id='434'
                        image='https://images-eu.ssl-images-amazon.com/images/I/31PTScka3nL._AC_SX184_.jpg'
                        title='Harman Kardon Omni 20+ premium wireless Earphoes'
                        price={800}
                        rating={4} />
                    <Product3
                        id='435'
                        image='https://images-eu.ssl-images-amazon.com/images/I/31QTCfEEfRL._AC_SX184_.jpg'
                        title='FLiX(Beetel)Blaze Wireless Bluetooth v5 Earphones'
                        price={800}
                        rating={4} />
                    <Product3
                        id='435'
                        image='https://images-eu.ssl-images-amazon.com/images/I/31HfRvqn1DL._AC_SX184_.jpg'
                        title='Acer Predator Galea 311 Wired Gaming Headset '
                        price={4899.00}
                        ratings={4} />
                </div>
            </div>


        </div>

    )
}
export default Electronics;