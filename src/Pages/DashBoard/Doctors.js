import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../../Shared/Loading";
import AllDoctors from "./AllDoctors";

const Doctors = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const { data: services, isLoading } = useQuery("services", () =>
    fetch("http://localhost:5000/service").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  const imgStorageKey = "ec615fc495698531172416f9505b41b3";
  const onSubmit = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const image = result.data.url;
          const doctor = {
            name: data.name,
            email: data.email,
            speciality: data.speciality,
            img: image,
          };

          // put doctor info in server //
          fetch("http://localhost:5000/doctors", {
            method: "PUT",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("Doctor added successfully!");
                reset();
              } else {
                toast.error("Failed to add the doctor!");
              }
            });
        }
      });
  };

  return (
    <div className="mt-3">
      <div>
        <h2 className="font-bold">Add a New Doctor</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full max-w-xs"
              {...register("name", {
                required: {
                  value: true,
                  message: "name is required",
                },
                minLength: {
                  value: 4,
                  message: "Must be longer than 4 characters",
                },
                maxLength: {
                  value: 20,
                  message: "Must be shorter than 20 characters",
                },
              })}
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.name.message}
                </span>
              )}
              {errors.name?.type === "minLength" && (
                <span className="label-text-alt text-red-500">
                  {errors.name.message}
                </span>
              )}
              {errors.name?.type === "maxLength" && (
                <span className="label-text-alt text-red-500">
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full max-w-xs"
              {...register("email", {
                required: {
                  value: true,
                  message: "email is required",
                },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "Provide a valid Email",
                },
              })}
            />
            <label className="label">
              {errors.email?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
              {errors.email?.type === "pattern" && (
                <span className="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Speciality</span>
            </label>
            <select
              {...register("speciality")}
              className="select input-bordered w-full max-w-xs"
            >
              {services.map((service) => (
                <option key={service._id} value={service.name}>
                  {service.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input
              type="file"
              className="input w-full max-w-xs"
              {...register("image", {
                required: {
                  value: true,
                  message: "image is required",
                },
              })}
            />
            <label className="label">
              {errors.image?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.image.message}
                </span>
              )}
            </label>
          </div>

          <input className="btn w-full max-w-xs" type="submit" value="Add" />
        </form>
      </div>

      <AllDoctors></AllDoctors>
    </div>
  );
};

export default Doctors;
