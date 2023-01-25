import { SectionTitleLine, Typo } from "@c/atoms/Typo";
import { FieldGroup } from "@c/form/base/FieldGroup";
import { RHF_ColorInput } from "@c/form/rhf/RHF_ColorInput";
import { RHF_TextInput } from "@c/form/rhf/RHF_TextInput";
import { RHF_TextInput_x4 } from "@c/form/rhf/RHF_TextInput_x4";
import { RHF_FontTextProperties } from "./RHF_FontTextProperties";

export const RHF_CssInputField: React.FC<{ name: string }> = ({ name }) => {
  return (
    <>
      <FieldGroup.V>
        <SectionTitleLine>General</SectionTitleLine>
        <RHF_ColorInput name={`${name}.background-color`} label="Background" />
        <FieldGroup.H2>
          <RHF_TextInput type="number" name={`${name}.height`} label="Height" />
          <RHF_TextInput
            type="number"
            name={`${name}.sidePadding`}
            label="Side padding"
          />
        </FieldGroup.H2>
      </FieldGroup.V>
      <SectionTitleLine>Border</SectionTitleLine>
      <FieldGroup.V>
        <RHF_ColorInput name={`${name}.border-color`} label="Color" />
        <RHF_TextInput_x4 label="Width" name={`${name}.borderWidth`} />
        <RHF_TextInput_x4 label="Radius" name={`${name}.borderRadius`} />
      </FieldGroup.V>
      <SectionTitleLine>Text</SectionTitleLine>
      <RHF_FontTextProperties name="input" />
      <SectionTitleLine>Placeholder</SectionTitleLine>
      <FieldGroup.V>
        <RHF_FontTextProperties name="input:placeholder" />
      </FieldGroup.V>
    </>
  );
};
