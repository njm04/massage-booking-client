import React, { useState, useEffect } from 'react';
export const Booking = (props) => {
  const [bookings, setBookings] = useState([]);
  const userId = props.user._id;
  const token = localStorage.jwtToken;

  useEffect(() => {
    getBookings();
  }, []);

  const getBookings = async() => {
    console.log(localStorage)
    const res = await fetch(`http://localhost:5000/book/${localStorage.userId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    console.log(res)
    const bookingData = await res.json();
    setBookings(bookingData);
  }
  console.log(bookings)
  return (
  <table className="table">
    {/* {bookings.firstName} */}
    <thead className="thead-dark">
      <tr>
        <th scope="row">#</th>
        <th scope="col">Name</th>
        <th scope="col">Massage Type</th>
        {/* <th scope="col">Massage Therapist</th> */}
        <th scope="col">Duration</th>
        <th scope="col">Date</th>
        <th scope="col">Action</th>
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
  )
}