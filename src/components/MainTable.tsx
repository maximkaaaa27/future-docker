import React, { useState } from 'react';
import { useDataFill } from '../hooks/getdb.hook';
import { SortingByDirection } from '../utils/SortingByDirection';
import { InfoBlock } from './InfoBlock';
import { BodyTable } from './table/BodyTable';
import { HeadTable } from './table/HeadTable';

export interface IPerson {
  id: number
  firstName: string
  lastName: string
  email: string
  phone: string
  address: {
    streetAddress: string
    city: string
    state: string
    zip: string
  }
  description: string
}

export const MainTable = () => {

  const { db, getData } = useDataFill();
  const [unsortDb, setUnsortDb] = useState(db);
  const [selectPerson, setSelectPerson] = useState<IPerson | null>(null);
  const { directionsSort, sortField } = SortingByDirection();
 
  const handleClick = () => {
    getData()
    setUnsortDb(db)
  }

  return (
    <>
    <div>
    <button onClick={handleClick}>Update</button>
    </div>
      <table>
      <thead>
        <HeadTable 
          setDb={setUnsortDb} 
          directionsSort={directionsSort}
          sortField={sortField}
        />
      </thead>

      <tbody>
        <BodyTable db={unsortDb} setSelectPerson={setSelectPerson}/>
      </tbody>

    </table>
    <div>
      <InfoBlock selectPerson={selectPerson}/>
    </div>

    </>

  )
}