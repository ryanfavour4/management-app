import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdManageAccounts } from "react-icons/md";
import { FcApproval } from "react-icons/fc";
import { GoGear } from "react-icons/go";
import { MdDashboard } from "react-icons/md";
import "../styles/Sidebar.css";
import userImg from "../assets/images/femaleUser.jpg";
import logo from "../assets/svg/amazon-pay-svgrepo-com.svg";
import Accordion from "react-bootstrap/Accordion";

const Sidebar = ({ user }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    if (user?.email === "ryanfave022@gmail.com") setIsAdmin(true);
    return;
  }, [user]);
  return (
    <nav className="sidebar min-vh-100">
      <div className="sidebar_logo">
        <img src={logo} alt="" />
      </div>
      <div className="nav-item nav-profile">
        <Link to="#" className="nav-link">
          <div className="nav-profile-image">
            <img src={userImg} alt="profile" />
          </div>
          <div className="nav-profile-text">
            <span className="font-weight-bold mb-2">
              David Grey. H <FcApproval />
            </span>
            <span className="text-primary-color text-small">
              Project Manager
            </span>
          </div>
        </Link>
      </div>
      <div className="dashboard_link_box">
        <Link className="sidebar_link" to="/">
          Dashboard <MdDashboard />
        </Link>
      </div>
      <hr />
      <Accordion className="sidebar_accordion" defaultActiveKey="0">
        <Accordion.Item className="sidebar_accordion_item" eventKey="1">
          <Accordion.Header className="sidebar_accordion_header">
            Management <MdManageAccounts />
          </Accordion.Header>
          <Accordion.Body className="sidebar_accordion_body">
            {isAdmin ? (
              <div className="sidebar_link_box">
                <Link className="sidebar_link" to="/admin">
                  Admin
                </Link>
              </div>
            ) : null}
            <div className="sidebar_link_box">
              <Link className="sidebar_link" to="/users">
                User
              </Link>
            </div>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item className="sidebar_accordion_item" eventKey="2">
          <Accordion.Header className="sidebar_accordion_header">
            Development <GoGear />
          </Accordion.Header>
          <Accordion.Body className="sidebar_accordion_body">
            <div className="sidebar_link_box">
              <Link className="sidebar_link" to="/developers">
                Developers
              </Link>
            </div>
            <div className="sidebar_link_box">
              <Link className="sidebar_link" to="/user">
                Testers
              </Link>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </nav>
  );
};

export default Sidebar;
