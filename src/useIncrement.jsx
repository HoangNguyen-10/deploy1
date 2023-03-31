import React, { useState } from 'react'

const useIncrement = (value) => {
  const [count, setCount] = useState(5)

  const increase = () => {
    setCount(count + value)
  }
  return [count, increase]
}

export { useIncrement }
