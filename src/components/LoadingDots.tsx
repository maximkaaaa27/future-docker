import React, { useEffect, useState } from "react";


export const LoadingDots = () => {

  const [dots, addDot] = useState([' . ']);

  const tickDot = () => {
    setTimeout(() => {
      if (dots.length === 3) {
        addDot(prev => prev.slice(0,1))
      } else {
        addDot(prev => prev.concat(' . '))
      }
    }, 1000)
  }

  useEffect(() => {
    tickDot();
  })

  return (
  <div style={{'display': 'flex'}}>
  {dots.map((dot, idx) => (
    <p key={idx}>
      {dot}
    </p>
  ))}
  </div>
  )
}
