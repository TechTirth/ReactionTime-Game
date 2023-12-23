import { useState } from "react";
import { useRef } from "react";

export default function Player() {
  const [enteredPlayername, setEnteredPlayerName] = useState("");

  const playerName = useRef();

  const handleClick = () => {
    setEnteredPlayerName(playerName.current.value);
  };

  return (
    <section id="player">
      <h2>Welcome {enteredPlayername ? enteredPlayername : "Unknown Entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
