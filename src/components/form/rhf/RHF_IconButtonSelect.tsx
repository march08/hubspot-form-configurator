import React from "react";
import styled from "styled-components";
import { TextInputProps, TextInput } from "../base/TextInput";
import { RHF_Wrapper_Horizontal } from "./RHF_FieldWrapper";
import { useCustomController } from "./useCustomController";

const ItemButton = styled.button`
  height: 32px;
  width: 32px;
  border-radius: 0 !important;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none !important;
  padding: 0;
  border: 1px solid var(--border-color);
  flex-shrink: 0;
  flex-grow: 0;
  margin-left: -1px;
  font-size: 0.875rem;

  &:hover,
  &:focus,
  &.selected {
    border-color: var(--primary);
    z-index: 100;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: -1px;
  flex-grow: 1;
`;

export const RHF_IconButtonSelect: React.FC<
  Omit<TextInputProps, "name"> & {
    name: string;
    desc?: React.ReactNode;
    label?: React.ReactNode;
    options: {
      value: string | undefined;
      label: React.ReactNode;
    }[];
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
      <Container>
        {props.options.map((item) => (
          <ItemButton
            key={item.value || "null"}
            type="button"
            value={item.value}
            onClick={(e) => {
              field.onChange(e.currentTarget.value);
            }}
            title={item.value}
            style={{ background: field.value }}
            className={item.value === (field.value as any) ? "selected" : ""}
          >
            {item.label}
          </ItemButton>
        ))}
      </Container>
      <input
        style={{ position: "absolute", opacity: 0, pointerEvents: "none" }}
        type="color"
        {...field}
        ref={inputRef}
      />
    </RHF_Wrapper_Horizontal>
  );
};
