import axios from "axios";
import React, { useEffect, useState } from "react";
import { UserCard } from "./components/UserCard";
import useUserStore from "./store/userStore";

const App = () => {
  const users = useUserStore((state) => state.users);
  const setUsers = useUserStore((state) => state.setUsers);
  const getDataFromDb = async () => {
    const res = await axios.get(
      "https://fromlocallytoglobally.onrender.com/api/getAll",
    );
    setUsers(res.data);
  };
  useEffect(() => {
    getDataFromDb();
  }, []);
  return (
    <>
      <UserCard users={users} />
    </>
  );
};

export default App;
