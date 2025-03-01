import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ShowTicket() {
    let Linker = 'https://67ad86693f5a4e1477ddf074.mockapi.io/TicketBooking';
    let [record, Setrecord] = useState([]);
    let [search, Setsearch] = useState("");
    let [order, Setorder] = useState("");
    let [msg, setMsg] = useState("");
    let [Isshow, setIsshow] = useState(false);

    useEffect(() => {
        axios.get(Linker)
            .then((data_aya) => {
                Setrecord(data_aya.data);
            })
            .catch((e) => console.error(e));
    }, []);

    const filteredRecords = search
        ? record.filter((abc) => abc.Full_Name.toLowerCase().includes(search.toLowerCase()))
        : record;

    if (order === "1") {
        filteredRecords.sort((a, b) => a.NumofPassengers - b.NumofPassengers);
    } else if (order === "2") {
        filteredRecords.sort((a, b) => b.NumofPassengers - a.NumofPassengers);
    }

    useEffect(() => {
        if (Isshow) {
            var timer = setTimeout(() => {
                setIsshow(false);
            }, 10000);
            return () => clearTimeout(timer);
        }
    }, [Isshow]);

    return (
        <div className='container my-5'>
            <h1 className='text-center mb-4'>Ticket Checker</h1>
            <div className='d-flex justify-content-between align-items-center mb-4'>
                <Link className='btn btn-warning' to='/'>Book A Ticket</Link>
                <input
                    type='text'
                    placeholder='Search Passenger by Name'
                    value={search}
                    onChange={(E) => Setsearch(E.target.value)}
                    className='form-control w-50'
                />
                <select className='form-select w-25' value={order} onChange={(e) => Setorder(e.target.value)}>
                    <option value="">Sort by passengers</option>
                    <option value="1">Ascending Order</option>
                    <option value="2">Descending Order</option>
                </select>
            </div>

            {Isshow && <div className='alert alert-success'>{msg}</div>}

            <div className='row'>
                {filteredRecords.length === 0 ? (
                    <p className='text-danger text-center w-100'>No Ticket Record Found</p>
                ) : (
                    filteredRecords.map((a) => (
                        <div className='col-md-4 mb-4' key={a.id}>
                            <div className='card shadow-lg'>
                                <div className='card-body'>
                                    <h5 className='card-title text-center'>{a.Full_Name}</h5>
                                    <p className='card-text'><strong>Nationality:</strong> {a.Nationality}</p>
                                    <p className='card-text'><strong>Email:</strong> {a.Email}</p>
                                    <p className='card-text'><strong>Phone Number:</strong> {a.PhoneNumber}</p>
                                    <p className='card-text'><strong>Passport Number:</strong> {a.PassportNumber}</p>
                                    <p className='card-text'><strong>Travel Class:</strong> {a.TravelClass}</p>
                                    <p className='card-text'><strong>Passengers:</strong> {a.NumofPassengers}</p>
                                    <p className='card-text'><strong>Payment Method:</strong> {a.PaymentMethod}</p>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
