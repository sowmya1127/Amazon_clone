import React from 'react'
import Product3 from './Product3'
import './Fresh.css'

export default function Fresh() {
    return (
        <div className='Fresh'>
            <div className='Fresh_main'>
                <div className='Fresh_stage1'>
                    <Product3
                        id='1211'
                        image='https://m.media-amazon.com/images/I/41db8HjCSeL._AC_SY250_.jpg'
                        title='Aashirvaad Select Premium Sharbati Atta, 5kg'
                        price={239.00}
                        ratings={4} />
                    <Product3
                        id='1212'
                        image='https://m.media-amazon.com/images/I/41VIMbi0CzL._AC_SY250_.jpg'
                        title='Daawat Rozana Super, Naturally Aged, Rich Aroma'
                        price={282}
                        rating={4} />
                    <Product3
                        id='1213'
                        image='https://m.media-amazon.com/images/I/51x5VLdbaxS._AC_SY250_.jpg'
                        title='Unity Super | Authentic Long Grain Basmati Rice'
                        price={444}
                        rating={5}
                    />

                </div>
                <div className='Fresh_stage2'>
                    <Product3
                        id='1214'
                        image='https://m.media-amazon.com/images/I/41rsT+BdIoL._AC_SY250_.jpg'
                        title='Fresh Pear Indian Babbu Gosha Fruit, 500 g'
                        price={555.00}
                        ratings={4} />
                    <Product3
                        id='1215'
                        image='https://m.media-amazon.com/images/I/41CT3Rd+0jL._AC_SY250_.jpg'
                        title='Fresh Pear Indian Nashpati Fruit, 500 '
                        price={69}
                        rating={4} />
                    <Product3
                        id='1216'
                        image='https://m.media-amazon.com/images/I/31WOl-5Zi9L._AC_SY250_.jpg'
                        title='Fresh Lemon, 250 g'
                        price={18}
                        rating={4}
                    />
                </div>
            </div>
        </div>
    )
}

