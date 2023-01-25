import { ConfiguratorOptions } from "./configuratorSettings";
import { CCP, CCPKey, SidePropertyValues } from "./types";

const UNIT = "px";

const FORM = `form[class*="hs-form"]`;
const FIELD_WRAPPER = `${FORM} .field.hs-form-field .input`;

const sizeUnitProperties = [
  "font-size",
  "margin-bottom",
  "height",
  "letter-spacing",
];

const getDiffValuesOnly = (origin: Partial<CCP>, diffFrom: Partial<CCP>) => {
  const result: Partial<CCP> = {};
  Object.entries(diffFrom).forEach(([key, value]) => {
    const k = key as keyof CCP;
    if (typeof value === "string") {
      if (value !== origin[k]) {
        result[k] = value as any;
      }
    }
    const originValue = origin[k];
    if (Array.isArray(value) && Array.isArray(originValue)) {
      const kValue = value.map((item) => item.value).join("");
      const oValue = originValue.map((item) => item.value).join("");
      console.log("DF", kValue, oValue);
      if (kValue !== oValue) {
        result[k] = value as any;
      }
    }
  });
  return result;
};

const get4Val = (key: string, value: SidePropertyValues, isUnit = true) => {
  if (!value.some((item) => !!item.value)) {
    return null;
  }

  if (new Set(value.map((item) => item.value)).size === 1) {
    // all values are same
    return `${key}: ${value[0].value}${isUnit ? UNIT : ""};`;
  }

  return `${key}: ${(value as SidePropertyValues)
    .map((item) => `${item.value}${UNIT}`)
    .join(" ")};`;
};

const objectToCss = (args: Partial<CCP>) => {
  const res = Object.entries(args)
    .map(([key, value]) => {
      if (!value || ["customScripts"].includes(key)) {
        return "";
      }
      const k = key as CCPKey;
      if (k === "sidePadding") {
        return `padding: 0 ${value}${UNIT};`;
      }
      // if (["borderWidth"].includes(k)) {
      //   return `${(value as SidePropertyValues)
      //     .map((item) =>
      //       item.value && item.value !== "0"
      //         ? `border-${item.key}-width: ${item.value}${UNIT};`
      //         : ""
      //     )
      //     .join(" ")}`;
      // }
      if (k === "borderWidth") {
        return get4Val("border-width", value as SidePropertyValues);
      }
      if (k === "borderRadius") {
        return get4Val("border-radius", value as SidePropertyValues);
      }
      if (k === "paddingCustom") {
        return get4Val("padding", value as SidePropertyValues);
      }
      return `${k}: ${value}${sizeUnitProperties.includes(k) ? UNIT : ""};`;
    })
    .join("");
  return res;
};

export const getCssFromConfig = (config: ConfiguratorOptions) => {
  return `
  input, button {
    -webkit-appearance:none;
  }
  .form-preview-container {
    ${objectToCss(config.previewSettings)}
  }
  /* reset */
  ${FORM} *,
  ${FORM} *::before,
  ${FORM} *::after {
    box-sizing: border-box;
  }
  ${FORM} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: ${
      config.spacingDirection === "horizontal" ? "row" : "column"
    };
    gap: ${config.verticalSpacing}${UNIT};
  }
  ${FORM} fieldset { max-width: none; display: flex; flex-wrap: wrap; }
  ${FORM} fieldset > .field.hs-form-field { width: 1px; flex-grow: 1; min-width: 230px; }
  ${FORM} .field.hs-form-field { flex-grow: 1; min-width: 230px; }
  ${FIELD_WRAPPER} { margin-right: 0; }
  ${FIELD_WRAPPER} input,
  ${FIELD_WRAPPER} select,
  ${FIELD_WRAPPER} textarea
   {
    width: 100%;
    resize: none;
    background: white;
    outline: none;
    border: 1px solid black;
    transition: .2s all;
  }
  
  ${FIELD_WRAPPER} textarea {
    min-height: 150px;
  }
  
  
  ${FORM} fieldset { 
    gap: ${config.verticalSpacing}${UNIT} ${config.horizontalSpacing}${UNIT}; 
  }
  

  ${FIELD_WRAPPER} input,
  ${FIELD_WRAPPER} select {
    height: ${config.input.height}${UNIT};
    line-height: ${config.input.height}${UNIT};
    padding: 0 ${config.input.sidePadding}${UNIT};
    border: none;
  }

  ${FIELD_WRAPPER} input,
  ${FIELD_WRAPPER} select,
  ${FIELD_WRAPPER} textarea {
    ${objectToCss(config.input)}
  }
  ${FIELD_WRAPPER} input:hover,
  ${FIELD_WRAPPER} select:hover,
  ${FIELD_WRAPPER} textarea:hover{
    ${objectToCss(getDiffValuesOnly(config.input, config["input:hover"]))}
  }
  ${FIELD_WRAPPER} textarea {
    height: 150${UNIT};
    padding: ${config.input.sidePadding}${UNIT};
  }

  ${FIELD_WRAPPER} input::placeholder,
  ${FIELD_WRAPPER} select:invalid,
  ${FIELD_WRAPPER} textarea::placeholder {
    ${objectToCss(config["input:placeholder"])}
  }


  ${FORM} .field.hs-form-field > label {
    display: block;
    ${objectToCss(config.inputLabel)}
  }

  ${FORM} .inputs-list label {
    display: block;
    ${objectToCss(config.inputError)}
  }


  ${FORM} .actions input[type="submit"] {
    cursor: pointer;
    line-height: ${config.submitButton.height}${UNIT};
    outline: none;
    border: none;
    transition: .2s all;
    ${objectToCss(config.submitButton)}
  }

  ${FORM} .actions input[type="submit"]:hover {
    ${objectToCss(
      getDiffValuesOnly(config.submitButton, config["submitButton:hover"])
    )}
  }

  ${FORM} .hs_error_rollup {
    display: none;
  }

  ${FORM} .hs-error-msgs li { list-style: none; margin-left: 0; }

  div[class*="hs-form"].submitted-message {
    ${objectToCss(config.successMessageBox)}
  }

  ${
    config.successMessageBox.color
      ? `div[class*="hs-form"].submitted-message p {
    color: ${config.successMessageBox.color};
}`
      : ""
  }
`;
};
