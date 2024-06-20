import React, { useState } from "react";

const StudentsList = ({ students }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredStudents = students.filter((student) =>
    `${student.firstName} ${student.lastName}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );
  return (
    <div className="p-4 bg-gray-100 min-h-screen flex flex-col items-center">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search students..."
        className="mb-4 p-2 border rounded w-full max-w-md"
      />
      {filteredStudents.map((student) => (
        <div
          key={student._id}
          className="bg-white shadow-md rounded-lg p-6 mb-4 w-full max-w-md"
        >
          <div className="flex justify-between items-center">
            <p className="text-xl font-semibold">
              {student.firstName} {student.lastName}
            </p>
          </div>
          <p className="text-gray-700">Email: {student.email}</p>
          <p className="text-gray-700">Creation Date: {student.createdAt}</p>
        </div>
      ))}
    </div>
  );
};

export default StudentsList;
