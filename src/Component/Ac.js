import React from 'react'
import Product3 from './Product3'
import './Ac.css'

export default function Ac() {
    return (
        <div className='Ac'>
            <div className='Ac_main'>
                <div className='Ac_stage1'>
                    <Product3
                        id='1411'
                        image='https://m.media-amazon.com/images/I/61RetQHk-fL._AC_UY327_FMwebp_QL65_.jpg'
                        title='Blue Star 1.5 Ton 3 Star Fixed Speed Split AC (Copper, FS318EBTU, 2021, White)'
                        price={33990.00}
                        ratings={4} />
                    <Product3
                        id='1412'
                        image='https://m.media-amazon.com/images/I/51UPZoLEDmL._AC_UY327_FMwebp_QL65_.jpg'
                        title='Blue Star 1 Ton 5 Star Inverter Split AC (Copper, IC512EBTU, 2021, White) '
                        price={36900}
                        rating={4} />
                    <Product3
                        id='1413'
                        image='https://m.media-amazon.com/images/I/71g-YgbuWvL._AC_UY327_FMwebp_QL65_.jpg'
                        title='AmazonBasics 1 Ton 3 Star Non-Inverter Split AC (2020, White)'
                        price={22440}
                        rating={5}
                    />

                </div>
                <div className='Ac_stage2'>
                    <Product3
                        id='1414'
                        image='https://m.media-amazon.com/images/I/71KbYkNOkDL._AC_UY327_FMwebp_QL65_.jpg'
                        title='Voltas 0.75 Ton 2 Star Window AC (Copper 102 EZQ White)'
                        price={18348.00}
                        ratings={4} />
                    <Product3
                        id='1415'
                        image='https://m.media-amazon.com/images/I/71mt3JTco9L._AC_UY327_FMwebp_QL65_.jpgg'
                        title='Voltas 1.4 Ton 5 Star Fixed Speed Window AC (Copper, 2021 175 LZH, White), regular'
                        price={28799}
                        rating={4} />
                    <Product3
                        id='1416'
                        image='https://m.media-amazon.com/images/I/8194JrZb01L._AC_UY327_FMwebp_QL65_.jpg'
                        title='Lloyd 1.5 Ton 3 Star Window AC (Copper, Clean Air Filter, 2021 Model, GLW18B32WSEW, White)'
                        price={24990}
                        rating={4}
                    />
                </div>
            </div>
        </div>
    )
}

