import React from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../../Shared/Loading";

const AllDoctors = () => {
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery("doctors", () =>
    fetch("http://localhost:5000/doctors", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  const deleteDoctor = (email) => {
    fetch(`http://localhost:5000/doctor/${email}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.deletedCount) {
          toast.success("Successfully Deleted!");
        }
      });
  };
  refetch();
  return (
    <div className="mt-12 text-center">
      <h2 className="text-2xl font-bold text-secondary">Our Doctors</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        {doctors.map((doctor) => (
          <div key={doctor._id} className="card max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
              <label
                onClick={() => deleteDoctor(doctor.email)}
                htmlFor="booking-modal"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <div className="flex items-center justify-around my-5">
                <div className="avatar">
                  <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={doctor.img} alt="" />
                  </div>
                </div>
                <div className="pl-5 text-right">
                  <h4 className="font-bold">{doctor.name}</h4>
                  <p className="font-bold">
                    <small>{doctor.speciality}</small>
                  </p>
                  <p>{doctor.email}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllDoctors;
