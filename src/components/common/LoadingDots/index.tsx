import React, { useEffect, useState, useMemo } from "react";
import { useCallback } from "react";

export const LoadingDots = () => {
  const fragments = useMemo(() => ["/", "|", "\\"], []);
  const [index, setIndex] = useState(0);

  const tick = useCallback(() => {
    setIndex((prev) => (prev < fragments.length - 1 ? prev + 1 : 0));
  }, [fragments]);

  useEffect(() => {
    setInterval(() => tick(), 1000);
  }, [tick]);

  return (
    <div style={{ display: "flex" }}>
      <p>{fragments[index]}</p>
    </div>
  );
};
