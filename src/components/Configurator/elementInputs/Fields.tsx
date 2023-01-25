import React from "react";
import { RHF_CssInputField } from "../commonFields/RHF_InputField";
import { SwitchState } from "../components/SwitchState";

export const Fields = () => {
  const [state, setState] = React.useState("default");
  return (
    <div>
      <SwitchState setState={setState} />
      <RHF_CssInputField
        key={state}
        name={`input${state === "default" ? "" : `:${state}`}`}
      />
    </div>
  );
};
