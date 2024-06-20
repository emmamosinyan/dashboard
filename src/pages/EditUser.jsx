import React from "react";
import EditForm from "../components/EditForm";
import { useAuth } from '../context/authContext';


const EditUser = () => {
  const { user, edit } = useAuth();

  return (
   <EditForm onEdit={edit} user={user}/>
  );
};

export default EditUser;
