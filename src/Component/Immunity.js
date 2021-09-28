import React from 'react'
import Product3 from './Product3'
import './Immunity.css'

export default function Immunity() {
    return (
        <div className='immunity'>
            <div className='immunity_main'>
                <div className='immunity_stage1'>
                    <Product3
                        id='311'
                        image='https://images-eu.ssl-images-amazon.com/images/I/515PR7tej6L._AC_SX184_.jpg'
                        title='Nestle CEREGROE Growming Up Multigrain'
                        price={223.00}
                        ratings={4} />
                    <Product3
                        id='312'
                        image='https://images-eu.ssl-images-amazon.com/images/I/41xO6+ymVSL._AC_SX184_.jpg'
                        title='Nutricia Aotamil Follow-Up Formula '
                        price={721}
                        rating={4} />
                    <Product3
                        id='313'
                        image='https://images-eu.ssl-images-amazon.com/images/I/51T-vEQbR3L._AC_SX184_.jpg'
                        title='Bournvita Health Drink'
                        price={1144}
                        rating={5}
                    />

                </div>
                <div className='immunity_stage2'>
                    <Product3
                        id='314'
                        image='https://images-eu.ssl-images-amazon.com/images/I/41aomYfDVVL._AC_SX184_.jpg'
                        title='Horlicks Health & Nutrition Drink Choclate '
                        price={335.00}
                        ratings={4} />
                    <Product3
                        id='315'
                        image='https://images-eu.ssl-images-amazon.com/images/I/51EcfrXq8pL._AC_SX184_.jpg'
                        title='Pediasure 7+ Specilized Nutrition Drink Powder'
                        price={359}
                        rating={4} />
                    <Product3
                        id='316'
                        image='https://images-eu.ssl-images-amazon.com/images/I/41CC5wi0fvL._AC_SX184_.jpg'
                        title='Dexolac Stage 2 Follow Up Infant milk formula'
                        price={324}
                        rating={4}
                    />
                </div>
            </div>
        </div>
    )
}
