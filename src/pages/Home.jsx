import React, { useEffect } from "react";
import StudentsList from "../components/lists/StudentsList";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

const Home = () => {
  const { user, getAllProfiles, profiles, logout } = useAuth();
  const navigate = useNavigate();

  const handleEdit = (_id) => {
    navigate(`/home/${_id}`);
  };

  const handleLogOut = () => {
    logout();
    navigate(`/`);
  };

  useEffect(() => {
    getAllProfiles();
  }, []);

  return (
    <>
      <div className="flex justify-between items-center">
        <div>
        <button
          onClick={() => handleEdit(user._id)}
          className="m-4 bg-blue-500 text-white p-2 rounded"
        >
          Edit Profile
        </button>
        <button
          onClick={() => handleLogOut()}
          className="m-4 bg-blue-500 text-white p-2 rounded"
        >
          Log Out
        </button>
        </div>
        <div className="flex m-2">
        <h1 className="text-xl font-semibold ">{user ? user.firstName : 'no user'}</h1>
        <h1 className="text-xl font-semibold ml-2 ">{user ? user.lastName : 'no user'}</h1>
        </div>
    
      </div>

      <StudentsList students={profiles}/>
    </>
  );
};

export default Home;
