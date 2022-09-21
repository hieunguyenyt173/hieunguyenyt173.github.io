import React, {useState, useRef} from 'react'
import useRandomColor from './useRandomColor';

    
function ColorBox() {
    const [color, handleChangeColor] = useRandomColor("red")
  return (
    <div style={{width : 200, height: 200, backgroundColor: color}} onClick={handleChangeColor}></div>
  )
}

export default ColorBox;