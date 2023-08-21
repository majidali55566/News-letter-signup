import React from "react";
import "./ThanksGiving.css";

function ThanksGiving({
  email,
  setshowThanksGivingComponent,
  setNewsLetterSub,
}) {
  return (
    <div className="thanks-container">
      <div className="thanks-confirmation">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          id="success-svg"
          viewBox="0 0 64 64"
        >
          <defs>
            <linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%">
              <stop offset="0%" stop-color="#FF6A3A" />
              <stop offset="100%" stop-color="#FF527B" />
            </linearGradient>
          </defs>
          <g fill="none">
            <circle cx="32" cy="32" r="32" fill="url(#a)" />
            <path
              stroke="#FFF"
              stroke-width="4"
              d="m18.286 34.686 8.334 7.98 19.094-18.285"
            />
          </g>
        </svg>
        <h1>Thanks for subscribing!</h1>
        <p className="confirmation-content">
          A confirmation email has been sent to
          <b> {email}</b> Please open it and click the button inside to confirm
          your subscription.
        </p>
      </div>
      <button
        className="btn"
        onClick={() => {
          setshowThanksGivingComponent(false);
          setNewsLetterSub(true);
        }}
      >
        Dismiss message
      </button>
    </div>
  );
}

export default ThanksGiving;
