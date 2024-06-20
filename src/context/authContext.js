import { createContext, useContext, useEffect, useState } from "react";
import { fetch } from "../utils/fetch";

const AuthContext = createContext({
  user: null,
});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [profiles, setProfiles] = useState([]);

  const login = async ({ email, password }) => {
    const response = await fetch("/auth/login", {
      method: "post",
      data: {
        email,
        password,
      },
    });

    setUser(response.user);
    localStorage.setItem("token", response.token);
  };

  const edit = async ({ firstName, lastName, age, country, _id }) => {
    const response = await fetch("/auth/update", {
      method: "put",
      data: {
        firstName,
        lastName,
        age,
        country,
        _id,
      },
    });

    setUser(response.user);
  };

  const getProfile = async (token) => {
    const response = await fetch("/auth/me", { headers: { token } });


    setUser(response.user);
  };

  const getAllProfiles = async () => {
    const response = await fetch("/auth/");

    setProfiles(response);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  const signUp = async (signupData) => {
    const response = await fetch("/auth/sign-up", {
      method: "post",
      data: signupData,
    });

    setUser(response.user);
    localStorage.setItem("token", response.token);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      getProfile(token);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        signUp,
        edit,
        profiles,
        getAllProfiles,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
