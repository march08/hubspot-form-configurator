import { FieldWrapperProps } from "./RHF_FieldWrapper";
import React from "react";
import {
  FieldValues,
  Path,
  useController,
  UseControllerProps,
  UseControllerReturn,
} from "react-hook-form";

type UseCustomControllerReturn<
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>
> = UseControllerReturn<TFieldValues, TName> & {
  wrapperProps: Omit<FieldWrapperProps, "children">;
  extra: {
    checked: boolean;
  };
};

export const useCustomController = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>
>(
  props: UseControllerProps<TFieldValues, TName>,
  opts: {
    desc?: React.ReactNode;
    label?: React.ReactNode;
    onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    value?: JSX.IntrinsicElements["input"]["value"];
  } = {}
): UseCustomControllerReturn<TFieldValues, TName> => {
  const controller = useController(props);
  const { desc, label } = opts;
  const {
    field: { name },
    fieldState: { error },
  } = controller;

  const wrapperProps = React.useMemo(
    () => ({
      errorMessage: error?.message,
      name: name,
      desc,
      label,
    }),
    [error, name, desc, label]
  );

  const onChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = React.useCallback(
    (e) => {
      controller.field.onChange(e);
      opts?.onChange && opts.onChange(e);
    },
    [controller.field.onChange, opts?.onChange]
  );

  const onBlur: React.FocusEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    controller.field.onBlur();
    opts?.onBlur && opts.onBlur(e);
  };

  return {
    ...controller,
    field: {
      ...controller.field,
      value: (opts?.value as any) || controller.field.value,
      onChange,
      onBlur: onBlur as any,
    },
    extra: {
      checked:
        opts?.value === controller.field.value &&
        controller.field.value !== undefined,
    },
    wrapperProps,
  };
};
