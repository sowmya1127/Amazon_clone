import React from 'react'
import './Helmates.css'
import Product3 from './Product3'

export default function Helmates() {
    return (
        <div className='Helmates'>
            <div className='Helmates_main'>
                <div className='Helmates_stage1'>
                    <Product3
                        id='411'
                        image='https://m.media-amazon.com/images/I/61XovARPQWL._AC_UL480_FMwebp_QL65_.jpg'
                        title='Steelbird R2L OSKA ISI certified Helmet'
                        price={1169.00}
                        ratings={4} />
                    <Product3
                        id='412'
                        image='https://m.media-amazon.com/images/I/61x5PD8GzTS._AC_UL480_FMwebp_QL65_.jpg'
                        title=' Steelbird SA-2 Terminator Full Face Graphic Helmet'
                        price={3119}
                        rating={4} />


                </div>
                <div className='Helmates_stage2'>
                    <Product3
                        id='414'
                        image='https://m.media-amazon.com/images/I/61Gguvxo5UL._AC_UL480_FMwebp_QL65_.jpg'
                        title='Steelbird SBH-17 Terminator Full Face Graphic Helmet'
                        price={2022.00}
                        ratings={4} />
                    <Product3
                        id='415'
                        image='https://m.media-amazon.com/images/I/31NAQirJ+sL._AC_UL480_FMwebp_QL65_.jpg'
                        title='Vega Cliff CLF-LK-M Full Face Helmet'
                        price={700}
                        rating={4} />

                </div>
            </div>
        </div>
    )
}
