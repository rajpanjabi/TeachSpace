
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import teachingSetup from "../assets/teachingSetup.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function TeachingSetupForm() {
  const [formData, setFormData] = useState({
    grade: "Grade 9",
    subjectType: "core",
    selectedSubject: "",
    customSubject: "",
    curriculum: "Toronto District School Board"
  });
  const [isGradeOpen, setIsGradeOpen] = useState(false);
  const [isCoreOpen, setIsCoreOpen] = useState(false);
  const [isAdditionalOpen, setIsAdditionalOpen] = useState(false);
  const [isCurriculumOpen, setIsCurriculumOpen] = useState(false);
  //need teacherName from url
  const teacherName= window.location.pathname.split("/")[2];
  console.log(teacherName);
  const navigate = useNavigate();

  const handleSave = async () => {
    if (!formData.selectedSubject && formData.subjectType !== "custom") {
      console.log("Please select a subject.");
      return;
    }
  
    if (formData.subjectType === "custom" && !formData.customSubject.trim()) {
      console.log("Please enter a custom subject.");
      return;
    }
  
    const finalData = {
      teacherName: teacherName, // Replace with actual teacher's name
      name: formData.subjectType === "custom" ? formData.customSubject : formData.selectedSubject,
    };
  
    console.log("Saving data:", finalData);
  
    try {
      const response = await axios.post(
        "http://localhost:4000/api/subjects/createSubject",
        finalData
      );
      console.log("Response:", response.data);
    } catch (e) {
      console.error("Error saving subject:", e);
    }

    // Redirect to the next page if response is successful and pass the teacherName and subjectName
   navigate("/addstudents", { state: { teacherName, subjectName: finalData.name } });
   
    };

  return (
    <div className="min-h-full bg-gray-50 flex">
      <div className="flex flex-col md:flex-row bg-white shadow-lg overflow-hidden w-full h-full justify-center items-center py-20">
        <div className="w-full md:max-w-md xl:max-w-lg p-4 sm:p-6">
          <div className="space-y-4">
            {/* Header */}
            <div className="space-y-1">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Select Your Teaching Setup
              </h1>
              <p className="text-sm text-gray-500">
                Select your grade, subject, and curriculum framework to start
                tracking student progress.
              </p>
            </div>

            <div className="space-y-3">
              {/* Grade Selection */}
              <div className="space-y-1">
                <label className="block text-sm text-gray-500">Select Grade</label>
                <div className="relative">
                  <button
                    onClick={() => setIsGradeOpen(!isGradeOpen)}
                    className="w-full px-3 py-1.5 text-sm text-left border border-green-500 rounded-md flex items-center justify-between"
                  >
                    <span>{formData.grade}</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {isGradeOpen && (
                    <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg">
                      {["Grade 9", "Grade 10", "Grade 11", "Grade 12"].map(
                        (grade) => (
                          <button
                            key={grade}
                            className="w-full px-3 py-1.5 text-sm text-left hover:bg-gray-50"
                            onClick={() => {
                              setFormData(prev => ({ ...prev, grade }));
                              setIsGradeOpen(false);
                            }}
                          >
                            {grade}
                          </button>
                        )
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Subject Selection */}
              <div className="space-y-1">
                <label className="block text-sm text-gray-500">
                  Select Subject
                </label>
                <div className="space-y-2">
                  {/* Core Subjects */}
                  <div className="flex items-start space-x-2">
                    <div
                      className="relative flex items-center"
                      onClick={() => setFormData(prev => ({ ...prev, subjectType: "core", selectedSubject: "" }))}
                    >
                      <input
                        type="radio"
                        name="subject"
                        checked={formData.subjectType === "core"}
                        onChange={() => setFormData(prev => ({ ...prev, subjectType: "core", selectedSubject: "" }))}
                        className="w-3 h-3 text-green-500 border-gray-300 focus:ring-green-500"
                      />
                    </div>
                    <div className="flex-1 space-y-1">
                      <label className="block text-sm text-gray-500">
                        Core Subjects
                      </label>
                      <div className="relative">
                        <button
                          onClick={() => setIsCoreOpen(!isCoreOpen)}
                          disabled={formData.subjectType !== "core"}
                          className={`w-full px-3 py-1.5 text-sm text-left border rounded-md flex items-center justify-between ${
                            formData.subjectType === "core" ? "bg-white" : "bg-gray-50"
                          }`}
                        >
                          <span>{formData.subjectType === "core" && formData.selectedSubject ? formData.selectedSubject : "All Core Subjects"}</span>
                          <ChevronDown className="h-4 w-4" />
                        </button>
                        {isCoreOpen && formData.subjectType === "core" && (
                          <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg">
                            {["Mathematics", "Science", "English"].map(
                              (subject) => (
                                <button
                                  key={subject}
                                  className="w-full px-3 py-1.5 text-sm text-left hover:bg-gray-50"
                                  onClick={() => {
                                    setFormData(prev => ({ ...prev, selectedSubject: subject }));
                                    setIsCoreOpen(false);
                                  }}
                                >
                                  {subject}
                                </button>
                              )
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Additional Subjects */}
                  <div className="flex items-start space-x-2">
                    <div
                      className="relative flex items-center"
                      onClick={() => setFormData(prev => ({ ...prev, subjectType: "additional", selectedSubject: "" }))}
                    >
                      <input
                        type="radio"
                        name="subject"
                        checked={formData.subjectType === "additional"}
                        onChange={() => setFormData(prev => ({ ...prev, subjectType: "additional", selectedSubject: "" }))}
                        className="w-3 h-3 text-green-500 border-gray-300 focus:ring-green-500"
                      />
                    </div>
                    <div className="flex-1 space-y-1">
                      <label className="block text-sm text-gray-500">
                        Additional Subjects
                      </label>
                      <div className="relative">
                        <button
                          onClick={() => setIsAdditionalOpen(!isAdditionalOpen)}
                          disabled={formData.subjectType !== "additional"}
                          className={`w-full px-3 py-1.5 text-sm text-left border rounded-md flex items-center justify-between ${
                            formData.subjectType === "additional" ? "bg-white" : "bg-gray-50"
                          }`}
                        >
                          <span>{formData.subjectType === "additional" && formData.selectedSubject ? formData.selectedSubject : "All Additional Subjects"}</span>
                          <ChevronDown className="h-4 w-4" />
                        </button>
                        {isAdditionalOpen && formData.subjectType === "additional" && (
                          <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg">
                            {["Art", "Music", "Physical Education"].map(
                              (subject) => (
                                <button
                                  key={subject}
                                  className="w-full px-3 py-1.5 text-sm text-left hover:bg-gray-50"
                                  onClick={() => {
                                    setFormData(prev => ({ ...prev, selectedSubject: subject }));
                                    setIsAdditionalOpen(false);
                                  }}
                                >
                                  {subject}
                                </button>
                              )
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Custom Subject - Changed to text input */}
                  <div className="flex items-start space-x-2">
                    <div
                      className="relative flex items-center"
                      onClick={() => setFormData(prev => ({ ...prev, subjectType: "custom", selectedSubject: "" }))}
                    >
                      <input
                        type="radio"
                        name="subject"
                        checked={formData.subjectType === "custom"}
                        onChange={() => setFormData(prev => ({ ...prev, subjectType: "custom", selectedSubject: "" }))}
                        className="w-3 h-3 text-green-500 border-gray-300 focus:ring-green-500"
                      />
                    </div>
                    <div className="flex-1 space-y-1">
                      <label className="block text-sm text-gray-500">
                        Custom Subject
                      </label>
                      <input
                        type="text"
                        placeholder="Enter the Subject"
                        disabled={formData.subjectType !== "custom"}
                        value={formData.customSubject}
                        onChange={(e) => setFormData(prev => ({ ...prev, customSubject: e.target.value }))}
                        className={`w-full px-3 py-1.5 text-sm border rounded-md ${
                          formData.subjectType === "custom" ? "bg-white" : "bg-gray-50"
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Curriculum Framework */}
              <div className="space-y-1">
                <label className="block text-sm text-gray-500">
                  Select a curriculum framework
                </label>
                <div className="relative">
                  <button
                    onClick={() => setIsCurriculumOpen(!isCurriculumOpen)}
                    className="w-full px-3 py-1.5 text-sm text-left border rounded-md flex items-center justify-between"
                  >
                    <span>{formData.curriculum}</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {isCurriculumOpen && (
                    <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg">
                      {["Toronto District School Board", "Other School Board"].map(
                        (board) => (
                          <button
                            key={board}
                            className="w-full px-3 py-1.5 text-sm text-left hover:bg-gray-50"
                            onClick={() => {
                              setFormData(prev => ({ ...prev, curriculum: board }));
                              setIsCurriculumOpen(false);
                            }}
                          >
                            {board}
                          </button>
                        )
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Save Button */}
            <button 
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md transition-colors text-sm"
              onClick={handleSave}
            >
              Save & Continue
            </button>
          </div>
        </div>
        <div className="hidden md:block w-1/2 p-12">
          <div className="h-full flex items-center justify-center">
            <div className="text-white space-y-4">
              <div className="w-full max-w-md mx-auto">
                <img
                  src={teachingSetup}
                  alt="Teaching illustration"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}