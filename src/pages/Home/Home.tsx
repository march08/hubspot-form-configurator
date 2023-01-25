import styled from "styled-components";
import { FormRenderer } from "@c/FormRenderer";
import { Configurator } from "@c/Configurator/Configurator";
import { ScrollArea } from "@c/atoms/ScrollArea";

const T = styled.div`
  background: red;
`;

const Container = styled.div`
  padding-left: 500px;
`;

const DarkWrapper = styled.div`
  --bg-primary: #202124;
  --bg-secondary: #26262c;
  --bg-tertiary: #1d1d21;
  --text-primary: #eee;
  --text-secondary: #ccc;
  --text-tertiary: #999;
  --border-color: #2f2c26;
  --border-color-darker: #39352c;
  --box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.05);
  --box-shadow-2: 0 0 8px 1px rgba(0, 0, 0, 0.2);
  --box-shadow-lg: 0 10px 40px rgba(0, 0, 0, 0.3);
  --bg-highlight: #302e4f;
  --primary: #f0a202;
  --secondary: #f18805;
  --tertiary: #d95d39;
`;

const LeftPanel = styled(DarkWrapper)`
  flex-grow: 0;
  height: 100vh;
  background: var(--bg-primary);
  border-right: 1px solid var(--border-color);
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 500px;
`;

export const PageHome = () => {
  return (
    <Container>
      <LeftPanel>
        <ScrollArea style={{ height: "100%" }}>
          <Configurator />
        </ScrollArea>
      </LeftPanel>
      <div className="form-preview-container">
        <FormRenderer />
      </div>
    </Container>
  );
};
