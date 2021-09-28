import React from 'react'
import Product3 from './Product3'
import './Microwaves.css'

export default function Microwaves() {
    return (
        <div className='Microwaves'>
            <div className='Microwaves_main'>
                <div className='Microwaves_stage1'>
                    <Product3
                        id='1611'
                        image='https://m.media-amazon.com/images/I/61Deo+Kg6WL._AC_UY327_FMwebp_QL65_.jpg'
                        title='Panasonic 27L Convection Microwave Oven(NN-CT645BFDG,Black, Magic Grill)'
                        price={11790.00}
                        ratings={4} />
                    <Product3
                        id='1612'
                        image='https://m.media-amazon.com/images/I/71QX7BQQsOL._AC_UY327_FMwebp_QL65_.jpg'
                        title='Panasonic 23L Convection Microwave Oven(NN-CT353BFDG,Black Mirror, 360° Heat Wrap) '
                        price={10400}
                        rating={4} />
                    <Product3
                        id='1613'
                        image='https://m.media-amazon.com/images/I/61cqMkN3-0L._AC_UY327_FMwebp_QL65_.jpg'
                        title='Whirlpool 20 L Solo Microwave Oven (MAGICOOK PRO 20SE BLACK)'
                        price={5440}
                        rating={5}
                    />

                </div>
                <div className='Microwaves_stage2'>
                    <Product3
                        id='1614'
                        image='https://m.media-amazon.com/images/I/618O0ywM1SL._AC_UY327_FMwebp_QL65_.jpg'
                        title='Philips HD6975/00 25 Litre Digital Oven Toaster Grill, Grey, 25 liter'
                        price={6348.00}
                        ratings={4} />
                    <Product3
                        id='1615'
                        image='https://m.media-amazon.com/images/I/71Odjpsi1NL._AC_UY327_FMwebp_QL65_.jpg'
                        title='Panasonic 20L Solo Microwave Oven (NN-ST26JMFDG, Silver, 51 Auto Menus))'
                        price={5399}
                        rating={4} />
                    <Product3
                        id='1616'
                        image='https://m.media-amazon.com/images/I/91FGlmN5hZL._AC_UY327_FMwebp_QL65_.jpg'
                        title='Bajaj MTBX 2016 20L Grill Microwave Oven, Blackr'
                        price={6990}
                        rating={4}
                    />
                </div>
            </div>
        </div>
    )
}

