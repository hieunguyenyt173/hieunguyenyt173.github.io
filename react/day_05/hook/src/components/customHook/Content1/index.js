import React, { useState } from "react";
import Shop from "./Shop";
import useToggle from "./useToggle";
import ColorBox from "./ColorBox"
export default function Content() {
  // const [isShow, setIsShow] = useState(true);
  // const handleToggle = () => {
  //   setIsShow(!isShow);
  // };
  const [isShow, handleToggle] = useToggle(true)
  return (
    <div>
      <button onClick={handleToggle}>Toggle</button>
      {isShow && (
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          fugiat reiciendis temporibus dolores dignissimos cumque.
        </h2>
        
      )}
      <Shop />
      <ColorBox />
    </div>
  );
}
