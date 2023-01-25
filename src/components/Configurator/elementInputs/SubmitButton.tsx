import { Typo } from "@c/atoms/Typo";
import { FieldGroup } from "@c/form/base/FieldGroup";
import { RHF_ColorInput } from "@c/form/rhf/RHF_ColorInput";
import { RHF_TextInput } from "@c/form/rhf/RHF_TextInput";
import { RHF_TextInput_x4 } from "@c/form/rhf/RHF_TextInput_x4";
import React from "react";
import { RHF_FontTextProperties } from "../commonFields/RHF_FontTextProperties";
import { SwitchState } from "../components/SwitchState";

export const SubmitButtonFields: React.FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <Typo.SectionTitle>General</Typo.SectionTitle>
      <FieldGroup.V>
        <RHF_ColorInput
          name={`${name}.background-color`}
          label={`Background`}
        />
        <FieldGroup.H2>
          <RHF_TextInput
            type={`number`}
            name={`${name}.height`}
            label={`Height`}
          />
          <RHF_TextInput
            type={`number`}
            name={`${name}.sidePadding`}
            label={`Side padding`}
          />
        </FieldGroup.H2>
      </FieldGroup.V>
      <Typo.SectionTitle>Text</Typo.SectionTitle>
      <RHF_FontTextProperties name={name} />
      <Typo.SectionTitle>Border</Typo.SectionTitle>
      <FieldGroup.V>
        <RHF_ColorInput name={`${name}.border-color`} label="Color" />
        <RHF_TextInput_x4 label="Width" name={`${name}.borderWidth`} />
        <RHF_TextInput_x4 label="Radius" name={`${name}.borderRadius`} />
      </FieldGroup.V>
    </div>
  );
};

export const SubmitButton = () => {
  const [state, setState] = React.useState("default");
  return (
    <div>
      <SwitchState setState={setState} />
      <SubmitButtonFields
        key={state}
        name={`submitButton${state === "default" ? "" : `:${state}`}`}
      />
    </div>
  );
};
