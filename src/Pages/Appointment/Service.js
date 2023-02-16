import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots, price } = service;
  return (
    <div>
      <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-secondary font-bold">{name}</h2>
          <p className="font-medium">
            {slots.length ? (
              <span>{slots[0]}</span>
            ) : (
              <span>Service Not Available Now</span>
            )}
          </p>
          <p>
            {slots.length} {slots.length > 1 ? "Slots" : "Slot"} Available
          </p>
          <p>
            <small>Price: ${price}</small>
          </p>
          <div className="card-actions">
            <label
              htmlFor="booking-modal"
              onClick={() => setTreatment(service)}
              disabled={slots.length === 0}
              className="btn btn-sm btn-primary bg-gradient-to-r from-secondary to-primary text-bold text-white"
            >
              Book Appointment
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
