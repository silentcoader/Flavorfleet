import React from 'react'
import Delete from '@material-ui/icons/Delete'
import axios from 'axios';
import { useCart, useDispatchCart } from '../components/ContextReducer';
export default function Cart() {
  let data = useCart();
  let dispatch = useDispatchCart();
  if (data.length === 0) {
    return (
      <div>
        <div className='m-5 w-100 text-center text-white fs-3'>The Cart is Empty!</div>
      </div>
    )
  }
  
  const handleCheckOut = async () => {
    let userEmail = localStorage.getItem("userEmail");

    let response = await fetch("http://localhost:5000/api/orderData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        order_data: data,
        email: userEmail,
        order_date: new Date().toDateString()
      })
    });
    console.log("Order response:", response)
    if (response.status === 200) {
      dispatch({ type: "DROP" })
    }
  }
  const handleOpenRazorpay = (data) => {
    const options = {
      key : 'rzp_test_KZvnVzz6h7jk2g',
      amount : Number(data.amount) * 100,
      currency : data.currency,
      name : 'FLAVORFLEET',
      description : 'XYZ',
      order_id : data.id,
      handler: function(response) {
        console.log(response,"34")
      }

    }
    const rzp = new window.Razorpay(options)
    rzp.open()
  }
  const handlePayment = (amount) => {
    const _data = { amount: amount };
    axios.post('http://localhost:5000/orders', _data)
      .then((res) => {
        console.log(res.data, "29");
        handleOpenRazorpay(res.data.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  

  let totalPrice = data.reduce((total, food) => total + food.price, 0)
  return (
    <div>

      {console.log(data)}
      <div className='container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md' >
        <table className='table text-white '>
          <thead className=' text-success fs-4'>
            <tr>
              <th scope='col' >#</th>
              <th scope='col' >Name</th>
              <th scope='col' >Quantity</th>
              <th scope='col' >Option</th>
              <th scope='col' >Amount</th>
              <th scope='col' ></th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr>
                <th scope='row' >{index + 1}</th>
                <td >{food.name}</td>
                <td>{food.qty}</td>
                <td>{food.size}</td>
                <td>{food.price}</td>
                <td ><button type="button" className="btn p-0 text-white"><Delete onClick={() => { dispatch({ type: "REMOVE", index: index }) }} /></button> </td></tr>
            ))}
          </tbody>
        </table>
        <div><h1 className='text-white fs-2'>Total Price: {totalPrice}/-</h1></div>
        <button className='btn bg-success mt-5' onClick={()=> handlePayment(totalPrice)}>PAY NOW</button>
        
        <div>
          <button className='btn bg-success mt-5' onClick={handleCheckOut}> Clear Cart </button>
        </div>
      </div></div>
  )
}











