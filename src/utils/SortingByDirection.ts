import { useState } from "react";

export type INameColumns =  'id' | 'firstName' | 'email' | 'phone';



export const SortingByDirection = () => {

  const arrowDownHead = '⌄';
  const arrowUpHead = '⌃';

  const initState = {
    id: '',
    firstName: '',
    email: '',
    phone: '',
  }

  const [directionsSort, setDirectionsSort] = useState(initState);

  const sortField = (array: any[] | null, field: INameColumns ) => {

    if(!array) return null;

    switch(directionsSort[field]) {
      case '' : 
        setDirectionsSort(() => ({...initState, [field]: arrowDownHead}))
        return array.slice().sort((a, b) => a[field] - b[field]);

      case arrowUpHead :
        setDirectionsSort(() => ({...initState, [field]: arrowDownHead}))
        return array.slice().sort((a, b) => a[field] - b[field]);

      case arrowDownHead : 
        setDirectionsSort(() => ({...initState, [field]: arrowUpHead}))
        return array.slice().sort((a, b) => b[field] - a[field]);
    }

    return array

  }
  
  return {sortField, directionsSort}
}