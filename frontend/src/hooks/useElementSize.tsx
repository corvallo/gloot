import { MutableRefObject, useCallback, useRef, useState, useEffect } from "react";

function useElementSize<T extends HTMLElement = HTMLDivElement>(): [
  MutableRefObject<T | undefined>,
  {
    width: number;
    height: number;
  }
] {
  const ref = useRef<T>();
  const [size, setSize] = useState<{
    width: number;
    height: number;
  }>({
    width: 0,
    height: 0,
  });

  const handleSize = useCallback(() => {
    console.log("STO SETTANDO IL SIZE");
    setSize({
      width: ref?.current?.clientWidth || 0,
      height: ref?.current?.clientHeight || 0,
    });
  }, [ref?.current?.clientWidth, ref?.current?.clientHeight]);

  useEffect(() => {
    handleSize();
    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, []);
  return [ref, size];
}

export default useElementSize;
