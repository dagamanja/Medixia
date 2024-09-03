import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Firebase/Firebase";
// import {
//   LoginApi,
//   getAllUsers,
//   getMyUser,
//   createUser,
//   updateUserPassword,
//   searchUser,
//   updateUserApi,
//   sendEmailToUserApi,
//   loadProfilePhotoApi,
// } from "../apiService/userApi";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  // const [loading, setLoading] = useState(false);
  // const [loadingPhoto, setLoadingPhoto] = useState(false);
  // const [success, setSuccess] = useState("");
  // const [error, setError] = useState(null);
  // const [message, setMessage] = useState();
  // const [data, setData] = useState([]);
  // const [roleData, setDataRole] = useState("");
  // const [userData, setUserData] = useState();
  // const [userName, setUserName] = useState("");
  // const [searchedUser, setSearchedUser] = useState();

  // const navigate = useNavigate();

  const signUpFun = (email, password) => {
    const userEmail = email.toLowerCase();
    const userPassword = password;
    alert(userEmail);
    createUserWithEmailAndPassword(userEmail, userPassword);
  };

  const loginFun = (email, password) => {
    signInWithEmailAndPassword(auth, lowercase(email), lowercase(password));
  };

  const authContextValue = { isLoggedIn, signUpFun, loginFun };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
