import { useState } from "react";
//import { useAppDispatch, useAppSelector } from "../hooks/redux.hook";

export type INameColumns = "id" | "firstName" | "email" | "phone";

export const SortingByDirection = () => {
  const arrowDownHead = "⌄";
  const arrowUpHead = "⌃";

  // const database = useAppSelector(state => state.database);
  // const dispatch = useAppDispatch();

  const initState = {
    id: "",
    firstName: "",
    email: "",
    phone: "",
  };

  const [directionsSort, setDirectionsSort] = useState(initState);

  const sortField = (array: any[] | null, field: INameColumns) => {
    if (!array) return null;

    const sortByString = (a: any, b: any) => {
      const nameA = a[field].toUpperCase();
      const nameB = b[field].toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      return 0;
    };

    const sortByStringReverse = (a: any, b: any) => {
      const nameA = a[field].toUpperCase();
      const nameB = b[field].toUpperCase();
      if (nameA > nameB) {
        return -1;
      }
      if (nameA < nameB) {
        return 1;
      }

      return 0;
    };

    switch (directionsSort[field]) {
      case "":
        setDirectionsSort(() => ({ ...initState, [field]: arrowDownHead }));
        if (field === "id")
          return [...array].sort((a, b) => a[field] - b[field]);
        return array.slice().sort((a, b) => sortByString(a, b));

      case arrowUpHead:
        setDirectionsSort(() => ({ ...initState, [field]: arrowDownHead }));
        if (field === "id")
          return [...array].sort((a, b) => a[field] - b[field]);
        return array.slice().sort((a, b) => sortByString(a, b));

      case arrowDownHead:
        setDirectionsSort(() => ({ ...initState, [field]: arrowUpHead }));
        if (field === "id")
          return [...array].sort((a, b) => b[field] - a[field]);
        return [...array].sort((a, b) => sortByStringReverse(a, b));

      default:
        return array;
    }
  };

  return { sortField, directionsSort };
};
