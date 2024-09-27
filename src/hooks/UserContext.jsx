import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});

  const putUserData = (useInfo) => {
    setUserInfo(userInfo);

    localStorage.setItem("devburger:userData", JSON.stringify(useInfo));
  };

  const logout = () => {
    setUserInfo({});
    localStorage.removeItem("devburger:userData");
  };

  useEffect(() => {
    const userInfoLocalStorage = localStorage.getItem("devburger:userData");

    if (userInfoLocalStorage) {
      setUserInfo(JSON.parse(userInfoLocalStorage));
    }
  }, []);

  return (
    <UserContext.Provider value={{ userInfo, putUserData, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be a valid context");
  }

  return context;
};

export default UserProvider;
