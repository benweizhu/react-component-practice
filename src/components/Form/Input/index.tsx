import React, { ChangeEventHandler } from "react";

interface InputProps {
  id?: string,
  name?: string,
  value?: string,
  placeholder?: string,
  onChange?: ChangeEventHandler<HTMLInputElement>,
  maxLength?: number,
  disabled?: boolean,
}

export default function Input(props: InputProps) {
  return (
    <input
      id={props.value}
      name={props.value}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
      maxLength={props.maxLength}
      disabled={props.disabled}
    />
  )
}
