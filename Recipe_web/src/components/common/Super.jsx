import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import {apis} from '../../utils/apis';
import { httpAction } from '../../utils/httpAction';

export const Super = () => {
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const getUserAccess = async () => {
      const data = {
        url: apis().getAccess
      };
      const result = await httpAction(data);
      console.log(result);
      if (result.status) {
        setIsAuth(true);
      }
      setLoading(false);
    };

    getUserAccess(); // don't forget to call it
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

