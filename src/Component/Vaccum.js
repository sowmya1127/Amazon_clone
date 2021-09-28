import React from 'react'
import './Vaccum.css'
import Product3 from './Product3'

export default function Vaccum() {
    return (
        <div className='Vaccum'>
            <div className='Vaccum_main'>
                <div className='Vaccum_stage1'>
                    <Product3
                        id='711'
                        image='https://m.media-amazon.com/images/I/717gNQWC7kL._AC_UY327_FMwebp_QL65_.jpg'
                        title='
                        KENT Force Cyclonic Vacuum Cleaner 2000-Watt (White and Silver)'
                        price={5169.00}
                        ratings={4} />
                    <Product3
                        id='712'
                        image='https://m.media-amazon.com/images/I/61d7dgqOTXL._AC_UY327_FMwebp_QL65_.jpg'
                        title=' AGARO Regal 800 Watts Handheld Vacuum Cleaner, Lightweight & Durable Body (Black)'
                        price={3119}
                        rating={4} />


                </div>
                <div className='Vaccum_stage2'>
                    <Product3
                        id='714'
                        image='https://m.media-amazon.com/images/I/61mbUMPigWL._AC_UY327_FMwebp_QL65_.jpg'
                        title='Eureka Forbes Easy Clean Plus 800-Watt Vacuum Cleaner with Suction & Blower (Silver)'
                        price={2022.00}
                        ratings={4} />
                    <Product3
                        id='715'
                        image='https://m.media-amazon.com/images/I/818ZmYaVcQS._AC_UY327_FMwebp_QL65_.jpg'
                        title='Sasimo Powerful Portable & High Power 12V Orange Car Handheld Vacuum Cleaner for Car and Home Wet and Dry Car Vacuum Cleaner Multipurpose Vacuum Cleaner for Car Cleaning Plastic (Black)'
                        price={1034}
                        rating={4} />

                </div>
            </div>
        </div>
    )
}
