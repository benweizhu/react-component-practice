import React, { ChangeEventHandler } from "react";

import "./index.css"

interface InputProps {
  id?: string,
  name?: string,
  value?: string,
  placeholder?: string,
  onChange?: ChangeEventHandler<HTMLInputElement>,
  maxLength?: number,
  disabled?: boolean,
  className?: string,
}

export default function Input(props: InputProps) {
  return (
    <input
      id={props.id}
      name={props.name}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
      maxLength={props.maxLength}
      disabled={props.disabled}
      className={`practice-input ${props.className ? props.className : ''}`.trim()}
    />
  )
}
