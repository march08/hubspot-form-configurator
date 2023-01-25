import { SectionTitleLine } from "@c/atoms/Typo";
import { FieldGroup } from "@c/form/base/FieldGroup";
import { RHF_IconButtonSelect } from "@c/form/rhf/RHF_IconButtonSelect";
import { RHF_TextInput } from "@c/form/rhf/RHF_TextInput";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";
import { RHF_FontTextProperties } from "../commonFields/RHF_FontTextProperties";

export const Labels = () => {
  return (
    <>
      <FieldGroup.V>
        <SectionTitleLine>General</SectionTitleLine>

        <RHF_IconButtonSelect
          label="Display"
          name={`inputLabel.display`}
          options={[
            {
              value: undefined,
              label: <RxEyeOpen />,
            },
            {
              value: "none",
              label: <RxEyeClosed />,
            },
          ]}
        />
        <SectionTitleLine>Text</SectionTitleLine>
        <RHF_FontTextProperties name="inputLabel" />
        <SectionTitleLine>Spacing</SectionTitleLine>
        <RHF_TextInput
          type="text"
          name="inputLabel.margin-bottom"
          label="Bottom spacing"
        />
      </FieldGroup.V>
    </>
  );
};
