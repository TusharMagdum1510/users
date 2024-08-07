import { useState } from "react";
import "./App.css";
import UserForm from "./UserForm";
import UserList from "./UserList";

export interface UsersType {
  name: string;
  email: string;
}

function App() {
  const [users, setUsers] = useState<UsersType[]>([]);

  const onUserAdd = (user: UsersType) => {
    setUsers([...users, user]);
  };

  return (
    <>
      <UserForm onUserAdd={onUserAdd} />
      <hr />
      <UserList users={users} />
    </>
  );
}

export default App;
