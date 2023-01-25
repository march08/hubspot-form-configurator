import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import {
  FormProvider,
  SubmitHandler,
  SubmitErrorHandler,
  DeepPartial,
  useForm,
} from "react-hook-form";
import { AnyObjectSchema } from "yup";
import { windowBlur } from "@utils/windowBlur";

export const RHF_FormComponent = React.forwardRef<
  HTMLFormElement,
  JSX.IntrinsicElements["form"]
>(({ children, ...rest }, ref) => {
  return (
    <form {...rest} ref={ref}>
      {children}
    </form>
  );
});

RHF_FormComponent.displayName = "RHF_FormComponent";

export const RHF_Form = <TFieldValues extends Record<string, any>>(props: {
  defaultValues: DeepPartial<TFieldValues>;
  onSubmit: SubmitHandler<TFieldValues>;
  clearOnSuccess?: boolean;
  onError?: SubmitErrorHandler<TFieldValues>;
  children: React.ReactNode;
  schema?: AnyObjectSchema;
}) => {
  const { onError, onSubmit, defaultValues, children, schema, clearOnSuccess } =
    props;
  const formProps = useForm<TFieldValues>({
    defaultValues: defaultValues,
    resolver: schema ? yupResolver(schema) : undefined,
    reValidateMode: "onSubmit",
  });

  const submit: SubmitHandler<TFieldValues> = React.useCallback(
    (values) => {
      return onSubmit(values).then(() => {
        if (clearOnSuccess) {
          formProps.reset(defaultValues);
        } else {
          formProps.reset(values);
        }
        windowBlur();
      });
    },
    [onSubmit, formProps, clearOnSuccess, defaultValues]
  );

  return (
    <FormProvider {...formProps}>
      <RHF_FormComponent onSubmit={formProps.handleSubmit(submit, onError)}>
        {children}
      </RHF_FormComponent>
    </FormProvider>
  );
};
