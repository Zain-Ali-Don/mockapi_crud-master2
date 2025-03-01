import axios from 'axios';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function Ticketbooking() {
    const [fullName, setFullName] = useState('');
    const [DOFB, setDOFB] = useState('');
    const [gender, setgender] = useState('');
    const [nationality, setnationality] = useState('');
    const [passportNumber, setpassportNumber] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [TripType, setTriptype] = useState('');
    const [Departurecity, setDeparturecity] = useState('');
    const [Destinationcity, setDestinationcity] = useState('');
    const [Departuredate, setDeparturedate] = useState('');
    const [Returndate, setReturndate] = useState('');
    const [Departuretime, setDeparturetime] = useState('');
    const [numPassengers, setNumPassengers] = useState(1);
    const [Travelclass, setTravelclass] = useState('');
    const [Seatprefer, setSeatprefer] = useState('');
    const [SpecialRequest, setSpecialRequest] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [additionalNotes, setAdditionalNotes] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [msg, setMsg] = useState('');
    const [isShow, setIsShow] = useState(false);

    async function SaveMockapi() {
        try {
            let response = await axios.post("https://67ad86693f5a4e1477ddf074.mockapi.io/TicketBooking", {
                Full_Name: fullName,
                DOB: DOFB,
                Gender: gender,
                Nationality: nationality,
                PassportNumber: passportNumber,
                PhoneNumber: phoneNumber,
                Email: email,
                TripType: TripType,
                DepartureCity: Departurecity,
                DestinationCity: Destinationcity,
                DepartureDate: Departuredate,
                ReturnDate: Returndate,
                DepartureTime: Departuretime,
                NumofPassengers: numPassengers,
                TravelClass: Travelclass,
                SeatPreference: Seatprefer,
                SpecialRequest: SpecialRequest,
                PaymentMethod: paymentMethod,
                AdditionalNotes: additionalNotes,
            });
            console.log(response.data);
            setIsSubmitted(true);
            setMsg('Ticket booked successfully!');
            setIsShow(true);

            setFullName('');
            setDOFB('');
            setgender('');
            setnationality('');
            setpassportNumber('');
            setPhoneNumber('');
            setEmail('');
            setTriptype('');
            setDeparturecity('');
            setDestinationcity('');
            setDeparturedate('');
            setReturndate('');
            setDeparturetime('');
            setNumPassengers(1);
            setTravelclass('');
            setSeatprefer('');
            setSpecialRequest('');
            setPaymentMethod('');
            setAdditionalNotes('');
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Ticket Booking Form</h2>
            <div className="card p-4 shadow mx-auto" style={{ maxWidth: '500px' }}>
                <form onSubmit={(e) => { e.preventDefault(); SaveMockapi(); }}>
                    <div className="mb-3">
                        <label className="form-label">Full Name (Required)</label>
                        <input type="text" className="form-control" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Date of Birth (Required)</label>
                        <input type="date" className="form-control" value={DOFB} onChange={(e) => setDOFB(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Gender (Required)</label>
                        <div className="form-check">
                            <input type="radio" className="form-check-input" value="Male" checked={gender === 'Male'} onChange={(e) => setgender(e.target.value)} />
                            <label className="form-check-label">Male</label>
                        </div>
                        <div className="form-check">
                            <input type="radio" className="form-check-input" value="Female" checked={gender === 'Female'} onChange={(e) => setgender(e.target.value)} />
                            <label className="form-check-label">Female</label>
                        </div>
                        <div className="form-check">
                            <input type="radio" className="form-check-input" value="Other" checked={gender === 'Other'} onChange={(e) => setgender(e.target.value)} />
                            <label className="form-check-label">Other</label>
                        </div>
                    </div>
                    <div className='mb-3'>
                        <label className="form-label">Nationality (Required)</label>
                        <select className='form-select' value={nationality} onChange={(e) => setnationality(e.target.value)} required>
                            <option value="">Select Country</option>
                            <option value="us">United States</option>
                            <option value="uk">United Kingdom</option>
                            <option value="in">India</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Passport Number (Required for International Flights)</label>
                        <input type="text" className="form-control" value={passportNumber} onChange={(e) => setpassportNumber(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Phone Number (Required)</label>
                        <input type="text" className="form-control" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email (Required)</label>
                        <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Trip Type (Required)</label>
                        <div className="form-check">
                            <input type="radio" className="form-check-input" value="one-way" checked={TripType === 'one-way'} onChange={(e) => setTriptype(e.target.value)} />
                            <label className="form-check-label">One-Way</label>
                        </div>
                        <div className="form-check">
                            <input type="radio" className="form-check-input" value="round-trip" checked={TripType === 'round-trip'} onChange={(e) => setTriptype(e.target.value)} />
                            <label className="form-check-label">Round Trip</label>
                        </div>
                        <div className="form-check">
                            <input type="radio" className="form-check-input" value="multi-city" checked={TripType === 'multi-city'} onChange={(e) => setTriptype(e.target.value)} />
                            <label className="form-check-label">Multi-City</label>
                        </div>
                    </div>
                    <div className='mb-3'>
                        <label className="form-label">Departure City (Required)</label>
                        <select className='form-select' value={Departurecity} onChange={(e) => setDeparturecity(e.target.value)} required>
                            <option value="">Select City</option>
                            <option value="nyc">New York</option>
                            <option value="uk">United Kingdom</option>
                            <option value="lax">Los Angeles</option>
                        </select>
                    </div>
                    <div className='mb-3'>
                        <label className="form-label">Destination City (Required)</label>
                        <select className='form-select' value={Destinationcity} onChange={(e) => setDestinationcity(e.target.value)} required>
                            <option value="">Select City</option>
                            <option value="nyc">New York</option>
                            <option value="lon">London</option>
                            <option value="dubai">Dubai</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Departure Date (Required)</label>
                        <input type="date" className="form-control" value={Departuredate} onChange={(e) => setDeparturedate(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Return Date (Required for Round Trip)</label>
                        <input type="date" className="form-control" value={Returndate} onChange={(e) => setReturndate(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Preferred Departure Time (Optional)</label>
                        <input type="time" className="form-control" value={Departuretime} onChange={(e) => setDeparturetime(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Number of Passengers (Required)</label>
                        <input type="number" className="form-control" value={numPassengers} onChange={(e) => setNumPassengers(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Travel Class (Required)</label>
                        <div className="form-check">
                            <input type="radio" className="form-check-input" value="economy" checked={Travelclass === 'economy'} onChange={(e) => setTravelclass(e.target.value)} />
                            <label className="form-check-label">Economy</label>
                        </div>
                        <div className="form-check">
                            <input type="radio" className="form-check-input" value="business" checked={Travelclass === 'business'} onChange={(e) => setTravelclass(e.target.value)} />
                            <label className="form-check-label">Business</label>
                        </div>
                        <div className="form-check">
                            <input type="radio" className="form-check-input" value="first-class" checked={Travelclass === 'first-class'} onChange={(e) => setTravelclass(e.target.value)} />
                            <label className="form-check-label">First Class</label>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Seat Preference (Optional)</label>
                        <div className="form-check">
                            <input type="radio" className="form-check-input" value="window" checked={Seatprefer === 'window'} onChange={(e) => setSeatprefer(e.target.value)} />
                            <label className="form-check-label">Window</label>
                        </div>
                        <div className="form-check">
                            <input type="radio" className="form-check-input" value="aisle" checked={Seatprefer === 'aisle'} onChange={(e) => setSeatprefer(e.target.value)} />
                            <label className="form-check-label">Aisle</label>
                        </div>
                        <div className="form-check">
                            <input type="radio" className="form-check-input" value="no-preference" checked={Seatprefer === 'no-preference'} onChange={(e) => setSeatprefer(e.target.value)} />
                            <label className="form-check-label">No Preference</label>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Special Requests (Optional)</label>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" value="extra_legroom" checked={SpecialRequest === 'extra_legroom'} onChange={(e) => setSpecialRequest(e.target.value)} />
                            <label className="form-check-label">Extra Legroom</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" value="wheelchair" checked={SpecialRequest === 'wheelchair'} onChange={(e) => setSpecialRequest(e.target.value)} />
                            <label className="form-check-label">Wheelchair Assistance</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" value="special_meal" checked={SpecialRequest === 'special_meal'} onChange={(e) => setSpecialRequest(e.target.value)} />
                            <label className="form-check-label">Special Meal Request</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" value="infant_seat" checked={SpecialRequest === 'infant_seat'} onChange={(e) => setSpecialRequest(e.target.value)} />
                            <label className="form-check-label">Infant Seat</label>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Payment Method (Required)</label>
                        <div className="form-check">
                            <input type="radio" className="form-check-input" value="card" checked={paymentMethod === 'card'} onChange={(e) => setPaymentMethod(e.target.value)} />
                            <label className="form-check-label">Credit/Debit Card</label>
                        </div>
                        <div className="form-check">
                            <input type="radio" className="form-check-input" value="netbanking" checked={paymentMethod === 'netbanking'} onChange={(e) => setPaymentMethod(e.target.value)} />
                            <label className="form-check-label">Net Banking</label>
                        </div>
                        <div className="form-check">
                            <input type="radio" className="form-check-input" value="cash" checked={paymentMethod === 'cash'} onChange={(e) => setPaymentMethod(e.target.value)} />
                            <label className="form-check-label">Cash at Counter</label>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Additional Notes</label>
                        <textarea className="form-control" value={additionalNotes} onChange={(e) => setAdditionalNotes(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                </form>
                <br />
                <Link to="/ticket">View Details</Link>
                {isShow && <p className="text-success mt-3 text-center">{msg}</p>}
            </div>
        </div>
    )
}
