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

  let typeClassName = getTypeClassName(props);

  if (props.href) {
    return (
      <a
        id={props.id}
        href={props.href}
        className={`practice-button ${typeClassName} ${props.className ? props.className : ''}`.trim()}>
        {props.children}
      </a>)
  }
  return (
    <button
      id={props.id}
      name={props.name}
      className={`practice-button ${typeClassName} ${props.className ? props.className : ''}`.trim()} >
      {props.children}
    </button>
  )
}

function getTypeClassName(props: ButtonProps) {
  let typeClassName;
  if (props.type === 'primary') {
    typeClassName = 'practice-button-primary';
  }
  if (props.type === 'secondary') {
    typeClassName = 'practice-button-secondary';
  }
  return typeClassName;
}
