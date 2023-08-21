import "./App.css";

import { useState } from "react";
import ThanksGiving from "./ThanksGiving";
import NewsLetterSub from "./NewsLetterSub";

function App() {
  const [showThanksGivingComponent, setshowThanksGivingComponent] =
    useState(false);
  const [showNewsLetterSub, setNewsLetterSub] = useState(true);
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email !== "") {
      setNewsLetterSub(false);
      setshowThanksGivingComponent(true);
    }
  };
  return (
    <div>
      {showNewsLetterSub && (
        <NewsLetterSub
          handleSubmit={handleSubmit}
          setEmail={setEmail}
          email={email}
        />
      )}
      {showThanksGivingComponent && (
        <ThanksGiving
          email={email}
          setNewsLetterSub={setNewsLetterSub}
          setshowThanksGivingComponent={setshowThanksGivingComponent}
        />
      )}
    </div>
  );
}

export default App;
