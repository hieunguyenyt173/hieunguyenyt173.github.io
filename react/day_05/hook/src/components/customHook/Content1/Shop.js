import React, { useState } from "react";

export default function Shop() {
  const [isShow, setIsShow] = useState(true);
  const handleToggle = () => {
    setIsShow(!isShow);
  };
  return (
    <div>
      <button onClick={handleToggle}>Toggle</button>
      {isShow && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          fugiat reiciendis temporibus dolores dignissimos cumque.
        </p>
      )}
    </div>
  );
}
