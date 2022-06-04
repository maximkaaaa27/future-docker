import React from "react";
import { INameColumns } from "../../utils/SortingByDirection";

interface Idirection {
  id: string;
  firstName: string;
  email: string;
  phone: string;
}

export const HeadTable = ({
  setDb,
  directionsSort,
  sortField,
}: {
  setDb: React.Dispatch<React.SetStateAction<any[] | null>>;
  directionsSort: Idirection;
  sortField: (array: any[] | null, field: INameColumns) => any[] | null;
}) => {
  const headClickHandle = (e: any) => {
    if (typeof e.target.id === "string") {
      setDb((prev) => sortField(prev, e.target.id));
    }
  };

  return (
    <tr onClick={headClickHandle}>
      <th id="id"> id {directionsSort.id} </th>

      <th id="firstName"> firstName {directionsSort.firstName} </th>

      <th id="email"> email {directionsSort.email} </th>

      <th id="phone"> phone {directionsSort.phone} </th>
    </tr>
  );
};
