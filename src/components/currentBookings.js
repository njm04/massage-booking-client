import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AddBooking } from './addBookingModal';
import { EditBooking } from './editBookingModal';

export const Booking = (props) => {
  const [bookings, setBookings] = useState([]);
  const [viewBookingData, setViewBookingData] = useState({});
  const token = localStorage.jwtToken;

  // NOTE: when useEffect has an array of objecs as
  // a 2nd argument. The useEffect function infinitely
  // triggers. A temporary fix is to put empty array 
  // as a 2nd argument and make page reload on every button action.
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
    setBookings(bookingData);
  }

  const deletebooking = async (id) => {
    const res = await axios.put(`http://localhost:5000/book/delete/${id}`);
    console.log(res);
  }

  return (
    <div>
      <table className="table mt-2 text-center">
        <thead className="thead-dark">
          <tr>
            <th scope="row">#</th>
            <th scope="col">Name</th>
            <th scope="col">Massage Type</th>
            {/* <th scope="col">Massage Therapist</th> */}
            <th scope="col">Contact Number</th>
            <th scope="col">Address</th>
            <th scope="col">City</th>
            <th scope="col">Zip</th>
            <th scope="col">Duration</th>
            <th scope="col">Date</th>
            <th scope="col">Action <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">Book</button></th>
          </tr>
        </thead>
        <tbody>
          {
            bookings.length ?
            bookings.map((data, index) => {
              return (
                <tr key={index}>
                  <td scope="row">{index + 1}</td>
                  <td>{data.bookedBy.firstName} {data.bookedBy.lastName}</td>
                  <td>{data.massageType}</td>
                  <td>{data.contactNumber}</td>
                  <td>{data.address}</td>
                  <td>{data.city}</td>
                  <td>{data.zip}</td>
                  <td>{data.duration} min</td>
                  <td>{new Date(data.date).toLocaleString()}</td>
                  <td>
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#editModal" onClick={() => {
                      setViewBookingData(data)
                      }}>Edit</button>
                    <button type="button" className="btn btn-danger" onClick={() => {
                      deletebooking(data._id);
                      window.location.reload(false);
                      }}>Cancel</button>
                  </td>
                </tr>
              )
            }) :
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td><h1>NO CURRENT APPOINTMENTS</h1></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          }
        </tbody>
      </table>
      <AddBooking />
      <EditBooking viewData={viewBookingData}/>
    </div>
  )
}