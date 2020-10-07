import { useCallback } from "react";

const useOnEnter = (callback: (event: React.KeyboardEvent<EventTarget>) => void, inputs: Array<any>) => {
  return useCallback((event)  => {
    if (event.key === "Enter") {
      event.preventDefault();
      callback(event);
    }
  }, [inputs]);
};
export default useOnEnter;
