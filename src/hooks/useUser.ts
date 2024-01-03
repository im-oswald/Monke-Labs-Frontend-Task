import { useEffect, useState } from "react";
import { getLocalStorageItems } from "../utils/LocalStorage";

const defaultUser = { user: { userName: "Danyal" } };

type User = {
  user: {
    userName: string;
  };
};

export default function useUser() {
  const [userData, setUser] = useState<User>(() =>
    getLocalStorageItems("user")
  );

  function updateUserName(userName: string) {
    const updatedUserData = { user: { userName } };

    localStorage.setItem("user", JSON.stringify(updatedUserData));

    setUser(updatedUserData);
  }

  useEffect(() => {
    if (!userData?.user) {
      localStorage.setItem("user", JSON.stringify(defaultUser));
      setUser(defaultUser);
    }
  }, [userData]);

  return {
    user: userData.user,
    updateUserName,
  };
}
