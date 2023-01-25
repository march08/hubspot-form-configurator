import { useLocalState } from "@utils/useLocalState";
import React from "react";
import { RxChevronDown, RxChevronLeft, RxChevronRight } from "react-icons/rx";
import styled from "styled-components";

const Wrapper = styled.div``;
const Header = styled.div`
  padding: 0.5rem 1rem;
  cursor: pointer;
  background: var(--bg-secondary);
  border-top: 1px solid var(--border-color);
  font-weight: 600;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  color: var(--text-primary);
  font-size: 0.75rem;
`;

const Content = styled.div`
  padding: 1rem;
  background: var(--bg-tertiary);
  border-top: 1px solid var(--border-color);
`;

export const CollapsableGroup: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => {
  const [state, setState] = useLocalState<boolean>("collapse group - " + title);

  return (
    <Wrapper>
      <Header
        onClick={() => {
          setState(!state);
        }}
      >
        {state ? <RxChevronDown /> : <RxChevronRight />}
        {title}
      </Header>
      {state && <Content>{children}</Content>}
    </Wrapper>
  );
};
