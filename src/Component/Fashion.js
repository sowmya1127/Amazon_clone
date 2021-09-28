import React from 'react'
import Product3 from './Product3'
import './Fashion.css'

export default function Fashion() {
    return (
        <div className='Fashion'>
            <div className='Fashion_main'>
                <div className='Fashion_stage1'>
                    <Product3
                        id='1311'
                        image='https://m.media-amazon.com/images/I/61mZjNNYFSS._AC_UL480_FMwebp_QL65_.jpg'
                        title='Womens Cotton Anarkali Kurta with Palazzo'
                        price={355.00}
                        ratings={4} />
                    <Product3
                        id='1312'
                        image='https://m.media-amazon.com/images/I/71b1oU6ACxL._AC_UL480_FMwebp_QL65_.jpg'
                        title='Slub Rayon Fully Stitched Anarkali Kurti for Women & Girls on Jeans'
                        price={462}
                        rating={4} />
                    <Product3
                        id='1313'
                        image='https://m.media-amazon.com/images/I/61r6gt1HJzL._AC_UL480_FMwebp_QL65_.jpg'
                        title='Cotton Printed Kurti (VCK1371_Black_Free Size)'
                        price={474}
                        rating={5}
                    />

                </div>
                <div className='Fashion_stage2'>
                    <Product3
                        id='1314'
                        image='https://m.media-amazon.com/images/I/61UVhHjT0OL._AC_UL480_FMwebp_QL65_.jpg'
                        title='Kf Rayon Straight Kurti with White Sharara Plazzo for Women & Girls'
                        price={555.00}
                        ratings={4} />
                    <Product3
                        id='1315'
                        image='https://m.media-amazon.com/images/I/71GFwW3XJML._AC_UL480_FMwebp_QL65_.jpg'
                        title='Womens Rayon Gold-Toned Printed Kurta with Sharara & Dupatta'
                        price={769}
                        rating={4} />
                    <Product3
                        id='1316'
                        image='https://m.media-amazon.com/images/I/615Jb4uolOL._AC_UL480_FMwebp_QL65_.jpg'
                        title='Womens Cotton Anarkali Kurta and Dupatta (Without Palazzo)'
                        price={672}
                        rating={4}
                    />
                </div>
            </div>
        </div>
    )
}

