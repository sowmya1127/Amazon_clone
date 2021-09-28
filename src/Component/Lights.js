import React from 'react'
import Product3 from './Product3'
import './Lights.css'

export default function Lights() {
    return (
        <div className='Lights'>
            <div className='Lights_main'>
                <div className='Lights_stage1'>
                    <Product3
                        id='1111'
                        image='https://m.media-amazon.com/images/I/71gmAvuJHfL._AC_UL480_FMwebp_QL65_.jpg'
                        title='US DZIRE - THE BRAND OF LIFESTYLE 406 Hanging Lamp Electric Antique Wooden Ceiling Lights (with Gold Bulb)'
                        price={355.00}
                        ratings={4} />
                    <Product3
                        id='1112'
                        image='https://m.media-amazon.com/images/I/41HnGfKJD8L._AC_UL480_FMwebp_QL65_.jpg'
                        title='RSK 3-light-thali-504 40 Watts Ceiling Lamp, White, Round'
                        price={682}
                        rating={4} />
                    <Product3
                        id='1113'
                        image='https://m.media-amazon.com/images/I/617Sv7YxZiL._AC_UL480_FMwebp_QL65_.jpg'
                        title='Groeien AC 110V Metal Square Cube Ceiling Light(Black, 60W)-(Pack of 2)(Bulb not Included)'
                        price={474}
                        rating={5}
                    />

                </div>
                <div className='Lights_stage2'>
                    <Product3
                        id='1114'
                        image='https://m.media-amazon.com/images/I/517xqlagA3L._AC_UL480_FMwebp_QL65_.jpg'
                        title='ArihantSuperStore Beautiful Imported Crystal Chandelier Jhoomer Ceiling Hanging Lamp'
                        price={555.00}
                        ratings={4} />
                    <Product3
                        id='1115'
                        image='https://m.media-amazon.com/images/I/81b8QUnBryL._AC_UL480_FMwebp_QL65_.jpg'
                        title='earthenmetal Glass Mosaic Decorative Ceiling lamp, Home Decor (Bulb not Included)'
                        price={769}
                        rating={4} />
                    <Product3
                        id='1116'
                        image='https://m.media-amazon.com/images/I/61Z6DF0mnYL._AC_UL480_FMwebp_QL65_.jpg'
                        title='GOGA Veer woodden Mosaic Wall lamp a72'
                        price={672}
                        rating={4}
                    />
                </div>
            </div>
        </div>
    )
}

