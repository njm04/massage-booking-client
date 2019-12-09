import React, { useState } from 'react';
import axios from 'axios';
import { AddBookingForm } from './addBookingForm';
import { set } from 'date-fns';

export const AddBooking = () => {
  const [massageType, setMassageType] = useState('Full Body Massage');
  const [duration, setDuration] = useState(0);
  const [contactNumber, setContactNumber] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [date, setDate] = useState(new Date());
  const [success, setSuccess] = useState(false);
  // console.log({
  //   massageType,
  //   duration,
  //   contactNumber,
  //   address,
  //   city,
  //   zipCode,
  //   date,
  // })

  const fields = {
    massageType,
    setMassageType,
    duration,
    setDuration,
    contactNumber,
    setContactNumber,
    address,
    setAddress,
    city,
    setCity,
    zipCode,
    setZipCode,
    date,
    setDate
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      massageType,
      duration,
      contactNumber,
      address,
      city,
      zipCode,
      date,
    }

    const result = await axios.post('http://localhost:5000/book', payload);
    if(result.data.status === 200) {
      console.log(result.data.message);
      setMassageType('');
      setDuration(0);
      setContactNumber('');
      setAddress('');
      setCity('');
      setZipCode('');
      setDate(new Date());
      setSuccess(true);
    } else {
      console.log(result.data.message);
    }
  }

  return (
    <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalCenterTitle">Book</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {
              success ? 
              <div className="alert alert-success" role="alert">
                A simple success alert—check it out!
              </div> : ''
            }
            <AddBookingForm fields={{...fields}}/>
        </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary" onClick={handleSubmit}>Book</button>
          </div>
        </div>
      </div>
    </div>
  )
}