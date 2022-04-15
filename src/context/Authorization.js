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
    role: '',
    storeName: '',
  });
  function checkUser(userData, path) {
    if (
      localStorage.getItem('usersData') &&
      JSON.parse(localStorage.getItem('usersData')).find(
        (value) =>
          value.email === userData.email && value.password === userData.password
      )
    ) {
      let findedData = JSON.parse(localStorage.getItem('usersData')).find(
        (value) =>
          value.email === userData.email && value.password === userData.password
      );
      if (findedData.role === userData.role) {
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
            role: findedData.role,
            storeName: findedData.storeName,
            showModal: false,
          });
          navigate(path || '/home');
        }, 2000);
      } else if (findedData.role === 'admin') {
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
            role: findedData.role,
            storeName: findedData.storeName,
            showModal: false,
          });
          navigate(path || '/home');
        }, 2000);
      }
    } else {
      localStorage.setItem('usersData', JSON.stringify(data));
      let findedData = JSON.parse(localStorage.getItem('usersData')).find(
        (value) =>
          value.email === userData.email &&
          value.password === userData.password &&
          value.role === userData.role
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
            role: findedData.role,
            storeName: findedData.storeName,
            showModal: false,
          });
          navigate(path || '/home');
        }, 2000);
      }
    }
  }
  function registerUser(userData, path) {
    data.push(userData);
    return checkUser(userData, path);
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
      navigateTo: '',
    });
    navigate('/home');
  }
  return (
    <AuthorizationData.Provider value={[mainData, setMainData]}>
      {children}
    </AuthorizationData.Provider>
  );
};
