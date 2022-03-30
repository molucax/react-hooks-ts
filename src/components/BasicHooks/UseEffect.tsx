import { useState, useEffect } from 'react'

export default function UseEffect() {

  const [value, setValue] = useState(1);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setValue(v => v + 1); // does not work like setValue(value + 1), it gets stuck
    }, 1000)
    return () => window.clearInterval(timer); // cleans itself up when it's no longer needed 

  }, []) // we're only going to run it on startup

  return (
    <div>{value}</div>
  )
}