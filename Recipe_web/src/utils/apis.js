import BASE_URL from "../../src/api/BaseURL"; 

export const apis = () => {
  const local = `${BASE_URL}/`; 
  
    const list = {
      registerUser: `${local}user/register`,  
      loginUser: `${local}user/login`,
      userProfile:`${local}user/profile`,
      logout:`${local}user/logout`,
      getAccess:`${local}user/access`,
     

    };
  
    return list; 
  };
  
