import React, { memo, useContext, useEffect, useMemo } from "react";
import "../styles/Layout.css";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Footer from "./Footer";
import Loading from "./Loading";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// CONTEXTS
import { AuthContextProvider } from "../services/context/AuthContext";
import { useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
  const { user } = useContext(AuthContextProvider);
  const { isLoading } = useContext(AuthContextProvider);
  const navigate = useNavigate();
  const userValue = useMemo (() => ({
    user,
  }), [user]); 

  useEffect(() => {
    navigate('/')
    return;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <>
    <ToastContainer />
      {isLoading && <Loading />}
      <div className="layout">
        <Sidebar user={userValue.user} />
        <div className="layout_main_content">
          <Topbar user={userValue.user} />
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default memo(Layout);
