import React, { useEffect } from "react";
import { skillProps } from "./skils.types";
import { useState } from "react";

export default function Skils(props: skillProps) {
  const { skils } = props;

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 1001);
  }, []);

  return (
    <div>
      <ul>
        {skils.map((skill, index) => {
          return <li key={index}>{skill}</li>;
        })}
      </ul>
      {isLoggedIn ? <button>start learning</button> : <button onClick={() => setIsLoggedIn(true)}>log in</button>}
    </div>
  );
}
