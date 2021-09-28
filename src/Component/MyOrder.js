
// import React, { useState, useEffect } from 'react'
// import './MyOrder.css'
// import { db } from '../firebase'
// import { useSelector } from 'react-redux'
// import Order from './Order'



// export default function MyOrder() {

//     let user = useSelector(state => state.user);
//     let [orders, setOrders] = useState();

//     useEffect(() => {

//         db.collection('users')
//             .doc(user?.uid)
//             .collection('orders')
//             .onSnapshot((snapshot) => {
//                 console.log('in success of snapshot');
//                 console.log(snapshot.docs);
//                 setOrders(snapshot.docs.map((doc) => (
//                     {
//                         id: doc.id,
//                         data: doc.data()
//                     }
//                 )))
//                 console.log(orders)
//             })
//     }, [])
//     return (
//         <div>
//             <h1>Your Orders {orders?.length}</h1>

//             <div className="orders__order">

//                 {user && orders?.map(order => (

//                     <Order key={order.id} order={order} />

//                 ))



//                 }

//             </div>
//         </div>
//     )
// }
