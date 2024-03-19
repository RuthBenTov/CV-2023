import React from 'react'
import RotatingText from 'react-rotating-text';


const Test = () => {
 const texts = ['Text 1', 'Text 2', 'Text 3'];
  return (
  
    <div>
      <RotatingText items={texts} />
    </div>

  )
}

export default Test