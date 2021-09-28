import React from 'react'
import Product3 from './Product3'
import './Decor.css'

export default function Decor() {
    return (
        <div className='Decor'>
            <div className='Decor_main'>
                <div className='Decor_stage1'>
                    <Product3
                        id='911'
                        image='https://m.media-amazon.com/images/I/81VKKLl4lFL._AC_UL480_FMwebp_QL65_.jpg'
                        title='Homesake Tea Light Candle Holder for Home Decoration, Home Room Decor Items Moroccan Multicolor Mosaic Glass, for Home Room, Bedroom Lights Decoration'
                        price={495.00}
                        ratings={4} />
                    <Product3
                        id='912'
                        image='https://m.media-amazon.com/images/I/51A6BQjPQ+L._AC_UL480_FMwebp_QL65_.jpg'
                        title='BS AMOR Artificial Fancy Garland Money Plant Leaf Bail/ Creeper | Wall Hanging | Speacial Ocassion Decoration '
                        price={221}
                        rating={4} />
                    <Product3
                        id='913'
                        image='https://m.media-amazon.com/images/I/61+hLmdD6UL._AC_UL480_FMwebp_QL65_.jpg'
                        title='Xtore® 12pcs 3D metal Home Decor Butterfly with Sticking Pad (Shimmer Golden) Set of 12'
                        price={344}
                        rating={5}
                    />

                </div>
                <div className='Decor_stage2'>
                    <Product3
                        id='914'
                        image='https://m.media-amazon.com/images/I/714Xn6vemoL._AC_UL480_FMwebp_QL65_.jpg'
                        title='eCraftIndia Golden Handcrafted Palm Buddha Polyresin Showpiece (12.5 cm x 7.5 cm x 17.5 cm, Black)'
                        price={198.00}
                        ratings={4} />
                    <Product3
                        id='915'
                        image='https://m.media-amazon.com/images/I/81Eb79fGG4L._AC_UL480_FMwebp_QL65_.jpg'
                        title='Collectible India Peacock Design Radha Krishna Idol Showpiece with Diya for Puja and Home Decor (8 x 6 Inches), Metal, Gold, 1 Piece'
                        price={399}
                        rating={4} />
                    <Product3
                        id='916'
                        image='https://m.media-amazon.com/images/I/516DxtsFw2S._AC_UL480_FMwebp_QL65_.jpg'
                        title='eCraftIndia Cotton Door Hanging (Multicolour_5.5X5.5X19 Inch) (STRBEL500)'
                        price={172}
                        rating={4}
                    />
                </div>
            </div>
        </div>
    )
}

