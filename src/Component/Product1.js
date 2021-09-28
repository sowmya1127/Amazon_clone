import React from 'react'
import './Product1.css'
// import Product from './Product'

import Product3 from './Product3'

function Product1() {
    return (
        <div className='product1__main'>

            <div className='row'>


                <div className='col'>
                    <Product3
                        id='123'
                        image='https://m.media-amazon.com/images/I/71tT8J5cKuL._AC_UY327_FMwebp_QL65_.jpg'
                        title='New Apple iPhone 12 Mini (128GB) - White'
                        price={67900}
                        rating={4}
                    />

                </div>
                <div className='col'>
                    <Product3
                        id='231'
                        image='https://m.media-amazon.com/images/I/71XXJC7V8tL._AC_UY327_FMwebp_QL65_.jpg'
                        title='New Apple iPhone 12 Pro Max (256GB) - Graphite'
                        price={67900}
                        rating={4}
                    />

                </div>

            </div>
            <div className='row'>

                <div className='col'>
                    <Product3
                        id='435'
                        title='Apple iPhone 11 Pro (64GB) - Silver'
                        image='https://m.media-amazon.com/images/I/61VK5q8L-oL._AC_UY327_FMwebp_QL65_.jpg'
                        price={84899}
                        rating={4}
                    />

                </div>
                <div className='col'>
                    <Product3
                        id='321'
                        title='New Apple iPhone 12 (128GB) - (Product) RED'
                        image='https://m.media-amazon.com/images/I/71E5zB1qbIL._AC_UY327_FMwebp_QL65_.jpg'
                        price={80499}
                        rating={4}
                    />

                </div>


            </div>
            <div className='row'>
                <div className='col'>
                    <Product3
                        id='426'
                        title='New Apple iPhone 12 (128GB) - Blue'
                        image='https://m.media-amazon.com/images/I/71ZOtNdaZCL._AC_UY327_FMwebp_QL65_.jpg'
                        price={80230}
                        rating={4}
                    />

                </div>
                <div className='col'>
                    <Product3
                        id='246'
                        title='New Apple iPhone 12 (128GB) - Green'
                        image='https://m.media-amazon.com/images/I/71cQWYVtcBL._AC_UY327_FMwebp_QL65_.jpg'
                        price={81500}
                        rating={4}
                    />


                </div>
            </div>




        </div>
    )
}

export default Product1
