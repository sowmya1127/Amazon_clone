import React from 'react'
import Product3 from './Product3'
import './Grooming.css'

export default function Grooming() {
    return (
        <div className='grooming'>
            <div className='grooming_main'>
                <div className='grooming_stage1'>
                    <Product3
                        id='211'
                        image='https://m.media-amazon.com/images/I/81wmNciSYzS._AC_UL480_FMwebp_QL65_.jpg'
                        title='The Man Company Black Grooming Kit for Men'
                        price={3223.00}
                        ratings={4} />
                    <Product3
                        id='212'
                        image='https://m.media-amazon.com/images/I/81wmNciSYzS._AC_UL480_FMwebp_QL65_.jpg'
                        title='Park Avenue Luxury Grooming Collection '
                        price={521}
                        rating={4} />
                    <Product3
                        id='213'
                        image='https://m.media-amazon.com/images/I/31ZHrD7xmCL._AC_UL480_FMwebp_QL65_.jpg'
                        title='The Man Company Ayushman Face Care Box'
                        price={1144}
                        rating={5}
                    />

                </div>
                <div className='grooming_stage2'>
                    <Product3
                        id='214'
                        image='https://m.media-amazon.com/images/I/51pRpWskk4S._AC_UL480_FMwebp_QL65_.jpg'
                        title='MENHOOD Men WaterProof Trimmer for Men '
                        price={3899.00}
                        ratings={4} />
                    <Product3
                        id='215'
                        image='https://m.media-amazon.com/images/I/61GCYrzVEFL._AC_UL480_FMwebp_QL65_.jpg'
                        title='Bombay Shaving Company Charcoal Soap with Towel'
                        price={579}
                        rating={4} />
                    <Product3
                        id='216'
                        image='https://m.media-amazon.com/images/I/71reSvlGVKL._AC_UL480_FMwebp_QL65_.jpg'
                        title='Bryan & Candy New York Ultimate luxury'
                        price={854}
                        rating={4}
                    />
                </div>
            </div>
        </div>
    )
}
