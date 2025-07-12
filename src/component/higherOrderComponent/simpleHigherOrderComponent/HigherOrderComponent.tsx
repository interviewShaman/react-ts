// src/App.tsx
import React from "react";
import UserList from "./UserList";
import HocWithLoading from "./HocWithLoading";

const UserListWithLoading = HocWithLoading(UserList);

const HigherOrderComponent: React.FC = () => {
  const users = ["Alice", "Bob", "Charlie"];
  const isLoading = false;

  return (
    <div>
      <h1>User List</h1>
      <UserListWithLoading isLoading={isLoading} users={users} />
    </div>
  );
};

export default HigherOrderComponent;
