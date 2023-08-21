import React, { useState } from "react";
import "./NewsLetterSub.css";
import IllustrationM from "./assets/Images/IllustrationM.svg";
import IllustrationD from "./assets/Images/IllustrationD.svg";
import EmailErrorMessage from "./EmailErrorMessage";

function NewsLetterSub({ handleSubmit, setEmail, email }) {
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  function hasWhiteSpace(email) {
    const whitespacePattern = /\s/;
    return whitespacePattern.test(email);
  }
  const onChangeEmailAddress = (e) => {
    const input_email = e.target.value;
    setEmail(input_email);
    if (hasWhiteSpace(input_email) || input_email === "") {
      setShowErrorMessage(true);
      return;
    }
    setShowErrorMessage(false);
  };

  return (
    <div className="news-letter">
      <picture className="pic">
        <source srcset={IllustrationD} media="(min-width:600px)" />
        <img src={IllustrationM} alt="" className="svg-container" />
      </picture>

      <div className="news-letter-content grid-flow">
        <div className="title grid-flow" DataItem="small">
          <h1>Stay updated!</h1>
          <p> Join 60,000+ product managers receiving monthly updates on:</p>
        </div>
        <div className="update-items grid-flow" DataItem="small">
          <div className="flex-group item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
            >
              <g fill="none">
                <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
                <path
                  stroke="#FFF"
                  stroke-width="2"
                  d="M6 11.381 8.735 14 15 8"
                />
              </g>
            </svg>
            <p>Product discovery and building what matters</p>
          </div>
          <div className="flex-group item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
            >
              <g fill="none">
                <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
                <path
                  stroke="#FFF"
                  stroke-width="2"
                  d="M6 11.381 8.735 14 15 8"
                />
              </g>
            </svg>
            <p>Measuring to ensure updates are a success</p>
          </div>
          <div className="flex-group item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
            >
              <g fill="none">
                <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
                <path
                  stroke="#FFF"
                  stroke-width="2"
                  d="M6 11.381 8.735 14 15 8"
                />
              </g>
            </svg>
            <p>And much more!</p>
          </div>
        </div>

        <div className="email-input-section">
          <form className="grid-flow" onSubmit={handleSubmit}>
            <div className="grid-flow" DataItem="x-small">
              <div className="flex-group" DataItem="label-error">
                <label htmlFor="email" id="email-label">
                  Email Address
                </label>
                {showErrorMessage && <EmailErrorMessage />}
              </div>
              <input
                className="email-input"
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={onChangeEmailAddress}
                placeHolder="dummypahore@gmail.com"
              />
            </div>
            <button className="btn" type="submit">
              Subscribe to monthly newsletter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewsLetterSub;
