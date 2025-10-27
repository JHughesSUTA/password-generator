import { useMemo } from "react";

export const useDisplayedPassword = (password: string, copied: boolean) => {
  const displayedPassword = useMemo(() => {
    if (!password) return "P4$5W0rD!";

    const maxLength = copied ? 12 : 16;
    return password.length > maxLength
      ? password.substring(0, maxLength) + "..."
      : password;
  }, [password, copied]);

  return displayedPassword;
};
