import React from "react";
import { IPerson } from "../MainTable";



export const BodyTable = ({db, setSelectPerson}: {
  db: any[] | null
  setSelectPerson: React.Dispatch<React.SetStateAction<IPerson | null>>
}) => {

  const handleClick = (item: any) => {
    setSelectPerson(item)
  }


  return (
    <>
    {db && db.map(item => (
      <tr key={item.email} onClick={() => handleClick(item)}>
        <th>{item.id}</th>
        <th>{item.firstName}</th>
        <th>{item.email}</th>
        <th>{item.phone}</th>
      </tr>
    ))}
    </>
  )
}