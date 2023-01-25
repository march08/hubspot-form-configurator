import {
  CssDivProperties,
  CssFontAndTextProperties,
  CssInputProperties,
} from "./types";

export type ConfiguratorOptions = {
  spacingDirection: string;
  verticalSpacing: string;
  horizontalSpacing: string;
  inputLabel: CssFontAndTextProperties & {
    "margin-bottom": string;
  };
  input: CssInputProperties;
  ["input:hover"]: Partial<CssInputProperties>;
  "input:placeholder": CssFontAndTextProperties;
  inputError: Partial<CssDivProperties>;
  submitButton: CssInputProperties;
  "submitButton:hover": Partial<CssInputProperties>;
  previewSettings: {
    "background-color": string;
    customScripts?: string;
  };
  successMessageBox: Partial<CssDivProperties>;
};

export const configuratorDefaultValues: ConfiguratorOptions = {
  spacingDirection: "vertical",
  verticalSpacing: "16",
  horizontalSpacing: "16",
  inputLabel: {
    "font-weight": "400",
    color: "#333",
    "font-size": "16",
    "margin-bottom": "10",
    "letter-spacing": "0",
  },
  input: {
    "font-weight": "500",
    "border-style": "solid",
    "font-size": "16",
    "letter-spacing": "0",
    height: "50",
    sidePadding: "16",
    "border-color": "#333",
    color: "#282b30",
    "background-color": "#eee",
    borderWidth: [
      { key: "top", value: "1" },
      { key: "right", value: "1" },
      { key: "bottom", value: "1" },
      { key: "left", value: "1" },
    ],
    borderRadius: [
      { key: "topLeft", value: "10" },
      { key: "topRight", value: "10" },
      { key: "bottomRight", value: "10" },
      { key: "bottomLeft", value: "10" },
    ],
  },
  "input:hover": {
    borderWidth: [
      { key: "top", value: undefined },
      { key: "right", value: undefined },
      { key: "bottom", value: undefined },
      { key: "left", value: undefined },
    ],
    borderRadius: [
      { key: "topLeft", value: undefined },
      { key: "topRight", value: undefined },
      { key: "bottomRight", value: undefined },
      { key: "bottomLeft", value: undefined },
    ],
  },
  "input:placeholder": {
    color: "#aaa",
    "font-weight": "400",
    "font-size": "16",
    "letter-spacing": "0",
  },
  submitButton: {
    "border-style": "solid",
    "font-weight": "500",
    "font-size": "16",
    "letter-spacing": "0",
    height: "50",
    sidePadding: "16",
    "border-color": "#333",
    color: "#282b30",
    "background-color": "#eee",
    borderWidth: [
      { key: "top", value: "1" },
      { key: "right", value: "1" },
      { key: "bottom", value: "1" },
      { key: "left", value: "1" },
    ],
    borderRadius: [
      { key: "topLeft", value: "10" },
      { key: "topRight", value: "10" },
      { key: "bottomRight", value: "10" },
      { key: "bottomLeft", value: "10" },
    ],
  },
  "submitButton:hover": {},
  previewSettings: {
    "background-color": "#1a191e",
    customScripts: undefined,
  },
  inputError: {
    "border-style": "solid",
    borderWidth: [
      { key: "top", value: "0" },
      { key: "right", value: "0" },
      { key: "bottom", value: "0" },
      { key: "left", value: "0" },
    ],
    borderRadius: [
      { key: "top", value: "0" },
      { key: "right", value: "0" },
      { key: "bottom", value: "0" },
      { key: "left", value: "0" },
    ],
    paddingCustom: [
      { key: "top", value: "8" },
      { key: "right", value: "0" },
      { key: "bottom", value: "0" },
      { key: "left", value: "0" },
    ],
  },
  successMessageBox: {
    "background-color": "#eee",
    borderWidth: [
      { key: "top", value: "1" },
      { key: "right", value: "1" },
      { key: "bottom", value: "1" },
      { key: "left", value: "1" },
    ],
    borderRadius: [
      { key: "top", value: "8" },
      { key: "right", value: "8" },
      { key: "bottom", value: "8" },
      { key: "left", value: "8" },
    ],
    paddingCustom: [
      { key: "top", value: "16" },
      { key: "right", value: "16" },
      { key: "bottom", value: "16" },
      { key: "left", value: "16" },
    ],
  },
};
