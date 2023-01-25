import { FieldGroup } from "@c/form/base/FieldGroup";
import { RHF_IconButtonSelect } from "@c/form/rhf/RHF_IconButtonSelect";
import { RHF_TextInput } from "@c/form/rhf/RHF_TextInput";
import { RxColumns, RxRows } from "react-icons/rx";

export const GeneralSpacing = () => {
  return (
    <>
      <FieldGroup.V>
        <RHF_IconButtonSelect
          label="V/H"
          name={`spacingDirection`}
          options={[
            {
              value: "vertical",
              label: <RxRows />,
            },
            {
              value: "horizontal",
              label: <RxColumns />,
            },
          ]}
        />
        <FieldGroup.H2>
          <RHF_TextInput
            type="number"
            name="verticalSpacing"
            label="Vertical spacing"
          />
          <RHF_TextInput
            type="number"
            name="horizontalSpacing"
            label="Horizontal spacing"
          />
        </FieldGroup.H2>
      </FieldGroup.V>
    </>
  );
};
