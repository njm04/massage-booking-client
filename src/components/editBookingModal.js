import React, { useState } from 'react';
import { EditBookingForm } from './editBookingForm';
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css';

export const EditBooking = (props) => {
  const [massageType, setMassageType] = useState('Full Body Massage');
  const [duration, setDuration] = useState(0);
  const [contactNumber, setContactNumber] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [date, setDate] = useState(new Date());
  const [success, setSuccess] = useState(false);
  const bookingId = props.viewData._id;
  const { viewData } = props;

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

    const result = await axios.put(`http://localhost:5000/book/${bookingId}`, payload);
    if(result.data.status === 200) {
      setMassageType(viewData.massageType);
      setDuration(viewData.duration);
      setContactNumber(viewData.contactNumber);
      setAddress(viewData.address);
      setCity(viewData.city);
      setZipCode(viewData.zip);
      setDate(viewData.date);
      window.location.reload(false);
    } else {
      console.log(result.data.message);
    }
  }

  return (
    <div className="modal fade" id="editModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalCenterTitle">Update</h5>
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
            <EditBookingForm fields={{ ...fields }} fieldData={props.viewData}/>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary" onClick={handleSubmit} data-dismiss="modal">Update</button>
          </div>
        </div>
      </div>
    </div>
  )

}