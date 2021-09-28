import React from 'react'
import './Things.css'
import Product3 from './Product3'

export default function Things() {
    return (
        <div className='Things'>
            <div className='Things_main'>
                <div className='Things_stage1'>
                    <Product3
                        id='511'
                        image='https://m.media-amazon.com/images/I/61kQLPqpIdS._AC_UL480_FMwebp_QL65_.jpg'
                        title='LAZI Multipurpose Car AC vent Interior Dust Cleaning Gel Jelly Detailing Putty Cleaner Kit Universal Car Interior'
                        price={1169.00}
                        ratings={4} />
                    <Product3
                        id='512'
                        image='https://m.media-amazon.com/images/I/71XG-dBJ6mL._AC_UL480_FMwebp_QL65_.jpg'
                        title=' Auto Hub Wheel Tire Rim Scrub Brush Hub Clean Wash Useful Brush Car Truck Motorcycle Bike Washing Cleaning Tool'
                        price={3119}
                        rating={4} />


                </div>
                <div className='Things_stage2'>
                    <Product3
                        id='514'
                        image='https://m.media-amazon.com/images/I/41DVFPlXpSL._AC_UL480_FMwebp_QL65_.jpg'
                        title='Tony Stark Microfiber Flexible Duster Car Wash | Car Cleaning Accessories'
                        price={2022.00}
                        ratings={4} />
                    <Product3
                        id='515'
                        image='https://m.media-amazon.com/images/I/71xA2vP7v1L._AC_UL480_FMwebp_QL65_.jpg'
                        title='UE Car Cleaning Kit (Pack of 3 Items) Dashboard Polish, Car Wash, Liquid Wax'
                        price={400}
                        rating={4} />

                </div>
            </div>
        </div>
    )
}
