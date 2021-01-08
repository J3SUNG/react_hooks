import { useEffect, useState } from "react";

const UseScroll = () => {
  const [state, setState] = useState({ x: 0, y: 0 });
  const onscroll = () => {
    setState({ y: window.scrollY, x: window.scrollX });
  };
  useEffect(() => {
    window.addEventListener("scroll", onscroll);
    return () => window.removeEventListener("scroll", onscroll);
  }, []);
  return state;
};

export default UseScroll;
