// import React from 'react'

// import './Order.css'

// // import moment from 'moment'

// import PurchasedProduct from './PurchasedProduct'



//  function Order({order}) {

//     return (

//         <div className='order'>
//             <h1>Order</h1>
//             <p>
//                 {/* { moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')} */}
//             </p>
//             <p className="order__id">
//                 <large>{order.id}</large>
//             </p>

//             {
//                 order.data.basket.map(item=>(
//                     <PurchasedProduct key={item.id}
//                     id={item.id}
//                     title={item.title}
//                     image={item.image}
//                     price={item.price}
//                     rating={item.rating}
//                     />
//                 ))
//             }
//             <hr></hr>   </div>

//     )

// }



// export default Order;