import { useCallback } from "react";
interface Props {
  callback: (event) => void,
  inputs: any
};
const useOnEnter = ({callback, inputs} : Props) => {
  return useCallback(event => {
    if (event.key === "Enter") {
      event.preventDefault();
      callback(event);
    }
  }, inputs);
};
export default useOnEnter;
