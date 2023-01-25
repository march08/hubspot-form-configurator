import { FieldGroup } from "@c/form/base/FieldGroup";
import { RHF_ColorInput } from "@c/form/rhf/RHF_ColorInput";
import { RHF_IconButtonSelect } from "@c/form/rhf/RHF_IconButtonSelect";
import { RHF_TextInput } from "@c/form/rhf/RHF_TextInput";
import {
  RxAlignLeft,
  RxLetterCaseCapitalize,
  RxLetterCaseLowercase,
  RxLetterCaseUppercase,
  RxTextAlignCenter,
  RxTextAlignLeft,
  RxTextAlignRight,
  RxValueNone,
} from "react-icons/rx";

export const RHF_FontTextProperties: React.FC<{ name: string }> = ({
  name,
}) => {
  return (
    <FieldGroup.V>
      <RHF_ColorInput name={`${name}.color`} label="Color" />
      <FieldGroup.H2>
        <RHF_TextInput
          type="text"
          name={`${name}.font-size`}
          label="Font size"
          unit="px"
        />
        <RHF_TextInput
          type="text"
          name={`${name}.font-weight`}
          label="Font weight"
          placeholder="e.g. 600 or bold"
        />
        <RHF_TextInput
          type="text"
          name={`${name}.letter-spacing`}
          label="Letter spacing"
          unit="px"
        />
      </FieldGroup.H2>
      <RHF_IconButtonSelect
        label="Transform"
        name={`${name}.text-transform`}
        options={[
          {
            value: "capitalize",
            label: <RxLetterCaseCapitalize />,
          },
          {
            value: "uppercase",
            label: <RxLetterCaseUppercase />,
          },
          {
            value: "lowercase",
            label: <RxLetterCaseLowercase />,
          },
          {
            value: undefined,
            label: <RxValueNone />,
          },
        ]}
      />
      <RHF_IconButtonSelect
        label="Align"
        name={`${name}.text-align`}
        options={[
          {
            value: undefined,
            label: <RxTextAlignLeft />,
          },
          {
            value: "center",
            label: <RxTextAlignCenter />,
          },
          {
            value: "right",
            label: <RxTextAlignRight />,
          },
        ]}
      />
    </FieldGroup.V>
  );
};
