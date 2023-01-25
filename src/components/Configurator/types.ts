type ArrayItem = {
  key: string;
  value: string | undefined;
};

export type SidePropertyValues = [ArrayItem, ArrayItem, ArrayItem, ArrayItem];

export type CssBorderProperties = {
  borderWidth: SidePropertyValues;
  borderRadius: SidePropertyValues;
  "border-style": string;
  "border-color": string;
  paddingCustom?: SidePropertyValues;
};

export type CssFontAndTextProperties = {
  "font-weight": string;
  color: string;
  "font-size": string;
  "letter-spacing": string;
};

export type CssBoxProperties = {
  "background-color": string;
};

export type CssDivProperties = CssFontAndTextProperties &
  CssBorderProperties & {
    "background-color": string;
  };

export type CssInputContainerProperties = CssBoxProperties & {
  height: string;
  sidePadding: string;
} & CssBorderProperties &
  CssFontAndTextProperties;

export type CssInputProperties = CssInputContainerProperties;

export type ConfiguratorCssProperties = CssBorderProperties &
  CssFontAndTextProperties &
  CssInputContainerProperties;

export type CCP = ConfiguratorCssProperties;
export type CCPKey = keyof CCP;
