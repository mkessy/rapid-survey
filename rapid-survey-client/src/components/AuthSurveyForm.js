import React from "react";

const AuthSurveyForm = ({ placeholder, handleOnSubmit }) => {
  return (
    <div className="py-5">
      <form onSubmit={handleOnSubmit}>
        <input type="text" name="" id="" placeholder={placeholder} />
        <input type="button" value="Submit" />
      </form>
    </div>
  );
};

export default AuthSurveyForm;
