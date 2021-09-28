import React from 'react'
import Product3 from './Product3'
import './Storage.css'

export default function Storage() {
    return (
        <div className='Storage'>
            <div className='Storage_main'>
                <div className='Storage_stage1'>
                    <Product3
                        id='1011'
                        image='https://m.media-amazon.com/images/I/81HPtDfRH2L._AC_UL480_FMwebp_QL65_.jpg'
                        title='Ebee 4 Layer Storage Organizer Slim Rack Shelf with Wheels'
                        price={630.00}
                        ratings={4} />
                    <Product3
                        id='1012'
                        image='https://m.media-amazon.com/images/I/61f6doKZ7zL._AC_UL480_FMwebp_QL65_.jpg'
                        title='Joyful Studio 4 XLPlastic Modular Drawer System, Multi Colour '
                        price={1329}
                        rating={4} />
                    <Product3
                        id='1013'
                        image='https://m.media-amazon.com/images/I/6183kNYMnkL._AC_UL480_FMwebp_QL65_.jpg'
                        title='Kuber Industries Plastic 3 Pieces Small Size Multipurpose Solitaire Storage Basket with Lid '
                        price={340}
                        rating={5}
                    />

                </div>
                <div className='Storage_stage2'>
                    <Product3
                        id='1014'
                        image='https://m.media-amazon.com/images/I/71eWl1nnHdL._AC_UL480_FMwebp_QL65_.jpg'
                        title='Kuber Industries Polka Dots Design 3 Piece Non Woven Fabric Saree Cover/ Clothes Organiser For Wardrobe Set with Transparent Window, Extra Large'
                        price={238.00}
                        ratings={4} />
                    <Product3
                        id='1015'
                        image='https://m.media-amazon.com/images/I/61Hzr4blLXL._AC_UL480_FMwebp_QL65_.jpg'
                        title='SKGREEN® -Plastic 5 Layer Multipurpose Clothes Hanger,Wardrobe Storage Organizer Rack, Set of 5 (Assorted Colour)'
                        price={299}
                        rating={4} />
                    <Product3
                        id='1016'
                        image='https://m.media-amazon.com/images/I/71Ifw0XhS7L._AC_UL480_FMwebp_QL65_.jpg'
                        title='FLIPZON 3 Piece Multipurpose Storage Drawer Socks Undergarments Organizer,(Small) Plastic, Multicolor (Made in India)'
                        price={199}
                        rating={4}
                    />
                </div>
            </div>
        </div>
    )
}

