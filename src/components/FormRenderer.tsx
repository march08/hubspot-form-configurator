import React from "react";

const oneLineHubspot: HubspotConfig = {
  region: "eu1",
  portalId: "25625624",
  formId: "86ce3fb6-1461-4b80-85c4-ef5558226b4a",
};
const simpleHubspot: HubspotConfig = {
  region: "eu1",
  portalId: "25625624",
  formId: "05294edc-1612-433a-9e40-98be1fd7af57",
};
const accoraHubspot: HubspotConfig = {
  region: "eu1",
  portalId: "25005558",
  formId: "be70d855-99ac-4972-ae5d-64fbee9bea77",
};

type HubspotConfig = {
  region: string;
  portalId: string;
  formId: string;
};

const FormRenderInit: React.FC<{
  targetId: string;
  hubspotConfig: HubspotConfig;
}> = ({ targetId, hubspotConfig }) => {
  React.useEffect(() => {
    (window as any).hbspt.forms.create({
      target: `#${targetId}`,
      ...hubspotConfig,
    });
  }, []);
  return <></>;
};
import styled from "styled-components";

const FormsContainer = styled.div`
  display: flex;
  padding: 4rem;
  gap: 3rem;
  flex-wrap: wrap;
  & > * {
    width: 400px;
    flex-grow: 1;
  }
`;
export const FormRenderer = () => {
  return (
    <FormsContainer>
      <div style={{ width: 800 }}>
        <h3>Hubspot form sample 1</h3>
        <div id="hubspot-form-preview-901283">
          <FormRenderInit
            targetId="hubspot-form-preview-901283"
            hubspotConfig={oneLineHubspot}
          />
        </div>

        <div style={{ marginTop: 40 }}>
          <div
            className="submitted-message hs-main-font-element hs-form-86ce3fb6-1461-4b80-85c4-ef5558226b4a hs-form-86ce3fb6-1461-4b80-85c4-ef5558226b4a_1231b4f6-4c9a-4936-8bd6-6c092070f560"
            data-instance-id="1231b4f6-4c9a-4936-8bd6-6c092070f560"
          >
            <p>
              Thank you! Your submission has been received! This is a
              placeholder text for styling only.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h3>Hubspot form sample 1</h3>
        <div id="hubspot-form-preview-container">
          <FormRenderInit
            targetId="hubspot-form-preview-container"
            hubspotConfig={accoraHubspot}
          />
        </div>
      </div>
      <div>
        <h3>Hubspot form sample 2</h3>
        <div id="iqweoqiwjeoqjaoisjdoajsdo">
          <FormRenderInit
            targetId="iqweoqiwjeoqjaoisjdoajsdo"
            hubspotConfig={simpleHubspot}
          />
        </div>
      </div>
    </FormsContainer>
  );
};
