import { useCallback, useState } from 'react'

const filltextUrl = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'


export const useDataFill = () => {

  const [loading, setLoading] = useState(false);
  const [db, setDb] = useState<any[] | null>(null);

  const getData = useCallback( async () => {

    setLoading(true)

    try {
      
      const response = await fetch(filltextUrl);
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

      setDb(dataArray)
      return data
    } catch(e) {

    }
  }, [])

  return {loading, getData, db}
}