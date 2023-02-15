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

const [token,setToken]=useState(null);

const userIsLoggedIn =!!token;

const loginHandler=(token)=>{
  setToken(token)
};

const logoutHandler=()=>{
  setToken(null)
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

