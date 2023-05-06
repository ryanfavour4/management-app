import React from "react";
import "../styles/Loading.css";

const Loading = () => {
  return (
    <div className="loading-modal__box">
      <div className="loading-modal__content d-flex justify-center align-center">
        <svg viewBox="0 0 50 50" width="50" height="50">
          <circle
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke="#FF9900"
            strokeWidth="5"
            strokeDasharray="90 150"
            transform="rotate(-90 25 25)"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="0 25 25"
              to="360 25 25"
              dur="1s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>
    </div>
  );
};

export default Loading;
