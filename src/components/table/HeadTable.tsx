import React from 'react';
import { INameColumns, SortingByDirection } from '../../utils/SortingByDirection';




export const HeadTable = ({ setDb }: {setDb: React.Dispatch<React.SetStateAction<any[] | null>>}) => {


  const {sortField, directionsSort} = SortingByDirection();


  const headClickHandle = (e: any) => {
    if (typeof e.target.id === 'string') {
      setDb(prev => sortField(prev, e.target.id))
    }
  }

  return (
    <tr onClick={headClickHandle}>
          <th id='id'> id {directionsSort.id} </th>

          <th id='firstName'> firstName {directionsSort.firstName} </th>

          <th id='email'> email  {directionsSort.email} </th>

          <th id='phone'> phone {directionsSort.phone} </th>
    </tr>
  )
}