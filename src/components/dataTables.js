import React from 'react';
import { Booking } from './currentBookings';

export const DataTables = (props) => {
  const userInfo = props.userInfo;
  return (
    <div>
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <a className="nav-item nav-link active" id="current-bookings-tab" data-toggle="tab" href="#current-bookings" role="tab" aria-controls="current-bookings" aria-selected="true">Current Bookings</a>
          {/* <a className="nav-item nav-link" id="bookings-history-tab" data-toggle="tab" href="#bookings-history" role="tab" aria-controls="bookings-history" aria-selected="false">Booking History</a> */}
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div className="tab-pane fade show active" id="current-bookings" role="tabpanel" aria-labelledby="current-bookings-tab">
          <Booking user={userInfo} />
        </div>
        {/* <div className="tab-pane fade" id="bookings-history" role="tabpanel" aria-labelledby="bookings-history-tab">
          <Booking user={userInfo} />
        </div> */}
      </div>
    </div>
  )
}