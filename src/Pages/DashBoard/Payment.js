import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51Mbgc6FXIolTKOSovAD0dJxoib6uMSYeroFMXIxbG46yvrjutrCT5p8sOWw2l9GSbcGUsSuevtFpuF9Wb5Bw2BEA00Kny1n6nL"
);

const Payment = () => {
  const { appoId } = useParams();

  const [serviceToPay, setServiceToPay] = useState();
  useEffect(() => {
    fetch(`http://localhost:5000/booking/${appoId}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setServiceToPay(data);
      });
  }, [appoId]);
  if (!serviceToPay) {
    return <Loading></Loading>;
  }
  return (
    <div className="card  mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="card-body bg-base-100 shadow-xl">
        <p className="text-secondary font-semibold">
          Hello, {serviceToPay.patient}
        </p>
        <p>
          Plese complete your payment for{" "}
          <span className="text-secondary font-semibold">
            {serviceToPay.service}.
          </span>
          Your appointment is on{" "}
          <span className="text-secondary font-semibold">
            {serviceToPay.date}
          </span>{" "}
          at{" "}
          <span className="text-secondary font-semibold">
            {serviceToPay.slot}
          </span>
        </p>
        <p>
          Amount to Pay:{" "}
          <span className="text-secondary font-semibold">
            ${serviceToPay.price}
          </span>{" "}
          VAT included
        </p>
      </div>

      <div className="card-body bg-base-100 shadow-xl">
        <Elements stripe={stripePromise}>
          <CheckoutForm serviceToPay={serviceToPay} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
