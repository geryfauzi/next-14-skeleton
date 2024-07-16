interface ColorsConfig {
  transparent: string;
  white: string;
  black: string;
  primary: {
    DEFAULT: string;
    25: string;
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  gray: {
    DEFAULT: string;
    25: string;
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  error: {
    DEFAULT: string;
    25: string;
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  warning: {
    DEFAULT: string;
    25: string;
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  success: {
    DEFAULT: string;
    25: string;
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
}

const colorsConfig: ColorsConfig = {
  transparent: "transparent",
  white: "#FFFFFF",
  black: "#000000",
  primary: {
    DEFAULT: "#E04F16",
    25: "#FEFAF5",
    50: "#FEF6EE",
    100: "#FDEAD7",
    200: "#F9DBAF",
    300: "#F7B27A",
    400: "#F38744",
    500: "#EF6820",
    600: "#E04F16",
    700: "#B93815",
    800: "#932F19",
    900: "#772917"
  },
  gray: {
    DEFAULT: "#98A2B3",
    25: "#FCFCFD",
    50: "#F9FAFB",
    100: "#F2F4F7",
    200: "#EAECF0",
    300: "#D0D5DD",
    400: "#98A2B3",
    500: "#667085",
    600: "#475467",
    700: "#344054",
    800: "#1D2939",
    900: "#101828"
  },
  error: {
    DEFAULT: "#F97066",
    25: "#FFFBFA",
    50: "#FEF3F2",
    100: "#FEE4E2",
    200: "#FECDCA",
    300: "#FDA29B",
    400: "#F97066",
    500: "#F04438",
    600: "#D92D20",
    700: "#B42318",
    800: "#912018",
    900: "#7A271A"
  },
  warning: {
    DEFAULT: "#FDB022",
    25: "#FFFCF5",
    50: "#FFFAEB",
    100: "#FEF0C7",
    200: "#FEDF89",
    300: "#FEC84B",
    400: "#FDB022",
    500: "#F79009",
    600: "#DC6803",
    700: "#B54708",
    800: "#93370D",
    900: "#7A2E0E"
  },
  success: {
    DEFAULT: "#32D583",
    25: "#F6FEF9",
    50: "#ECFDF3",
    100: "#D1FADF",
    200: "#A6F4C5",
    300: "#6CE9A6",
    400: "#32D583",
    500: "#12B76A",
    600: "#039855",
    700: "#027A48",
    800: "#05603A",
    900: "#054F31"
  }
};

export default colorsConfig;
