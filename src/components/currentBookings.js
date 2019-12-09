import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { AddBooking } from './addBookingModal';

export const Booking = (props) => {
  const [bookings, setBookings] = useState([]);
  const token = localStorage.jwtToken;

  useEffect(() => {
    getBookings();
  }, []);
  

  const getBookings = async () => {

    const res = await fetch(`http://localhost:5000/book/${localStorage.userId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    const bookingData = await res.json();
    console.log(bookingData);
    setBookings(bookingData);
  }

  return (
    <div>
      <table className="table mt-2">
        <thead className="thead-dark">
          <tr>
            <th scope="row">#</th>
            <th scope="col">Name</th>
            <th scope="col">Massage Type</th>
            {/* <th scope="col">Massage Therapist</th> */}
            <th scope="col">Duration</th>
            <th scope="col">Date</th>
            <th scope="col">Action <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">Book</button></th>
          </tr>
        </thead>
        <tbody>
          {
            bookings.map((data, index) => {
              return (
                <tr key={index}>
                  <td scope="row">{index + 1}</td>
                  <td>{data.bookedBy.firstName} {data.bookedBy.lastName}</td>
                  <td>{data.massageType}</td>
                  <td>{data.duration}</td>
                  <td>{data.date}</td>
                  <td>
                    <button type="button" className="btn btn-primary">Edit</button>
                    <button type="button" className="btn btn-danger">Cancel</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      {/* Add Booking form */}
      <AddBooking />
    </div>
  )
}