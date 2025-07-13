import { useState } from "react";

type UseToggleReturn = [boolean, () => void];

type UseToggleProps = {
  initialValue?: boolean;
};

export const useToggle = ({
  initialValue = false,
}: UseToggleProps): UseToggleReturn => {
  const [value, setValue] = useState<boolean>(initialValue);
  const toggle = () => setValue((prev) => !prev);
  return [value, toggle];
};
