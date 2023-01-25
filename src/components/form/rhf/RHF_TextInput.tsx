import { TextInputProps, TextInput } from "../base/TextInput";
import { RHF_Wrapper } from "./RHF_FieldWrapper";
import { useCustomController } from "./useCustomController";

export const RHF_TextInput: React.FC<
  Omit<TextInputProps, "name"> & {
    name: string;
    desc?: React.ReactNode;
    label?: React.ReactNode;
  }
> = (props) => {
  const { field, wrapperProps } = useCustomController(
    {
      name: props.name,
    },
    props
  );

  const { name, desc, label, ...rest } = props;

  return (
    <RHF_Wrapper {...wrapperProps}>
      <TextInput {...rest} {...field} />
    </RHF_Wrapper>
  );
};
