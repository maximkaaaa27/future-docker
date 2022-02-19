import React, { useEffect, useState } from 'react';
import { SortingByDirection } from '../utils/SortingByDirection';
import { InfoBlock } from './table/InfoBlock';
import { BodyTable } from './table/BodyTable';
import { HeadTable } from './table/HeadTable';
import { useAppSelector } from '../hooks/redux.hook';

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

  const { database } = useAppSelector(state => state.database);
  const [unsortDb, setUnsortDb] = useState(database);
  const [selectPerson, setSelectPerson] = useState<IPerson | null>(null);
  const { directionsSort, sortField } = SortingByDirection();
 
  useEffect(() => {
    setUnsortDb(database)
  }, [database])
  return (
    <>
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