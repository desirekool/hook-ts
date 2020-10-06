import { useCallback, useState } from "react";

const useInput = (defaultValue?: string) => {
  const [value, setValue] = useState(defaultValue || "");

  const onChange = useCallback( (event: React.ChangeEvent<{value: string}>) => {
    setValue(event.target.value);
  }, []);

  return [value, onChange, setValue];
};
export default useInput;
