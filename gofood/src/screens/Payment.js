// import React from 'react'
// import styled from "styled-components";
// import Navbar from '../components/Navbar';

// import Address from './Address';
// import { useCart } from '../components/ContextReducer';


// function Payment() {
//     const { address, foodCat} = useCart();
//   return (
//     <div>
//       <Navbar />
//       <Container>
//       <Main>
//         <ReviewContainer>
//         <h2>Review Your Order</h2>
//         <AddressContainer>
//             <h5>Shipping Address</h5>
//             <div>
//                 <p>{address.fullName}</p>
//                 <p>{address.flat}</p>
//                 <p>{address.area}</p>
//                 <p>{address.landmark}</p>
//                 <p>
//                 {address.city} {address.state}
//               </p>

//               <p>Phone: {address.phone}</p>
//             </div>
//         </AddressContainer>
//         <PaymentContainer>
//           <h5>Payment Method</h5>
//           <div>
//             <p>Card Details</p>
//           </div>
//           </PaymentContainer>
//           <OrderContainer>
//             <h5>Your Order</h5>
//             <div>

//             </div>
//           </OrderContainer>
//         </ReviewContainer>
//         <SubTotal></SubTotal>
//       </Main>
//       </Container>
//     </div>
//   )
// }

// const Container = styled.div`
// width: 100%;
// height: fit-content;
// max-width: 1400px;
// background-color: rgb(234, 237, 237);
// `;

// const Main  = styled.div`
// padding: 15px;
// display: flex;
// `;
// const ReviewContainer = styled.div`
// background-color: #fff;
// flex: 0.7;
// padding: 15px;
// h2 {
//   font-weight: 500;
//   border-bottom: 1px solid lightgray;
//   padding-bottom: 15px;
// }
// `;

// const AddressContainer = styled.div`
// margin-top: 20px;
// div {
//   margin-top: 10px;
//   margin-left: 10px;

//   p {
//     font-size: 14px;
//     margin-top: 4px;
//   }
// }
// `;
// const PaymentContainer = styled.div`
// margin-top: 15px;
// div {
//   margin-top: 15px;
//   margin-left: 15px;

//   p {
//     font-size: 14px;
//   }
// }
// `;
// const OrderContainer = styled.div``;
// const SubTotal = styled.div`
// flex: 0.3;
//   background-color: #fff;
//   margin-left: 15px;
// `;

// export default Payment




