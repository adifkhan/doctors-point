import React from "react";
import { toast } from "react-toastify";

const DeleteConfirmModal = ({ docInfo, setDeletingDoc, refetch }) => {
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
          setDeletingDoc(null);
          refetch();
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="delete-confimation" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="text-lg text-red-600">
            Are you sure you wand to remove{" "}
            <span className="font-bold">{docInfo.name}</span>?
          </h3>
          <p className="py-4">
            Click on "Cencel" if you've changed your mind, otherwise click
            "Remove".
          </p>
          <div className="modal-action">
            <label htmlFor="delete-confimation" className="btn">
              Cencel
            </label>
            <label
              onClick={() => deleteDoctor(docInfo.email)}
              htmlFor="delete-confimation"
              className="btn btn-error text-white"
            >
              Remove
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
