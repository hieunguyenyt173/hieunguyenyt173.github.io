import { useState } from "react";
const useToggle = (init) => {
  const [isShow, setIsShow] = useState(init);
  const handleToggle = () => {
    setIsShow(!isShow);
  };
  return [isShow, handleToggle];
};
export default useToggle;