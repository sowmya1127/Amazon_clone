
// import React from "react";
// import "./Product.css";
// import {useDispatch} from 'react-redux'

// function Product({id, title, image, price, rating }) {
//   let dispatch=useDispatch();

//   return (
//     <div className="product">
//       <img src={image} alt="" className='image' />
//       <div className="product__info">
//         <p>{title}</p>
//         <p className="product__price">
//           <small>$</small>
//           <strong>{price}</strong>
//         </p>
//         <div className="product__rating">
//           {Array(rating)
//             .fill()
//             .map((_, i) => (
//               <p>🌟</p>
//             ))}
//         </div>
//       </div>



//       <button onClick={()=>dispatch({type:'ADD_TO_CART',item:{id:id, title:title, image:image, price:price, rating:rating}})}>Add to Basket</button>


//     </div>
//   );
// }

// export default Product;
