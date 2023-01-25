import { Typo } from "@c/atoms/Typo";
import { FieldGroup } from "@c/form/base/FieldGroup";
import { RHF_ColorInput } from "@c/form/rhf/RHF_ColorInput";
import { RHF_TextInput } from "@c/form/rhf/RHF_TextInput";
import { RHF_TextInput_x4 } from "@c/form/rhf/RHF_TextInput_x4";
import { RHF_FontTextProperties } from "../commonFields/RHF_FontTextProperties";

export const SuccessMessageBox = () => {
  return (
    <>
      <Typo.SectionTitle>Container</Typo.SectionTitle>
      <FieldGroup.V>
        <RHF_TextInput_x4
          label="Padding"
          name="successMessageBox.paddingCustom"
        />
        <RHF_ColorInput
          name="successMessageBox.background-color"
          label="Background"
        />
      </FieldGroup.V>
      <Typo.SectionTitle>Text</Typo.SectionTitle>
      <RHF_FontTextProperties name="successMessageBox" />
      <Typo.SectionTitle>Border</Typo.SectionTitle>
      <FieldGroup.V>
        <RHF_ColorInput name="successMessageBox.border-color" label="Color" />
        <RHF_TextInput_x4 label="Width" name="successMessageBox.borderWidth" />
        <RHF_TextInput_x4
          label="Radius"
          name="successMessageBox.borderRadius"
        />
      </FieldGroup.V>
    </>
  );
};
