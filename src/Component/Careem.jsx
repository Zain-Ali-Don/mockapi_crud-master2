import axios from 'axios';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function EmployeeForm() {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropOffLocation, setDropOffLocation] = useState('');
  const [rideType, setRideType] = useState('');
  const [numPassengers, setNumPassengers] = useState(1);
  const [pickupTime, setPickupTime] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [msg, setMsg] = useState('');
  const [isShow, setIsShow] = useState(false);

  const designations = ['Manager', 'Developer', 'Designer', 'HR', 'Sales'];
  const departments = ['IT', 'Finance', 'Marketing', 'Operations', 'HR'];

  async function SaveMockapi() {
    try {
      let response = await axios.post("https://67ad86693f5a4e1477ddf074.mockapi.io/rides", {
        name: fullName,
        number: phoneNumber,
        email: email,
        picLocation: pickupLocation,
        droplocation: dropOffLocation,
        ridetype: rideType,
        numberpassenger: numPassengers,
        picktime: pickupTime,
        paymentMethod: paymentMethod,
        promocode: promoCode,
        additionalnotes: additionalNotes,
      });
      console.log(response.data);
      setIsSubmitted(true);
      setMsg('Ride booked successfully!');
      setIsShow(true);

      setFullName('');
      setPhoneNumber('');
      setEmail('');
      setPickupLocation('');
      setDropOffLocation('');
      setRideType('');
      setNumPassengers(1);
      setPickupTime('');
      setPaymentMethod('');
      setPromoCode('');
      setAdditionalNotes('');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Careem Rides</h2>
      <div className="card p-4 shadow mx-auto" style={{ maxWidth: '500px' }}>
        <form onSubmit={(e) => { e.preventDefault(); SaveMockapi(); }}>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input type="text" className="form-control" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input type="number" className="form-control" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Pickup Location</label>
            <input type="text" className="form-control" value={pickupLocation} onChange={(e) => setPickupLocation(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Drop Off Location</label>
            <input type="text" className="form-control" value={dropOffLocation} onChange={(e) => setDropOffLocation(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Ride Type</label>
            <input type="text" className="form-control" value={rideType} onChange={(e) => setRideType(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Number of Passengers</label>
            <input type="number" className="form-control" value={numPassengers} onChange={(e) => setNumPassengers(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Pickup Time</label>
            <input type="datetime-local" className="form-control" value={pickupTime} onChange={(e) => setPickupTime(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Payment Method</label>
            <input type="text" className="form-control" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Promo Code</label>
            <input type="text" className="form-control" value={promoCode} onChange={(e) => setPromoCode(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Additional Notes</label>
            <textarea className="form-control" value={additionalNotes} onChange={(e) => setAdditionalNotes(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
        <br />
        <Link to="/rides">View Details</Link>
        {isShow && <p className="text-success mt-3 text-center">{msg}</p>}
      </div>
    </div>
  );
}
