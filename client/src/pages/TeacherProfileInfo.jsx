// import React, { useState } from "react";
// import InputSelect from "../components/inputSelect";

// const TeacherProfileInfo = () => {
//   const [grade, setGrade] = useState("");
//   const [subjectType, setSubjectType] = useState("Core Subjects");
//   const [subject, setSubject] = useState("");
//   const [curriculum, setCurriculum] = useState("");

//   const coreSubjects = ["Math", "Science", "English"];
//   const additionalSubjects = ["Art", "Music", "Physical Education"];
//   const grades = ["Grade 9", "Grade 10", "Grade 11", "Grade 12"];
//   const frameworks = ["Toronto District School Board", "Other Framework"];

//   const handleSave = () => {
//     // Save logic here
//     console.log({ grade, subjectType, subject, curriculum });
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
//       <h1 className="text-2xl font-bold text-gray-800 mb-6">
//         Select Your Teaching Setup
//       </h1>

//       {/* Grade Selection */}
//       <InputSelect
//         label="Select Grade"
//         type="select"
//         options={grades}
//         onChange={setGrade}
//       />

//       {/* Subject Type Selection */}
//       <InputSelect
//         label="Select Subject Type"
//         type="select"
//         options={["Core Subjects", "Additional Subjects", "Custom Subject"]}
//         onChange={setSubjectType}
//       />

//       {/* Subject Selection */}
//       {subjectType === "Core Subjects" && (
//         <InputSelect
//           label="Select Core Subject"
//           type="select"
//           options={coreSubjects}
//           onChange={setSubject}
//         />
//       )}

//       {subjectType === "Additional Subjects" && (
//         <InputSelect
//           label="Select Additional Subject"
//           type="select"
//           options={additionalSubjects}
//           onChange={setSubject}
//         />
//       )}

//       {subjectType === "Custom Subject" && (
//         <InputSelect
//           label="Enter Custom Subject"
//           type="text"
//           placeholder="Enter the Subject"
//           onChange={setSubject}
//         />
//       )}

//       {/* Curriculum Selection */}
//       <InputSelect
//         label="Select Curriculum Framework"
//         type="select"
//         options={frameworks}
//         onChange={setCurriculum}
//       />

//       {/* Save Button */}
//       <button
//         className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//         onClick={handleSave}
//       >
//         Save & Continue
//       </button>
//     </div>
//   );
// };

// export default TeacherProfileInfo;
import React, { useState } from "react";
import InputSelect from "../components/inputSelect";

const TeacherProfileInfo = () => {
  const [formData, setFormData] = useState({
    grade: "",
    subjectType: "Core Subjects",
    subject: "",
    curriculum: "",
    customSubject: ""
  });
  const [errors, setErrors] = useState({});

  const coreSubjects = ["Math", "Science", "English"];
  const additionalSubjects = ["Art", "Music", "Physical Education"];
  const grades = ["Grade 9", "Grade 10", "Grade 11", "Grade 12"];
  const frameworks = ["Toronto District School Board", "Other Framework"];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.grade) {
      newErrors.grade = "Grade is required";
    }
    
    if (!formData.subjectType) {
      newErrors.subjectType = "Subject type is required";
    }
    
    if (formData.subjectType === "Custom Subject" && !formData.customSubject) {
      newErrors.subject = "Custom subject is required";
    } else if (formData.subjectType !== "Custom Subject" && !formData.subject) {
      newErrors.subject = "Subject is required";
    }
    
    if (!formData.curriculum) {
      newErrors.curriculum = "Curriculum framework is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field) => (value) => {
    setFormData(prev => {
      const newData = { ...prev, [field]: value };
      
      // Reset subject when subject type changes
      if (field === "subjectType") {
        newData.subject = "";
        newData.customSubject = "";
      }
      
      return newData;
    });
    
    // Clear error when field is updated
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const handleSave = () => {
    if (validateForm()) {
      // Prepare the final data
      const finalData = {
        grade: formData.grade,
        subjectType: formData.subjectType,
        subject: formData.subjectType === "Custom Subject" 
          ? formData.customSubject 
          : formData.subject,
        curriculum: formData.curriculum
      };
      
      console.log("Saving data:", finalData);
      // Here you would typically make an API call to save the data
      // For example:
      // await saveTeacherProfile(finalData);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Select Your Teaching Setup
      </h1>

      <InputSelect
        label="Select Grade"
        type="select"
        options={grades}
        value={formData.grade}
        onChange={handleChange("grade")}
        error={errors.grade}
      />

      <InputSelect
        label="Select Subject Type"
        type="select"
        options={["Core Subjects", "Additional Subjects", "Custom Subject"]}
        value={formData.subjectType}
        onChange={handleChange("subjectType")}
        error={errors.subjectType}
      />

      {formData.subjectType === "Core Subjects" && (
        <InputSelect
          label="Select Core Subject"
          type="select"
          options={coreSubjects}
          value={formData.subject}
          onChange={handleChange("subject")}
          error={errors.subject}
        />
      )}

      {formData.subjectType === "Additional Subjects" && (
        <InputSelect
          label="Select Additional Subject"
          type="select"
          options={additionalSubjects}
          value={formData.subject}
          onChange={handleChange("subject")}
          error={errors.subject}
        />
      )}

      {formData.subjectType === "Custom Subject" && (
        <InputSelect
          label="Enter Custom Subject"
          type="text"
          placeholder="Enter the Subject"
          value={formData.customSubject}
          onChange={handleChange("customSubject")}
          error={errors.subject}
        />
      )}

      <InputSelect
        label="Select Curriculum Framework"
        type="select"
        options={frameworks}
        value={formData.curriculum}
        onChange={handleChange("curriculum")}
        error={errors.curriculum}
      />

      <button
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        onClick={handleSave}
      >
        Save & Continue
      </button>
    </div>
  );
};

export default TeacherProfileInfo;