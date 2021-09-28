import React from 'react'
import Product3 from './Product3'
import './Fridge.css'

export default function Fridge() {
    return (
        <div className='Fridge'>
            <div className='Fridge_main'>
                <div className='Fridge_stage1'>
                    <Product3
                        id='1511'
                        image='https://m.media-amazon.com/images/I/51AsGQhZvJS._AC_UY327_FMwebp_QL65_.jpg'
                        title='LG 190 L 4 Star Inverter Direct-Cool Single Door Refrigerator (GL-B201ABCY, Blue Charm, Moist'
                        price={15990.00}
                        ratings={4} />
                    <Product3
                        id='1512'
                        image='https://m.media-amazon.com/images/I/51HxYKRTfhL._AC_UY327_FMwebp_QL65_.jpg'
                        title='Whirlpool 190 L 3 Star Direct-Cool Single Door Refrigerator (WDE 205 CLS 3S, Blue) '
                        price={12400}
                        rating={4} />
                    <Product3
                        id='1513'
                        image='https://m.media-amazon.com/images/I/718n2Wv3inL._AC_UY327_FMwebp_QL65_.jpg'
                        title='Candy 170 L 2 Star Direct-Cool Single Door Refrigerator (CDSD522170MS, Moon Silver, Turbo Icing Technology)'
                        price={9440}
                        rating={5}
                    />

                </div>
                <div className='Fridge_stage2'>
                    <Product3
                        id='1514'
                        image='https://m.media-amazon.com/images/I/71PjRr580lL._AC_UY327_FMwebp_QL65_.jpg'
                        title='LG 190 L 4 Star Inverter Direct-Cool Single Door Refrigerator'
                        price={17348.00}
                        ratings={4} />
                    <Product3
                        id='1515'
                        image='https://m.media-amazon.com/images/I/517CN-kIsuL._AC_UY327_FMwebp_QL65_.jpg'
                        title='Samsung 253 L 3 Star with Inverter Double Door Refrigerator (RT28A3453S8/HL, Elegant Inox)'
                        price={25799}
                        rating={4} />
                    <Product3
                        id='1516'
                        image='https://m.media-amazon.com/images/I/71wS2hpHsBL._AC_UY327_FMwebp_QL65_.jpg'
                        title='LG 270 L 3 Star Inverter Direct-Cool Single Door Refrigerator'
                        price={22990}
                        rating={4}
                    />
                </div>
            </div>
        </div>
    )
}

