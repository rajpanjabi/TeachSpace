import { useParams } from 'react-router-dom';

const StudentProfile = () => {
  const { id } = useParams();
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold">Student Profile</h1>
      <p>Student ID: {id}</p>
      {/* Show other student data and observations here */}
    </div>
  );
};

export default StudentProfile;