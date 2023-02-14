import { useEffect, useState } from "react";

const useAdminCheck = (userEmail) => {
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/admin/${userEmail}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data.admin);
      });
  }, [userEmail]);
  return [admin];
};

export default useAdminCheck;
