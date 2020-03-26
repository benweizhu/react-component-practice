import React, { MouseEventHandler } from "react";

interface ButtonProps {
  children?: React.ReactNode,
  id?: string,
  name?: string,
  href?: string,
  type?: 'primary' | 'secondary',
  className?: string,
  onClick?: MouseEventHandler,
}

export default function Button(props: ButtonProps) {

  let typeClassName = getTypeClassName(props);

  if (props.href) {
    return (
      <a
        id={props.id}
        href={props.href}
        onClick={props.onClick}
        className={getClassName(typeClassName, props.className)}
      >
        {props.children}
      </a>)
  }
  return (
    <button
      id={props.id}
      name={props.name}
      onClick={props.onClick}
      className={getClassName(typeClassName, props.className).trim()}
    >
      {props.children}
    </button>
  )
}

function getTypeClassName(props: ButtonProps) {
  let typeClassName;
  if (props.type === 'primary') {
    typeClassName = 'practice-button-primary';
  } else if (props.type === 'secondary') {
    typeClassName = 'practice-button-secondary';
  } else {
    typeClassName = 'practice-button-primary';
  }
  return typeClassName;
}

function getClassName(typeClassName: string, className?: string): string {
  return `practice-button ${typeClassName} ${className ? className : ''}`.trim();
}
