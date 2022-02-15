import React, { useState } from 'react';
import { sortingByDirection } from '../../utils/sortingByDirection';

type INameColumns =  'id' | 'firstName' | 'email' | 'phone';

interface IInitState {
  id: string
  firstName: string
  email: string
  phone: string
}


export const HeadTable = ({ setDb }: {setDb: React.Dispatch<React.SetStateAction<any[] | undefined>>}) => {

  const arrowDownHead = '⌄';
  const arrowUpHead = '⌃';


  const initState: IInitState = {
    id: '',
    firstName: '',
    email: '',
    phone: ''
  }

  const [directionSort, setDirectionSort] = useState(initState)

  const toggleArrow = (arrow : string) => arrow ===  arrowDownHead ? arrowUpHead :arrowDownHead



  const headClickHandle = (nameColumn: INameColumns) => {

    if (directionSort[nameColumn] !== '') {

      setDirectionSort ( prev => ({...initState, [nameColumn]: toggleArrow(prev[nameColumn])}));

      setDb(prev => sortingByDirection(prev, nameColumn, toggleArrow(directionSort[nameColumn])));

    } else {

      setDirectionSort( () => ({...initState, [nameColumn] : arrowDownHead}) );
      
      setDb(prev => sortingByDirection(prev, nameColumn, arrowDownHead));
    }
  }

  return (
        <tr>
          <th onClick={() => headClickHandle('id')}> id {directionSort.id} </th>

          <th onClick={() => headClickHandle('firstName')}> firstName {directionSort.firstName} </th>

          <th onClick={() => headClickHandle('email')}> email  {directionSort.email} </th>

          <th  onClick={() => headClickHandle('phone')}> phone {directionSort.phone} </th>
        </tr>
  )
}