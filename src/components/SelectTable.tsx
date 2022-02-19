import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDataFill } from "../hooks/getdb.hook";




export const SelectTable = () => {

  const { getData } = useDataFill()
  const initialState = {
    bigSize: false,
    normalSize: false
  }

  const [size, setSize] = useState(initialState)

  const handleClick = (size: {bigSize: boolean, normalSize: boolean}) => {
    getData({big: size.bigSize});
  }

  return (
    <>
    <div>
      <input 
      id="normalSize" 
      type="radio" 
      checked={size.normalSize} 
      onChange={() => setSize(() => ({...initialState, normalSize: true}))}/>
      <label htmlFor="bigSize">Normal Table</label>
    </div>
    
    <div>
      <input 
      id="bigSize" 
      type="radio" 
      checked={size.bigSize} 
      onChange={() => setSize(() => ({...initialState, bigSize: true}))}/>
      <label htmlFor="bigSize">Big Table</label>
    </div>

    <Link to="/table">
      <button disabled={!(size.normalSize || size.bigSize)} onClick={() => handleClick(size)}>Show Table</button>
    </Link>
    </>
  )
}