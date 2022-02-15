import React from "react";


export const BodyTable = ({db} : {db: any[] | undefined}) => {
console.log('render')
  return (
    <>
    {db && db.map(item => (
      <tr key={item.email}>
        <th>{item.id}</th>
        <th>{item.firstName}</th>
        <th>{item.email}</th>
        <th>{item.phone}</th>
      </tr>
    ))}
    </>
  )
}