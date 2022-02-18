import { useCallback, useState } from 'react';
import { setDataBase } from '../redux/databaseSlice';
import { useAppDispatch } from './redux.hook';

const smallTextUrl = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';

const bigTextUrl = 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';


export const useDataFill = () => {

  const [loading, setLoading] = useState(false);
  const [db, setDb] = useState<any[] | null>(null);
  const dispatch = useAppDispatch()

  const getData = useCallback( async ({big} : {big: boolean}) => {

    setLoading(true)

    try {

      const url = (big) ? bigTextUrl : smallTextUrl
      
      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Ooops. Something going wrong...!');
      }

      setLoading(false);

      const dataArray = Object.keys(data).map(key => {
        return {
          ...data[key]
        }
      })
      dispatch(setDataBase(dataArray))
      setDb(dataArray)
      return data
    } catch(e) {

    }
  }, [dispatch])

  return {loading, getData, db}
}