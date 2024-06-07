import { blue, neutral } from "./colors";
import { primaryFont } from "./typography";

export const defaultTheme = {
  primaryColor: blue[300],
  primaryHoverColor: blue[200],
  primaryActiveColor: blue[100],
  textColorOnPrimary: neutral[100],
  textColor: neutral[600],
  textColorInverted: neutral[100],
  primaryFont: primaryFont
};

export const darkTheme = {
    primaryColor: neutral[100],
    primaryHoverColor: neutral[200],
    primaryActiveColor: neutral[300],
    textColorOnPrimary: blue[300],
    textColor: blue[300],
    textColorInverted: neutral[100],
    primaryFont: primaryFont
  };