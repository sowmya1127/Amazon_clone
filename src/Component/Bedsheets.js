import React from 'react'
import './Bedsheets.css'
import Product3 from './Product3'

export default function Bedsheets() {
    return (
        <div className='Bedsheets'>
            <div className='Bedsheets_main'>
                <div className='Bedsheets_stage1'>
                    <Product3
                        id='811'
                        image='https://images-eu.ssl-images-amazon.com/images/I/41go3quRXSL._AC_SX184_.jpg'
                        title='Amazon Brand - Solimo Water Resistant Cotton Mattress Protector 78"x72" - King Size, Grey'
                        price={879.00}
                        ratings={4} />
                    <Product3
                        id='812'
                        image='https://images-eu.ssl-images-amazon.com/images/I/51zhm44D90L._AC_SX184_.jpg'
                        title=' Amazon Brand - Solimo Floral Foliage 144 TC 100% Cotton Double Bedsheet with 2 Pillow Covers, Teal'
                        price={799}
                        rating={4} />
                    <Product3
                        id='813'
                        image='https://images-eu.ssl-images-amazon.com/images/I/51n-b+I2nzL._AC_SX184_.jpg'
                        title=' HUESLAND by Ahmedabad Cotton 144 thread count Cotton Double Bedsheet with 2 Pillow Covers'
                        price={599}
                        rating={4} />


                </div>
                <div className='Bedsheets_stage2'>
                    <Product3
                        id='814'
                        image='https://images-eu.ssl-images-amazon.com/images/I/41kx8UPwpmL._AC_SX184_.jpg'
                        title='Homefab India Royal Polyester 7ft Door Curtain with 2 Pieces 5ft Curtain Set Combo (Cream and Royal Cream)'
                        price={852.00}
                        ratings={4} />
                    <Product3
                        id='815'
                        image='https://images-eu.ssl-images-amazon.com/images/I/51NnRRkuR4L._AC_SX184_.jpg'
                        title='Fashion String 2 Pieces Window Curtain Set, 5 feet Long,Brown & 2 Pieces Door Curtain Set, 7 feet Long,Brown Combo'
                        price={699}
                        rating={4} />
                    <Product3
                        id='816'
                        image='https://images-eu.ssl-images-amazon.com/images/I/31VdGy38WoL._AC_SX184_.jpg'
                        title=' Kuber Industries Compact 4 Piece Plastic Storage Basket (CTKTC5271) & PVC 1 Piece Eyelet 30 Mm Ac Curtain 7 Feet (Transparent)(54X84 Inch)- CTKTC5670 Combo'
                        price={878}
                        rating={4} />

                </div>
                <div className='Bedsheets_stage3'>
                    <Product3
                        id='817'
                        image='https://images-eu.ssl-images-amazon.com/images/I/41E3ejzmCPL.jpg'
                        title='Wakefit Hollow Fiber Pillow, 68.58 Cm X 40.64 Cm, White And Grey, 2 Pieces'
                        price={724.00}
                        ratings={4} />
                    <Product3
                        id='818'
                        image='https://images-eu.ssl-images-amazon.com/images/I/51OrMmCMSnL.jpg'
                        title='Amazon Brand - Solimo 2-Piece Premium Bed Pillow Set, Microfibre, Brown, 43 X 69 X 17 Cm'
                        price={749}
                        rating={4} />
                    <Product3
                        id='819'
                        image='https://images-eu.ssl-images-amazon.com/images/I/41Jlybin5rL.jpg'
                        title=' Sleepyhead Microfiber Pillow, King, White'
                        price={999}
                        rating={4} />

                </div>
            </div>
        </div>
    )
}
