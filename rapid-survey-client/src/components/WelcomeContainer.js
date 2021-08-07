import React from "react";
import { Link } from "react-router-dom";
import AuthSurveyForm from "./AuthSurveyForm";

const WelcomeContainer = () => {
  return (
    <div className="bg-blug-300 h-screen flex flex-col justify-center items-center">
      <div>
        <h1 className="lg:text-5xl font-black mb-14">
          Welcome to Simple Survey
        </h1>
      </div>
      <div className="py-5">
        <Link
          className="py-2 px-4 bg-green-300 text-black font-semibold rounded shadow-md hover:bg-green-100"
          to="/new"
        >
          + New Survey
        </Link>
      </div>

      <div className="py-1">
        <p>OR</p>
      </div>

      <AuthSurveyForm placeholder="Enter Survey ID" />

      <div className="py-1">
        <p>OR</p>
      </div>

      <AuthSurveyForm placeholder="Enter Mobile Client ID" />
    </div>
  );
};

export default WelcomeContainer;
