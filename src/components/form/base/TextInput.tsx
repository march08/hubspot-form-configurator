import React from "react";
import styled from "styled-components";
import { theme } from "../../../App/theme";
type InputHeight = "lg" | "sm";

export const SText = styled.input<{
  isInline?: boolean;
  inputHeight?: InputHeight;
}>`
  display: block;
  width: 100%;
  cursor: text;
  background: transparent;
  height: ${theme.inputHeight - 2}px;
  &:disabled {
    cursor: not-allowed;
  }
  font-size: 0.875rem;
  ${(p) =>
    p.isInline && `background: transparent; height: 36px; font-size: .875rem;`}
  &:focus,
  &:hover {
    border-color: var(--primary);
    background: transparent;
  }
  outline: none;
  border: none;
  border-radius: none;
  color: var(--text-primary);
  &:not([type="color"]):not(textarea) {
    padding: 0 calc(0.75rem);
  }
  ${(p) => {
    return p.inputHeight === "sm" && `height: 36px; `;
  }};
  &:read-only {
    background: var(--bg-tertiary);
  }
`;

export const Input = SText;

const TextArea = styled(SText)`
  padding: 0.75rem;
  resize: none;
  min-height: 6rem;
`;

TextArea.defaultProps = {
  as: "textarea",
} as any;

export const TextInputUnit = styled.div`
  flex-grow: 0;
  display: flex;
  align-items: center;
  padding-right: 0.75rem;
  padding-left: 0.75rem;
  text-align: center;
  display: flex;
  justify-content: center;
`;

export const TextInputWrapper = styled.div<{
  disabled?: boolean;
  readonly?: boolean;
  showUnitWhenFocusedOnly?: boolean;
  isInline?: boolean;
}>`
  overflow: hidden;
  border: 1px solid var(--border-color);
  display: flex;
  transition: 0.2s all;
  position: relative;
  background: var(--bg-primary);

  ${(p) =>
    p.showUnitWhenFocusedOnly &&
    `
    ${TextInputUnit} {
      opacity: 0;
    }
  `}

  ${(p) =>
    p.isInline &&
    `
    border-color: transparent;
    background: transparent;
  `}
  &:hover {
    ${(p) =>
      p.isInline
        ? `
        border-color: transparent;
        &:not(:focus-within) {
    background: var(--bg-highlight) !important;

        }
      `
        : `
  
  border-color: var(--primary);
    ${TextInputUnit} {
      opacity: 1;
    }
  `}
  }

  &:focus-within {
    border-color: var(--primary);
    ${TextInputUnit} {
      opacity: 1;
    }
  }

  ${(p) =>
    (p.disabled || p.readonly) &&
    `
      border: 1px solid var(--border-color) !important;
      background: var(--bg-tertiary);
  `}

  .selectbtn {
    border: none !important;
    border-radius: 3px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    background: var(--bg-secondary);
    height: 64px;
    svg {
      fill: white;
    }
    &:hover {
    }
  }
`;

export const TextInputIconWrapper = styled.div`
  width: 42px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  color: var(--text-tertiary);
  & + input {
    padding-left: 42px;
  }
`;

export type TextInputProps = Omit<JSX.IntrinsicElements["input"], "ref"> & {
  inputHeight?: InputHeight;
  unit?: React.ReactNode;
  showUnitWhenFocusedOnly?: boolean;
  asTextArea?: boolean;
  icon?: React.ReactNode;
  copyToClipboard?: boolean;
  isInline?: boolean; // hides borders when not focused
};

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (props, ref) => {
    const {
      isInline,
      showUnitWhenFocusedOnly,
      asTextArea,
      icon,
      unit,
      style,
      copyToClipboard,
      disabled,
      readOnly,
      ...rest
    } = props;

    const Component = asTextArea ? TextArea : SText;

    return (
      <TextInputWrapper
        disabled={disabled || readOnly}
        isInline={isInline}
        showUnitWhenFocusedOnly={showUnitWhenFocusedOnly}
        style={style}
      >
        {icon && <TextInputIconWrapper>{icon}</TextInputIconWrapper>}
        <Component
          type="text"
          disabled={disabled}
          readOnly={readOnly}
          isInline={isInline}
          {...rest}
          ref={ref}
        />
        {unit && <TextInputUnit>{unit}</TextInputUnit>}
      </TextInputWrapper>
    );
  }
);

TextInput.displayName = "TextInput";
