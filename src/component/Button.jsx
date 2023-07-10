import React from "react";

const Button = () => {
  return (
    <button
      onClick={() => {
        setSelectedCity("서울");
      }}
    >
      서울
    </button>
  );
};

export default Button;
