import { RHF_Form } from "@c/form/rhf/RHF_Form";
import { useFormContext } from "react-hook-form";
import React from "react";
import deepmerge from "deepmerge";
import { Divider } from "@c/atoms/Divider";
import {
  configuratorDefaultValues,
  ConfiguratorOptions,
} from "./configuratorSettings";
import { getCssFromConfig } from "./getCssFromConfig";
import styled from "styled-components";
import { ScrollArea } from "@c/atoms/ScrollArea";
import { PreviewSettings } from "./elementInputs/PreviewSettings";
import { GeneralSpacing } from "./elementInputs/GeneralSpacing";
import { Labels } from "./elementInputs/Labels";
import { Fields } from "./elementInputs/Fields";
import { SubmitButton } from "./elementInputs/SubmitButton";
import { SuccessMessageBox } from "./elementInputs/SuccessMessageBox";
import { FieldError } from "./elementInputs/FieldError";

const ConfigurationStyleRenderer = () => {
  const { watch } = useFormContext<ConfiguratorOptions>();
  const fields = watch();

  React.useEffect(() => {
    const subscription = watch((state) => {
      localStorage.setItem("configuration-history", JSON.stringify(state));
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const css = getCssFromConfig(fields);

  return (
    <>
      <div
        dangerouslySetInnerHTML={{
          __html: fields.previewSettings.customScripts || "",
        }}
      />
      <style>{css}</style>
      <pre>{css}</pre>
    </>
  );
};

const combineMerge = (target: any[], source: any[], options: any) => {
  const destination = target.slice();

  source.forEach((item, index) => {
    if (typeof destination[index] === "undefined") {
      destination[index] = options.cloneUnlessOtherwiseSpecified(item, options);
    } else if (options.isMergeableObject(item)) {
      destination[index] = deepmerge(target[index], item, options);
    } else if (target.indexOf(item) === -1) {
      destination.push(item);
    }
  });
  return destination;
};

const Container = styled.div`
  display: flex;
  height: 100%;
`;

const SelectionContainer = styled(ScrollArea)`
  width: 200px;
  flex-grow: 0;
  flex-shrink: 0;
  border-right: 1px solid var(--border-color);
  background: var(--bg-primary);
`;
const OptionsContainer = styled(ScrollArea)`
  width: 300px;
  flex-grow: 0;
  flex-shrink: 0;
  padding: 1rem;
  background: var(--bg-secondary);
`;

const SectionItem = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 1rem;
  height: 42px;
  outline: none !important;
  border: none;
  font-size: 0.875rem;
  font-weight: 500;
  width: 100%;
  border-radius: 0;
  border-bottom: 1px solid var(--border-color);
  color: var(--text-secondary);
  transition: 0.2s all;
  background: var(--bg-primary);
  &:hover {
    color: var(--text-primary);
  }
  &.active {
    color: var(--primary);
    border-bottom-color: var(--border-color);
  }
`;

const sectionItems = [
  {
    label: "Preview settings",
    key: "previewSettings",
  },
  {
    label: "General spacing",
    key: "generalSpacing",
  },
  {
    label: "Labels",
    key: "labels",
  },
  {
    label: "Fields",
    key: "fields",
  },
  {
    label: "Field error message",
    key: "inputError",
  },
  {
    label: "Submit button",
    key: "submitButton",
  },
  {
    label: "Success message",
    key: "successMessageBox",
  },
];

export const Configurator = () => {
  const prevLocalState = localStorage.getItem("configuration-history") || null;
  const prevState = prevLocalState ? JSON.parse(prevLocalState) : {};

  const [activeItem, setActiveItem] = React.useState("previewSettings");

  const RenderComponent = React.useMemo(() => {
    switch (activeItem) {
      case "previewSettings":
        return PreviewSettings;
      case "generalSpacing":
        return GeneralSpacing;
      case "labels":
        return Labels;
      case "inputError":
        return FieldError;
      case "fields":
        return Fields;
      case "submitButton":
        return SubmitButton;
      case "successMessageBox":
        return SuccessMessageBox;
    }
    return () => <></>;
  }, [activeItem]);
  console.log("asd");
  return (
    <>
      <Container>
        <SelectionContainer>
          {sectionItems.map((item) => (
            <SectionItem
              key={item.key}
              onClick={() => setActiveItem(item.key)}
              className={activeItem === item.key ? "active" : ""}
            >
              {item.label}
            </SectionItem>
          ))}
        </SelectionContainer>
        <OptionsContainer>
          <RHF_Form
            onSubmit={() => {
              return Promise.resolve();
            }}
            defaultValues={deepmerge(configuratorDefaultValues, prevState, {
              arrayMerge: combineMerge,
            })}
          >
            <div>
              <RenderComponent />
            </div>
            <Divider />
            <ConfigurationStyleRenderer />
          </RHF_Form>
        </OptionsContainer>
      </Container>
    </>
  );
};
