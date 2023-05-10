import React, { useEffect } from "react";
import { getUsers } from "../services/store/features/UsersSlice";
import { useDispatch, useSelector } from "react-redux";

const Users = () => {
  const {users, loading} = useSelector((store) => store.users);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  });
  return <div>user</div>;
};

export default Users;
