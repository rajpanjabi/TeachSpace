"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function TeachingSetupForm() {
  const [selectedGrade, setSelectedGrade] = useState("Grade 9");
  const [selectedSubject, setSelectedSubject] = useState("core");
  const [isGradeOpen, setIsGradeOpen] = useState(false);
  const [isCoreOpen, setIsCoreOpen] = useState(false);
  const [isAdditionalOpen, setIsAdditionalOpen] = useState(false);
  const [isCustomOpen, setIsCustomOpen] = useState(false);
  const [isCurriculumOpen, setIsCurriculumOpen] = useState(false);

  return (
    <div className="min-h-[70vh] bg-gray-50 flex  items-center justify-center  sm:p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-4 sm:p-6">
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
              <label className="block text-sm text-gray-500">
                Select Grade
              </label>
              <div className="relative">
                <button
                  onClick={() => setIsGradeOpen(!isGradeOpen)}
                  className="w-full px-3 py-1.5 text-sm text-left border border-green-500 rounded-md flex items-center justify-between"
                >
                  <span>{selectedGrade}</span>
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
                            setSelectedGrade(grade);
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
                    onClick={() => setSelectedSubject("core")}
                  >
                    <input
                      type="radio"
                      name="subject"
                      checked={selectedSubject === "core"}
                      onChange={() => setSelectedSubject("core")}
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
                        disabled={selectedSubject !== "core"}
                        className={`w-full px-3 py-1.5 text-sm text-left border rounded-md flex items-center justify-between ${
                          selectedSubject === "core" ? "bg-white" : "bg-gray-50"
                        }`}
                      >
                        <span>All Core Subjects</span>
                        <ChevronDown className="h-4 w-4" />
                      </button>
                      {isCoreOpen && selectedSubject === "core" && (
                        <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg">
                          {["Mathematics", "Science", "English"].map(
                            (subject) => (
                              <button
                                key={subject}
                                className="w-full px-3 py-1.5 text-sm text-left hover:bg-gray-50"
                                onClick={() => setIsCoreOpen(false)}
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
                    onClick={() => setSelectedSubject("additional")}
                  >
                    <input
                      type="radio"
                      name="subject"
                      checked={selectedSubject === "additional"}
                      onChange={() => setSelectedSubject("additional")}
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
                        disabled={selectedSubject !== "additional"}
                        className={`w-full px-3 py-1.5 text-sm text-left border rounded-md flex items-center justify-between ${
                          selectedSubject === "additional"
                            ? "bg-white"
                            : "bg-gray-50"
                        }`}
                      >
                        <span>All Additional Subjects</span>
                        <ChevronDown className="h-4 w-4" />
                      </button>
                      {isAdditionalOpen && selectedSubject === "additional" && (
                        <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg">
                          {["Art", "Music", "Physical Education"].map(
                            (subject) => (
                              <button
                                key={subject}
                                className="w-full px-3 py-1.5 text-sm text-left hover:bg-gray-50"
                                onClick={() => setIsAdditionalOpen(false)}
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

                {/* Custom Subject */}
                <div className="flex items-start space-x-2">
                  <div
                    className="relative flex items-center"
                    onClick={() => setSelectedSubject("custom")}
                  >
                    <input
                      type="radio"
                      name="subject"
                      checked={selectedSubject === "custom"}
                      onChange={() => setSelectedSubject("custom")}
                      className="w-3 h-3 text-green-500 border-gray-300 focus:ring-green-500"
                    />
                  </div>
                  <div className="flex-1 space-y-1">
                    <label className="block text-sm text-gray-500">
                      Custom Subject
                    </label>
                    <div className="relative">
                      <button
                        onClick={() => setIsCustomOpen(!isCustomOpen)}
                        disabled={selectedSubject !== "custom"}
                        className={`w-full px-3 py-1.5 text-sm text-left border rounded-md flex items-center justify-between ${
                          selectedSubject === "custom"
                            ? "bg-white"
                            : "bg-gray-50"
                        }`}
                      >
                        <span>Enter the Subject</span>
                        <ChevronDown className="h-4 w-4" />
                      </button>
                      {isCustomOpen && selectedSubject === "custom" && (
                        <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg">
                          {["Custom Subject 1", "Custom Subject 2"].map(
                            (subject) => (
                              <button
                                key={subject}
                                className="w-full px-3 py-1.5 text-sm text-left hover:bg-gray-50"
                                onClick={() => setIsCustomOpen(false)}
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
                  <span>Toronto District School Board</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                {isCurriculumOpen && (
                  <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg">
                    {[
                      "Toronto District School Board",
                      "Other School Board",
                    ].map((board) => (
                      <button
                        key={board}
                        className="w-full px-3 py-1.5 text-sm text-left hover:bg-gray-50"
                        onClick={() => setIsCurriculumOpen(false)}
                      >
                        {board}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Save Button */}
          <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md transition-colors text-sm">
            Save & Continue
          </button>
        </div>
      </div>
    </div>
  );
}
