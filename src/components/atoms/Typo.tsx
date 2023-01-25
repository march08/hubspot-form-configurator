import React from "react";
import styled from "styled-components";

export const Typo = {
  ContentTitle: styled.span`
    display: block;
    /* font-weight: 500; */
    font-size: 0.875rem;
    font-weight: 500;
    /* font-size: 0.875rem; */
    /* text-transform: uppercase; */
    color: var(--text-secondary);
    line-height: 1.25rem;

    & + * {
      margin-top: 0.5rem;
    }
  `,
  SectionTitle: styled.div`
    font-weight: 600;
    font-size: 0.75rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--secondary);
    position: relative;
    &:not(:first-child) {
      margin-top: 1.5rem;
    }
    width: 100%;

    & + * {
      margin-top: 0.5rem;
    }
    line-height: 1.125rem;
  `,
  PageHeadline: styled.h1`
    font-size: 1.75rem;
    font-weight: 600;
    line-height: 2.25rem;
  `,
  PageHeadline2: styled.h2`
    font-size: 1.125rem;
    line-height: 1.5rem;
    font-weight: 500;
    & + div {
      margin-top: 1rem;
    }
  `,
  PageHeadline3: styled.h3`
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 500;
  `,
  H4: styled.h4`
    font-size: 0.875rem;
    line-height: 1.5rem;
    font-weight: 500;
  `,
  H5: styled.div`
    font-weight: 500;
    font-size: 0.625rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-tertiary);
    &:not(:first-child) {
      margin-top: 0.25rem;
    }
    width: 100%;
    line-height: 1.125rem;
  `,
  P: styled.p`
    margin-top: 0;
  `,
};

const SectionTitleLineContainer = styled.div`
  & + * {
    margin-top: 0.5rem;
  }
  &:not(:first-child) {
    margin-top: 1.5rem;
  }
  display: flex;
  width: 100%;
  gap: 0.5rem;
  & > *:first-child {
    flex-shrink: 0;
    width: auto;
  }
`;

const Line = styled.div`
  flex-grow: 1;
  height: 1px;
  background: var(--secondary);
  width: 1px;
  transform: translateY(1px);
`;
export const SectionTitleLine: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <SectionTitleLineContainer>
      <Typo.SectionTitle>{children}</Typo.SectionTitle>
      <Line />
    </SectionTitleLineContainer>
  );
};
