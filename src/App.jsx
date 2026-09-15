import axios from "axios";
import React, { useEffect, useState } from "react";
import { UserCard } from "./components/UserCard";

const App = () => {
  const [users, setUsers] = useState([]);
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
