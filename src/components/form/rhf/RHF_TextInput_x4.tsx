import React from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import styled from "styled-components";
import { BiUnlink, BiLink } from "react-icons/bi";
import { RHF_TextInput } from "./RHF_TextInput";
import { RHF_Label } from "./RHF_FieldWrapper";
import { ItemsContainer } from "@c/atoms/ItemsContainer";
import { theme } from "../../../App/theme";

const Item = styled.div``;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: var(--card-spacing-sm);
  width: 100%;
  ${Item} {
    flex-grow: 0;
    width: ${theme.inputHeight}px;
    input {
      text-align: center;
      padding: 0 0.25rem;
    }
  }
`;

const getHighlightStyles = (key: string) => {
  if (key === "top") {
    return {
      boxShadow: "inset 0 2px 0px 0px var(--primary)",
    };
  }
  if (key === "bottom") {
    return {
      boxShadow: "inset 0px -2px 0px 0px var(--primary)",
    };
  }
  if (key === "left") {
    return {
      boxShadow: "inset 2px 0px 0px 0px var(--primary)",
    };
  }
  if (key === "right") {
    return {
      boxShadow: "inset -2px 0px 0px 0px var(--primary)",
    };
  }

  if (key === "topLeft") {
    return {
      boxShadow:
        "inset 0 2px 0px 0px var(--primary), inset 2px 0px 0px 0px var(--primary)",
    };
  }
  if (key === "topRight") {
    return {
      boxShadow:
        "inset 0 2px 0px 0px var(--primary), inset -2px 0px 0px 0px var(--primary)",
    };
  }

  if (key === "bottomLeft") {
    return {
      boxShadow:
        "inset 0 -2px 0px 0px var(--primary), inset 2px 0px 0px 0px var(--primary)",
    };
  }
  if (key === "bottomRight") {
    return {
      boxShadow:
        "inset 0 -2px 0px 0px var(--primary), inset -2px 0px 0px 0px var(--primary)",
    };
  }

  return {};
};
type ArrayItem<T = {}> = T & {
  key: string;
  value: string;
};
export type SidePropertyValues<T = {}> = [
  ArrayItem<T>,
  ArrayItem<T>,
  ArrayItem<T>,
  ArrayItem<T>
];

export const RHF_TextInput_x4: React.FC<{ name: string; label: string }> = ({
  label,
  name,
}) => {
  const { control, register } = useFormContext();
  const {
    fields: f,
    append,
    prepend,
    remove,
    swap,
    move,
    insert,
    update,
    ...rest
  } = useFieldArray({
    control,
    name,
  });

  const fields = f as unknown as SidePropertyValues<{ id: string }>;

  const initLocked = React.useMemo(() => {
    const initVal = fields[0].value;
    let isSame = true;
    fields.forEach((field) => {
      if ((field.value! += initVal)) {
        isSame = false;
      }
    });

    return !isSame;
  }, []);

  const [locked, setLocked] = React.useState(initLocked);

  const handleChangeLocked = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (locked) {
        fields.forEach(({ id, ...r }, index) => {
          if (e.target.name !== `${name}.${index}.value`)
            update(index, {
              ...r,
              value: e.target.value,
            });
        });
      }
    },
    [locked, update]
  );

  return (
    <Wrapper>
      <div style={{ flexGrow: 1 }}>
        <RHF_Label>{label}</RHF_Label>
      </div>
      <ItemsContainer align="center">
        {fields.map((field, index) => {
          return (
            <Item key={field.id}>
              <RHF_TextInput
                key={field.id}
                name={`${name}.${index}.value`}
                style={getHighlightStyles(field.key)}
                type="number"
                onChange={locked ? handleChangeLocked : undefined}
              />
            </Item>
          );
        })}
        <button
          style={{ width: 32, padding: 0, outline: "none", border: "none" }}
          onClick={() => {
            setLocked(!locked);
          }}
        >
          {locked ? <BiLink /> : <BiUnlink />}
        </button>
      </ItemsContainer>
    </Wrapper>
  );
};
