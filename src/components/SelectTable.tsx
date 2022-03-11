import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
const smallTextUrl =
  "http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}";

export const SelectTable = () => {
  const { data } = useQuery("employees", () =>
    fetch(smallTextUrl).then((res) => res.json())
  );

  const [focusElement, setFocusElement] = useState(0);
  const arrowUTF = "➪";
  const focusElements = [{ id: "normal_table" }, { id: "big_table" }];

  console.log(data);
  const setFocusOnDomElement = () => {
    const item = document.getElementById(focusElements[focusElement].id);
    if (!item) return;
    item.focus();
  };

  useEffect(() => {
    setFocusOnDomElement();
  });

  const handleClick = (e: any, focus: number) => {
    setFocusElement(focus);
    setFocusOnDomElement();
  };

  const focusOnElement = (code: string) => {
    const totalElements = focusElements.length;

    switch (code) {
      case "ArrowDown": {
        setFocusElement((prev) => (prev === totalElements - 1 ? 0 : prev + 1));
        break;
      }
      case "ArrowUp": {
        setFocusElement((prev) => (prev === 0 ? totalElements - 1 : prev - 1));
        break;
      }
      default:
        return;
    }
  };

  const handleKeyDown = (e: any) => {
    focusOnElement(e.code);
  };

  return (
    <>
      <div onKeyDown={handleKeyDown}>
        <div tabIndex={1} id="normal_table" onClick={(e) => handleClick(e, 0)}>
          <span> {focusElement === 0 ? arrowUTF : ""} NORMAL TABLE </span>
        </div>
        <div tabIndex={2} id="big_table" onClick={(e) => handleClick(e, 1)}>
          <span> {focusElement === 1 ? arrowUTF : ""} BIG TABLE </span>
        </div>
      </div>
    </>
  );
};
