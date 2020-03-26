import React from "react";

interface ButtonProps {
  children?: React.ReactNode,
  id?: string,
  name?: string,
  href?: string,
  type: 'primary' | 'secondary',
  className?: string,
}

export default function Button(props: ButtonProps) {
  if (props.href) {
    return <a href={props.href} id={props.id} >{props.children}</a>
  }
  return <button id={props.id} name={props.name} >{props.children}</button>
}
