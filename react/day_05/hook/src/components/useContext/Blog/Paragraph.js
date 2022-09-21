import React, {useContext} from 'react'
import { ThemeContext } from '.';
function Paragraph() {
    const {theme, fontSize} = useContext(ThemeContext);
    console.log(theme)
  return (
    <div className={theme} style={{fontSize: fontSize}}>Paragraph</div>
  )
}

export default Paragraph;