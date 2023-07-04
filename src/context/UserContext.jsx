/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

import Users from "../../users.json";

export const UserCtx = createContext();

const UserContext = ({ children }) => {
  const [users, setUsers] = useState(Users.users);
  return (
    <UserCtx.Provider value={[users, setUsers]}>{children}</UserCtx.Provider>
  );
};

export default UserContext;
