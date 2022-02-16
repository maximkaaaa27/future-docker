import React, { useState } from 'react';
import { useDataFill } from '../hooks/getdb.hook';
import { SortingByDirection } from '../utils/SortingByDirection';
import { BodyTable } from './table/BodyTable';
import { HeadTable } from './table/HeadTable';



export const MainTable = () => {

  const { db, getData } = useDataFill();
  const [unsortDb, setUnsortDb] = useState(db);
  const { directionsSort, sortField } = SortingByDirection();
 
  const handleClick = () => {
    getData()
    setUnsortDb(db)
  }

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
        <BodyTable db={unsortDb} />
      </tbody>

    </table>
    <button onClick={handleClick}>Update</button>
    </>

  )
}