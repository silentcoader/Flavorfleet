// import React, { useState } from "react";
// import styled from "styled-components";
// import Navbar from '../components/Navbar';
// import { useDispatchCart } from "../components/ContextReducer";
// import { useNavigate } from "react-router-dom";
// function Address() {
//   const dispatch = useDispatchCart();
//   const [fullName, setFullName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [flat, setFlat] = useState("");
//   const [area, setArea] = useState("");
//   const [landmark, setLandmark] = useState("");
//   const [city, setCity] = useState("");
//   const [state, setState] = useState("");

//   const navigate = useNavigate();
//   const deliver = (e) => {
//     e.preventDefault();

//     dispatch({
//       type: "SET_ADDRESS",
//       item: {
//         fullName,
//         phone,
//         flat,
//         area,
//         city,
//         state,
//       },
//     });

//     navigate("/payment");
//   };
//   return (
//     <Container>
//         <Navbar />
//         <Main>
//         <FormContainer>
//         <InputContainer>
//             <p>Full Name</p>
//             <input
//               onChange={(e) => setFullName(e.target.value)}
//               type="text"
//               placeholder="John Smith"
//               value={fullName}
//             />
//           </InputContainer>
//           <InputContainer>
//             <p>Phone Number</p>
//             <input
//               type="text"
//               onChange={(e) => setPhone(e.target.value)}
//               value={phone}
//             />
//           </InputContainer>
//           <InputContainer>
//             <p>Flat, House no. Building, Company</p>
//             <input
//               type="text"
//               onChange={(e) => setFlat(e.target.value)}
//               value={flat}
//             />
//           </InputContainer>
//           <InputContainer>
//             <p>Area, Colony, Street</p>
//             <input
//               type="text"
//               onChange={(e) => setArea(e.target.value)}
//               value={area}
//             />
//           </InputContainer>
//           <InputContainer>
//             <p>Landmark</p>
//             <input
//               type="text"
//               onChange={(e) => setLandmark(e.target.value)}
//               value={landmark}
//             />
//           </InputContainer>
//           <InputContainer>
//             <p>Town/City</p>
//             <input
//               type="text"
//               onChange={(e) => setCity(e.target.value)}
//               value={city}
//             />
//           </InputContainer>
//           <InputContainer>
//             <p>State/Province</p>
//             <input
//               type="text"
//               onChange={(e) => setState(e.target.value)}
//               value={state}
//             />
//           </InputContainer>
//             <button onClick={deliver}>Deliver to this Address</button>

//         </FormContainer>
//         </Main>
//     </Container>
//   );
// }

// const Container = styled.div`
// width: 100%;
// height: fit-content;
// max-width: 1400px;

// margin: auto;
// background-color: rgb(234, 237, 237);

// position: relative;
// `;
// const Main = styled.div`
// padding: 15px;
// `;

// const FormContainer = styled.form`
// border: 1px solid lightgray;
// width: 55%;
// min-width: 400px;
// height: fit-content;
// display: flex;
// flex-direction: column;
// align-items: center;
// justify-content: center;
// padding: 15px;
// background-color: #fff;
// margin: auto;

// button {
//   align-self: flex-start;
//   height: 33px;
//   width: 250px;
//   margin-top: 20px;
//   background-color: #ffa32a;
//   border: none;
//   outline: none;
//   border-radius: 5px;
//   cursor: pointer;
// }
// `;

// const InputContainer = styled.div`
//   width: 100%;
//   padding: 10px;

//   p {
//     font-size: 14px;
//     font-weight: 600;
//   }

//   input {
//     width: 95%;
//     height: 33px;
//     padding-left: 5px;
//     border-radius: 5px;
//     border: 1px solid lightgray;
//     margin-top: 5px;

//     &:hover {
//       border: 1px solid orange;
//     }
//   }
// `;

 
// export default Address






import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Address() {
  const navigate = useNavigate();
  const [addressData, setAddressData] = useState({
    name: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: ''
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddressData({
      ...addressData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!addressData.name) {
      newErrors.name = 'Name is required';
    }

    if (!addressData.streetAddress) {
      newErrors.streetAddress = 'Street Address is required';
    }

    if (!addressData.city) {
      newErrors.city = 'City is required';
    }

    if (!addressData.state) {
      newErrors.state = 'State is required';
    }

    if (!addressData.zipCode) {
      newErrors.zipCode = 'ZIP Code is required';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleProceedToPayment = () => {
    if (validateForm()) {
      // Send the address data to MongoDB or your server for storage
      // You can use Axios or fetch to make an API request
      // After successful storage, navigate to the Payment page
      navigate('/payment');
    }
  };

  return (
    <div>
      <h2>Address Page</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
            id="name"
            name="name"
            value={addressData.name}
            onChange={handleInputChange}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>
        {/* Similar fields for streetAddress, city, state, and zipCode */}
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleProceedToPayment}
        >
          Proceed to Payment
        </button>
        <Link to="/">Cancel</Link>
      </form>
    </div>
  );
}
