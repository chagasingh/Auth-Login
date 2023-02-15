// import React, { useState, useEffect } from 'react';

// const AuthContext = React.createContext({isLoggedIn: false,onLogout: ( ) => {},onLogin: (email, password) => {}});

// export const AuthContextProvider = (props) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

//     if (storedUserLoggedInInformation === '1') {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   const logoutHandler = () => {
//     localStorage.removeItem('isLoggedIn');
//     setIsLoggedIn(false);
//   };

//   const loginHandler = () => {
//     localStorage.setItem('isLoggedIn', '1');
//     setIsLoggedIn(true);
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         isLoggedIn: isLoggedIn,
//         onLogout: logoutHandler,
//         onLogin: loginHandler,
//       }}
//     >
//       {props.children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContext;






import React,{useState} from 'react';



const AuthContext=React.createContext({
  token:'',
  isLoggedIn:false,
  login:(token)=>{},
  logout:()=>{},
})

export const AuthContextProvider=(props)=>{

const initialToken=localStorage.getItem('token');
const [token,setToken]=useState(initialToken);

const userIsLoggedIn =!!token;

const loginHandler=(token)=>{
  setToken(token)
  localStorage.setItem('token',token);
};

const logoutHandler=()=>{
  setToken(null)
  localStorage.removeItem('token');
};

const contextValue={
  token:token,
  isLoggedIn:userIsLoggedIn,
  login:loginHandler,
  logout:logoutHandler,
}


return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
}
export default AuthContext;

