import { FieldGroup } from "@c/form/base/FieldGroup";
import { RHF_ColorInput } from "@c/form/rhf/RHF_ColorInput";
import { RHF_TextInput } from "@c/form/rhf/RHF_TextInput";

export const PreviewSettings = () => {
  return (
    <FieldGroup.V>
      <RHF_ColorInput
        name="previewSettings.background-color"
        label="Background"
      />
      <RHF_TextInput
        name="previewSettings.customScripts"
        asTextArea
        label="Custom scripts"
        desc="Include e.g. font to get accurate styling"
      />
    </FieldGroup.V>
  );
};
