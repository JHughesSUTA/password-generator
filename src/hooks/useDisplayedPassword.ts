import { useMemo } from "react";
import { useMediaQuery } from "./useMediaQuery";

type DisplayConfigType = {
  smallScreen: { defaultMaxLength: number; copiedMaxLength: number };
  mediumScreen: { defaultMaxLength: number; copiedMaxLength: number };
};

const defaultConfig: DisplayConfigType = {
  smallScreen: { defaultMaxLength: 16, copiedMaxLength: 12 },
  mediumScreen: { defaultMaxLength: 20, copiedMaxLength: 16 },
};

export const useDisplayedPassword = (
  password: string,
  copied: boolean,
  config: DisplayConfigType = defaultConfig
) => {
  const isMediumScreen = useMediaQuery("(min-width: 768px)");

  const displayedPassword = useMemo(() => {
    if (!password) return "P4$5W0rD!";

    const screenConfig = isMediumScreen
      ? config.mediumScreen
      : config.smallScreen;

    const maxLength = copied
      ? screenConfig.copiedMaxLength
      : screenConfig.defaultMaxLength;

    return password.length > maxLength
      ? password.substring(0, maxLength) + "..."
      : password;
  }, [password, copied, isMediumScreen, config]);

  return displayedPassword;
};
