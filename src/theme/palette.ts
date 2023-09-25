import { alpha } from "@mui/material/styles";

export type ColorSchema =
  | "primary"
  | "secondary"
  | "info"
  | "success"
  | "warning"
  | "error";

declare module "@mui/material" {
  interface Color {
    0: string;
    500_8: string;
    500_12: string;
    500_16: string;
    500_24: string;
    500_32: string;
    500_48: string;
    500_56: string;
    500_80: string;
  }
}

const PRIMARY = {
  lighter: "#f381a7",
  light: "#af405f",
  main: "#9C1137",
  dark: "#750d29",
  darker: "#4b081a",
};

const SECONDARY = {
  light: "",
  main: "",
  dark: "",
};

const SUCCESS = {
  light: "#4caf50",
  main: "#2e7d32",
  dark: "#1b5e20",
};

const ERROR = {
  light: "#ef5350",
  main: "#d32f2f",
  dark: "#c62828",
};

const WARNING = {
  light: "#ff9800",
  main: "#ed6c02",
  dark: "#e65100",
};

const INFO = {
  light: "#03a9f4",
  main: "#0288d1",
  dark: "#01579b",
};

const GREY = {
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
  500_8: alpha("#919EAB", 0.08),
  500_12: alpha("#919EAB", 0.12),
  500_16: alpha("#919EAB", 0.16),
  500_24: alpha("#919EAB", 0.24),
  500_32: alpha("#919EAB", 0.32),
  500_48: alpha("#919EAB", 0.48),
  500_56: alpha("#919EAB", 0.56),
  500_80: alpha("#919EAB", 0.8),
};

const COMMON = {
  common: { black: "#000" },
  white: "#fff",
  primary: { ...PRIMARY },
  secondary: { ...SECONDARY },
  success: { ...SUCCESS },
  error: { ...ERROR },
  warning: { ...WARNING },
  info: { ...INFO },
  grey: GREY,
  action: {
    hover: GREY[500_8],
    selected: GREY[500_16],
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

const palette = {
  light: {
    ...COMMON,
    mode: "light",
    text: {
      primary: GREY[800],
      secondary: GREY[600],
      disabled: GREY[500],
      white: "#fff",
    },
    background: { paper: "#fff", default: "#fff", neutral: GREY[200] },
    action: { active: GREY[600], ...COMMON.action },
  },
  dark: {
    ...COMMON,
    mode: "dark",
    text: { primary: "#fff", secondary: GREY[500], disabled: GREY[600] },
    background: { paper: GREY[800], default: GREY[900], neutral: GREY[500_16] },
    action: { active: GREY[500], ...COMMON.action },
  },
} as const;

export default palette;
