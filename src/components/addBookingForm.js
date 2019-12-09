import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

export const AddBookingForm = (props) => {
  const field = props.fields;

  const onChangeMassageType = (e) => {
		field.setMassageType(e.target.value);
  }
  
  const onChangeDuration = (e) => {
		field.setDuration(e.target.value);
  }
  
  const onChangeContactNumber = (e) => {
		field.setContactNumber(e.target.value);
  }
  
  const onChangeAddress = (e) => {
		field.setAddress(e.target.value);
  }

  const onChangeCity = (e) => {
		field.setCity(e.target.value);
  }
  
  const onChangeZipCode = (e) => {
		field.setZipCode(e.target.value);
  }
  
  const onChangeDate = (date) => {
		field.setDate(date);
	}

  return (
    <form>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label>Massage Type</label>
          <select value={field.massageType} onChange={onChangeMassageType} className="form-control">
            <option defaultValue value="Full Body Massage">Full Body Massage</option>
            <option value="Back Massage">Back Massage</option>
            <option value="Foot Massage">Foot Massage</option>
          </select>
        </div>
        <div className="form-group col-md-6">
          <label>Duration</label>
          <input type="number" value={field.duration} onChange={onChangeDuration} className="form-control"/>
        </div>
      </div>
      <div className="form-group">
        <label>Date</label>
        <DatePicker
          className="form-control"
          required
          selected={field.date}
          onChange={onChangeDate}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          timeCaption="time"
          dateFormat="MMMM d, yyyy h:mm aa"
        />
      </div>
      <div className="form-group">
        <label htmlFor="inputAddress">Contact Number</label>
        <input type="text" className="form-control" value={field.contactNumber} onChange={onChangeContactNumber}/>
      </div>
      <div className="form-group">
        <label htmlFor="inputAddress">Address</label>
        <input type="text" className="form-control" value={field.address} onChange={onChangeAddress} placeholder="1234 Main St"/>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="inputCity">City</label>
          <input type="text" className="form-control" value={field.city} onChange={onChangeCity}/>
        </div>
        <div className="form-group col-md-2">
          <label htmlFor="inputZip">Zip Code</label>
          <input type="text" className="form-control" value={field.zipCode} onChange={onChangeZipCode}/>
        </div>
      </div>
    </form>
  )

}