import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

export const EditBookingForm = (props) => {
  const field = props.fields;
  const fieldData = props.fieldData;
  const theDate = Date.parse(fieldData.date);

  useEffect(() => {
    field.setMassageType(fieldData.massageType);
    field.setDuration(fieldData.duration);
    field.setContactNumber(fieldData.contactNumber);
    field.setAddress(fieldData.address);
    field.setCity(fieldData.city);
    field.setZipCode(fieldData.zip);
    field.setDate(theDate);
  });

  const onChangeMassageType = (e) => {
    fieldData.massageType = e.target.value;
    field.setMassageType(fieldData.massageType);
  }

  const onChangeDuration = (e) => {
    fieldData.duration = e.target.value;
    field.setDuration(fieldData.duration);
  }

  const onChangeContactNumber = (e) => {
    fieldData.contactNumber = e.target.value;
    field.setContactNumber(fieldData.contactNumber);
  }

  const onChangeAddress = (e) => {
    fieldData.address = e.target.value;
    field.setAddress(fieldData.address);
  }

  const onChangeCity = (e) => {
    fieldData.city = e.target.value;
    field.setCity(fieldData.city);
  }

  const onChangeZipCode = (e) => {
    fieldData.zip = e.target.value;
    field.setZipCode(fieldData.zip);
  }

  const onChangeDate = (date) => {
    fieldData.date = date;
    field.setDate(fieldData.date);
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
          <input type="number" value={field.duration} onChange={onChangeDuration} className="form-control" />
        </div>
      </div>
      <div className="form-group">
        <label>Date</label>
        <DatePicker
          className="form-control"
          required
          selected={theDate}
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
        <input type="text" className="form-control" value={field.contactNumber} onChange={onChangeContactNumber} />
      </div>
      <div className="form-group">
        <label htmlFor="inputAddress">Address</label>
        <input type="text" className="form-control" value={field.address} onChange={onChangeAddress} placeholder="1234 Main St" />
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="inputCity">City</label>
          <input type="text" className="form-control" value={field.city} onChange={onChangeCity} />
        </div>
        <div className="form-group col-md-2">
          <label htmlFor="inputZip">Zip Code</label>
          <input type="text" className="form-control" value={field.zipCode} onChange={onChangeZipCode} />
        </div>
      </div>
    </form>
  )

}