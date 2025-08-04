
export const apis = () => {
    const local = 'https://perfectrecipeapp-2.onrender.com';
  
    const list = {
      registerUser: `${local}user/register`,  
      loginUser: `${local}user/login`,
      userProfile:`${local}user/profile`,
      logout:`${local}user/logout`,
      getAccess:`${local}user/access`,
     

    };
  
    return list; 
  };
  
