import { Typo } from "@c/atoms/Typo";
import React from "react";
import styled from "styled-components";

export const FormErrorText = styled.div`
  color: var(--danger);
  margin-top: 0.5rem;
  font-size: 0.75rem;
`;

export const RHF_Label = styled(Typo.ContentTitle)`
  font-size: 0.875rem;
  letter-spacing: 0.2px;
  & + * {
    margin-top: 0.5rem;
  }
`;

const Wrapper = styled.div`
  *:disabled {
    pointer-events: none;
    opacity: 0.6;
    cursor: not-allowed;
  }
  & > * {
    width: 100%;
  }
`;

const Desc = styled.div`
  margin-top: 0.5rem;
  line-height: 1.4;
  font-size: 0.875rem;
  color: var(--text-tertiary);
`;

export type FieldWrapperProps = {
  children: React.ReactNode;
  label?: React.ReactNode;
  errorMessage?: React.ReactNode;
  name?: string;
  desc?: React.ReactNode;
};

export const RHF_Wrapper: React.FC<FieldWrapperProps> = ({
  children,
  label,
  errorMessage,
  name,
  desc,
}) => {
  return (
    <Wrapper>
      {label && (
        <RHF_Label as="label" htmlFor={name}>
          {label}
        </RHF_Label>
      )}
      {children}
      {desc && <Desc>{desc}</Desc>}
      {errorMessage && <FormErrorText>{errorMessage}</FormErrorText>}
    </Wrapper>
  );
};

const WrapperHorizontal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  width: 100%;
  position: relative;
  *:disabled {
    pointer-events: none;
    opacity: 0.6;
    cursor: not-allowed;
  }
  & > * {
    width: 100%;
  }
`;

export const RHF_Wrapper_Horizontal: React.FC<FieldWrapperProps> = ({
  children,
  label,
  errorMessage,
  name,
  desc,
}) => {
  return (
    <WrapperHorizontal>
      <div>
        {label && (
          <RHF_Label as="label" htmlFor={name}>
            {label}
          </RHF_Label>
        )}
      </div>
      {children}
      {desc && <Desc>{desc}</Desc>}
      {errorMessage && <FormErrorText>{errorMessage}</FormErrorText>}
    </WrapperHorizontal>
  );
};
