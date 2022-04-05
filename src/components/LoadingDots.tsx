import React, { useEffect, useState } from "react";

export const LoadingDots = () => {
  const fragments = ["/", "|", "\\"];
  const [index, setIndex] = useState(0);

  const tick = () => {
    if (index < 2) {
      setIndex((prev) => prev + 1);
    } else {
      setIndex(() => 0);
    }
  };

  useEffect(() => {
    setInterval(() => tick(), 1000);
  });

  return (
    <div style={{ display: "flex" }}>
      <p>{fragments[index]}</p>
    </div>
  );
};
