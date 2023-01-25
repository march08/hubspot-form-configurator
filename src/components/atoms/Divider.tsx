import styled from "styled-components";

export const Divider = styled.div<{
  spaceSize?: "md" | "lg";
  variant?: "dark";
}>`
  height: 1px;
  width: 100%;
  background: var(--border-color);
  /* margin-top: 1.5rem;
  margin-bottom: 1.5rem; */

  ${(p) => {
    switch (p.spaceSize) {
      case "md":
        return `
        margin-top: 1.25rem;
        margin-bottom: 1.25rem;
      `;
      case "lg":
        return `
        margin-top: 2.5rem !important;
        margin-bottom: 2.5rem !important;
      `;
    }
  }}
  ${(p) => {
    if (p.variant === "dark") {
      return "background: var(--border-color-darker);";
    }
  }}
`;
