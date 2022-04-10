import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { data } from '../utils/auth/data';
const AuthorizationData = createContext();
export default AuthorizationData;

export const Authorization = ({ children }) => {
  const navigate = useNavigate();
  const [mainData, setMainData] = useState({
    checkUser,
    registerUser,
    logout,
    userName: '',
    isAdmin: false,
    isAuthed: false,
    showModal: false,
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
  });
  function checkUser(email, password) {
    console.log('working');
    if (
      localStorage.getItem('usersData') &&
      JSON.parse(localStorage.getItem('usersData')).find(
        (value) => value.email === email && value.password && password
      )
    ) {
      let findedData = JSON.parse(localStorage.getItem('usersData')).find(
        (value) => value.email === email && value.password === password
      );
      if (findedData) {
        setTimeout(() => {
          setMainData({
            ...mainData,
            isAdmin: findedData.role === 'admin',
            isAuthed: true,
            userName: findedData.userName,
            firstName: findedData.firstName,
            lastName: findedData.lastName,
            phone: findedData.phone,
            email: findedData.email,
          });
          navigate(`/profile/account_details`);
        }, 2000);
      }
    } else {
      console.log('no have');
      localStorage.setItem('usersData', JSON.stringify(data));
      let findedData = JSON.parse(localStorage.getItem('usersData')).find(
        (value) => value.email === email && value.password === password
      );
      if (findedData) {
        setTimeout(() => {
          setMainData({
            ...mainData,
            isAdmin: findedData.role === 'admin',
            isAuthed: true,
            userName: findedData.userName,
            firstName: findedData.firstName,
            lastName: findedData.lastName,
            phone: findedData.phone,
            email: findedData.email,
          });
          navigate(`/profile/account_details`);
        }, 2000);
      }
    }
  }
  function registerUser(userData) {
    console.log(data);
    data.push(userData);
    return checkUser(userData.email, userData.password);
  }
  function logout() {
    setMainData({
      ...mainData,
      isAdmin: false,
      isAuthed: false,
      showModal: false,
      userName: '',
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
    });
    navigate('/');
  }
  return (
    <AuthorizationData.Provider value={[mainData, setMainData]}>
      {children}
    </AuthorizationData.Provider>
  );
};
