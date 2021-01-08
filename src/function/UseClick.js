import { useEffect, useRef } from "react";

const UseClick = (onClick) => {
  const ref = useRef();
  console.log(ref);
  useEffect(() => {
    const element = ref.current;
    if (element) {
      element.addEventListener("click", onClick);
    }
    return () => {
      if (element) {
        element.removeEventListener("click", onClick);
      }
    };
  }, [onClick]);
  return ref;
};

export default UseClick;
