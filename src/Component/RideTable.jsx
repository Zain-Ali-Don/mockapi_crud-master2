import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ShowData() {
    let Linker = 'https://67ad86693f5a4e1477ddf074.mockapi.io/rides/';
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
        ? record.filter((abc) => abc.name.toLowerCase().includes(search.toLowerCase()))
        : record;

    if (order === "1") {
        filteredRecords.sort((a, b) => a.number - b.number);
    } else if (order === "2") {
        filteredRecords.sort((a, b) => b.number - a.number);
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
        <div className='container'>
            <h1>Careem Booking</h1>
            <Link className='btn btn-warning my-3' to='/'>Add Careem +</Link>

            <input
                type='text'
                placeholder='Enter name to search employee'
                value={search}
                onChange={(E) => Setsearch(E.target.value)}
                className='form-control my-3'
            />

            <select className='form-select my-3' value={order} onChange={(e) => Setorder(e.target.value)}>
                <option value="">Sort by name</option>
                <option value="1">Ascending Order</option>
                <option value="2">Descending Order</option>
            </select>

            {Isshow && <div className="alert alert-success">{msg}</div>}

            <div className='row'>
                {filteredRecords.length === 0 ? (
                    <p style={{ color: "red" }}>No Careem Record Found</p>
                ) : (
                    filteredRecords.map((a) => (
                        <div className='col-md-4' key={a.id}>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th colSpan="2">Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Name:</td>
                                        <td>{a.name}</td>
                                    </tr>
                                    <tr>
                                        <td>Number:</td>
                                        <td>{a.number}</td>
                                    </tr>
                                    <tr>
                                        <td>Email:</td>
                                        <td>{a.email}</td>
                                    </tr>
                                    <tr>
                                        <td>Pic Location:</td>
                                        <td>{a.picLocation}</td>
                                    </tr>
                                    <tr>
                                        <td>Pick Time:</td>
                                        <td>{a.picktime}</td>
                                    </tr>
                                    <tr>
                                        <td>Payment Method:</td>
                                        <td>{a.paymentMethod}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    ))
                )}
            </div>
        </div>
    );
}
