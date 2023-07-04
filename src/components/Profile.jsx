import { useContext } from "react";

import { useNavigate } from "react-router-dom";
import { UserCtx } from "../context/UserContext";

const Profile = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useContext(UserCtx);
  return (
    <>
      <div className="users-box">
        {users?.map((user) => (
          <div key={user.id} className="user">
            <div className="profile-data">
              <h2>Name: {user.name}</h2>
              <h2>Email: {user.email}</h2>
              <h2>Bio: {user.bio}</h2>
            </div>

            <div className="profile-btns">
              <button
                className="edit-btn"
                onClick={() => navigate(`/edit/${user.id}`)}
              >
                Edit
              </button>

              <button
                className="del-btn"
                onClick={() =>
                  setUsers(users.filter((User) => User.id !== user.id))
                }
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Profile;
