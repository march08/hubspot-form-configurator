import React from "react";
import styled from "styled-components";
import { TextInputProps, TextInput } from "../base/TextInput";
import {
  RHF_Label,
  RHF_Wrapper,
  RHF_Wrapper_Horizontal,
} from "./RHF_FieldWrapper";
import { useCustomController } from "./useCustomController";

const ColorButton = styled.button`
  height: 24px;
  width: 24px;
  border-radius: 50%;
  display: block;
  border: none;
  outline: none;
  padding: 0;
  border: 1px solid rgba(255, 255, 255, 0.2);
  flex-shrink: 0;
  flex-grow: 0;
  &:hover {
    border-color: rgba(128, 128, 128, 0.5);
  }
`;

export const RHF_ColorInput: React.FC<
  Omit<TextInputProps, "name"> & {
    name: string;
    desc?: React.ReactNode;
    label?: React.ReactNode;
  }
> = (props) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const { field, wrapperProps } = useCustomController(
    {
      name: props.name,
    },
    props
  );

  const { name, desc, label, ...rest } = props;

  return (
    <RHF_Wrapper_Horizontal {...wrapperProps}>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: 8,
        }}
      >
        <ColorButton
          type="button"
          onClick={() => {
            inputRef.current?.click();
          }}
          style={{ background: field.value }}
        />
        <TextInput {...field} />
      </div>
      <input
        style={{ position: "absolute", opacity: 0, pointerEvents: "none" }}
        type="color"
        {...field}
        ref={inputRef}
      />
    </RHF_Wrapper_Horizontal>
  );
};
