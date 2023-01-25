import React from "react";
import styled from "styled-components";

export const ItemsContainer = styled.div<{
  align?: "center";
  size?: "lg";
  noWrap?: boolean;
  gapHorizontal?: string;
  gapVertical?: string;
  hAlign?: React.CSSProperties["justifyContent"];
}>`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  ${(p) => p.noWrap && `flex-wrap: nowrap;`}
  ${(p) => p.align && `align-items: center;`}
  ${(p) => p.hAlign && `justify-content: ${p.hAlign};`}
  ${(p) =>
    p.size === "lg" &&
    `
  gap: 1rem;

  `}
`;
