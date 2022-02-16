import React, {  useState } from 'react';
import { useDataFill } from '../hooks/getdb.hook';
import { BodyTable } from './table/BodyTable';
import { HeadTable } from './table/HeadTable';



export const MainTable = () => {

  const { getData } = useDataFill();
  const [db, setDb] = useState<any[] | null>(null);

  const fetching = async () => {
    const myData = await getData();
    const myDataArray = Object.keys(myData).map(key => {
      return {
        ...myData[key]
      }
    })
    setDb(myDataArray)
  }

  
  const handleClick = () => {
    fetching()
  }

  

  return (
    <>
      <table>
      <thead>
        <HeadTable setDb={setDb}/>
      </thead>

      <tbody>
        <BodyTable db={db}/>
      </tbody>

    </table>
    <button onClick={handleClick}>{'⟳'}</button>
    </>

  )
}