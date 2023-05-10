import React, { useEffect } from "react";
import { getUsers } from "../services/store/features/UsersSlice";
import { useDispatch, useSelector } from "react-redux";

const Users = () => {
  const {users, loading} = useSelector((store) => store.users);
  console.log(users);
  console.log(loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
    console.log(users);
  });
  return <div>user</div>;
};

export default Users;
