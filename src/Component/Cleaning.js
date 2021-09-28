import React from 'react'
import Product3 from './Product3'
import './Cleaning.css'


export default function Cleaning() {
    return (
        <div className='cleaning'>
            <div className='cleaning_main'>
                <div className='cleaning_stage1'>
                    <Product3
                        id='111'
                        image='https://m.media-amazon.com/images/I/61rDJVoKpeL._AC_UL480_FMwebp_QL65_.jpg'
                        title='Surf Excel Easy Wash Detergent '
                        price={423.00}
                        ratings={4} />
                    <Product3
                        id='112'
                        image='https://m.media-amazon.com/images/I/61MQLodxUUL._AC_UL480_FMwebp_QL65_.jpg'
                        title='Safe Wash Liquid Detergent '
                        price={315}
                        rating={4} />
                    <Product3
                        id='113'
                        image='https://m.media-amazon.com/images/I/71ULn2obNaS._AC_UL480_FMwebp_QL65_.jpg'
                        title='Washing Machine Cleaner Tablet Detergent '
                        price={177}
                        rating={5}
                    />

                </div>
                <div className='cleaning_stage2'>
                    <Product3
                        id='114'
                        image='https://m.media-amazon.com/images/I/81YakxRZLzL._AC_UL480_FMwebp_QL65_.jpg'
                        title='Tide Plus Extra Power Detergent Washing Powder '
                        price={689.00}
                        ratings={4} />
                    <Product3
                        id='115'
                        image='https://m.media-amazon.com/images/I/61lOFfJj4yL._AC_UL480_FMwebp_QL65_.jpg'
                        title='Surf Excel Matic Liquid Detergent Top Load Pouch 2l'
                        price={340}
                        rating={4} />
                    <Product3
                        id='116'
                        image='https://m.media-amazon.com/images/I/41J2ILKvMJL._AC_UL480_FMwebp_QL65_.jpg'
                        title='Ariel Matic Top Load Detergent Washing Powder'
                        price={898}
                        rating={4}
                    />
                </div>
            </div>
        </div>
    )
}
