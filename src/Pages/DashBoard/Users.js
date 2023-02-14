import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import useAdminCheck from "../../Hooks/useAdminCheck";
import Loading from "../../Shared/Loading";

const Users = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("http://localhost:5000/users", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  const [currentUser] = useAuthState(auth);
  const userEmail = currentUser.email;
  const [admin] = useAdminCheck(userEmail);

  if (isLoading) {
    return <Loading></Loading>;
  }
  const changeRole = (user) => {
    const email = user.email;
    let role = "user";
    if (user.role === "user") {
      role = "admin";
    }
    const confirmAdmin = window.confirm("want to change role?");
    if (confirmAdmin) {
      fetch(`http://localhost:5000/user/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ role: role }),
      })
        .then((res) => res.json())
        .then((data) => {});
    }
  };

  refetch();

  return (
    <div>
      <div className="overflow-x-auto mt-4">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Index</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Change Role</th>
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.displayName}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <button
                    disabled={!admin}
                    onClick={() => changeRole(user)}
                    className="btn btn-xs"
                  >
                    {user.role === "user" ? "make admin" : "make user"}
                  </button>
                </td>
                <td>
                  <label className="text-white bg-accent rounded-full py-1 px-2">
                    ✕
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
