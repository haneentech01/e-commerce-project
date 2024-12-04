import React, { useEffect, useState } from "react";

const ProtectedRoutHook = () => {
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const [isUser, setIsUser] = useState();
  const [isAdmin, setIsAdmin] = useState();

  useEffect(() => {
    if (userData != null) {
      if (userData.role === "user") {
        setIsUser(true);
        setIsAdmin(false);
      } else {
        setIsUser(false);
        setIsAdmin(true);
      }
    } else {
      isUser(false);
      isAdmin(false);
    }
  }, []);

  return [isUser, isAdmin, userData];
};

export default ProtectedRoutHook;
