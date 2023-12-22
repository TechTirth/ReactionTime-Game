import { useState } from "react";

export default function Player() {
  const [enteredPlayername, setEnteredPlayerName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    setSubmitted(false);
    setEnteredPlayerName(event.target.value);
  };

  const handleClick = () => {
    setSubmitted(true);
  };

  return (
    <section id="player">
      <h2>Welcome {submitted ? enteredPlayername : "Unknown Entity"}</h2>
      <p>
        <input type="text" onChange={handleChange} value={enteredPlayername} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
