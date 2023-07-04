import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserCtx } from "../context/UserContext";

const Edit = () => {
  const { id } = useParams();
  const [users, setUsers] = useContext(UserCtx);
  const editUser = users.find((user) => user.id === Number(id));
  const navigate = useNavigate();

  const [name, SetName] = useState(editUser.name);
  const [email, setEmail] = useState(editUser.email);
  const [bio, setBio] = useState(editUser.bio);

  return (
    <div className="edit-form">
      <div className="edit-form">
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => SetName(e.target.value)}
          />
        </label>

        <label>
          Email
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>
          Bio
          <input
            type="text"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </label>

        <button
          onClick={() => {
            setUsers((prevUsers) => {
              return prevUsers.map((user) => {
                if (user.id === Number(id)) {
                  return { ...user, name, email, bio };
                }
                return user;
              });
            });

            navigate("/");
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Edit;
