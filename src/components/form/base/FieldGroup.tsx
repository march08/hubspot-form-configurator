import styled from "styled-components";

const gap = "1rem";

const FGBase = styled.div`
  max-width: 760px;
  & > *:not(:last-child) {
    margin-bottom: ${gap};
  }
`;

const Fgh = styled(FGBase)`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  grid-gap: ${gap};
  align-items: flex-start;
  & > * {
    margin: 0 !important;
  }
  ${(p: { center?: boolean }) => (p.center ? `align-items: center` : "")};
`;

export const FieldGroup = {
  H: Fgh,
  H2: styled(Fgh)`
    grid-template-columns: 1fr 1fr;
    align-items: flex-start;
  `,
  V: FGBase,
};
